/**
 * src/lib/leadForm.ts
 * ─────────────────────────────────────────────────────────────
 * Captura de leads para BRINCOLINS.
 *
 * PROBLEMA QUE RESUELVE (auditoría 2026-08-11):
 * Los formularios sólo hacían `window.open(wa.me)`. Si el navegador
 * bloqueaba el pop-up —comportamiento por defecto en Safari iOS y en
 * muchos Android— el usuario no veía nada, creía haber enviado su
 * solicitud y el lead se perdía sin dejar rastro. No existía copia
 * del lead en ningún lado.
 *
 * CÓMO FUNCIONA AHORA:
 *  1. Se envía SIEMPRE una copia al correo vía Web3Forms (POST real).
 *     Esa copia es la red de seguridad: aunque WhatsApp falle, el lead existe.
 *  2. Se intenta abrir WhatsApp con el mensaje prellenado.
 *  3. Si el pop-up se bloquea, se muestra un panel con un enlace visible
 *     para abrir WhatsApp manualmente. Nada se pierde en silencio.
 *  4. Se muestra confirmación en pantalla en todos los casos.
 *  5. Se dispara el evento `generate_lead` a GA4 si está configurado.
 *
 * Si WEB3FORMS_KEY está vacío, el paso 1 se omite y el flujo degrada
 * al comportamiento de sólo-WhatsApp, pero conservando la confirmación
 * visible y el fallback del paso 3.
 */

import { WHATSAPP, WEB3FORMS_KEY, WEB3FORMS_ENDPOINT } from '../data/site';

export interface LeadFormOptions {
  /** id del <form> */
  formId: string;
  /** Nombre del formulario para el asunto del correo y el evento de GA4 */
  source: string;
  /** Construye el mensaje de WhatsApp a partir del FormData */
  buildMessage: (f: FormData) => string;
  /** Número de WhatsApp destino (por defecto el del sitio) */
  whatsapp?: string;
}

function gaEvent(name: string, params: Record<string, unknown>): void {
  const w = window as unknown as { dataLayer?: unknown[]; gtag?: (...a: unknown[]) => void };
  if (typeof w.gtag === 'function') w.gtag('event', name, params);
  else if (Array.isArray(w.dataLayer)) w.dataLayer.push({ event: name, ...params });
}

/**
 * Panel de confirmación que sustituye al formulario tras enviar.
 * @param saved  true si la copia por correo salió (Web3Forms configurado y OK).
 *               Si es false NO afirmamos haber recibido nada: el único canal
 *               es WhatsApp y el usuario tiene que completar ese paso.
 */
function renderSuccess(
  form: HTMLFormElement,
  waUrl: string,
  popupBlocked: boolean,
  saved: boolean,
): void {
  const title = saved ? '¡Solicitud recibida!' : 'Ya casi — abre WhatsApp';
  const text = saved
    ? (popupBlocked
        ? 'Ya tenemos tus datos. Tu navegador bloqueó la ventana de WhatsApp — abre la conversación con el botón de abajo para que te respondamos al instante.'
        : 'Ya tenemos tus datos y abrimos WhatsApp para que te respondamos al instante. Si no se abrió, usa el botón de abajo.')
    : (popupBlocked
        ? 'Tu navegador bloqueó la ventana de WhatsApp. Toca el botón para enviarnos tu solicitud con los datos ya escritos.'
        : 'Abrimos WhatsApp con tu solicitud lista para enviar. Si no se abrió, usa el botón de abajo — es el último paso.');

  const box = document.createElement('div');
  box.className = 'lead-ok';
  box.setAttribute('role', 'status');
  box.setAttribute('aria-live', 'polite');
  box.tabIndex = -1;
  box.innerHTML = `
    <div class="lead-ok__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor"
           stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 6 9 17l-5-5"/>
      </svg>
    </div>
    <h3 class="lead-ok__title">${title}</h3>
    <p class="lead-ok__text">${text}</p>
    <a class="lead-ok__wa" href="${waUrl}" target="_blank" rel="nofollow noopener noreferrer">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <use href="#i-wa"/>
      </svg>
      Abrir WhatsApp
    </a>
    <p class="lead-ok__small">
      También puedes llamarnos al <a href="tel:+525531281706">55 3128 1706</a>.
      Respondemos de lunes a domingo.
    </p>
  `;
  form.replaceWith(box);
  box.focus();
}

/** Mensaje de error visible: nunca dejar al usuario sin señal. */
function renderError(form: HTMLFormElement, waUrl: string): void {
  let el = form.querySelector<HTMLElement>('.lead-err');
  if (!el) {
    el = document.createElement('p');
    el.className = 'lead-err';
    el.setAttribute('role', 'alert');
    form.appendChild(el);
  }
  el.innerHTML = `No pudimos enviar el formulario. Escríbenos directo por
    <a href="${waUrl}" target="_blank" rel="nofollow noopener noreferrer">WhatsApp</a>
    o al <a href="tel:+525531281706">55 3128 1706</a>.`;
}

export function initLeadForm(opts: LeadFormOptions): void {
  const form = document.getElementById(opts.formId) as HTMLFormElement | null;
  if (!form) return;

  const wa = opts.whatsapp || WHATSAPP;
  const submit = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const submitLabel = submit ? submit.innerHTML : '';

  form.addEventListener('submit', async (e: Event) => {
    e.preventDefault();

    // El markup del pre-footer usa novalidate; validamos a mano para
    // no perder el aviso nativo de campos obligatorios.
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    const message = opts.buildMessage(data);
    const waUrl = `https://wa.me/${wa}?text=${encodeURIComponent(message)}`;

    if (submit) {
      submit.disabled = true;
      submit.innerHTML = 'Enviando…';
    }

    // 1) Copia por correo. Es la red de seguridad del lead.
    let saved = false;
    if (WEB3FORMS_KEY) {
      data.append('access_key', WEB3FORMS_KEY);
      data.append('subject', `Nueva solicitud — ${opts.source} — brincolins.com`);
      data.append('from_name', 'BRINCOLINS · Formulario web');
      data.append('origen', opts.source);
      data.append('pagina', window.location.pathname);
      data.append('mensaje_whatsapp', message);
      try {
        const res = await fetch(WEB3FORMS_ENDPOINT, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: data,
        });
        saved = res.ok;
      } catch {
        saved = false;
      }

      // Con key configurada, un fallo del POST sí es un error real:
      // no habría copia del lead. Mostrarlo en vez de fingir éxito.
      if (!saved) {
        if (submit) {
          submit.disabled = false;
          submit.innerHTML = submitLabel;
        }
        renderError(form, waUrl);
        gaEvent('lead_error', { form_source: opts.source });
        return;
      }
    }

    gaEvent('generate_lead', {
      form_source: opts.source,
      page_path: window.location.pathname,
      inflable: String(data.get('inflable') || ''),
      saved_copy: saved,
    });

    // 2) Abrir WhatsApp. 3) Detectar bloqueo de pop-up.
    const win = window.open(waUrl, '_blank');
    const blocked = !win || win.closed || typeof win.closed === 'undefined';

    renderSuccess(form, waUrl, blocked, saved);
  });
}

// ============================================================
// Modal de proyectos — compartido entre index.html y proyectos.html
// Cada tarjeta debe tener data-* con la info del proyecto
// ============================================================

function iniciarModal() {
  const overlay  = document.getElementById('modal-overlay');
  const cerrarBtn = document.getElementById('modal-cerrar');
  if (!overlay) return;

  const modalImg         = document.getElementById('modal-img');
  const modalEtiqueta    = document.getElementById('modal-etiqueta');
  const modalTitulo      = document.getElementById('modal-titulo');
  const modalDescripcion = document.getElementById('modal-descripcion');
  const modalFecha       = document.getElementById('modal-fecha');
  const modalEstado      = document.getElementById('modal-estado');
  const modalTipo        = document.getElementById('modal-tipo');

  document.querySelectorAll('.tarjeta-proyecto').forEach(tarjeta => {
    tarjeta.addEventListener('click', () => {
      modalImg.src         = tarjeta.dataset.img         || '';
      modalImg.alt         = tarjeta.dataset.titulo      || '';
      modalEtiqueta.textContent  = tarjeta.dataset.etiqueta   || '';
      modalTitulo.textContent    = tarjeta.dataset.titulo     || '';
      modalDescripcion.textContent = tarjeta.dataset.descripcionLarga || tarjeta.dataset.descripcion || '';
      modalFecha.textContent     = tarjeta.dataset.fecha      || '—';
      modalEstado.textContent    = tarjeta.dataset.estado     || '—';
      modalTipo.textContent      = tarjeta.dataset.tipo       || '—';

      overlay.classList.add('modal-overlay--abierto');
      document.body.style.overflow = 'hidden';
      cerrarBtn.focus();
    });

    // Accesibilidad teclado
    tarjeta.setAttribute('tabindex', '0');
    tarjeta.setAttribute('role', 'button');
    tarjeta.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); tarjeta.click(); }
    });
  });

  const cerrar = () => {
    overlay.classList.remove('modal-overlay--abierto');
    document.body.style.overflow = '';
  };

  cerrarBtn.addEventListener('click', cerrar);
  overlay.addEventListener('click', e => { if (e.target === overlay) cerrar(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') cerrar(); });
}

document.addEventListener('DOMContentLoaded', iniciarModal);
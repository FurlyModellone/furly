// Furly: lingua (EN/IT), comparse allo scorrimento, easter egg.
(function () {
  var root = document.documentElement;

  function stored() {
    try { return localStorage.getItem('furly-lang'); } catch (e) { return null; }
  }
  function setLang(lang) {
    root.setAttribute('data-lang', lang);
    root.lang = lang;
    var t = root.getAttribute('data-title-' + lang);
    if (t) document.title = t;
    document.querySelectorAll('.lang button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.set === lang));
    });
    try { localStorage.setItem('furly-lang', lang); } catch (e) {}
  }

  var initial = stored() || ((navigator.language || '').toLowerCase().indexOf('it') === 0 ? 'it' : 'en');
  setLang(initial);
  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.dataset.set); });
  });

  // Comparse.
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  // Easter egg: tre clic sul logo, o scrivere "loong".
  var egg = document.getElementById('egg');
  if (!egg) return;
  function show() { egg.classList.add('show'); }
  function hide() { egg.classList.remove('show'); }
  egg.addEventListener('click', hide);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') hide(); });

  var clicks = 0, timer;
  document.querySelectorAll('[data-egg]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      clicks++;
      clearTimeout(timer);
      timer = setTimeout(function () { clicks = 0; }, 600);
      if (clicks >= 3) { e.preventDefault(); clicks = 0; show(); }
    });
  });

  var typed = '';
  document.addEventListener('keydown', function (e) {
    if (e.key.length !== 1 || e.target.closest('input, textarea')) return;
    typed = (typed + e.key.toLowerCase()).slice(-5);
    if (typed === 'loong') show();
  });
})();

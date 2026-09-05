const PAGES = [
  { id: 'home', href: 'index.html', label: 'Home' },
  { id: 'research', href: 'research.html', label: 'Research' },
  { id: 'publications', href: 'publications.html', label: 'Publications' },
  { id: 'people', href: 'people.html', label: 'People' },
  { id: 'news', href: 'news.html', label: 'News' },
  { id: 'contact', href: 'contact.html', label: 'Contact' },
];

function asset(path) {
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${path.replace(/^\//, '')}`;
}

function currentPageId() {
  const body = document.body;
  return body?.dataset?.page || 'home';
}

function renderHeader() {
  const mount = document.getElementById('site-header');
  if (!mount) return;
  const active = currentPageId();
  const links = PAGES.map(
    (p) =>
      `<li><a href="${asset(p.href)}" class="${p.id === active ? 'active' : ''}"${
        p.id === active ? ' aria-current="page"' : ''
      }>${p.label}</a></li>`
  ).join('');

  mount.innerHTML = `
    <a class="skip-link" href="#main">Skip to main content</a>
    <header class="site-header">
      <div class="header-inner">
        <a class="brand" href="${asset('index.html')}">
          <img class="brand-seal" src="${asset('media/image6.svg')}" width="48" height="48" alt="University of Texas at Arlington seal" />
          <div class="brand-text">
            <div class="brand-title">The Li Lab</div>
            <div class="brand-sub">Department of Biology · UT Arlington</div>
          </div>
        </a>
        <button type="button" class="nav-toggle" aria-expanded="false" aria-controls="primary-nav" id="nav-toggle">
          Menu
        </button>
        <nav class="site-nav" id="primary-nav" aria-label="Primary">
          <ul>${links}</ul>
        </nav>
      </div>
    </header>
  `;

  const toggle = mount.querySelector('#nav-toggle');
  const nav = mount.querySelector('#primary-nav');
  toggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

function renderFooter() {
  const mount = document.getElementById('site-footer');
  if (!mount) return;
  const year = new Date().getFullYear();
  const links = PAGES.map((p) => `<a href="${asset(p.href)}">${p.label}</a>`).join('');

  mount.innerHTML = `
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-brand">
          <img src="${asset('media/image6.svg')}" width="52" height="52" alt="" />
          <div>
            <strong>The Li Lab</strong>
            <span>University of Texas at Arlington</span>
          </div>
        </div>
        <nav class="footer-nav" aria-label="Footer">${links}</nav>
      </div>
      <div class="footer-bottom">
        © ${year} The Li Lab · Department of Biology · University of Texas at Arlington
      </div>
    </footer>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderFooter();
});

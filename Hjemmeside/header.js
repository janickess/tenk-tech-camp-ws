class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div>
        <header class="header">
          <h1 class="header_text">TENK Tech Camp x SOPRA STERIA</h1>
        </header>
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
              <li class="nav-item">
                  <a class="nav-link" href="intro.html">Introduksjon</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="oppgaver.html">Oppgaver</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="din_hjemmeside.html">Din hjemmeside</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="om_oss.html">Om oss</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </div>
      `;
  }
}

customElements.define("header-component", Header);

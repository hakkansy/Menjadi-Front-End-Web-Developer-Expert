class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer>
        <p>Copyright &copy; 2022 - Restaurant Apps</p>
      </footer>          
      `;
  }
}

customElements.define('footer-bar', FooterBar);

class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header>
    <div class="header">
    <button id="menu_toggle" class="menu_toggle" tabindex="0" aria-label="button to open side menu"><i class="fas fa-bars"></i></button>
    <div class="header_logo"
        <a href="#/home">Restaurant Apps</a>
    </div>
    <nav id="drawer" class="header_nav">
        <ul class="nav_list">
            <li class="nav_item"><a href="#/home">Home</a></li>
            <li class="nav_item"><a href="#/favorite">Favorites</a></li>
            <li class="nav_item about_us"><a 
                target="_blank" 
                href="https://www.linkedin.com/in/hakkansyukri/"
                rel="noopener noreferrer">
                About Us</a>
            </li>
        </ul>
    </nav>  
</div>
    <section class="hero" id="hero">
        <div class="hero_inner">
        <picture>
            <source media="(max-width: 600px)" srcset="images/hero-image_4-small.jpg">
            <source media="(min-width: 601px)" srcset="images/hero-image_4-large.jpg">
            <img class="hero lazyload" src="images/hero-image_4.jpg" alt="">    
        </picture>
            <h1 class="hero_title">Restaurant Apps</h1>
            <p class="hero_subtitle">Your Best Restaurant Recommendations</p>
        </div>
    </section>
    </header>
      `;
  }
}

customElements.define('app-bar', AppBar);

console.log("JS carregado!");

class IkonetNavbar {
  constructor(ikonetSelector, navListSelector, navLinksSelector) {
    this.ikonet = document.querySelector(ikonetSelector);
    this.navList = document.querySelector(navListSelector);
    this.navLinks = document.querySelectorAll(navLinksSelector);
    this.activeClass = "active";
  }

  addClickEvent() {
    this.ikonet.addEventListener("click", () => {
      console.log("hii"); 
      this.navList.classList.toggle(this.activeClass);
    });
  }

  init() {
    if (this.ikonet) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new IkonetNavbar(
  ".ikonet",      // seletor do botão hamburguer
  ".nav-list",    // seletor da lista de links
  ".nav-list li"  // seletor dos links individuais
);

mobileNavbar.init();
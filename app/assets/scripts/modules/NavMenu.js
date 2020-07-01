import $ from 'jquery';

class NavMenu {
  constructor() {
    this.menuIcon = $('.site-header__menu-icon');
    this.menuSection = $('.site-header__menu-section');
    this.events();
  }

  events() {
    this.menuIcon.click(this.menuHandler.bind(this));
  }

  //Methods
  menuHandler() {
    if (this.menuIcon.data("state") == "closed") {
      $(this.menuIcon).html(`<i class="fa fa-close fa-lg" aria-hidden="true"></i>`);
      this.menuSection.addClass('site-header__menu-section--is-visible');
      this.menuIcon.data("state", "open");
    } else {
      $(this.menuIcon).html(`<i class="fa fa-bars fa-lg" aria-hidden="true"></i>`);
      this.menuSection.removeClass('site-header__menu-section--is-visible');
      this.menuIcon.data("state", "closed");
    }
  }
}

export default NavMenu;
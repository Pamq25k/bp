import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
  constructor() {
    this.siteHeader = $('.site-header');
    this.largeHero = $('.large-hero__text-content');
    this.makeHeaderSticky();
  }

  makeHeaderSticky() {
    var that = this;
    new Waypoint({
      element: that.largeHero[0],
      handler: function(direction) {
        if (direction == 'down') {
          that.siteHeader.addClass('site-header--is-sticky');
        } else {
          that.siteHeader.removeClass('site-header--is-sticky');
        }
      },
      offset: "18%"
    });
  }
}

export default StickyHeader;
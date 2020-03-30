$(document).ready(function() {

  var config = {
    $hamburgerMenu: $(".js-hamburger-menu"),
    $navOverlay: $(".js-nav-overlay"),
    navOverlayActive: "nav-overlay--active",
    $mobileNav: $(".js-mobile-nav"),
    mobileNavHide: "mobile-nav--hide",
    mobileNavActive: "mobile-nav--active",
  };

  var state = {
    mobileNavOpen: false
  };

  function toggleMobileNav() {
    console.log('toggling the nav overlay');

    state.mobileNavOpen = !state.mobileNavOpen;

    if (state.mobileNavOpen) {
      config.$navOverlay.addClass(config.navOverlayActive);

      config.$mobileNav.removeClass(config.mobileNavHide);
      config.$mobileNav.addClass(config.mobileNavActive);
    } else {
      config.$navOverlay.removeClass(config.navOverlayActive);

      config.$mobileNav.addClass(config.mobileNavHide);
      config.$mobileNav.removeClass(config.mobileNavActive);
    }
  }

  var events = function() {

    config.$hamburgerMenu.on("click", function() {
      toggleMobileNav();
    });

    config.$navOverlay.on("click", function() {
      toggleMobileNav();
    })

  };

  var init = function() {
    events();
  };

  init ();
});

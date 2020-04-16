$(document).ready(function() {

  var config = {
    $hamburgerMenu: $(".js-hamburger-menu"),
    $navOverlay: $(".js-nav-overlay"),
    navOverlayActive: "nav-overlay--active",
    $mobileNav: $(".js-mobile-nav"),
    mobileNavHide: "mobile-nav--hide",
    mobileNavActive: "mobile-nav--active",
    $mobileNavToggle: $(".js-mobile-nav-toggle"),
    $facebookMobileLink: $("#facebook-mobile-link"),
  };

  var state = {
    mobileNavOpen: false
  };

  function toggleMobileNav() {

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

  function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
      return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
      return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return "iOS";
    }

    return "unknown";
  }

  var events = function() {

    config.$hamburgerMenu.on("click", function() {
      toggleMobileNav();
    });

    config.$navOverlay.on("click", function() {
      toggleMobileNav();
    })

    config.$mobileNavToggle.on("click", function() {
      toggleMobileNav();
    })

    var mobileOS = getMobileOperatingSystem();

    if (mobileOS== "iOS") {
      config.$facebookMobileLink.attr('href', "fb://page/?id=243915782971220&__tn__=%2Cd%2CP-R&eid=ARDGdQ_LtQvfstZ6CNtyFhjUaxjM1y2oN8tXQ39KWqq5Tgfy_Ljaq8G31s1LcowpidqGYCLPv0zrnloi");
    } else if ((mobileOS === "Android") || mobileOS === "Windows Phone" ) {
      config.$facebookMobileLink.attr(
        "href",
        "intent://page/243915782971220?referrer=app_link#Intent;package=com.facebook.katana;scheme=fb;end&__tn__=%2Cd%2CP-R&eid=ARDGdQ_LtQvfstZ6CNtyFhjUaxjM1y2oN8tXQ39KWqq5Tgfy_Ljaq8G31s1LcowpidqGYCLPv0zrnloi"
      );
    } else {
      config.$facebookMobileLink.attr(
        "href",
        "https://www.facebook.com/thebandbad"
      );
    }

  };

  var init = function() {
    events();
    console.log(getMobileOperatingSystem());
  };

  init ();
});

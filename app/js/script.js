(function() {
  "use-strict";

  var config = {
    $hamburgerMenu: $(".js-hamburger-menu"),
  };

  var state = {
    mobileNavOpen: false,
  }

  var events = function() {
    console.log('events');

    config.$hamburgerMenu.on("click", function() {
      state.mobileNavOpen = !state.mobileNavOpen;
      console.log(state)
    });
  };

  var listeners = function() {};

  var init = function() {
    listeners();
    events();
  };


  init();

})();

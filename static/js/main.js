(function() {

  'use strict';

  var Main = function() {
    this.initialize.apply(this, arguments);
  };

  Main.prototype = {

    initialize: function() {
      this.bindEvents();
      svg4everybody();
      retinajs();
    },

    bindEvents: function() {
      var _this = this;
      var projectLinks = document.querySelectorAll('.js-open-project');
      var closeLinks = document.querySelectorAll('.js-close');
      var overlays = document.querySelectorAll('.overlay');

      projectLinks.forEach(function(el) {
        el.addEventListener('click', _this.onClickOpenProject, true);
      });

      closeLinks.forEach(function(el) {
        el.addEventListener('click', _this.onClickClose, true);
      });

      // Fix for weird Safari scroll issue
      overlays.forEach(function(el) {
        el.addEventListener('webkitTransitionEnd', function() {
          var e = this;
          this.style.overflowY = 'hidden';
          setTimeout(function() { e.style.overflowY = 'auto'; });
        });
      });
    },

    onClickOpenProject: function(event) {
      event.preventDefault();

      var el = this;
      var projectName = el.getAttribute('href').replace('#', '');
      var overlay = document.querySelector('[data-project="' + projectName + '"]');

      overlay.classList.add('is-shown');
    },

    onClickClose: function(event) {
      event.preventDefault();

      var el = this;
      var projectName = el.getAttribute('data-target');
      var overlay = document.querySelector('[data-project="' + projectName + '"]');

      overlay.classList.remove('is-shown');
      
      setTimeout(function() { overlay.scrollTop = 0; }, 750);
    }

  };

  new Main();

})();
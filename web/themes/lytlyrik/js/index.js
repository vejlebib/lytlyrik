// Entry point for lytlyrik global styling. Includes materialize-css as well.
import '../scss/style.scss';

// Imports the jQuery reference provided by Drupal.
import $ from 'jquery';
// Import materializecss js utilities.
import 'materialize-css';

Drupal.behaviors.lytlyrik = {
  attach: function(context, settings) {
    // Materialize js has issues capturing the click in the image activator on
    // cards. So here we make it possible to use the activator class directly
    // together with the card-image class. Code is mostly copied from
    // materialize.js.
    $('.card-image.activator', context).click(function(e) {
      var $cardReveal = $(this).siblings('.card-reveal');
      var $card = $(this).parent();
      $card.css('overflow', 'hidden');
      $cardReveal.css({ display: 'block' });
      M.anime({
        targets: $cardReveal[0],
        translateY: '-100%',
        duration: 300,
        easing: 'easeInOutQuad'
      });
    });
  }
}

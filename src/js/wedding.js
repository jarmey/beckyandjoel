$( document ).ready(function() {
  var url = window.location.href;

  function thankyou() {
    if (url.indexOf('#rsvp') > -1) return true;
  }

  function displayThankYou() {
    $('#thankyou').modal('show');
  }

  (thankyou()) ? displayThankYou() : '';

});

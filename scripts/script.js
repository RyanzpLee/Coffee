$('#modal').click(function () {
  var buttonId = $(this).attr('id');
  $('#modal-container').removeAttr('class').addClass(buttonId);
  $('body').addClass('modal-active');
});

$('#modal-container').click(function () {
  $(this).addClass('out');
  $('body').removeClass('modal-active');
});

$('#kalita').click(function () {
  var buttonIdKalita = $(this).attr('id');
  $('#kalita-modal-container').removeAttr('class').addClass(buttonIdKalita);
  $('body').addClass('modal-active');
});

$('#kalita-modal-container').click(function () {
  $(this).addClass('out');
  $('body').removeClass('modal-active');
});

$('#aeropress').click(function () {
  var buttonIdaeropress = $(this).attr('id');
  $('#aeropress-modal-container').removeAttr('class').addClass(buttonIdaeropress);
  $('body').addClass('modal-active');
});

$('#aeropress-modal-container').click(function () {
  $(this).addClass('out');
  $('body').removeClass('modal-active');
});

$('#chemex').click(function () {
  var buttonIdchemex = $(this).attr('id');
  $('#chemex-modal-container').removeAttr('class').addClass(buttonIdchemex);
  $('body').addClass('modal-active');
});

$('#chemex-modal-container').click(function () {
  $(this).addClass('out');
  $('body').removeClass('modal-active');
});

$('#espresso').click(function () {
  var buttonIdespresso = $(this).attr('id');
  $('#espresso-modal-container').removeAttr('class').addClass(buttonIdespresso);
  $('body').addClass('modal-active');
});

$('#espresso-modal-container').click(function () {
  $(this).addClass('out');
  $('body').removeClass('modal-active');
});

$('#french').click(function () {
  var buttonIdfrench = $(this).attr('id');
  $('#french-modal-container').removeAttr('class').addClass(buttonIdfrench);
  $('body').addClass('modal-active');
});

$('#french-modal-container').click(function () {
  $(this).addClass('out');
  $('body').removeClass('modal-active');
});



function validateForm() {
  var name = document.getElementById('name').value;
  if (name == '') {
    document.querySelector('.status').innerHTML = 'Name cannot be empty';
    return false;
  }
  var email = document.getElementById('email').value;
  if (email == '') {
    document.querySelector('.status').innerHTML = 'Email cannot be empty';
    return false;
  } else {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
      document.querySelector('.status').innerHTML = 'Email format invalid';
      return false;
    }
  }
  var subject = document.getElementById('subject').value;
  if (subject == '') {
    document.querySelector('.status').innerHTML = 'Subject cannot be empty';
    return false;
  }
  var message = document.getElementById('message').value;
  if (message == '') {
    document.querySelector('.status').innerHTML = 'Message cannot be empty';
    return false;
  }
  document.querySelector('.status').innerHTML = 'Sending...';
}
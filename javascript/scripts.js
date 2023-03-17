$(document).ready(function() {

  $("#Login_btn").click(function() {
  $("#LoginModal").modal();
  });
  $(".close").click(function() {
    $("#LoginModal").modal('hide');
  });
  $("#LoginCloseButton").click(function() {
    $("#LoginModal").modal('hide');
  });
  $("#LoginCancel").click(function() {
    $("#LoginModal").modal('hide');
  });
  $("#reserve_btn").click(function() {
    $("#reserveModal").modal();
  });
  $(".close").click(function() {
    $("#reserveModal").modal('hide');
  });
  $("#ReserveModalCancel").click(function() {
    $("#reserveModal").modal('hide');
  });

});
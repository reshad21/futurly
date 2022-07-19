/*Menue baar collasp button*/
$(document).ready(function(){
    $(".excer-btn-far").click(function(){
      $(".excer-menu-item").css("display", "none");
      $(".excer-logo-2").css("display", "none");
      $(".cour-a-left").css("width", "10%");
      $(".cour-a-right").css("width", "90%");
      $(".excer-btn-far").css("display", "none");
      $(".excer-btn-back").css("display", "inherit");
    });
    $(".excer-btn-back").click(function(){
    $(".excer-menu-item").css("display", "inherit");
    $(".excer-logo-2").css("display", "inline-block");
    $(".cour-a-left").css("width", "17%");
    $(".cour-a-right").css("width", "83%");
    $(".excer-btn-far").css("display", "inherit");
    $(".excer-btn-back").css("display", "none");
  });
  $(".menu-lines").click(function(){
    $(".cour-a-left").css("display", "block");
    $(".menu-lines").css("display", "none");
    $(".close-cross").css("display", "unset");
  });
  $(".close-cross").click(function(){
    $(".cour-a-left").css("display", "none");
    $(".menu-lines").css("display", "block");
    $(".close-cross").css("display", "none");
  });
  $(".rec-rec").click(function(){
    $(".available-courses-div").css("display", "inherit");
    $(".my-courses-div").css("display", "none");
    $(".pro-hr3").css("display", "none");
    $(".pro-hr2").css("display", "inherit");
  });
  $(".rec-pur").click(function(){
    $(".pro-hr2").css("display", "none");
    $(".pro-hr3").css("display", "inherit");
    $(".available-courses-div").css("display", "none");
    $(".my-courses-div").css("display", "inherit");
  });
  });
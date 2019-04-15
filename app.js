var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
let level = 0
const html = document.querySelector('html');
const log = document.getElementById('log');

$(".btn").click(function(){
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour)
  playSound(userChosenColour);
  animatePress(userChosenColour);
})

html.addEventListener('keypress', logKey);
function logKey(e) {
  $("h1").text("level " + level)
  nextSequence();
}

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  level = level += 1;
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed")
  setTimeout(function(){
    $("#" + currentColour).removeClass("pressed")
}, 100)
}

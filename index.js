// Write your code in this file!
function scuberGreetingForFeet(ride) {
  if (ride <= 400) {
    return 'This one is on me!';
  }
  if (ride > 2000 && ride <= 2500) {
    return 'I will gladly take your thirty bucks.';
  }
  if (ride > 2500) {
    return 'No can do.';
  }
}

function ternaryCheckCity(city) {
  if (city == 'NYC') {
    return 'Ok, sounds good.';
  }
  if (city == 'Pittsburgh') {
    return 'No go.';
  }
}

function switchOnCharmFromTip(tip) {
  if (tip == 'generous') {
    return 'Thank you so much';
  }
  if (tip == 'not as generous') {
    return 'Thank you';
  }
  if (tip == 'thanks for everything') {
    return 'Thank you';
  }
}
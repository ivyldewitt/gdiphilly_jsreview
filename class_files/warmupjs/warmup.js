function announce(args) {
  return document.getElementById('announcement').innerHTML = args;
}

announce('Puppies are awesome and JavaScript rocks!');

function announceMe(args) {
  return args;
}

var myAnnouncement = announceMe(`I don't like Game of Thrones :(`);

document.getElementById('proclamation').innerHTML = myAnnouncement;

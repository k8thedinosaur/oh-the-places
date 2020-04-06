// function Places() {
//   this.places = []
//   this.currrentID = 0;
// }

function Place(location, landmarks, timeOfYear, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

var utah = new Place("Utah", ["Red Rocks", "Hurricane"], "April 2018", "Saw some weirdos bury a barrel in the desert; thought it had a dead body in it; called the cops; turns out it was just full of water." )

console.log(utah);
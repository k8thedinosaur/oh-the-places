function Places() {
  this.places = []
  this.currentID = 0;
}

Places.prototype.addPlace = function(place) {
  this.Places.push(place);
}

Places.prototype.assignID = function() {
  this.currentID += 1;
  return this.currentID;
}

Places.prototype.findPlace = function(id) {
  for (var i = 0; i < this.places.length; i++) {
    if (this.places[i]) {
      if (this.places[i].id === id) {
        return this.places[i];
      }
    }
  };
  return false;
}



function Place(location, landmarks, timeOfYear, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

var KatePlaces = new Places();

var southernUtah = new Place("Southern Utah", ["Red Rocks", "Hurricane"], "April 2018", "Saw some weirdos bury a barrel in the desert; thought it had a dead body in it; called the cops; turns out it was just full of water." )

var oregonCoast = new Place("Oregon Coast", ["Seaside", "Astoria"], "July 2019", "Went with Roman and Momo for 4th of July.")

var southernColorado = new Place("Southern Colorado", ["Cortez", "Dolores"], "October 2019", "Worked as a cook for a hunting camp. Hung out with horses. Made bank.")



// console.log(southernUtah, oregonCoast, southernColorado);
console.log(KatePlaces);
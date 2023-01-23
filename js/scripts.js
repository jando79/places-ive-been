//Business Logic

function Place() {
  this.location= {};
  this.currentId = 0;
  }

Place.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

Place.prototype.addPlaces = function(location) {
    this.location[location.country] = location;
};




function Info(country, city, landmark, language, notes) {
  this.country = country;
  this.city = city;
  this.language = language;
  this.notes = notes;
}

Info.prototype.location = function() {
  return this.country + " " + this.city;
};





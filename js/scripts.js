//Business Logic

function Place() {
  this.location= {};
  }   
//above is defining object type as place

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
  return this.city + ", " + this.country;
};







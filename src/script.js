function Place(location, landmark, season, notes) {
    this.location = location;
    this.landmark = landmark;
    this.season = season;
    this.notes = notes;
  }
  
  Place.prototype.summary = function() {
    return "Visited " + this.location + " during " + this.season + ". Famous landmark: " + this.landmark + ". Notes: " + this.notes;
  };
  
  function PlacesList() {
    this.places = [];
  }
  
  PlacesList.prototype.addPlace = function(place) {
    this.places.push(place);
  };
  
  const myPlaces = new PlacesList();
  const form = document.getElementById("place-form");
  const placesListElement = document.getElementById("places-list");
  
  form.addEventListener("submit", function(event) {
    event.preventDefault();
  
    const location = document.getElementById("location").value;
    const landmark = document.getElementById("landmark").value;
    const season = document.getElementById("season").value;
    const notes = document.getElementById("notes").value;
  
    const newPlace = new Place(location, landmark, season, notes);
    myPlaces.addPlace(newPlace);
  
    const li = document.createElement("li");
    li.textContent = newPlace.summary();
    placesListElement.appendChild(li);
  
    form.reset();
  });
  
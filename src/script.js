function Place(location, landmark, image, notes) {
  this.location = location;
  this.landmark = landmark;
  this.image = image;
  this.notes = notes;
}

Place.prototype.summary = function() {
  return "Visited " + this.location + ". Famous landmark: " + this.landmark + ". Notes: " + this.notes;
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
  const image = document.getElementById("image").value;
  const notes = document.getElementById("notes").value;

  const newPlace = new Place(location, landmark, image, notes);
  myPlaces.addPlace(newPlace);

  const li = document.createElement("li");

  if (image) {
    const img = document.createElement("img");
    img.src = image;
    img.alt = "Image of " + landmark;
    img.classList.add("place-image"); // <- Add a CSS class
    li.appendChild(img);
    li.appendChild(document.createElement("br"));
  }

  li.appendChild(document.createTextNode(newPlace.summary()));
  placesListElement.appendChild(li);

  form.reset();
});

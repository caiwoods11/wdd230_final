/// Variable
let data = {};

/// Functions


async function FetchVehicles(){
  let url = "data/vehicles.json"
  await fetch(url)
  .then((response) => {
      return response.json();
  })
  .then((vehicleJSON) => {
      data = vehicleJSON;
      console.log(data)
      //return vehicleJSON;
  });
  slideshow_callback();
}

function slideshow_callback(){
  showSlides(1, "bikes");
  showSlides(1, "atvs");
  showSlides(1, "jeeps");
}

// Next/previous controls
function plusSlides(n, slideshowName) {
  showSlides(n, slideshowName);
}

// Thumbnail image controls
function currentSlide(n, slideshowName) {
  showSlides(slideIndex = n, slideshowName);
}

function showSlides(n, slideshowName) {
  let i;
  let slideIndex = n
  let slides = document.getElementsByClassName(slideshowName);
  let dots = document.getElementsByClassName("demo-"+slideshowName);
  let captionText = document.getElementById("caption-"+slideshowName);
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = "";
  captionText.innerHTML = '<p class="vehicle-data">'
      +data[slideshowName][slideIndex - 1].name+"<br>"
      +"Max Persons: "
      +data[slideshowName][slideIndex - 1].max_persons+"<br>"
      +"<hr>"+"<br>"
      +"Reservation Price"+"<br>"
      +"Half Day $"
      +data[slideshowName][slideIndex - 1].reservation.half
      +" | "
      +"Full Day $"
      +data[slideshowName][slideIndex - 1].reservation.full+"<br>"
      +"<br>"
      +"<hr>"+"<br>"
      +"Walk-In Price"+"<br>"
      +"Half Day $"
      +data[slideshowName][slideIndex - 1].walk_in.half
      +" | "
      +"Full Day $"
      +data[slideshowName][slideIndex - 1].walk_in.full+"<br>"
      +"</p>";
}

/// Method Calls
FetchVehicles();
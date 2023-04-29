

function changeUmbrellaColor(color) {
  var umbrellaImage = document.getElementById("umbrella-image");
  var logoContainer = document.getElementById("logo-container");
  var logoImage = document.getElementById("logo-image");
  var loaderIcon = document.getElementById("loader-ic");
  var loadingSpinner = document.getElementById("loading-spinner");

  // Hide the umbrella image and logo while the loading spinner is displayed
  umbrellaImage.style.display = 'none';
  logoContainer.style.display = 'none';
  
  // Show the loading spinner and change its color
  loaderIcon.style.display = 'block';
  loadingSpinner.style.display = "block";

  // Set a timeout to change the color of the umbrella and hide the loading spinner after 2 seconds
  setTimeout(function() {
    // Change the source of the umbrella image
    umbrellaImage.src = "./images/" + color + ".png";

    // Hide the loading spinner and show the umbrella image
    loaderIcon.style.display = 'none';
    umbrellaImage.style.display = 'block';
    loadingSpinner.style.display = "none";

    // Show the logo container if the logo is already uploaded
    if (logoImage.src !== "") {
      logoContainer.style.display = "block";
    }
  }, 1000);
}








function previewLogo() {
  var logoImage = document.getElementById("logo-image");
  var loadingSpinner = document.getElementById("loading-spinner");
  var umbrellaImage = document.getElementById("umbrella-image");
  var logoContainer = document.getElementById("logo-container");

  // Get the uploaded logo file
  var logoFile = document.getElementById("logo-file").files[0];

  // Show the loading spinner while the logo is being loaded
  // loaderIcon.style.display = 'block';
if(logoFile.length!=0){
  loadingSpinner.style.display = "block";
  umbrellaImage.style.display = 'none';
  logoContainer.style.display = "none";

  // Use the FileReader API to read the logo file as a data URL
  var reader = new FileReader();
  reader.onload = function(event) {
    logoImage.src = event.target.result;

    // Hide the loading spinner and show the logo and umbrella images once the logo has been loaded
    setTimeout(function() {
      loadingSpinner.style.display = "none";
      umbrellaImage.style.display = 'block';
      logoContainer.style.display = "block";
    }, 1000);
}
  };

  reader.readAsDataURL(logoFile);
}


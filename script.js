(function(){
  emailjs.init("user_2DhFWfxbcSV1gEGdmEZJM");
})();

function sendEmail(){
console.log("sending...");

  const templateParams = {
    dolazak: document.getElementById("dolazak").value,
    odlazak: document.getElementById("odlazak").value,
    odrasli: document.getElementById("odrasli").value,
    djeca: document.getElementById("djeca").value,
    mail: document.getElementById("mail").value
  };

  emailjs.send('service_fhic7rk','apartmani_ID', templateParams, 'user_2DhFWfxbcSV1gEGdmEZJM')
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    }, (err) => {
      console.log('FAILED...', err);
    });

    setTimeout(() => { console.log("sent!!"); }, 2000)
}

function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
  }
   
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  }
  
  // Slideshow Apartment Images
  var slideIndex = 1;
  showDivs(slideIndex);
  
  function plusDivs(n) {
    showDivs(slideIndex += n);
  }
  
  function currentDiv(n) {
    showDivs(slideIndex = n);
  }
  
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
    }
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " w3-opacity-off";
  }
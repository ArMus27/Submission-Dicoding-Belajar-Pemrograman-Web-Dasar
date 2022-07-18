// function untuk slider gambar di gallery
let slideIndex = 1;
showSlides(slideIndex);

// maju mundur gambar
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// menampilkan slide terkini
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide_gambar");
  let titik_indikators = document.getElementsByClassName("titik_indikator");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < titik_indikators.length; i++) {
    titik_indikators[i].className = titik_indikators[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  titik_indikators[slideIndex-1].className += " active";
  
}
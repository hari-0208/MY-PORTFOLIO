// mobile header section -- toggle menu open / close

function toggleMenu(){
    const mobile = document.querySelector('.mobile-links');
    const icon = document.querySelector('.mobile-icon');

    // Toggle open class for menu and icon

      mobile.classList.toggle("open");
      icon.classList.toggle("open");
  
     
}
//  Dom Loading it use for addEvent

document.addEventListener("DOMContentLoaded", () => {

  // HTML create element mention for javascript

  const slider = document.querySelector(".slider");
  const slide = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const dotsContainer = document.querySelector(".dots-container");
  
  // Slide position starting 0 value

  let currentSlide = 0;

  //  Slide total count 3

  const slidecount = slide.length;

  // foreach method use it 0,1,2 == 3 index(pic)

  slide.forEach((_, index) => {

    //  variable create for Javascript
    const dot = document.createElement("div");

    // variable class name add it

    dot.classList.add("dot");

    //  index active to dot is dark 

    if (index === 0) dot.classList.add("active");

    // one particular dots click to particular index switch here

    dot.addEventListener("click", () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  // same reference add it

  const dots = document.querySelectorAll(".dot");



  function updateDots() {

    // one to one index switch it

    dots.forEach((dot, index) => {

      // active index toggle it 

      dot.classList.toggle("active", index === currentSlide);
    });
  }

  function goToSlide(index) {
    currentSlide = index;

    // select the index goto center 
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateDots();
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slidecount;
    goToSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slidecount) % slidecount;
    goToSlide(currentSlide);
  }

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  // auto slide every 5 seconds

  setInterval(nextSlide,5000);
});

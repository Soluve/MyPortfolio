const textBlocks = document.querySelectorAll('.sliding-text');

let currentIndex = 0;

function slideTextBlocks() {
    textBlocks[currentIndex].style.opacity = '0';
    currentIndex = (currentIndex + 1) % textBlocks.length;
    textBlocks[currentIndex].style.opacity = '1';
}

setInterval(slideTextBlocks, 10000); // Adjust the interval as needed (in milliseconds)
slideTextBlocks(); // Show the first text block initially

const navbar = document.querySelector('.top-nav');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY; // Get scroll position
  const threshold = 50; // Change color after scrolling this many pixels

  if (scrollPosition > threshold) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});




function handleScroll() {
    const element = document.querySelector('.drop');
const threshold = 100; // Define the offset from the top of the viewport (in pixels) to consider the element visible
  const rect = element.getBoundingClientRect(); // Get the element's position relative to the viewport

  const isInViewport = (rect.top <= (window.innerHeight || document.documentElement.clientHeight) - threshold) && (rect.bottom >= 0);

  if (isInViewport) {
    // Leverage the existing animation for visibility
    element.classList.add('dropdown-element'); // Add the class with animation

  } else {
    // Reset the transform property to ensure proper positioning
    element.classList.remove('dropdown-element');
  }
}

window.addEventListener('scroll', handleScroll);

// Optionally, trigger initial visibility on page load
if (handleScroll()) {
  element.style.opacity = 1;
}



function handleScroll2() {
     
    const element = document.querySelector('.slide-left');
const threshold = 100; // Define the offset from the top of the viewport (in pixels) to consider the element visible
  const rect = element.getBoundingClientRect(); // Get the element's position relative to the viewport

  const isInViewport = (rect.top <= (window.innerHeight || document.documentElement.clientHeight) - threshold) && (rect.bottom >= 0);

  if (isInViewport) {
    // Leverage the existing animation for visibility
            element.classList.add("slide-left-element")
  
  } else {
    // Reset the transform property to ensure proper positioning
         element.classList.remove('slide-left-element');
  }
}

window.addEventListener('scroll', handleScroll2);

// Optionally, trigger initial visibility on page load
if (handleScroll2()) {
  element.style.opacity = 1;
}

function handleScroll3() {
     
    const element = document.querySelector('.slide-right');
const threshold = 100; // Define the offset from the top of the viewport (in pixels) to consider the element visible
  const rect = element.getBoundingClientRect(); // Get the element's position relative to the viewport

  const isInViewport = (rect.top <= (window.innerHeight || document.documentElement.clientHeight) - threshold) && (rect.bottom >= 0);

  if (isInViewport) {
    // Leverage the existing animation for visibility
            element.classList.add("slide-right-element")
  
  } else {
    // Reset the transform property to ensure proper positioning
         element.classList.remove('slide-right-element');
  }
}

window.addEventListener('scroll', handleScroll3);

// Optionally, trigger initial visibility on page load
if (handleScroll3()) {
  element.style.opacity = 1;
}
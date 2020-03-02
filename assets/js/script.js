
const buttonTop = document.getElementById("toTop");
const sub = document.getElementById('sub');
// const line = document.getElementById('line');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    buttonTop.style.display = "block";
    // line.style.display = "block";
  } else {
    buttonTop.style.display = "none";
    // line.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document

buttonTop.addEventListener('click', () => window.scrollTo({
  top: 0,
  behavior: 'smooth',
}));



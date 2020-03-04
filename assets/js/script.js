
const buttonTop = document.getElementById("toTop");

const diver = document.getElementById('diver');
const sub = document.getElementById('sub');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction()
    showSub()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    buttonTop.style.display = "block";
  } else {
    buttonTop.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document

buttonTop.addEventListener('click', () => window.scrollTo({
  top: 0,
  behavior: 'smooth',
}));

// When scrolls to #c, show sub
function showSub() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    // sub.style.display = "block";
    // sub.classList.add('fade');
    sub.classList.add('is-shown');
    // diver.style.display= "none";
    diver.classList.add('fade');
    diver.classList.remove('is-shown')
  } else {
    // sub.style.display = "none";
  }
}
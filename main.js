const texts = ["Developer", "Designer", "Creator"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;
    if (letter.length === currentText.length) {
      count++;
      index = 0;
    }
    setTimeout(type, 400);
})();


document.querySelector('.follow').addEventListener('mousemove', eyeball);

function eyeball(){
  var eye = document.querySelectorAll('.eye');
  eye.forEach(function (eye) {
    let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
    let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rot = (radian * (180 / Math.PI) * -1 ) + 270;
    eye.style.transform = "rotate("+ rot +"deg)";
  })
}












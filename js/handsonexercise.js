function backgroundColor() {
  let color = 'orange';

  document.body.style.backgroundColor = 'orange';
}

function changeColor() {
  let color = 'blue';

  document.body.style.backgroundColor = 'blue';
}

function colors() {
  let colors = ['blue', 'yellow', ' green', 'purple'];
  let random = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[random];
}


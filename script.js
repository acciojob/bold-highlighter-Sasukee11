const strongElement = document.querySelectorAll('strong');
function highlight() {
  //Write your code here
  strongElement.forEach((t) => (t.style.color = 'green'));
}

function return_normal() {
  //Write your code here
  strongElement.forEach((t) => (t.style.color = 'black'));
}

console.log(strongElement);


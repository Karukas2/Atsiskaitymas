const link = document.getElementById('link');
const image = document.getElementById('image');
const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const newElement = document.getElementById('new-element');


div1.style.height = '100px';
div1.style.width = '200px';
div1.style.backgroundColor = 'lightblue';

div2.style.height = '100px';
div2.style.width = '200px';
div2.style.backgroundColor = 'lightcoral';

p1.style.color = 'blue';
p2.style.color = 'green';

image.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Sourcegraph_logo.svg/2560px-Sourcegraph_logo.svg.png';
image.style.width = '100px';
image.style.height = '100px';
image.style.borderRadius = '50%';
image.style.border = '5px solid green';

const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(p => console.log(p));
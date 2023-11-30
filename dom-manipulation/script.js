const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const p = document.createElement('p');
p.classList.add('p');
p.textContent = "Hey, I am red!"
p.style.color = "red";
container.appendChild(p);

const h3 = document.createElement('h3');
h3.classList.add('h3');
h3.textContent = "Hey, I am blue!"
h3.style.color = "blue";
container.appendChild(h3);

 
const newDiv = document.createElement('div');

const heading = document.createElement('h1');
heading.textContent = "I'm in a div"
newDiv.appendChild(heading)

const paragraph = document.createElement('p');
paragraph.textContent = "ME TOO!"
newDiv.appendChild(paragraph)

container.appendChild(newDiv)

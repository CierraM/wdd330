
const nav = document.querySelector('nav');
const ul = document.createElement('ul');
ul.classList.add('collapsed');

let href= '../index.html';
let li = document.createElement('li');
let a = document.createElement('a');
a.textContent = 'Home';
a.setAttribute('href', href);
li.appendChild(a);
ul.appendChild(li);

links.map( link =>{
    let href= "../" + link.url;
    if (link.url == "https://cierram.github.io/cookbook-app/") {
        href = link.url
    }
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.textContent = link.label;
    a.setAttribute('href', href);
    li.appendChild(a);
    ul.appendChild(li);
    
})


nav.appendChild(ul);

let link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('type', 'text/css');
link.setAttribute('href', '../styles/notes.css');

document.head.appendChild(link);

ul.addEventListener('click', (event) =>{
    ul.classList.toggle('collapsed');
})
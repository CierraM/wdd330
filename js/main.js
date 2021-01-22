
const container = document.getElementById('links');

links.map( link => {
    const li = document.createElement('li');
    const a = document.createElement('a');

    a.textContent = link.label;
    a.setAttribute('href', link.url);

    li.appendChild(a);
    container.appendChild(li);
})

let year = new Date().getFullYear();

document.getElementById('copyright').innerHTML = `&copy; ${year} Cierra Morris`;
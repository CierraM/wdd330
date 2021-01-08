const links = [
    {
    label: "Week 01 Notes",
    url: "wdd330/week01/index.html"
    }
];

const container = document.getElementById('links');

links.map( link => {
    const li = document.createElement('li');
    const a = document.createElement('a');

    a.textContent = link.label;
    a.setAttribute('href', link.url);

    li.appendChild(a);
    container.appendChild(li);
})
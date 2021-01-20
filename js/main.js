const links = [
    {
    label: "Week 01 Notes",
    url: "./week01/index.html"
    },
    {
        label: "Week 02 Notes",
        url: "./week02/index.html"
    },
    {
        label: "Week 02 Team Activity",
        url: "./week02/week02-team-activity/index.html"
    },
    {
        label: "Week 03 Notes",
        url: "./week03/index.html"
    },
    
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

let year = new Date().getFullYear();

document.getElementById('copyright').innerHTML = `&copy; ${year} Cierra Morris`;
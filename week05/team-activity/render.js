import {hikeList} from './hikes.js'

const imgBasePath = "//byui-cit.github.io/cit261/examples/";

function clear(item) {
    item.innerHTML = ""
}

function showHikeList() {
    const hikeListElement = document.getElementById("hikes");
    clear(hikeList);
    renderHikeList(hikeList, hikeListElement);
}

function renderHikeList(hikes, parent) {
    hikes.forEach(hike => {
        parent.appendChild(renderOneHike(hike));
    });
}

function renderOneHike(hike) {
    const item = document.createElement("li");
    item.id = hike.id;

    item.innerHTML = ` 
          <div class="image"><img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
          <h2>${hike.name}</h2>
          <div class="description">
                  <div>
                      <h3>Distance</h3>
                      <p>${hike.distance}</p>
                  </div>
                  <div>
                      <h3>Difficulty</h3>
                      <p>${hike.difficulty}</p>
                  </div>
          </div>`;

    return item;
}

function detailView(e) {
    console.log(e.target)
    let element = document.querySelector('#hikes')
    clear(element);
    const id = e.target.id;
    let thisHike
    hikeList.map(hike => {
        if (hike.id == id){
            thisHike = hike;
        }
    })
    element.innerHTML = `
    <div class="image"><img src="${imgBasePath}${thisHike.imgSrc}" alt="${thisHike.imgAlt}"></div>
    <h2>${thisHike.name}</h2>
    <div class="description">
            <div>
                <h3>Distance</h3>
                <p>${thisHike.distance}</p>
            </div>
            <div>
                <h3>Difficulty</h3>
                <p>${thisHike.difficulty}</p>
            </div>
    </div>
    `;

}



export {
    showHikeList,
    detailView
}

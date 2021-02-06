import {
  showHikeList,
  detailView
} from './render.js'

import {hikeList} from './hikes.js'


window.addEventListener("load", () => {
    showHikeList();
    hikeList.forEach(hike => {
      document.getElementById(hike.id).addEventListener("click", detailView, true);
  });
})


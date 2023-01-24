const api = "https://jsonplaceholder.typicode.com/albums/2/photos";

var fadeTime = 1000;
var count = 0;
const increment = "increment";
const decrement = "decrement";

var counterDisplay = document.getElementById("counter");

const fetchApi = () => {
  fetch(api)
    .then(response => response.json())
    .then(data => {
      showData(data);
    });
}

const showData = (data) => {
  let imageContainer = `<div></div>`

  data.forEach(element => {
    countTotalImages(increment, "");
    imageContainer +=
      `<div class="hovering" onclick="deleteImage(this)">
      <img src=${element.url}></img>
        <h2>${element.title} </h2>  
    </div>`;

  });
  document.getElementById("imageContent").innerHTML = imageContainer;
}

const countTotalImages = (increment, decrement) => {
  if (increment) {
    count++;
  }
  if (decrement) {
    count--;
  }
  counterDisplay.innerHTML = "Total Posts: " + count;
}

const deleteImage = (e) => {
  fadeOut(e);

  setTimeout(() => {
    e.remove();
    countTotalImages("", decrement);
  }, fadeTime);
};

const fadeOut = (id) => {
  id.animate(
    [
      { opacity: 1 },
      { opacity: .1 },
    ], {
    duration: fadeTime,
  },
  )
}











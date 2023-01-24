var api = "https://jsonplaceholder.typicode.com/albums/2/photos";
var fadeTime = 1000;
var count = 0;
var increment = "increment";
var decrement = "decrement";
var counterDisplay = document.getElementById("counter");
var fetchApi = function () {
    fetch(api)
        .then(function (response) { return response.json(); })
        .then(function (data) {
        showData(data);
    });
};
var showData = function (data) {
    var imageContainer = "<div></div>";
    data.forEach(function (element) {
        countTotalImages(increment, "");
        imageContainer +=
            "<div class=\"hovering\" onclick=\"deleteImage(this)\">\n      <img src=".concat(element.url, "></img>\n        <h2>").concat(element.title, " </h2>  \n    </div>");
    });
    document.getElementById("imageContent").innerHTML = imageContainer;
};
var countTotalImages = function (increment, decrement) {
    if (increment) {
        count++;
    }
    if (decrement) {
        count--;
    }
    counterDisplay.innerHTML = "Total Posts: " + count;
};
var deleteImage = function (e) {
    fadeOut(e);
    setTimeout(function () {
        e.remove();
        countTotalImages("", decrement);
    }, fadeTime);
};
var fadeOut = function (id) {
    id.animate([
        { opacity: 1 },
        { opacity: .1 },
    ], {
        duration: fadeTime
    });
};

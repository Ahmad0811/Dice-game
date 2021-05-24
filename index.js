document.querySelector("button").addEventListener("click", Role);

function Role() {
  var random1 = Math.floor(Math.random() * 6) + 1;
  var randomImageSource1 = "images/dice" + random1 + ".png";
  var image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src", randomImageSource1);

  var random2 = Math.floor(Math.random() * 6) + 1;
  var randomImageSource2 = "images/dice" + random2 + ".png";
  var image2 = document.querySelectorAll("img")[1];
  image2.setAttribute("src", randomImageSource2);

  var random3 = Math.floor(Math.random() * 6) + 1;
  var randomImageSource3 = "images/dice" + random3 + ".png";
  var image3 = document.querySelectorAll("img")[2];
  image3.setAttribute("src", randomImageSource3);

  document.querySelector("h1").innerHTML = "Total is " + (random1 + random2 + random3);
}
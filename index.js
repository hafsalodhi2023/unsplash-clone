let accessToken = "WHtjYtx51173CvnaZzIZcrGqkbRuIeevQKiSfJM3wSk";
let randomImages = `https://api.unsplash.com/photos/random?client_id=${accessToken}&count=30`;
let gallery = document.querySelector("#gallery");

fetch(randomImages)
  .then((res) => {
    return res.json();
  })
  .then((finalRes) => {
    console.log(finalRes);
    finalRes.forEach((data) => {
      console.log(data);
      gallery.appendChild(createImage(data.urls.regular));
    });
  })
  .catch((error) => {
    console.log(`Error: ${error}`);
  });

function createImage(url) {
  let div = document.createElement("div");
  div.innerHTML = `<img src=${url} />`;
  return div;
}

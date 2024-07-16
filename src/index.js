document.addEventListener("DOMContentLoaded", () => {
  // Challenge 1
  const dogImageContainerEl = document.querySelector("div#dog-image-container");
  const imagesFragment = document.createDocumentFragment();

  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((response) => response.json())
    .then(({ message }) => {
      message.forEach((img) => {
        const newImgEl = document.createElement("img");
        newImgEl.setAttribute("src", img);
        newImgEl.classList.add("dog-image");

        imagesFragment.appendChild(newImgEl);
      });
    })
    .then(() => {
      dogImageContainerEl.appendChild(imagesFragment);
    });
});

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

  // Challenge 2
  const dogBreedsEl = document.querySelector("ul#dog-breeds");
  const breedsFragment = document.createDocumentFragment();

  fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then(({ message }) => {
      for (key in message) {
        const newBreedEl = document.createElement("li");
        newBreedEl.textContent = key;
        newBreedEl.classList.add("dog-breed");

        breedsFragment.appendChild(newBreedEl);
      }
    })
    .then(() => dogBreedsEl.appendChild(breedsFragment));
});

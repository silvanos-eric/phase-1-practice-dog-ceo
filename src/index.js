document.addEventListener("DOMContentLoaded", () => {
  // Challenge 1
  const dogImageContainerEl = document.querySelector("div#dog-image-container");
  const imagesFragment = document.createDocumentFragment();
  const breedDropDownEl = document.querySelector("select#breed-dropdown");

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
        if (key.startsWith(breedDropDownEl.value)) {
          const newBreedEl = document.createElement("li");
          newBreedEl.textContent = key;
          newBreedEl.classList.add("dog-breed", "list-group-item");

          breedsFragment.appendChild(newBreedEl);
        }
      }
    })
    .then(() => dogBreedsEl.appendChild(breedsFragment));

  // Challenge 3
  dogBreedsEl.addEventListener("click", (event) => {
    if (event.target.matches("li.dog-breed")) {
      event.target.classList.add("bg-black", "text-white");
    }
  });

  // Challenge 4

  breedDropDownEl.addEventListener("change", (event) => {
    const newValue = event.target.value;

    fetch("https://dog.ceo/api/breeds/list/all")
      .then((response) => response.json())
      .then(({ message }) => {
        for (key in message) {
          if (key.startsWith(newValue.toString().toLowerCase())) {
            const newBreedEl = document.createElement("li");
            newBreedEl.textContent = key;
            newBreedEl.classList.add("dog-breed", "list-group-item");

            breedsFragment.appendChild(newBreedEl);
          }
        }
      })
      .then(() => {
        dogBreedsEl.innerHTML = null;
        dogBreedsEl.appendChild(breedsFragment);
      });
  });
});

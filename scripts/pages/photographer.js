const idPhotographer = new URL(document.location).searchParams.get("id");


async function getPhotographer(id) {
  const photographers = await fetch('data/photographers.json')
    .then(res => res.json())
    .then(res => res.photographers)
    .catch(err => console.log('Un probléme est survenu', err));

  var photographer = photographers.find(element => element.id == idPhotographer)
  return photographer;
}

async function displayPhotographeMedia(medias) {
  console.log(medias)
    const mediaSection = document.getElementById('photographer-photos')
    medias.forEach((data)=>{
      // console.log("forEach")
      // console.log(idPhotographer)
      // console.log(data.photographerId)
      if (data.photographerId == idPhotographer) {
        const media = mediaFactory(data);
        const mediaCardDom = media.getMediaCardDOM();
        console.log("mediaCardDom :",mediaCardDom)
        mediaSection.appendChild(mediaCardDom);

      }
    });

}

function displayData(photographer, filteredMedia) {
  const name = document.getElementById("photographeName");
  name.innerHTML = photographer.name;


  const location = document.getElementById("photographeLocalisation");
  location.innerHTML = photographer.city + ', ' + photographer.country;

  const slogan = document.getElementById("photographeSlogan");
  slogan.innerHTML = photographer.tagline;

  const image = document.getElementById("photographeImage");
  image.src = "assets/photographers/" + photographer.portrait;
  console.log(image)

  const galerieDiv = document.getElementById("photosCatalogue");
  galerieDiv.innerHTML = "";
  console.log("filteredMedia: ", filteredMedia)
  filteredMedia.forEach((media) => {
    const photo = document.createElement("img");
    photo.src = "assets/catalogue/" + media.image;
    photo.alt = media.title;
    galerieDiv.appendChild(photo);
    console.log(image);
  });
}

async function getMedias() {
  let medias = [];
  await fetch('data/photographers.json')
  .then(function(response) {
      return response.json();
  })
  .then(function(value) {
      medias = value.media;
  })
  .catch(function(error){
      console.log(error);
  });
  return ({media: [...medias]})
}



const dropdown = document.getElementById("photographer-dropdown");

dropdown.addEventListener("change", function() {
  const selectedOption = dropdown.options[dropdown.selectedIndex].value;
  console.log(selectedOption);
  
  if (selectedOption === "popularite") {
    // Tri par popularité
  } else if (selectedOption === "date") {
    // Tri par date
  } else if (selectedOption === "titre") {
    // Tri par titre
  }
});


async function init() {
  console.log("init")
  const photographer = await getPhotographer(idPhotographer);
  const { media } = await getMedias();
  displayPhotographeMedia(media);
  // displayData(photographer, filteredMedia);
}

init();
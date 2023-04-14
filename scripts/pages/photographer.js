// const idPhotographer = new URL(document.location).searchParams.get("id");
//Récupération de l'id du photographe dans l'url
const queryString_url_id = window.location.search;
//Extraction de l'id
const urlsearchParams = new URLSearchParams(queryString_url_id);
const idPhotographer = urlsearchParams.get('id');


async function getPhotographer() {
  const photographers = await fetch('data/photographers.json')
    .then(res => res.json())
    .then(res => res.photographers)
    .catch(err => console.log('Un probléme est survenu', err));

  // var photographer = photographers.find(element => element.id == idPhotographer)
  return photographers;
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
        mediaSection.appendChild(mediaCardDom);

      }
    });

}

function displayData(photographers) {

  const photographer = photographers.filter((obj) => obj.id == idPhotographer);

  console.log('nom:',photographer)
  console.log('blase:',photographer[0].name)
  const name = document.getElementById("photographeName");
  name.innerHTML = photographer[0].name;


  const location = document.getElementById("photographeLocalisation");
  location.innerHTML = photographer[0].city + ', ' + photographer[0].country;

  const slogan = document.getElementById("photographeSlogan");
  slogan.innerHTML = photographer[0].tagline;

  const image = document.getElementById("photographeImage");
  image.src = "assets/photographers/" + photographer[0].portrait;
  console.log(image)

  
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
  const photographers = await getPhotographer();
  const { media } = await getMedias();
  displayData(photographers);
  displayPhotographeMedia(media);
}

init();
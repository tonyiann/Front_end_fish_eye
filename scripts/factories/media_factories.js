function mediaFactory(data) {
    const { id, photographerId, title, image, likes, date, price, video,name,  } = data;
    console.log("photographerid :",photographerId)

    

    const picture = `assets/catalogue/${photographerId}/${image}`;
    console.log("picture:", picture)
    const movie = `assets/catalogue/${photographerId}/${video}`;

    const profil = `assets/photographers/${photographerId}/${portrait}`;
    
    const nom = `data/photographers.json/${name}`;
    console.log("name :" ,name)
    
    const local = `data/photographers.json/${localisation}`;

    const slogan = `data/photographers.json/${tagline}`;


    
    




    function getMediaCardDOM() {
        const article = document.createElement('article');
        const photo = document.createElement('div');

        const nom = document.createElement( 'h2' );
        console.log("h2:",h2)
        nom.textContent = name;
        

        console.log("image :",image)
         if (image ==undefined)
         {
            const vide = document.createElement('video');
            const source = document.createElement('source');
            source.setAttribute('src',movie);
            vide.appendChild(source);
            photo.appendChild(vide);
         }
         else {
            const img = document.createElement('img');
            img.setAttribute('src',picture)
            console.log("img:", img)
            photo.appendChild(img)

         }
         console.log("photo:",photo)
         article.appendChild(photo);
         article.appendChild(img);
         

         return article;
         



    }

    if(image == undefined){
        return { id, photographerId, title, movie, likes,date, price, video,name, getMediaCardDOM }
    } else{
        return { id, photographerId, title, picture, likes,date, price, video,name, getMediaCardDOM }
    }
}
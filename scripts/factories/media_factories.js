function mediaFactory(data) {
    const { id, photographerId, title, image, likes, date, price, video  } = data;
    console.log("photographerid :",photographerId)

    

    const picture = `assets/catalogue/${photographerId}/${image}`;
    console.log("picture:", picture)
    const movie = `assets/catalogue/${photographerId}/${video}`;
    function getMediaCardDOM() {
        const article = document.createElement('article');
        const photo = document.createElement('div');
        

        console.log("image :",image)
         if (image ==undefined)
         {
            const vide = document.createElement('video');
            const source = document.createElement('source');
            source.setAttribute('src',movie)
            vide.appendChild(source)
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
         return article;

    }


    if(image == undefined){
        return { id, photographerId, title, movie, likes,date, price, video, getMediaCardDOM }
    } else{
        return { id, photographerId, title, picture, likes,date, price, video, getMediaCardDOM }
    }
}
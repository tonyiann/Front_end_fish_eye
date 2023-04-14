function mediaFactory(data) {
    const { id, photographerId, title, image, likes, date, price, video,name,  } = data;

    

    const picture = `assets/catalogue/${photographerId}/${image}`;
    
    const movie = `assets/catalogue/${photographerId}/${video}`;

        
    function getMediaCardDOM() {
        const article = document.createElement('article');
        article.setAttribute('class','mediaCard');
        const photo = document.createElement('div');
        photo.setAttribute('class','mediaCard--img')

        

    
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
            photo.appendChild(img)

         }

        const info = document.createElement('div');
        info.setAttribute('class','mediaCard--info')
        
        const titrePhoto = document.createElement('h3');
        titrePhoto.setAttribute('class', 'mediaCard--info--titre')

        titrePhoto.textContent = title;

        info.appendChild(titrePhoto)




         article.appendChild(photo);
         article.appendChild(info)
         

         return article;
         



    }

    if(image == undefined){
        return { id, photographerId, title, movie, likes,date, price, video,name, getMediaCardDOM }
    } else{
        return { id, photographerId, title, picture, likes,date, price, video,name, getMediaCardDOM }
    }
}
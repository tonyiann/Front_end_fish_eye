function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id  } = data;
    console.log(data)

    

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const link = document.createElement('a')
        link.setAttribute('href', `photographer.html?id=${id}`)
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.style.cursor ="pointer";

        img.addEventListener("click", function() {
            // Do something when the image is clicked
            window.location.href = `photographer.html?id=${id}`;
        });


        const nom = document.createElement( 'h2' );
        nom.textContent = name;

        const localisation = document.createElement( 'p' );
        localisation.textContent = `${city}, ${country}`;
        localisation.style.color = "#901C1C";
        localisation.style.fontWeight = "600";
        localisation.style.marginTop = "-30px";
        localisation.style.marginLeft = "-40px";


        const description = document.createElement ( 'p' );
        description.textContent = tagline;
        description.style.color = "black";
        description.style.marginTop = "-10px";

        const honoraires = document.createElement ( 'p' );
        honoraires.textContent = price;
        honoraires.style.color = "#757575";
        honoraires.style.marginTop = "-10px";

        article.appendChild(img);
        article.appendChild(nom);
        article.appendChild(localisation);
        article.appendChild(description);
        article.appendChild(honoraires);
        link.appendChild(article);
        return (link);
    }
    return { name, picture, getUserCardDOM }
}
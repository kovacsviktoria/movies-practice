/* function movieSection (movieTitle, movieYear, isOlder) { //m paraméter, ahová be fogjuk illeszteni a movie obejktumot lentebb

    return `
        <section class="movie">
            <h2>${movieTitle}</h2>
            <h3>${movieYear}</h3>
            <h4>${isOlder}</h4>
        </section>
    `;
} */

function movieSection (movieTitle, movieYear) {

    let isNewer = "This movie is older than 2000.";

    if (movieYear >= 2000) {
        isNewer = "This movie is newer than 2000.";
    }

    return `
        <section class="movie">
            <h2>${movieTitle}</h2>
            <h3>${movieYear}</h3>
            <h4>${isNewer}</h4>
        </section>
    `;
}

function logMovieTitle(movieTitle) {
    //console.log(movieTitle);    
}


function logMovieObject(movieObject) {
    //console.log(movieObject);  
    console.log(movieObject.title);  
}

function loadEvent() {
    const rootE = document.getElementById("root");

    //console.log() practice - get movies's titles
    let n = 5;
    //console.log(movies[n].title); // 6th obejct in the array. Because index start at 0.
    //console.log(movies[movies.length-1].title); //last object in array
    //console.log(movies[1].title); //first object in array


    for (const movie of movies) {

        logMovieTitle(movie.title);
        logMovieObject(movie);
        
        rootE.insertAdjacentHTML("beforeend", movieSection(movie.title, movie.year));

        //console.log(movie.title);

/*         if (movie.year >= 2000) {
            
            rootE.insertAdjacentHTML("beforeend", movieSection(movie.title, movie.year, "This movie is newer than 2000."));
        }
        else {
            
            rootE.insertAdjacentHTML("beforeend", movieSection(movie.title, movie.year, "This movie is older than 2000."));

        } */

    }

/*     for (let index = 0; index < movies.length; index++) {
        let movie = movies[index];

        console.log(index);
        console.log(movie.title);

    } */
}

window.addEventListener("load", loadEvent);
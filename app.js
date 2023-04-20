// (async function (){
//     const response = await fetch("./data.json");
//     const movies = await response.json();
//     // console.log(movies);
//     const genre_list = [];
//     movies.forEach((movie) =>{
//             // const genre = movie.genres.map((genre) =>{
//             //     return genre;
//             console.log(movie.genre);
//             });
//             // console.log(genre)
//             // genre.forEach((value) =>{
//             //     if(!(genre_list.includes(value)))
//             //     {
//             //         genre_list.push(value);
//             //     }
//                 // console.log(value);
//                 // genre_list.push(value);
//             // })
//             // if(!(genre_list.includes(genre)))
//             // {
//             //     genre_list.push(genre);
//             // }    
//             // console.log(genre_list);
//     });
//     // console.log(genre_list)


// })();

(async function (){
    const response = await fetch("./data.json");
    const movies = await response.json();
    const genre_list = [ "Action", "Science Fiction", "Adventure", "Fantasy", "Thriller", "Animation", "Family", "Comedy", "Crime", "Drama"
                        , "Music", "Romance", "Western", "History", "War", "Horror"]

    // console.log(genre_list);
    const genre_select = document.getElementById("genre-list");

    function Displaylists(element_list)
    {
        element_list.innerHTML = "";
        let count = 1;
        element_list.forEach((val) => {
            const option = document.createElement('option');
            option.setAttribute("value", count);
            option.innerHTML = val;
            genre_select.appendChild(option);
            count++;
        });
    }
    Displaylists(genre_list);
})();
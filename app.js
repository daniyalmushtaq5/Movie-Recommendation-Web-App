(async function (){
    const response = await fetch("./data.json");
    const movies = await response.json();
    const genre_select = document.getElementById("genre-list");
    const year_select = document.getElementById("year-list");

    const genre_list = [ "Action", "Science Fiction", "Adventure", "Fantasy", "Thriller", "Animation", "Family", "Comedy", "Crime", "Drama"
                        , "Music", "Romance", "Western", "History", "War", "Horror"]
    const year_list = []


    function getYear()
    {
        movies.forEach((movie) => {
            const val = movie.release_date.split("-")[0];
            if(!(year_list.includes(val)))
            {
                year_list.push(val);
            }
        });
        year_list.sort((a,b) => {
            return b-a;
        })
    }
    // console.log(year_list);

    // console.log(genre_list);

    function Displaylists(element_list,element_id)
    {
        element_list.innerHTML = "";
        let count = 1;
        element_list.forEach((val) => {
            const option = document.createElement('option');
            option.setAttribute("value", count);
            option.innerHTML = val;
            element_id.appendChild(option);
            count++;
        });
    }

    getYear();
    Displaylists(genre_list,genre_select);
    Displaylists(year_list,year_select);
})();
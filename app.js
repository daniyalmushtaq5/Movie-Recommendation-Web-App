(async function (){
    const response = await fetch("./data.json");
    const movies = await response.json();
    const genre_id = document.getElementById("genre-list");
    const year_id = document.getElementById("year-list");
    const lang_id = document.getElementById("language-list");
    const rating_ip = document.getElementsByClassName("rating");

    const genre_list = [ "Action", "Science Fiction", "Adventure", "Fantasy", "Thriller", "Animation", "Family", "Comedy", "Crime", "Drama"
                        , "Music", "Romance", "Western", "History", "War", "Horror"]
    let year_list = []
    let lang_list = []


    // function getYear(list)
    // {
    //     movies.forEach((movie) => {
    //         const val = movie.release_date.split("-")[0];
    //         if(!(list.includes(val)))
    //         {
    //             list.push(val);
    //         }
    //     });
    //     list.sort((a,b) => {
    //         return b-a;
    //     })
    // }

    function getYear()
    {
        year_list = movies.map(movie => movie.release_date.split("-")[0]);
        year_list = year_list.filter((value,index,self) => self.indexOf(value) === index);
        year_list = year_list.sort((a,b) => b-a);
    }

    function getLang()
    {
        lang_list = movies.map(movie => movie.original_language);
        lang_list = lang_list.filter((value,index,self) => self.indexOf(value) === index);
    }

    function DisplayDropDowns(element_list,element_id)
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
    getLang();
    Displaylists(genre_list,genre_id);
    Displaylists(year_list,year_id);
    Displaylists(lang_list,lang_id);
})();
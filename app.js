(async function (){
    const response = await fetch("./data.json");
    const movies = await response.json();
    const genre_id = document.getElementById("genre-list");
    const year_id = document.getElementById("year-list");
    const lang_id = document.getElementById("language-list");
    const rating_id = document.getElementById("rating-list");
    const btn_id = document.getElementById("btn-submit");

    const genre_list = [ "Action", "Science Fiction", "Adventure", "Fantasy", "Thriller", "Animation", "Family", "Comedy", "Crime", "Drama"
                        , "Music", "Romance", "Western", "History", "War", "Horror"]
    
    const rating_list = [1, 2, 3, 4, 5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10];
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
        let count = 1;
        element_list.forEach((val) => {
            const option = document.createElement('option');
            option.setAttribute("index", `${count}`);
            option.value = val;
            option.textContent = val;
            element_id.appendChild(option);
            count++;
        });
    }


    function showMovies(movies_list)
    {

    }

    function filterMovies(genre_val,year_val, lang_val, rating_val)
    {
        let result = movies;
        if(genre_val)
        {
            result = result.filter(movie => movie.genres.includes(genre_val));
        }

        if(year_val)
        {
            result = result.filter(movie => movie.release_date.split("-")[0].includes(year_val));
        }

        if(lang_val)
        {
            result = result.filter(movie => movie.original_language.includes(lang_val));
        }

        if(lang_val)
        {
            result = result.filter(movie => movie.vote_average >= rating_val);
        }

        return result
    }

    function Searchfun()
    {
        let genre_val = null, year_val = null, lang_val = null, rating_val = null;
        
        genre_id.addEventListener('change', event =>{
            genre_val = event.target.value;
            console.log(genre_val);
            console.log(filterMovies(genre_val,year_val,lang_val,rating_val));
        });

        year_id.addEventListener('change', event =>{
            year_val = event.target.value;
            console.log(year_val);
            console.log(filterMovies(genre_val,year_val,lang_val,rating_val));

        });
    

        lang_id.addEventListener('change', event => {
            lang_val = event.target.value;
            console.log(lang_val);
            console.log(filterMovies(genre_val,year_val,lang_val,rating_val));
        });

        rating_id.addEventListener('change', event => {
            rating_val = +(event.target.value);
            console.log(rating_val);
            console.log(filterMovies(genre_val,year_val,lang_val,rating_val));
        });
    }
    
    Searchfun();

    getYear();
    getLang();
    DisplayDropDowns(genre_list,genre_id);
    DisplayDropDowns(year_list,year_id);
    DisplayDropDowns(lang_list,lang_id);
    DisplayDropDowns(rating_list,rating_id);
})();
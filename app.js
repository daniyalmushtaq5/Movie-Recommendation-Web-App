(async function (){
    const response = await fetch("./data.json");
    const movies = await response.json();
    const genre_id = document.getElementById("genre-list");
    const year_id = document.getElementById("year-list");
    const lang_id = document.getElementById("language-list");
    const rating_id = document.getElementById("rating-list");

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

        

    function Searchfun()
    {
        let genre_result, year_result, lang_result;
        let genre_val, year_val, lang_val;
        // genre_id.addEventListener('click', event =>{
        //     genre_val = event.target.value; 
        //     console.log(genre_val);
        // });
        
        // let genre_val = genre_id.innerText;
        // console.log(genre_val);

        // const rating_val = +(rating_ip.value);
        // const rating_result = movies.filter(movie => movie.vote_average >= rating_val);
        // console.log(rating_result);
        
        genre_id.addEventListener('change', event =>{
            genre_val = event.target.value;
            console.log(genre_val);
            genre_result = rating_result.filter(movie => movie.genres.includes(genre_val));
            console.log(genre_result);
            Searchfun();
        });
        

        year_id.addEventListener('change', event =>{
            year_val = event.target.value;
            console.log(year_val);
            year_result = genre_result.filter(movie => movie.release_date.split("-")[0].includes(year_val));
            console.log(year_result);
        });
    

        lang_id.addEventListener('change', event => {
            lang_val = event.target.value;
            console.log(lang_val);
            lang_result = year_result.filter(movie => movie.original_language.includes(lang_val));
            console.log(lang_result);
        });

        

        // const year_val = year_id.value;
        // const lang_val = lang_id.value;
        // const rating_val = rating_ip.value;
        // console.log(genre_val);

    }
    
    // Searchfun(genre_id,"genres");
    Searchfun();

    getYear();
    getLang();
    DisplayDropDowns(genre_list,genre_id);
    DisplayDropDowns(year_list,year_id);
    DisplayDropDowns(lang_list,lang_id);
    DisplayDropDowns(rating_list,rating_id);
})();
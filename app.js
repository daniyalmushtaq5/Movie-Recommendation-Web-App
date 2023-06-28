(async function (){
    const response = await fetch("./data.json");
    const movies = await response.json();
    const genre_id = document.getElementById("genre-list");
    const year_id = document.getElementById("year-list");
    const lang_id = document.getElementById("language-list");
    const rating_id = document.getElementById("rating-list");
    const btn_id = document.getElementById("btn-submit");
    // const result_movie_ul = document.getElementById("movie-list");
    // const result_rank_ul = document.getElementById("rank-list");
    // const result_year_ul = document.getElementById("year-list");
    const movie_table = document.querySelector(".movie-table");
    const movie_table_head = document.querySelector(".movie-table thead tr")
    const movie_table_data = document.querySelector(".movie-table tbody")

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
        // movie_table.innerHTML = "";
        movie_table_head.innerHTML = "";
        movie_table_data.innerHTML = "";

        
        let rank = document.createElement("th");
        let movie = document.createElement("th");
        let year = document.createElement("th");

        rank.setAttribute("class",'rank-heading');
        movie.setAttribute("class",'movie-heading');
        year.setAttribute("class",'year-heading');

        rank.innerHTML = `<b>RANK</b>`;
        movie.innerHTML = `<b>MOVIE</b>`;
        year.innerHTML = `<b>YEAR</b>`;

        movie_table.setAttribute('style','border: 2px solid black;');
        // movie_table_head.setAttribute('style','border: 2px solid black;');

        rank.setAttribute('style', 'border-inline-end: 2px solid black; border-block-end: 2px solid black;');
        movie.setAttribute('style', 'border-inline-end: 2px solid black; border-block-end: 2px solid black;');
        // rank.setAttribute('style', 'border-block-end: 2px solid black;');
        // movie.setAttribute('style', 'border-block-end: 2px solid black;');
        year.setAttribute('style', 'border-block-end: 2px solid black;');
        
        
        movie_table_head.appendChild(rank);
        movie_table_head.appendChild(movie);
        movie_table_head.appendChild(year);

        count = 1;

        movies_list.forEach((movie)=> {
            let tr = document.createElement("tr");
            let th_rank = document.createElement("th");
            let th_movie = document.createElement("th");
            let th_year = document.createElement("th");

            th_rank.setAttribute("class",'rank-th');
            th_movie.setAttribute("class",'movie-th');
            th_year.setAttribute("class",'year-th');

            th_rank.innerHTML = count;
            th_movie.innerHTML = `<div class="title"><b>${movie.title}</b> </div>
            <div class="attributes">
                <ul id="att-list">
                    <li class="certification"> ${movie.certification} </li> 
                    <li class="genre"> ${movie.genres[0]} </li>
                    <li class="time"> ${movie.runtime} </li>
                </ul>
            </div>`

            th_year.innerHTML = movie.release_date.split("-")[0]


            th_rank.setAttribute('style', 'border-inline-end: 2px solid black; border-block-end: 2px solid black;');
            th_movie.setAttribute('style', 'border-inline-end: 2px solid black; border-block-end: 2px solid black;');
            th_year.setAttribute('style', 'border-block-end: 2px solid black;');

            tr.appendChild(th_rank);
            tr.appendChild(th_movie);
            tr.appendChild(th_year);

            movie_table_data.appendChild(tr);
            count++;

        });
        
    }


    // function showMovies(movies_list)
    // {
    //     result_rank_ul.innerHTML = "";
    //     result_movie_ul.innerHTML = "";
    //     result_year_ul.innerHTML = "";

    //     let rank = document.createElement("li");
    //     let movie = document.createElement("li");
    //     let year = document.createElement("li");

    //     rank.setAttribute("class",'rank-heading');
    //     movie.setAttribute("class",'movie-heading');
    //     year.setAttribute("class",'year-heading');

    //     rank.innerHTML = `<b>RANK</b>`;
    //     movie.innerHTML = `<b>MOVIE</b>`;
    //     year.innerHTML = `<b>YEAR</b>`;

    //     result_rank_ul.appendChild(rank);
    //     result_movie_ul.appendChild(movie);
    //     result_year_ul.appendChild(year);

    //     count = 1;

    //     movies_list.forEach((movie)=> {
            
    //         let li_rank = document.createElement("li");
    //         let li_movie = document.createElement("li");
    //         let li_year = document.createElement("li");
    //         li_rank.innerHTML = count;
    //         li_movie.innerHTML = `<div class="title"><b>${movie.title}</b> </div>
    //         <div class="attributes">
    //             <ul id="att-list">
    //                 <li class="certification"> ${movie.certification} </li> 
    //                 <li class="genre"> ${movie.genres[0]} </li>
    //                 <li class="time"> ${movie.runtime} </li>
    //             </ul>
    //         </div>`

    //         li_year.innerHTML = movie.release_date.split("-")[0]
    
    //         result_rank_ul.appendChild(li_rank);
    //         result_movie_ul.appendChild(li_movie);
    //         result_year_ul.appendChild(li_year);
    //         count++;
    //     });
        
    // }

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

        if(rating_val)
        {
            result = result.filter(movie => movie.vote_average >= rating_val);
        }

        return result;
    }

    function Searchfun()
    {
        let genre_val = null, year_val = null, lang_val = null, rating_val = null, results = null;
        
        genre_id.addEventListener('change', event =>{
            genre_val = event.target.value;
            console.log(genre_val);
            results = filterMovies(genre_val,year_val,lang_val,rating_val);
            console.log(results);
        });

        year_id.addEventListener('change', event =>{
            year_val = event.target.value;
            console.log(year_val);
            results = filterMovies(genre_val,year_val,lang_val,rating_val);
            console.log(results);

        });
    

        lang_id.addEventListener('change', event => {
            lang_val = event.target.value;
            console.log(lang_val);
            results = filterMovies(genre_val,year_val,lang_val,rating_val);
            console.log(results);
        });

        rating_id.addEventListener('change', event => {
            rating_val = +(event.target.value);
            console.log(rating_val);
            results = filterMovies(genre_val,year_val,lang_val,rating_val);
            console.log(results);
        });

        btn_id.addEventListener("click", ()=>{
            showMovies(results);
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
let $ = require ("jquery")

function renderMovie(movie){
  $("#title").text(movie.title);
    /*document.getElementById("title").innerHTML = movie.title;*/
  $("#info").text(movie.info);
    /*document.getElementById("info").innerHTML = movie.info;*/
  $("#image").attr("src",movie.image);
    /*document.getElementById("image").src = movie.image;*/

    var actorList = "";
    for(let i=0; i<movie.actors.length; i++) {
        actorList = actorList + "<li>" + movie.actors[i] + "</li>";
    }

    $("#actor").html(actorList);
    /*document.getElementById("actor").innerHTML = actorList;*/
}

function changeStarRating(rating) {
   for(let i=1; i<=5; i++) {
       if (i <= rating){
           $("#star"+i).addClass("filled");
       } else {
           $("#star"+i).removeClass("filled");
     }
   }
}

for(let i=1; i<=5; i++){
    $("#star"+i).click(function(){changeStarRating(i)});
  }

import {movieData} from "./data";  
  
renderMovie(movieData);
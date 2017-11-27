function renderMovie(movie){
    document.getElementById("title").innerHTML = movie.title;

    document.getElementById("info").innerHTML = movie.info;

    document.getElementById("image").src = movie.image;

    var actorList = "";
    for(let i=0; i<movie.actors.length; i++) {
        actorList = actorList + "<li>" + movie.actors[i] + "</li>";
    }

    document.getElementById("actor").innerHTML = actorList;
}

function changeStarRating(rating) {
   for(let i=1; i<=5; i++) {
       let star = document.getElementById("star" + i);
       if (i <= rating){
           star.classList.add("filled");
       } else {
           star.classList.remove("filled");
     }
   }
}

for(let i=1; i<=5; i++){
    let star = document.getElementById("star" + i);
    star.addEventListener("click", function(){
      changeStarRating(i);
    });
  }
  
renderMovie(movieData);
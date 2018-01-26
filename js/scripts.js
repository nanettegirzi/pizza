//business

function Pizza(size) {
  this.size = size;
  this.toppings = [];
  this.cheese = [];
  this.sauce = [];
}

function calcPrice(ticket, movie) {

//look at userAge and adjust price accordingly
  if(pizza.size == "small") {
    pizza.price += 10;
  }
  else if (pizza.size == "medium") {
    ticket.price += 12;
  }
  else if (pizza.size == "large") {
    pizza.price += 14;
  }

  //if the movie is a new release, add 3 to ticket price
  if(movie.newRelease == true){
    ticket.price += 3;
  }

  if(ticket.timeOfDay == "Evening") {
    ticket.price += 5;
  }
}



//front end
$(document).ready(function(){

  fillMovieForm(moviesArray);

  $("form#orderpizza").submit(function(event){
    event.preventDefault();

    var movieName = $("#movieName").val();
    var timeOfDay = $("#timeOfDay").val();
    var userAge = $("#userAge").val();

    //if any fields are not selected, alert user. Otherwise, display purchaseConfirmation div
    if (formCheck(movieName, timeOfDay, userAge) == true){
      $(".purchaseConfirmation").show();
    }
    else {
      $(".purchaseConfirmation").hide();
    };

    getMovie(movieName);
    //console.log(myMovie);

    var newPizza = new Pizza(movieName, timeOfDay, userAge);
    //console.log(newTicket);

    calcPrice(newTicket, myMovie);
    //console.log(newTicket);

    $("#confirmSize").text(newTicket.movieName);
    $("#confirmToppings").text(newTicket.timeOfDay);
    $("#confirmPrice").text(newTicket.price);

  })

})

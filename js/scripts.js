//business

function Pizza(size, cheese, sauce, toppings) {
  this.size = size;
  this.cheese = cheese;
  this.sauce = sauce;
  this.toppings = [];
  this.price = 0;
}

Pizza.prototype.cost = function(size) {

  if(pizza.size == "small") {
    pizza.price += 10;

  }
  else if (pizza.size == "medium") {
    pizza.price += 12;

  }
  else if (pizza.size == "large") {
    pizza.price += 14;
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
    $("#confirmCheese").text(newTicket.timeOfDay);
    $("#confirmSauce").text(newTicket.price);
    $("#confirmToppings").text(newTicket.movieName);
    $("#confirmPrice").text(newTicket.price);
  })

})

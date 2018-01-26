//back end

function Pizza(size, sauce, cheese, toppings) {
  this.size = size;
  this.sauce = sauce;
  this.cheese = cheese;
  this.toppings = [];
  this.price = 0;
}

function calcCost(pizza, size) {
  if (pizza.size == "small") {
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
  $("form#orderpizza").submit(function(event){
    event.preventDefault();

    var size = $("input:radio[name=size]:checked").val();
    var cheese = $("input:radio[name=cheese]:checked").val();
    var sauce = $("input:radio[name=sauce]:checked").val();

    var newPizza = new Pizza (size, sauce, cheese);

    $("input:checkbox[name=toppings]:checked").each(function(){
      var userToppings = $(this).val();
      newPizza.toppings.push(userToppings)
      });

      calcCost(newPizza);

    $("#confirmSize").text(newPizza.size);
    $("#confirmSauce").text(newPizza.sauce);
    $("#confirmCheese").text(newPizza.cheese);
    $("#confirmToppings").text(newPizza.userToppings);
    $("#confirmPrice").text(newPizza.price);
  })

})

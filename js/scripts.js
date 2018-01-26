//back end

function Pizza(size, sauce, cheese, toppings) {
  this.size = size;
  this.sauce = sauce;
  this.cheese = cheese;
  this.toppings = [];
  this.price = [];

}

Pizza.prototype.cost = function(size) {
  var amount = 10

  if (this.size == "Small") {
     return amount += 2;
  }
  else if (this.size == "Medium") {
     return amount += 4;
  }
  else if (this.size == "Large") {
    return amount += 6;
  }
}


// function calcCost(pizza, size) {
//   if (pizza.size == "Small") {
//     pizza.price += 10;
//   }
//   else if (pizza.size == "Medium") {
//     pizza.price += 12;
//   }
//   else if (pizza.size == "Large") {
//     pizza.price += 14;
//   }
// }

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
      console.log(userToppings)
      });

      var pizzaCost = newPizza.cost(newPizza.size);
        newPizza.price.push(pizzaCost);
        console.log(pizzaCost)


    $("#confirmSize").text(newPizza.size);
    $("#confirmSauce").text(newPizza.sauce);
    $("#confirmCheese").text(newPizza.cheese);
    $("#confirmToppings").text(newPizza.toppings);
    $("#confirmPrice").text(newPizza.price);
  })

})

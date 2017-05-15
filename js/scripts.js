function Pokemon(name, age, type, description, picture) {
  this.pokemonName = name;
  this.pokemonAge = age;
  this.pokemonType = type;
  this.pokemonDescription = description;
  this.pokemonPicture = picture;
}




//User Logic//
$(function() {
  $("#adoption-form").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#poke-name").val();
    var inputtedAge = $("input#poke-age").val();
    var inputtedType = $("input#poke-type").val();
    var inputtedDescription = $("textarea#poke-description").val();
    var inputtedPicture = $("input#poke-picture").val();

    var newPokemon = new Pokemon(inputtedName, inputtedAge, inputtedType, inputtedDescription, inputtedPicture);


    $(".results").append(
      "<div class = 'col-xs-4 new-poke'> <img src ='" + newPokemon.pokemonPicture +
      "' alt='" + newPokemon.pokemonName +
      "'class='poke-img'/> <br> <h2>" + newPokemon.pokemonName + "</h2> </div>");

      $('.new-poke').last().click(function() {
        // alert("itworks");
        $(".initially-hidden").show();
        $(".poke-header").text(newPokemon.pokemonName);
        $(".new-poke-pic").attr("src", newPokemon.pokemonPicture);
      });
  });

});

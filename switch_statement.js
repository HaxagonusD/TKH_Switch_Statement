// If favoriteMovie is "jaws"
// Assign moviePhrase the value "You're gonna need a bigger boat."
// Else if favoriteMovie is "the shining"
// Assign moviePhrase the value "All work and no play makes Jack a dull boy."
// Else if favoriteMovie is "star wars"
// Assign moviePhrase the value "Do. Or do not. There is no try."
// Else if favoriteMovie is "forrest gump"
// Assign moviePhrase the value "Life was like a box of chocolates."
// Else if favoriteMovie is "back to the future"
// Assign moviePhrase the value "Where we're going, we don't need roads."
// Else
// Assign moviePhrase the value "Great movie choice!"
let favoriteMovie = "star wars";
let moviePhrase = "";

switch (favoriteMovie) {
  case "jaws":
    moviePhrase = "You're gonna need a bigger boat.";
    break;
  case "the shining":
    moviePhrase = "All work and no play makes Jack a dull boy.";
    break;
  case "star wars":
    moviePhrase = "Do. Or do not. There is no try.";
    break;
  case "forrest gump":
    moviePhrase = "Life was like a box of chocolates.";
    break;
  case "back to the future":
    moviePhrase = "Where we're going, we don't need roads.";
    break;

  default:
    moviePhrase = "Great movie choice!";
    break;
}

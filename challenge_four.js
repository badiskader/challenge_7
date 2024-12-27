function checkSeason(month) {
  if (month === 12 || month === 1 || month === 2) {
    return "Winter";
  } else if (month >= 3 && month <= 5) {
    return "Spring";
  } else if (month >= 6 && month <= 8) {
    return "Summer";
  } else if (month >= 9 && month <= 11) {
    return "Autumn";
  } else {
    return "Invalid month";
  }
}
// exemple d'utilisation de la fonction
let current_season = checkSeason(3); //mars
console.log(current_season); //résultat sera "Spring"

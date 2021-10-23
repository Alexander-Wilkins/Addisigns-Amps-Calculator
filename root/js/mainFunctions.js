/*Code Property of Alex Wilkins. All rights reserved 2021 Oct-22nd-21 */

$("#calculator-cab").submit(function (event) {
  event.preventDefault();
  let lengthInFeet = $("#lengthInFeet").val();
  let numberOfRows = $("#numberOfRows").val();
  let modulesFor1stRow = lengthInFeet * 4;
  let totalModules = modulesFor1stRow * numberOfRows;
  let result = (Math.ceil(totalModules * 10) / 10).toFixed(1) / 75;
  $("#output-cab").text(result);
});

$("#calculator-letter").submit(function (event) {
  event.preventDefault();
  let heightOfLetters = $("#heightOfLetters").val();
  let qtyOfLetters = $("#qtyOfLetters").val();
  let totalModules = (heightOfLetters * qtyOfLetters * 3) / 4;
  let result = (Math.ceil(totalModules * 10) / 10).toFixed(1) / 75;
  $("#output-letter").text(result);
});

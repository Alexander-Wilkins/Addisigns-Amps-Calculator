$("#calculator").submit(function (event) {
  event.preventDefault();
  let lengthInFeet = $("#lengthInFeet").val();
  let numberOfRows = $("#numberOfRows").val();
  let modulesFor1stRow = lengthInFeet * 4;
  let totalModules = modulesFor1stRow * numberOfRows;
  let result = totalModules / 75;
  $("#output").text(result);
});

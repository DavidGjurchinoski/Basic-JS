let carsDiv = document.getElementById("inputCars");

let cars = {
  model: "",
  color: "",
  year: 0,
  fuel: 0,
  fuelConsumption: 0,
  fuelForKm(km) {
    return `You will need ${this.fuelConsumption * km} of fuel to pass ${km}km`;
  },
};

createInputs(cars, carsDiv);

buttonElements[2].addEventListener("click", function () {
  fillObject(cars, carsDiv);
  h3Elements[2].innerText = cars.fuelForKm(
    +prompt("How meny km do you need to pass?")
  );
});

const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const SelectPlanet = require('./views/select_planet.js');
const ViewPlanet = require('./views/view_planet.js');

document.addEventListener('DOMContentLoaded', function() {
  const planetsDataModel = new SolarSystem(planetsData);
  console.log(planetsDataModel.planets);
  planetsDataModel.bindEvents();

  const selectedPlanet = document.querySelector('.planets-menu');
  const planetMenu = new SelectPlanet(selectedPlanet);
  planetMenu.bindEvents();

  const infoDiv = document.querySelector('div#planet-info');
  const planetInfoDisplay = new ViewPlanet(infoDiv);
  planetInfoDisplay.bindEvents();

  // const planetDataSource = new SolarSystem();
  // planetDataSource.bindEvents();
});

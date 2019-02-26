const PubSub = require('../helpers/pub_sub.js')

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function () {
  PubSub.publish('Planets:all-planets-ready', this.planets);
  console.log(this.planets);

  PubSub.subscribe('SelectView:change', (evt) => {
    const selectedIndex = evt.detail;
    this.publishPlanetDetail(selectedIndex);
  });
};

SolarSystem.prototype.publishPlanetDetail =
function(planetName){
  console.log(planetName);
  let selectedPlanet

  for (let planet of this.planets) {
    if (planet.name === planetName) {
      selectedPlanet = planet
    }
  }
  console.log(selectedPlanet);
  PubSub.publish('Planets:selected-planet-ready', selectedPlanet)
};

module.exports = SolarSystem;

const PubSub = require('../helpers/pub_sub.js');

const ViewPlanet = function(container) {
  this.container = container;
};

ViewPlanet.prototype.bindEvents = function () {
  PubSub.subscribe('Planets:selected-planet-ready', (evt) => {
    const planet = evt.detail;
    this.render(planet);
  });
};

ViewPlanet.prototype.render = function(planet) {
  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = `${planet.name}, day:${planet.day}, orbit:${planet.orbit}, surface area:${planet.surfaceArea}, volume:${planet.volume}, gravity:${planet.gravity}, moons:${planet.moons}`
  this.container.innerHTML = ' ';
  this.container.appendChild(infoParagraph);

};

module.exports = ViewPlanet;

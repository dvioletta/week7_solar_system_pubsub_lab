const PubSub = require('../helpers/pub_sub.js');

const SelectPlanet = function(element) {
  this.element = element;
};

SelectPlanet.prototype.bindEvents = function() {
  PubSub.subscribe('Planets:all-planets-ready', (evt) => {
    const planetData = evt.detail;
    console.log(planetData);
  });

this.element.addEventListener('click', (evt) => {
  const selectedIndex = evt.target.id;
  console.log(selectedIndex);
  PubSub.publish('SelectView:change', selectedIndex);
  });
};




module.exports = SelectPlanet;

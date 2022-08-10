import React from 'react';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    const plantent = 'Matheus';
    return (
      <div data-testid="solar-system">
        <p>
          {plantent}
        </p>
        <Title headline="Planetas" />
        <div>
          {planets.map((planet) => (
            <PlanetCard
              key={ planet.name }
              planetName={ planet.name }
              planetImage={ planet.image }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;

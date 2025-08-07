import { data } from "../data/data";

// SPACE DATA EXERCISE 5
// Return an array with all Planets' names with a massValue greater or equal to a given number (1-7)
// Return example: ['name1', 'name2', ... , 'nameN']

export function getPlanetsWithMassValue(data, number) {
  let massivePlanets = [];
  const planets = data.planets;
  planets.filter((planet) => {
    const mass = planet.mass;
    if (mass.massValue >= number) {
      massivePlanets.push(planet.name);
    }
  });
  return massivePlanets;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-5"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

import { data } from "../data/data";

// SPACE DATA EXERCISE 11
// Return an array of Planets' names with less than 10 moons
// include planets with 0 moons
// Return example: ['name1', 'name2', ... , 'nameN']

export function lowMoonsPlanets(data) {
  const planets = data.planets;
  let selectedPlanets = [];
  planets.filter((planet) => {
    const moonsArray = planet.moons;
    if (moonsArray && moonsArray.length < 10) {
      selectedPlanets.push(planet.name);
    }
    else if(!moonsArray) {
      selectedPlanets.push(planet.name);
    }
  });
  return selectedPlanets; 
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

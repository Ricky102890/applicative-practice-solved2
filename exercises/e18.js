/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  const asteroidArray = data.asteroids;
  const asteroidObjs = asteroidArray.map((obj) => {
    return obj;
  }).filter((asteroid) => {
    return asteroid.discoveryYear;
  });
  // for (let i = 1; i < asteroidObjs.length; i++) {
  //   let start = 0;
  //   if (asteroidObjs[i].discoveryYear === asteroidObjs[start].discoveryYear) {
  //     asteroidObjs[i].occurrence += 1;
  //     start += 1;
  //   }
  // }
  asteroidObjs.forEach((ast) => {
    return ast.occurrence = 1;
  });
  for (let i = 0; i < asteroidObjs.length; i++) {
    let min = 1;
    if (asteroidObjs[i].discoveryYear === asteroidObjs[min].discoveryYear) {
      asteroidObjs[i].occurrence +=1;
      min += 1;
    }
    if (asteroidObjs[i].occurrence > 1) {
      return asteroidObjs[i].discoveryYear;
    }
  }
}
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

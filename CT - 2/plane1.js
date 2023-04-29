function minPlanes(array) {
  let numPlanes = 0;
  let fuel = 0;
  
  for (let i = 0; i < array.length; i++) {
    // if we can't reach the next airport with our current fuel,
    // we need to hire a new plane with enough fuel to get there
    if (i > fuel) {
      return -1; // not possible to reach the last airport
    }
    
    // update the amount of fuel we have based on the current airport
    fuel = Math.max(fuel, array[i]);
    
    // if we've reached the last airport, we're done
    if (fuel >= array.length - 1) {
      return numPlanes;
    }
    
    // if we're out of fuel, we need to hire a new plane
    if (fuel === i) {
      numPlanes++;
      fuel++;
    }
  }
  
  return -1; // not possible to reach the last airport
}


// Example usage:
const array = [2, 1, 2, 3, 1];
const result = minPlanes(array);
console.log(result); // should output 3
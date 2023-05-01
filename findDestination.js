function minPlanesRequired(arr) {
  try {
    // Check if the argument is an array
    if (!Array.isArray(arr)) {
      throw new TypeError("Argument must be an array");
    }

    // Check if the array is empty
    if (arr.length === 0) {
      throw new Error("Array cannot be empty");
    }

    // Calculate the sum of the array
    const sum = arr.reduce((acc, curr) => acc + curr, 0);

    // Calculate the average number of passengers per day
    const avg = sum / arr.length;

    // Round up the average to the nearest integer
    const minPlanes = Math.ceil(avg);

    return minPlanes;
  } catch (error) {
    console.error(error);
    return -1;
  }
}

console.log(minPlanesRequired([1, 6, 3, 4, 5, 0, 0, 0, 6]));

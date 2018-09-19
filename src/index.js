/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let count = 0;
  for (let i = 0; i < preferences.length; i += 1) {
    const firstLover = preferences[i];
    const secondLover = preferences[firstLover - 1];
    const thirdLover = preferences[secondLover - 1];

    if (thirdLover - 1 === i) {
      count += 1;
    }
  }
  return Math.floor(count / 3);
};

/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let loveTriangle = 0;
  for (let i = 0; i < preferences.length; i++) {
    let one, two, three;

    one = preferences[i];
    two = preferences[one-1];
    three = preferences[two-1];
    if ((i + 1) === three) {
      loveTriangle++;
    }

  }
  return Math.floor(loveTriangle/3);
};
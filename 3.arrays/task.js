function compareArrays(arr1, arr2) {
  if (arr1.length === arr2.length) {
    const valuesEqual = arr1.every((item, index) => item === arr2[index]);
    return valuesEqual
  } else {
    return false;
  }
}


function getUsersNamesInAgeRange(users, gender) {
  if (users.length === 0) {
    return 0
  } else {
    let resultGender = users.filter((item) => item.gender === gender);
    if (resultGender.length === 0) {
      return 0
    } else {
      let resultAge = resultGender.map((one) => one.age);
      let resultAgeSum = resultAge.reduce((acc, age) => acc + age);
      return resultAgeSum / resultAge.length
    }
  }
}

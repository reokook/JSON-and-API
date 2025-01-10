function calculateAverage(jsonObject, property) {
  const array = jsonObject.students; 
  const total = array.reduce((sum, item) => sum + item[property], 0);
  const average = total / array.length;
  return average;
}

const students = {
  students: [
    { name: "ahaed", grade: 92 },
    { name: "rawand", grade:84 },
    { name: "njlaa", grade: 88 },
    { name: "yamin", grade: 78 },
  ],
};

console.log(calculateAverage(students, "grade")); 

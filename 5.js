
function sortArrayByProperty(jsonObject, property) {
  const array = jsonObject.students; 
  array.sort((a, b) => (a[property] > b[property] ? 1 : -1));
  return array;
}


const students = {
  students: [
    { name: "ahaed", grade: 92 },
    { name: "rawand", grade: 84 },
    { name: "njlaa", grade: 88 },
    { name: "yamin", grade: 78 },
  ],
};

console.log(sortArrayByProperty(students, "grade"));

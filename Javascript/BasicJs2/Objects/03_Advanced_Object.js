//......................destructuring.....................

const Course={
CourserName:"Javascript",
CourseInsructuctor:"Hitesh Sir",
CoursePrice:1000
}
console.log(Course)

console.log(Course.CourseInsructuctor) //this is a very common way.

const {CourserName: cN} = Course //cN we can give a another name to CourseName means we deconstruct
console.log(cN)


//JSON-javascript object Notation.

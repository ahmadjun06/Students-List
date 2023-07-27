let studentsName = document.querySelector(".name");
let studentsSourName = document.querySelector(".sourname");

let btn = document.querySelector(".btn");

let studentsList = document.querySelector(".studentsList")

let studentsArray = []

btn.addEventListener("click", function (event) {
  let studentsNameValue = studentsName.value;
  let studentsSourNameValue = studentsSourName.value;
  let studentsString = `Имя ${studentsNameValue} Фамилия ${studentsSourNameValue}`

  studentsArray.push(studentsString)

  console.log(studentsArray)
  
  let innerHtmlWithStudents = ''

  studentsArray.forEach((item) => {
    innerHtmlWithStudents += `<div>${item}</div>`

  })

  studentsList.innerHTML = innerHtmlWithStudents
});

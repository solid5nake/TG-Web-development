const students = {
  "Willem": {math: 3, physics: 7, dutch: 7, english: 6},
  "Jan": {math: 7, physics: 5, dutch: 7, english: 6},
  "Kim Sing": {math: 10, physics: 8, dutch: 4, english: 5.5},  
  "Samantha": {math: 4, physics: 6, dutch: 8, english: 4.3},  
  "Joyce": {math: 5.5, physics: 9, dutch: 8.5, english: 5.5},  
  "Gareth": {math: 1, physics: 5.5, dutch: 4, english: 8}  
};

function studentGrades() {
  for (const [student, grades] of Object.entries(students)) {
    for (const [subject, grade] of Object.entries(grades)) {
      const table = document.getElementById(subject);
      const color = colorBackground(grade);
      table.innerHTML = table.innerHTML + `
      <tr class="insert">
        <td>${student}</td>
        <td onclick="editGrade(this, '${student}', '${subject}', ${grade})" class="${color}">${grade}</td>
      </tr>`;
    }
  }

  for (const [student, grades] of Object.entries(students)){
    const mathGrade = grades["math"];
    const physicsGrade = grades["physics"];
    const dutchGrade = grades["dutch"];
    const englishGrade = grades["english"];

    const languageGrade = (dutchGrade + englishGrade)/2;
    const betaGrade = (mathGrade + physicsGrade) / 2;
    const passClass = ((languageGrade + betaGrade) / 2) > 6.5;

    const colorLang = colorBackground(languageGrade);
    const colorBeta = colorBackground(betaGrade);
    const colorPass = passClass ? "green" : "red";

    const averageTable = document.getElementById("average");
    averageTable.innerHTML = averageTable.innerHTML + `
    <tr class="insert">
      <td>${student}</td>
      <td class="${colorLang}">${languageGrade}</td>
      <td class="${colorBeta}">${betaGrade}</td>
      <td class="${colorPass}">${passClass ? "Yes" : "No"}</td>
    </tr>`;
  }
}

function editGrade(cell, student, subject, grade){
  if (cell.children.length == 0) {
    cell.innerHTML = `<input type="number" value="${grade}" onblur="updateGrade(this, '${student}', '${subject}')"></input>`
  }
}

function updateGrade(input, student, subject) {
  let grade = input.value;
  grade = parseFloat(grade);
  students[student][subject] = grade;

  const rows = document.getElementsByClassName('insert');
  Array.from(rows).forEach(function(row) { row.remove() });
  studentGrades();
}


function colorBackground(grade) {
  if (grade < 5.5) {
    return "red";
  }
  else if (grade >= 7.5) {
    return "darkgreen";
  }
  else {
    return "green";
  }
}

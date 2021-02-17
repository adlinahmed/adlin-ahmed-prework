const studentNames = ['Adlin', 'Miso', 'Sara'];

for (let i = 0; i < 3; i++){
    const name = prompt('Enter a name');
    studentNames.push(name);
  }
  
  for (let i = 0; i < studentNames.length; i++){
    const name = studentNames[i];
    alert(name);
  }
console.log(studentNames); 
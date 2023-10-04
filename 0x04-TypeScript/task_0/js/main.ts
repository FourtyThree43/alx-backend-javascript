interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Kylian",
  lastName: "Mbappe",
  age: 24,
  location: "Paris",
};

const student2: Student = {
  firstName: "Erling",
  lastName: "Halland",
  age: 23,
  location: "Manchester",
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("studentTable");

const thead = document.createElement('thead');
const trh = document.createElement('tr');
const th1 = document.createElement('th');
const th2 = document.createElement('th');
const th3 = document.createElement('th');
const th4 = document.createElement('th');

th1.innerHTML = 'Firstname';
th2.innerHTML = 'Lastname';
th3.innerHTML = 'Age';
th4.innerHTML = 'Location';

trh.appendChild(th1);
trh.appendChild(th2);
trh.appendChild(th3);
trh.appendChild(th4);
thead.appendChild(trh);
table.appendChild(thead);

const tbody = document.createElement('tbody');

for (const student of studentsList) {
  const tr = document.createElement('tr');
  const td1 = document.createElement('td');
  const td2 = document.createElement('td');
  const td3 = document.createElement('td');
  const td4 = document.createElement('td');

  td1.innerHTML = student.firstName;
  td2.innerHTML = student.lastName;
  td3.innerHTML = student.age.toString();
  td4.innerHTML = student.location;

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tbody.appendChild(tr);
}

table.appendChild(tbody);

document.body.appendChild(table);

var student1 = {
    firstName: "Kylian",
    lastName: "Mbappe",
    age: 24,
    location: "Paris",
};
var student2 = {
    firstName: "Erling",
    lastName: "Halland",
    age: 23,
    location: "Manchester",
};
var studentsList = [student1, student2];
var table = document.createElement('table');
var thead = document.createElement('thead');
var trh = document.createElement('tr');
var th1 = document.createElement('th');
var th2 = document.createElement('th');
var th3 = document.createElement('th');
var th4 = document.createElement('th');
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
var tbody = document.createElement('tbody');
for (var _i = 0, studentsList_1 = studentsList; _i < studentsList_1.length; _i++) {
    var student = studentsList_1[_i];
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
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

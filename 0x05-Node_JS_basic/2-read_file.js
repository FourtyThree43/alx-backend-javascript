const fs = require('fs');

/**
 * 2-read_file.js
 * Counts the students in CSV data file.
 * @param {string} fPath - the path to the CSV data file.
 * @returns {undefined} - logs to the console the number of students in each field.
  */
const countStudents = (fPath) => {
  if (!fs.existsSync(fPath)) {
    throw Error('File not found');
  }
  if (!fs.statSync(fPath).isFile()) {
    throw Error('Path is not a file');
  }

  try {
    const data = fs.readFileSync(fPath, 'utf8').split('\n');
    let count = 0;
    const fields = {};

    for (const row of data) {
      if (row.length > 0) {
        count += 1;
        const student = row.split(',');
        if (!fields[student[3]]) {
          fields[student[3]] = [];
        }
        fields[student[3]].push(student[0]);
      }
    }

    console.log(`Number of students: ${count}`);
    for (const field in fields) {
      if (field) {
        const list = fields[field];
        console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
      }
    }
  } catch (err) {
    throw Error('Cannot load the database');
  }
};

module.exports = countStudents;

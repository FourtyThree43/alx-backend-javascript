const fs = require('fs');

/**
 * 2-read_file.js
 * Counts the students in CSV data file.
 * @param {string} fPath - the path to the CSV data file.
 * @returns {undefined} - logs to the console the number of students in each field.
  */
const countStudents = (fPath) => {
  // if (!fs.existsSync(fPath)) {
  //   throw Error('File not found');
  // }
  // if (!fs.statSync(fPath).isFile()) {
  //   throw Error('Path is not a file');
  // }
  try {
    const fileLines = fs
      .readFileSync(fPath, 'utf-8')
      .toString('utf-8')
      .trim()
      .split('\n');
    const studentGroups = {};
    const dbFieldNames = fileLines[0].split(',');
    const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

    for (const line of fileLines.slice(1)) {
      const studentRecord = line.split(',');
      const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
      const field = studentRecord[studentRecord.length - 1];
      if (!Object.keys(studentGroups).includes(field)) {
        studentGroups[field] = [];
      }
      const studentEntries = studentPropNames
        .map((propName, idx) => [propName, studentPropValues[idx]]);
      studentGroups[field].push(Object.fromEntries(studentEntries));
    }

    const totalStudents = Object
      .values(studentGroups)
      .reduce((pre, cur) => (pre || []).length + cur.length);
    console.log(`Number of students: ${totalStudents}`);
    for (const [field, group] of Object.entries(studentGroups)) {
      const studentNames = group.map((student) => student.firstname).join(', ');
      console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
    }
  } catch (err) {
    throw Error('Cannot load the database');
  }
};

module.exports = countStudents;

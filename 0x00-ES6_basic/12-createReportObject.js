// Write a function named createReportObject whose parameter, employeesList,
// is the return value of the previous function createEmployeesObject.

// export default function createReportObject(employeesList) {

// }

export default function createReportObject(employeesList) {
  const employeesObject = {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };

  return employeesObject;
}

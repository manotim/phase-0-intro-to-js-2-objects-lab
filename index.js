// Write your solution in this file!
const employee = {
    name: "Mike",
    streetAddress: "101 Nrb",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee}
    newEmployee[key] = value
    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    
    const myEmployee = Object.keys(employee).reduce((obj, k) => {
      if (k !== key) obj[k] = employee[k];
      return obj;
    }, {});
    
    return myEmployee;
  }

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
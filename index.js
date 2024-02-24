// Write your solution in this file!
const employee ={
    
    name: "Ari",
    streetAddress: "Aqari"
    };


function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
      ...obj,
      [key]: value,
    };
  }
  
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key]= value
    return (obj);   
}

destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Sam");
destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway");

function deleteFromEmployeeByKey(employee, key){
    
    return {
        ...employee[delete employee.key]
    };
}

function destructivelyDeleteFromEmployeeByKey(employee, name){
    delete employee.name
    return employee;
        
}



const { Employee } = require("./Employee.js")

class Manager extends Employee {
    constructor(name, title, salary, boss, employees){
       super(name, title, salary, boss)
       this.employees = employees;
    }
    totalSubsalary(){
        let subsalary = 0;
        employees.reduce((accum, ele) => {
            Employee.(ele.toLowercase())
        })
        
    }
    // bonus(multiplier){

    // }
}
const hobbes = new Manager("Hobbes", 1000000, "Founder", null, ["Calvin"]);
const calvin = new Manager("Calvin", 130000, "Director", "Hobbes", ["Susie"]);
const susie = new Manager("Susie", 100000, "TA Manager", "Calvin", ["Lily", "Clifford"]);
const lily = new Employee("Lily", 90000, "TA", "Susie");
const clifford = new Employee("Clifford", 90000, "TA", "Susie");

console.log(Employee)


// Name	    Salary	Title	    Boss
// Hobbes	1000000	Founder	    null
// Calvin	130000	Director	Hobbes
// Susie	100000	TA Manager	Calvin
// Lily	    90000	TA	Susie
// Clifford	90000	TA	Susie

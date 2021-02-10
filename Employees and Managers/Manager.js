const { Employee } = require("./Employee.js")

class Manager extends Employee {
    constructor(name, title, salary, boss, employees){
       super(name, title, salary, boss)
       this.employees = employees;
    }
    totalSubsalary(){
        let subsalary = 0;
        this.employees.forEach((ele) => {
           subsalary += ele.salary;
           if(ele.employees){
             subsalary +=  this.totalSubsalary(ele.employees);
           }
        })
        return subsalary;
    }
    // bonus(multiplier){

    // }
}
const lily = new Employee("Lily", 90000, "TA", "Susie");
const clifford = new Employee("Clifford", 90000, "TA", "Susie");
const susie = new Manager("Susie", 100000, "TA Manager", "Calvin", [lily, clifford]);
const calvin = new Manager("Calvin", 130000, "Director", "Hobbes", [susie]);
const hobbes = new Manager("Hobbes", 1000000, "Founder", null, [calvin]);

console.log(hobbes.totalSubsalary())


// Name	    Salary	Title	    Boss
// Hobbes	1000000	Founder	    null
// Calvin	130000	Director	Hobbes
// Susie	100000	TA Manager	Calvin
// Lily	    90000	TA	Susie
// Clifford	90000	TA	Susie

const Employee = require("./Employee.js")

class Manager extends Employee{
    constructor(name, title, salary, boss, employees){
       super(name, title, salary, boss)
       this.employees = employees;
    }
    totalSubsalary(){

        return
    }
    bonus(multiplier){

    }
}



// Name	Salary	Title	Boss
// Hobbes	1000000	Founder	null
// Calvin	130000	Director	Hobbes
// Susie	100000	TA Manager	Calvin
// Lily	90000	TA	Susie
// Clifford	90000	TA	Susie

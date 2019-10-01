var employee = /** @class */ (function () {
    function employee() {
        this.eid = 2002;
        this.ename = "Hemanth";
        this.edepartment = "It";
        this.esalary = 30000;
        this.epearment = true;
        this.eprojects = ["c", "java", "Angular"];
        this.edays = 200;
        this.edob = "31/12/1996";
        this.edateofbirth = {
            "return": this.edob
        };
    }
    employee.prototype.workingdays = function () {
        return this.edays;
    };
    return employee;
}());
var emp1 = new employee();
console.log(emp1.edateofbirth);
console.log(emp1.edepartment);
console.log(emp1.workingdays());
console.log(emp1.eprojects[0]);

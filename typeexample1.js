var student = /** @class */ (function () {
    function student() {
        this.sid = 10;
        this.fname = "hemanth";
        this.lname = "sai";
        this.per = 75;
    }
    student.prototype.getFirstName = function () {
        return this.fname;
    };
    student.prototype.getLastName = function () {
        return this.lname;
    };
    student.prototype.getFullName = function () {
        return this.fname + this.lname;
    };
    return student;
}());
var std = new student();
console.log(std.getFullName());

var student = /** @class */ (function () {
    function student() {
        this.sname = "Hemanth";
        this.smark1 = 89;
        this.smark2 = 99;
        this.smark3 = 95;
    }
    student.prototype.getName = function () {
        return this.sname;
    };
    student.prototype.setname = function () {
    };
    student.prototype.getTotalMarks = function () {
        return this.smark1 + this.smark2 + this.smark3;
    };
    student.prototype.getname1 = function (a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        return this.a + "/" + this.b + "/" + this.c;
    };
    return student;
}());
var std1 = new student();
console.log(std1.setname());
console.log(std1.getTotalMarks());
console.log(std1.getName());
console.log(std1.getname1(09, 09, 1996));

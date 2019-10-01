var vehicle = /** @class */ (function () {
    function vehicle() {
        this.vnum = 1234;
        this.vname = "BMW";
        this.vmileage = 78.9;
        this.vmodel = 2019;
        this.vspeed = {
            "return": this.vmileage
        };
    }
    return vehicle;
}());
var veh1 = new vehicle();
console.log(veh1.vspeed);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var maxGuest;
maxGuest = 20;
var guestsToAssign = Math.floor(Math.random() * maxGuest);
actividad(guestsToAssign);
console.log("\nAll done!");
function actividad(nu) {
    var activity; // Those were some nice type annotations you had here!
    var capacity; // It'd be a shame if we ... *erased* them! 😈
    var requiresSupplies;
    var x;
    if (nu != 0) {
        x = Math.floor(Math.random() * nu + 1);
        if (x <= Math.floor(nu * 0.3 / 0.8)) {
            activity = "balloon animals";
            capacity = 5;
            requiresSupplies = true;
        }
        else if (x <= Math.floor(nu * 0.2 / 0.8)) {
            activity = "dancing";
            capacity = 10;
            requiresSupplies = false;
        }
        else if (x <= Math.floor(nu * 0.5 / 0.8)) {
            activity = "juggling";
            capacity = 3;
            requiresSupplies = true;
        }
        else {
            activity = "face painting";
            capacity = 1;
            requiresSupplies = true;
        }
        if (nu - capacity >= 0) {
            console.log("".concat(nu, " of us will enjoy ").concat(activity, "."));
            console.log("\t".concat(capacity, " will enter the ").concat(activity, " activity."));
            nu -= capacity;
            actividad(nu);
        }
        else
            actividad(nu);
    }
    // return [activity, capacity, requiresSupplies];
}

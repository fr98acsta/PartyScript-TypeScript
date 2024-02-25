"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var maxGuest;
maxGuest = 20;
var guestsToAssign = Math.floor(Math.random() * maxGuest);
celebration(guestsToAssign);
console.log("\nAll done!");
function celebration(nu) {
    var party;
    var x;
    if (nu != 0) {
        x = Math.floor(Math.random() * nu + 1);
        if (x <= Math.floor(nu * 0.3 / 0.8)) {
            party = {
                activity: "balloon animals",
                capacity: 5,
                requiresSupplies: true,
            };
        }
        else if (x <= Math.floor(nu * 0.2 / 0.8)) {
            party = {
                activity: "dancing",
                capacity: 10,
                requiresSupplies: true,
            };
        }
        else if (x <= Math.floor(nu * 0.5 / 0.8)) {
            party = {
                activity: "juggling",
                capacity: 3,
                requiresSupplies: true,
            };
        }
        else {
            party = {
                activity: "face painting",
                capacity: 1,
                requiresSupplies: true,
            };
        }
        if (nu - party.capacity >= 0) {
            console.log("".concat(nu, " of us will enjoy ").concat(party.activity, "."));
            console.log("\t".concat(party.capacity, " will enter the ").concat(party.activity, " activity."));
            nu -= party.capacity;
            celebration(nu);
        }
        else
            celebration(nu);
    }
    // return [activity, capacity, requiresSupplies];
}

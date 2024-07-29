const Gun = require("./Gun");
const SemiAutoGun = require("./SemiAutoGun");
const Manufacturer = require("./Manufacturer");

let manufactorer = new Manufacturer("Glock GmbH", "Good gun", "Austria");
let glock17 = new SemiAutoGun("Glock 17", 20, manufactorer);
for (let i = 0; i < 10; i++) {
    glock17.shoot();
}
glock17.reload();
glock17.burst();
glock17.info();

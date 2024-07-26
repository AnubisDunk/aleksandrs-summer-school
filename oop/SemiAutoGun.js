const Gun = require("./Gun");
class SemiAutoGun extends Gun {
    burst() {
        console.log("Burst!");
        super.shoot();
        super.shoot();
        super.shoot();
    }
}
module.exports = SemiAutoGun;

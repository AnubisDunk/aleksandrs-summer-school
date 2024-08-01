const Manufacturer = require('./Manufacturer');
class Gun {
    constructor(name, ammo, manufacturer) {
        this.name = name;
        this.ammo = ammo;
        this.manufacturer = manufacturer;
        this.maxAmmo = ammo;
        this.isEmpty = this.ammo <= 0 ? true : false;
    }
    shoot() {
        if (this.isEmpty) {
            console.log('click..');
        } else {
            this.ammo--;
            if (this.ammo <= 0) this.isEmpty = true;
            console.log(`BANG!!!  ${this.ammo} rounds left`);
        }
    }
    info() {
        console.log(
            `${this.name} with ${this.ammo}/${this.maxAmmo} in magazine. Origin is ${this.manufacturer.title}`
        );
    }
    reload() {
        this.ammo = this.maxAmmo;
        console.log(`Reloaded! ${this.ammo} rounds left`);
    }
}
module.exports = Gun;

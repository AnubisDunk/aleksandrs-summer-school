class Manufacturer {
    constructor(title, discription, origin) {
        this.title = title;
        this.discription = discription;
        this.origin = origin;
    }
    info() {
        console.log(
            `This is ${this.title} ${this.discription} from: ${this.origin}`
        );
    }
}
module.exports = Manufacturer;

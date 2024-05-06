const Band = require("./band");

class BandList {
    constructor() {
        (this.bands = [new Band("Mago de oz"), new Band("Linking park"), new Band("Metallica")]), new Band("Bon Jovi");
    }

    addBand(name) {
        const newBand = new Band(name);

        this.bands.push(newBand);

        return this.bands;
    }

    removeBand(id) {
        this.bands = this.bands.filter((band) => band.id !== id);
    }

    getBands() {
        return this.bands;
    }

    getBandByName(name) {
        return this.bands.filter((band) => band.name.includes(name));
    }

    increaseVotes(id) {
        this.bands = this.bands.map((band) => {
            if (band.id === id) {
                band.votes += 1;
            }

            return band;
        });
    }

    changeBandName(id, newName) {
        this.bands = this.bands.map((band) => {
            if (band.id === id) {
                band.name = newName;
            }

            return band;
        });
    }
}

module.exports = BandList;

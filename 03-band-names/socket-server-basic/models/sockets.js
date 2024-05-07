const BandList = require("./band-list");

class Sockets {
    constructor(io) {
        this.io = io;
        this.bandList = new BandList();
        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on("connection", (socket) => {
            console.log("cliente conectado");

            // Emitir al cliente conectado todas las bandas actuales

            socket.emit("current-bands", this.bandList.getBands());

            socket.on("vote-band", (id) => {
                this.bandList.increaseVotes(id);
                this.io.emit("current-bands", this.bandList.getBands());
            });

            socket.on("delete-band", (id) => {
                this.bandList.removeBand(id);
                this.io.emit("current-bands", this.bandList.getBands());
            });

            socket.on("create-band", (name) => {
                this.bandList.addBand(name);
                this.io.emit("current-bands", this.bandList.getBands());
            });

            socket.on("change-band-name", ({ newName, id }) => {
                this.bandList.changeBandName(id, newName);
                this.io.emit("current-bands", this.bandList.getBands());
            });
        });
    }
}

module.exports = Sockets;

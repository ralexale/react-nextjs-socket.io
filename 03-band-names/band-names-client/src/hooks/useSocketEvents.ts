import React, { useEffect, useState } from "react";
// import { useSocket } from "./useSocket";

export const useSocketEvents = (socket) => {
    const [bandsList, setBands] = useState([]);

    const vote = (id) => {
        socket.emit("vote-band", id);
    };

    const deleteBand = (id) => {
        socket.emit("delete-band", id);
    };

    const createBand = (name) => {
        socket.emit("create-band", name);
    };

    const changeBandName = (newName, id) => {
        socket.emit("change-band-name", { newName, id });
    };

    useEffect(() => {
        socket.on("current-bands", (bands) => {
            setBands(bands);
        });
    }, [socket, bandsList]);

    return {
        vote,
        deleteBand,
        createBand,
        changeBandName,
        bandsList,
        setBands,
    };
};

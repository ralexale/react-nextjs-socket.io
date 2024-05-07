import { useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";

export const useSocket = (serverPath) => {
    const [online, setOnline] = useState(false);

    const socket = useMemo(() => io(serverPath), [serverPath]);

    // const socket = io("http://localhost:8080");

    useEffect(() => {
        setOnline(socket.connected);
    }, [socket]);

    useEffect(() => {
        socket.on("connect", () => {
            setOnline(true);
        });
    }, [socket]);

    useEffect(() => {
        socket.on("disconnect", () => {
            setOnline(false);
        });

        // return socket.disconnect()
    }, [socket]);

    return { socket, online };
};

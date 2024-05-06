import { useState } from "react";
import { BandAdd } from "./components/BandAdd";
import { BandList } from "./components/BandList";
import { io } from "socket.io-client";
import { useEffect } from "react";

const connectSocketServer = () => {
    // const socket = io.connect("http://localhost:8080", {
    //     transports: ["websocket"],
    // });

    const socket = io("http://localhost:8080");
    return socket;
};

function App() {
    const [socket] = useState(connectSocketServer());
    const [online, setOnline] = useState(false);
    const [bandsList, setBands] = useState([]);

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

    useEffect(() => {
        socket.on("current-bands", (bands) => {
            setBands(bands);
        });

        console.log(bandsList);

        // return socket.disconnect()
    }, [socket, bandsList]);
    return (
        <main className="min-h-svh p-5 flex flex-col gap-5 bg-gray-500 w-svw">
            <div className="container">
                <div>
                    Service status :{" "}
                    {online ? (
                        <span className="text-green-500">Online</span>
                    ) : (
                        <span className="text-red-500">Offline</span>
                    )}
                </div>
            </div>

            <h1 className="text-4xl">Band Names</h1>
            <hr />

            <section className="container flex gap-16">
                <div className="w-1/2">
                    <BandList data={bandsList} />
                </div>

                <div className="w-1/2">
                    <BandAdd />
                </div>
            </section>
        </main>
    );
}

export default App;

import { BandAdd } from "./components/BandAdd";
import { BandList } from "./components/BandList";

import { useSocket } from "./hooks/useSocket";

function App() {
    const { online } = useSocket();

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
                    <BandList />
                </div>

                <div className="w-1/2">
                    <BandAdd />
                </div>
            </section>
        </main>
    );
}

export default App;

import { useSocket } from "../hooks/useSocket";
import { useSocketEvents } from "../hooks/useSocketEvents";
export const BandAdd = () => {
    const { socket } = useSocket();
    const { createBand } = useSocketEvents(socket);

    const handleSubmit = (e) => {
        e.preventDefault();
        createBand(e.target[0].value);

        e.target.reset();
    };

    return (
        <div className="container">
            <h3 className="text-3xl">Agregar Banda</h3>

            <form onSubmit={handleSubmit} className="flex flex-col ">
                <input
                    className="mt-4 p-2 "
                    type="text"
                    name="bandName"
                    id="bandName"
                    placeholder="escribe el nombre de la banda a agregar"
                />
            </form>
        </div>
    );
};

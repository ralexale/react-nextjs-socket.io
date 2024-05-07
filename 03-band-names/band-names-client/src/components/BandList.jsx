import { useEffect, useState } from "react";
import { useSocketEvents } from "../hooks/useSocketEvents";
import { useSocket } from "../hooks/useSocket";
export const BandList = () => {
    const { socket } = useSocket("http://localhost:8080");

    const { vote, deleteBand, changeBandName, bandsList } = useSocketEvents(socket);

    const [bands, setBands] = useState(bandsList);

    useEffect(() => {
        setBands(bandsList);
    }, [bandsList]);

    const handleChangeName = (event, id) => {
        const newName = event.target.value;

        setBands((bands) =>
            bands.map((band) => {
                if (band.id === id) {
                    band.name = newName;
                }

                return band;
            })
        );
    };

    const onLostFocus = (id, newName) => {
        changeBandName(newName, id);
    };

    const createRows = () => {
        return bands?.map((band) => (
            <tr key={band.id}>
                <td>
                    <button onClick={() => vote(band.id)} className="bg-blue-500 rounded p-2">
                        +1
                    </button>
                </td>
                <td>
                    <input
                        type="text"
                        onBlur={() => onLostFocus(band.id, band.name)}
                        onChange={(e) => handleChangeName(e, band.id)}
                        value={band.name}
                    />
                </td>
                <td>
                    <span className="text-3xl font-bold">{band.votes}</span>
                </td>
                <td>
                    {" "}
                    <button onClick={() => deleteBand(band.id)} className="bg-red-500 rounded p-2">
                        Borrar
                    </button>
                </td>
            </tr>
        ));
    };

    return (
        <>
            <table className="table w-full">
                <thead className="border-b">
                    <tr>
                        <th>Nombre</th>
                        <th>Votos</th>
                        <th>Borrar</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>{createRows()}</tbody>
            </table>
        </>
    );
};

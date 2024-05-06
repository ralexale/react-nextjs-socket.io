import { useState } from "react";

export const BandList = ({ data }) => {
    const [bands, setBands] = useState(data);

    console.log(bands);

    const createRows = () => {
        return bands?.map((band) => (
            <tr key={band.id}>
                <td>
                    <button className="bg-blue-500 rounded p-2">+1</button>
                </td>
                <td>
                    <input type="text" />
                </td>
                <td>
                    <span className="text-3xl font-bold">15</span>
                </td>
                <td>
                    {" "}
                    <button className="bg-red-500 rounded p-2">Borrar</button>
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

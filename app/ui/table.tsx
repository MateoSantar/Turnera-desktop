export default function Table({
    data,
    columnNames,
}: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: Record<string, any>[]; // lista de objetos con claves dinámicas
    columnNames: string[];
}) {

    return (
        <table className="border-collapse border border-gray-400 w-full">
            <thead>
                <tr>
                    {columnNames.map((col) => (
                        <th key={col} className="border border-gray-400 p-2 bg-gray-100 text-black">
                            {col}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, i) => (
                    <tr key={i} className="hover:text-black hover:bg-white transition">
                        {columnNames.map((col) => (
                            <td key={col} className="border border-gray-400 p-2 ">
                                {row[col]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

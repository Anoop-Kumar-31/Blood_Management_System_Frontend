const bloodGroups = [
    { group: 'A+', donateTo: 'A+, AB+', receiveFrom: 'A+, A-, O+, O-' },
    { group: 'A-', donateTo: 'A+, A-, AB+, AB-', receiveFrom: 'A-, O-' },
    { group: 'B+', donateTo: 'B+, AB+', receiveFrom: 'B+, B-, O+, O-' },
    { group: 'B-', donateTo: 'B+, B-, AB+, AB-', receiveFrom: 'B-, O-' },
    { group: 'AB+', donateTo: 'AB+', receiveFrom: 'Everyone (Universal Recipient)' },
    { group: 'AB-', donateTo: 'AB+, AB-', receiveFrom: 'A-, B-, AB-, O-' },
    { group: 'O+', donateTo: 'O+, A+, B+, AB+', receiveFrom: 'O+, O-' },
    { group: 'O-', donateTo: 'Everyone (Universal Donor)', receiveFrom: 'O-' },
];

export default function BloodGroupTable() {
    return (
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
            <table className="w-full text-sm text-left">
                <thead>
                    <tr className="bg-gradient-to-r from-primary-700 to-primary-600 text-white">
                        <th className="px-5 py-3.5 font-semibold text-xs uppercase tracking-wider">Group</th>
                        <th className="px-5 py-3.5 font-semibold text-xs uppercase tracking-wider">Can Donate To</th>
                        <th className="px-5 py-3.5 font-semibold text-xs uppercase tracking-wider">Can Receive From</th>
                    </tr>
                </thead>
                <tbody>
                    {bloodGroups.map((bg, i) => (
                        <tr key={bg.group} className={`border-b border-gray-100 transition-colors duration-150 hover:bg-primary-50/40 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                            <td className="px-5 py-3">
                                <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary-100 text-primary-700 font-bold text-sm">
                                    {bg.group}
                                </span>
                            </td>
                            <td className="px-5 py-3 text-gray-600">{bg.donateTo}</td>
                            <td className="px-5 py-3 text-gray-600">{bg.receiveFrom}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

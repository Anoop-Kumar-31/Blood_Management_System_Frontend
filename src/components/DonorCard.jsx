import { BsEnvelope, BsTelephone, BsGeoAlt, BsCalendarEvent } from 'react-icons/bs';

export default function DonorCard({ donor, isExactMatch }) {
    const initials = donor.Name?.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();

    return (
        <div className={`group rounded-2xl border p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5
      ${isExactMatch
                ? 'border-primary-100 bg-gradient-to-br from-primary-50/80 to-white shadow-md shadow-primary-100/50'
                : 'border-gray-100 bg-white shadow-sm hover:border-primary-200'
            }`}>
            <div className="flex items-center gap-4 mb-4">
                {/* Avatar */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold shrink-0
          ${isExactMatch
                        ? 'bg-primary-600 text-white shadow-md shadow-primary-200'
                        : 'bg-gray-100 text-gray-600 group-hover:bg-primary-100 group-hover:text-primary-700'
                    } transition-colors duration-200`}>
                    {initials}
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-gray-900 truncate">{donor.Name}</h3>
                    <p className="text-xs text-gray-400">{donor.Address}</p>
                </div>
                <span className={`inline-flex items-center rounded-lg px-2.5 py-1 text-sm font-bold
          ${isExactMatch
                        ? 'bg-primary-600 text-white shadow-sm'
                        : 'bg-primary-50 text-primary-700 border border-primary-200'
                    }`}>
                    {donor.BloodGroup}
                </span>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm">
                <p className="text-gray-500 flex items-center gap-1.5"><BsEnvelope className="text-gray-400" /> {donor.Username}</p>
                <p className="text-gray-500 flex items-center gap-1.5"><BsTelephone className="text-gray-400" /> {donor.PhoneNumber}</p>
                <p className="text-gray-500 flex items-center gap-1.5"><BsGeoAlt className="text-gray-400" /> {donor.Pincode}, {donor.State}</p>
                {donor.Age && <p className="text-gray-500 flex items-center gap-1.5"><BsCalendarEvent className="text-gray-400" /> {donor.Age} years</p>}
            </div>

            {donor.Availability && donor.Availability.length > 0 && (
                <div className="mt-3 pt-3 border-t border-gray-100 flex flex-wrap gap-1.5">
                    <span className="text-xs text-gray-400 mr-1">Available:</span>
                    {donor.Availability.map((a, i) => (
                        <span key={i} className="rounded-full bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-xs font-medium text-emerald-700">
                            {a.dayOfWeek}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}

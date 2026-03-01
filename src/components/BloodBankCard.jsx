import { useState } from 'react';
import {
    BsBank, BsHeartPulse, BsBuilding, BsDroplet,
    BsGeoAlt, BsClock, BsTelephone, BsPhone,
    BsEnvelope, BsGlobe, BsLifePreserver, BsPersonWorkspace, BsFileEarmarkText
} from 'react-icons/bs';

const categoryColors = {
    Government: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', icon: <BsBank /> },
    Charity: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', icon: <BsHeartPulse /> },
    Private: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200', icon: <BsBuilding /> },
    Other: { bg: 'bg-gray-50', text: 'text-gray-600', border: 'border-gray-200', icon: <BsDroplet /> },
};

function InfoRow({ icon, label, value, isLink }) {
    return (
        <div className="flex gap-2 items-center text-sm">
            {icon}
            <div className="min-w-0">
                <span className="text-gray-400 text-xs">{label}</span>
                {isLink ? (
                    <a href={value.startsWith('http') ? value : `tel:${value}`} target="_blank" rel="noreferrer"
                        className="block text-blue-600 hover:text-blue-700 truncate text-sm transition-colors">
                        {value}
                    </a>
                ) : (
                    <p className="text-gray-700 leading-snug">{value}</p>
                )}
            </div>
        </div>
    );
}

export default function BloodBankCard({ bank }) {
    const [expanded, setExpanded] = useState(false);
    const cat = categoryColors[bank.category] || categoryColors.Other;

    return (
        <div className="group rounded-2xl border border-gray-50 bg-white shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 overflow-hidden h-fit">
            {/* Header */}
            <div className="px-5 pt-5 pb-3">
                <div className="flex items-start justify-between gap-3 mb-1">
                    <h3 className="font-bold text-gray-900 text-base leading-snug group-hover:text-blue-700 transition-colors">{bank.name}</h3>
                    <span className={`shrink-0 inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold border ${cat.bg} ${cat.text} ${cat.border}`}>
                        {cat.icon} {bank.category}
                    </span>
                </div>
                <p className="text-xs text-gray-400">
                    {[bank.city, bank.district, bank.state].filter(Boolean).join(', ')}
                </p>
            </div>

            {/* Quick Info Badges */}
            <div className="px-5 pb-3 flex flex-wrap gap-1.5">
                {bank.pincode && bank.pincode !== 'NA' && (
                    <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600 flex items-center gap-1"><BsGeoAlt /> {bank.pincode}</span>
                )}
                {bank.serviceTime && bank.serviceTime !== 'NA' && (
                    <span className="rounded-full bg-amber-50 border border-amber-200 px-2.5 py-0.5 text-xs font-medium text-amber-700 flex items-center gap-1"><BsClock /> {bank.serviceTime}</span>
                )}
                {bank.bloodComponentAvailable && (
                    <span className="rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-xs font-medium text-emerald-700 flex items-center gap-1"><BsDroplet /> Components</span>
                )}
                {bank.apheresis && (
                    <span className="rounded-full bg-blue-50 border border-blue-200 px-2.5 py-0.5 text-xs font-medium text-blue-700 flex items-center gap-1"><BsHeartPulse /> Apheresis</span>
                )}
            </div>

            {/* Contact Grid */}
            <div className="px-5 pb-3 grid grid-cols-1 gap-2 border-t border-gray-50 pt-3">
                <InfoRow icon={<span className="shrink-0 text-center opacity-80 p-2 rounded-full bg-rose-100 text-rose-600 h-fit"><BsGeoAlt /></span>} label="Address" value={bank.address} />
                <InfoRow icon={<span className="shrink-0 text-center opacity-80 p-2 rounded-full bg-emerald-100 text-emerald-600 h-fit"><BsTelephone /></span>} label="Contact" value={bank.contactNo} isLink />
                <InfoRow icon={<span className="shrink-0 text-center opacity-80 p-2 rounded-full bg-violet-100 text-violet-600 h-fit"><BsPhone /></span>} label="Mobile" value={bank.mobile} isLink />
            </div>

            {/* Expandable Details */}
            {expanded && (
                <div className="px-5 pb-3 grid grid-cols-1 gap-2 border-t border-dashed border-gray-100 pt-3 animate-fade-in-up">
                    <InfoRow icon={<span className="shrink-0 text-center opacity-80 p-2 rounded-full bg-blue-100 text-blue-600 h-fit"><BsEnvelope /></span>} label="Email" value={bank.email} />
                    <InfoRow icon={<span className="shrink-0 text-center opacity-80 p-2 rounded-full bg-indigo-100 text-indigo-600 h-fit"><BsGlobe /></span>} label="Website" value={bank.website} isLink />
                    <InfoRow icon={<span className="shrink-0 text-center opacity-80 p-2 rounded-full bg-amber-100 text-amber-600 h-fit"><BsLifePreserver /></span>} label="Helpline" value={bank.helpline} isLink />
                    <InfoRow icon={<span className="shrink-0 text-center opacity-80 p-2 rounded-full bg-teal-100 text-teal-600 h-fit"><BsPersonWorkspace /></span>} label="Nodal Officer" value={bank.nodalOfficer} />
                    <InfoRow icon={<span className="shrink-0 text-center opacity-80 p-2 rounded-full bg-gray-100 text-gray-600 h-fit"><BsFileEarmarkText /></span>} label="License" value={bank.licenseNo} />
                </div>
            )}

            {/* Toggle */}
            <button
                onClick={() => setExpanded(!expanded)}
                className="w-full py-2.5 text-xs font-semibold text-gray-400 hover:text-blue-600 hover:bg-blue-50/50 border-t border-gray-100 transition-all"
            >
                {expanded ? '▲ Show Less' : '▼ Show More Details'}
            </button>
        </div>
    );
}

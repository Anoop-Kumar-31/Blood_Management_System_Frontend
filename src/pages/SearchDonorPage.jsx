import { useState } from 'react';
import { fetchDonors } from '../api/donor.api';
import EmailVerification from '../components/EmailVerification';
import DonorCard from '../components/DonorCard';
import { BsShieldLockFill } from 'react-icons/bs';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';

export default function SearchDonorPage() {
    const [verified, setVerified] = useState(false);
    const [email, setEmail] = useState('');

    const [searchLoading, setSearchLoading] = useState(false);
    const [searchError, setSearchError] = useState('');
    const [donors, setDonors] = useState([]);
    const [searched, setSearched] = useState(false);
    const [searchPin, setSearchPin] = useState('');
    const [searchState, setSearchState] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        setSearchLoading(true);
        setSearchError('');
        const fd = new FormData(e.target);
        const values = Object.fromEntries(fd.entries());
        setSearchState(values.state);
        setSearchPin(values.pincode);

        try {
            const data = await fetchDonors(values.pincode, values.bloodgroup, values.state);
            setDonors(data);
            setSearched(true);
        } catch (err) {
            setSearchError(err.data?.error || 'Failed to search donors');
        } finally {
            setSearchLoading(false);
        }
    };

    const exactMatches = donors.filter(d => String(d.Pincode) === String(searchPin));
    const recommendations = donors.filter(d => String(d.Pincode) !== String(searchPin));

    return (
        <div className="min-h-screen bg-linear-to-br from-primary-50 via-white to-rose-50 py-14 px-6">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8 animate-fade-in-up">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Find Blood Donors</h1>
                    <p className="text-gray-500">Search for compatible donors near your location</p>
                </div>

                {!verified ? (
                    <EmailVerification
                        title="Verify Your Email"
                        subtitle="Quick verification to access our donor database"
                        onVerified={(verifiedEmail) => { setEmail(verifiedEmail); setVerified(true); }}
                    />
                ) : (
                    <>
                        {/* Search Form */}
                        <form onSubmit={handleSearch} className="glass-card rounded-2xl shadow-xl p-8 max-w-lg mx-auto mb-10 animate-fade-in-up">
                            {/* Step indicator */}
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm font-bold">✓</div>
                                <div className="h-0.5 flex-1 bg-primary-400 rounded" />
                                <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center text-sm font-bold shadow-md shadow-primary-200">2</div>
                            </div>

                            <div className="flex items-center gap-2 mb-5 text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-2.5">
                                <BsShieldLockFill className="text-primary-600 text-lg" />
                                Verified: <span className="font-semibold">{email}</span>
                            </div>

                            {searchError && (
                                <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm">{searchError}</div>
                            )}

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Blood Group</label>
                                    <select name="bloodgroup" required className="input-field">
                                        {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(bg => (
                                            <option key={bg} value={bg}>{bg}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1.5">State</label>
                                    <input name="state" type="text" placeholder="Uttar Pradesh" required className="input-field" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1.5 col-span-2">Pincode</label>
                                    <input name="pincode" type="number" placeholder="160008" required className="input-field" />
                                </div>
                            </div>

                            <button type="submit" disabled={searchLoading} className="btn-primary w-full">
                                {searchLoading ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <AiOutlineLoading3Quarters className="animate-spin text-lg" />
                                        Searching...
                                    </span>
                                ) : (
                                    <span className="flex items-center justify-center gap-2"><BsSearch /> Search Donors</span>
                                )}
                            </button>
                        </form>

                        {/* Results */}
                        {searched && (
                            <div className="space-y-8 animate-fade-in-up">
                                {donors.length === 0 ? (
                                    <div className="text-center py-16">
                                        <div className="text-5xl mb-4">😔</div>
                                        <p className="text-xl font-semibold text-gray-400">No donors found</p>
                                        <p className="text-gray-400 mt-1">Try a different pincode or blood group</p>
                                    </div>
                                ) : (
                                    <>
                                        {/* Summary bar */}
                                        <div className="bg-white rounded-xl border border-gray-100 shadow-sm px-5 py-3 flex items-center justify-between text-sm">
                                            <p className="text-gray-600">
                                                Found <span className="font-bold text-gray-900">{donors.length}</span> donor{donors.length > 1 ? 's' : ''}
                                            </p>
                                            <div className="flex items-center gap-2">
                                                {exactMatches.length > 0 && <span className="px-2 py-0.5 bg-primary-50 text-primary-700 rounded-full text-xs font-medium">{exactMatches.length} exact</span>}
                                                {recommendations.length > 0 && <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">{recommendations.length} nearby</span>}
                                            </div>
                                        </div>

                                        {exactMatches.length > 0 && (
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                                    <span className="w-2 h-2 rounded-full bg-primary-500" />
                                                    Exact Matches
                                                </h3>
                                                <div className="grid gap-4">
                                                    {exactMatches.map(d => <DonorCard key={d.uuid || d._id} donor={d} isExactMatch />)}
                                                </div>
                                            </div>
                                        )}

                                        {recommendations.length > 0 && (
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                                    <span className="w-2 h-2 rounded-full bg-gray-400" />
                                                    Nearby Recommendations
                                                </h3>
                                                <div className="grid gap-4">
                                                    {recommendations.map(d => <DonorCard key={d.uuid || d._id} donor={d} />)}
                                                </div>
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

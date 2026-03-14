import { useState, useMemo } from 'react';
import { searchBloodBanks } from '../api/blood-bank.api';
import BloodBankCard from '../components/BloodBankCard';
import { BsBank, BsSearch } from 'react-icons/bs';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

const INDIAN_STATES = [
    'Andaman And Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam',
    'Bihar', 'Chandigarh', 'Chhattisgarh', 'Delhi', 'Goa', 'Gujarat',
    'Haryana', 'Himachal Pradesh', 'Jammu And Kashmir', 'Jharkhand', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
    'Nagaland', 'Odisha', 'Puducherry', 'Punjab', 'Rajasthan', 'Sikkim',
    'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
];

const CATEGORIES = ['All', 'Government', 'Charity', 'Private', 'Other'];
const PER_PAGE = 12;

export default function FindBloodBankPage() {
    const [allResults, setAllResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [searched, setSearched] = useState(false);

    // Filters
    const [filterPin, setFilterPin] = useState('');
    const [filterCity, setFilterCity] = useState('');
    const [filterCategory, setFilterCategory] = useState('All');
    const [page, setPage] = useState(1);

    // Get unique cities from results for the city dropdown
    const cities = useMemo(() => {
        const set = new Set(allResults.map(b => b.city).filter(Boolean));
        return [...set].sort();
    }, [allResults]);

    // Category breakdown
    const categoryCounts = useMemo(() => {
        const counts = { All: allResults.length, Government: 0, Charity: 0, Private: 0, Other: 0 };
        allResults.forEach(b => { counts[b.category] = (counts[b.category] || 0) + 1; });
        return counts;
    }, [allResults]);

    // Apply all filters
    const refinedResults = useMemo(() => {
        return allResults.filter(b => {
            if (filterPin && !b.pincode.startsWith(filterPin)) return false;
            if (filterCity && b.city !== filterCity) return false;
            if (filterCategory !== 'All' && b.category !== filterCategory) return false;
            return true;
        });
    }, [allResults, filterPin, filterCity, filterCategory]);

    const totalPages = Math.ceil(refinedResults.length / PER_PAGE);
    const pageResults = refinedResults.slice((page - 1) * PER_PAGE, page * PER_PAGE);

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        resetFilters();

        const state = new FormData(e.target).get('state');
        try {
            const res = await searchBloodBanks(state);
            setAllResults(res.data || []);
            setSearched(true);
        } catch (err) {
            setError(err.data?.error || 'Search failed');
        } finally {
            setLoading(false);
        }
    };

    const resetFilters = () => {
        setFilterPin('');
        setFilterCity('');
        setFilterCategory('All');
        setPage(1);
    };

    const hasActiveFilters = filterPin || filterCity || filterCategory !== 'All';

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-14 px-6">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 bg-green-100/80 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-3">
                        <span className="flex items-center gap-1.5"><BsBank className="text-emerald-500" /> Government-verified directory</span> &middot; Last synced 01/03/2026 &middot; Source: data.gov.in
                    </div>
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Find Blood Banks</h1>
                    <p className="text-gray-500">Search across 2,800+ verified blood banks in India</p>
                </div>

                {/* Search Form */}
                <form onSubmit={handleSearch} className="glass-card rounded-2xl shadow-xl p-8 max-w-xl mx-auto mb-10 animate-fade-in-up delay-100">
                    {error && (
                        <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm">{error}</div>
                    )}
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Select State</label>
                        <select name="state" className="input-field">
                            <option value="">All States</option>
                            {INDIAN_STATES.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                    </div>
                    <button type="submit" disabled={loading} className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-lg shadow-blue-200 hover:bg-blue-700 disabled:opacity-50 transition-all">
                        {loading ? (
                            <span className="flex items-center justify-center gap-2">
                                <AiOutlineLoading3Quarters className="animate-spin text-lg" />
                                Searching...
                            </span>
                        ) : (
                            <span className="flex items-center justify-center gap-2"><BsSearch /> Search Blood Banks</span>
                        )}
                    </button>
                </form>

                {/* Results */}
                {searched && (
                    <div className="space-y-5 animate-fade-in-up">

                        {/* Category Tabs */}
                        <div className="flex flex-wrap gap-2 justify-center">
                            {CATEGORIES.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => { setFilterCategory(cat); setPage(1); }}
                                    className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all
                                        ${filterCategory === cat
                                            ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-200'
                                            : 'bg-white text-gray-500 border-gray-200 hover:border-blue-300 hover:text-blue-600'
                                        }`}
                                >
                                    {cat} <span className="opacity-70">({categoryCounts[cat] || 0})</span>
                                </button>
                            ))}
                        </div>

                        {/* Filters Bar */}
                        <div className="bg-white rounded-xl border border-gray-100 shadow-sm px-5 py-3">
                            <div className="flex flex-wrap items-center gap-3">
                                {/* Counts */}
                                <div className="flex items-center gap-2 mr-auto">
                                    <p className="text-sm text-gray-500">
                                        Showing <span className="font-bold text-gray-900">{refinedResults.length}</span>
                                        {hasActiveFilters && <span> of <span className="font-bold">{allResults.length}</span></span>}
                                    </p>
                                    {totalPages > 1 && (
                                        <span className="text-gray-300">|</span>
                                    )}
                                    {totalPages > 1 && (
                                        <p className="text-xs text-gray-400">Page {page}/{totalPages}</p>
                                    )}
                                </div>

                                {/* City */}
                                {cities.length > 1 && (
                                    <select
                                        value={filterCity}
                                        onChange={(e) => { setFilterCity(e.target.value); setPage(1); }}
                                        className="px-3 py-1.5 rounded-lg border border-gray-200 text-sm bg-white focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 outline-none transition-all"
                                    >
                                        <option value="">All Cities ({cities.length})</option>
                                        {cities.map(c => <option key={c} value={c}>{c}</option>)}
                                    </select>
                                )}

                                {/* Pincode */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={filterPin}
                                        onChange={(e) => { setFilterPin(e.target.value); setPage(1); }}
                                        placeholder="Pincode..."
                                        className="px-3 py-1.5 rounded-lg border border-gray-200 text-sm w-32 focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 outline-none transition-all"
                                    />
                                    {filterPin && (
                                        <button onClick={() => { setFilterPin(''); setPage(1); }}
                                            className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-red-500">✕</button>
                                    )}
                                </div>

                                {/* Clear */}
                                {hasActiveFilters && (
                                    <button onClick={resetFilters} className="text-xs text-red-400 hover:text-red-600 font-medium transition-colors">
                                        Clear all
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Cards Grid */}
                        {pageResults.length === 0 ? (
                            <div className="text-center py-16">
                                <div className="text-5xl mb-4 text-gray-300 flex justify-center"><HiOutlineBuildingOffice2 /></div>
                                <p className="text-xl font-semibold text-gray-400">{hasActiveFilters ? 'No matches for these filters' : 'No blood banks found'}</p>
                                <p className="text-gray-400 mt-1">{hasActiveFilters ? 'Try adjusting your filters' : 'Try a different state'}</p>
                                {hasActiveFilters && (
                                    <button onClick={resetFilters} className="mt-4 text-sm text-blue-600 hover:text-blue-700 font-semibold">
                                        Clear all filters
                                    </button>
                                )}
                            </div>
                        ) : (
                            <div className="grid gap-5 sm:grid-cols-2">
                                {pageResults.map((bank, i) => (
                                    <BloodBankCard key={bank._id || `${bank.pincode}-${bank.name}-${i}`} bank={bank} />
                                ))}
                            </div>
                        )}

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex justify-center items-center gap-3 pt-4">
                                <button
                                    onClick={() => setPage(1)} disabled={page <= 1}
                                    className="px-3 py-2 rounded-lg bg-gray-100 text-gray-500 text-xs font-medium disabled:opacity-30 hover:bg-gray-200 transition-colors"
                                >⟨⟨</button>
                                <button
                                    onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page <= 1}
                                    className="px-4 py-2 rounded-lg bg-gray-100 text-gray-600 text-sm font-medium disabled:opacity-30 hover:bg-gray-200 transition-colors"
                                >← Prev</button>
                                <span className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-50 rounded-lg">{page} / {totalPages}</span>
                                <button
                                    onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page >= totalPages}
                                    className="px-4 py-2 rounded-lg bg-gray-100 text-gray-600 text-sm font-medium disabled:opacity-30 hover:bg-gray-200 transition-colors"
                                >Next →</button>
                                <button
                                    onClick={() => setPage(totalPages)} disabled={page >= totalPages}
                                    className="px-3 py-2 rounded-lg bg-gray-100 text-gray-500 text-xs font-medium disabled:opacity-30 hover:bg-gray-200 transition-colors"
                                >⟩⟩</button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

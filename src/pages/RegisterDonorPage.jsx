import { useState } from 'react';
import { registerDonor } from '../api/donor.api';
import EmailVerification from '../components/EmailVerification';
import { BsShieldLockFill } from 'react-icons/bs';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default function RegisterDonorPage() {
    const [verified, setVerified] = useState(false);
    const [email, setEmail] = useState('');
    const [formLoading, setFormLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [formError, setFormError] = useState('');
    const [selectedDays, setSelectedDays] = useState([]);

    const toggleDay = (day) => {
        setSelectedDays(prev =>
            prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
        );
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setFormLoading(true);
        setFormError('');
        const fd = new FormData(e.target);
        const values = Object.fromEntries(fd.entries());

        try {
            await registerDonor({
                name: values.name,
                bloodtype: values.bloodgroup,
                pin: values.pincode,
                phone: values.phone,
                email,
                address: `${values.city}, ${values.state}`,
                state: values.state,
                age: values.age,
                gender: values.gender || '',
                availability: selectedDays.join(';'),
            });
            setSuccess(true);
        } catch (err) {
            setFormError(err.data?.message || 'Registration failed');
        } finally {
            setFormLoading(false);
        }
    };

    if (success) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-emerald-50 to-white px-6">
                <div className="text-center space-y-5 animate-fade-in-up">
                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-4xl">🎉</div>
                    <h2 className="text-3xl font-bold text-gray-900">Registration Successful!</h2>
                    <p className="text-gray-500 max-w-sm mx-auto">Thank you for becoming a blood donor. You are now part of the HeartBeat lifesaving network.</p>
                    <a href="/" className="btn-primary inline-flex mt-2">Back to Home</a>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-primary-50 via-white to-rose-50 py-14 px-6">
            <div className="max-w-xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8 animate-fade-in-up">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Register as Donor</h1>
                    <p className="text-gray-500">Help save lives by signing up as a blood donor</p>
                </div>

                {!verified ? (
                    <EmailVerification
                        title="Verify Your Email"
                        subtitle="Quick verification to keep our platform secure"
                        onVerified={(verifiedEmail) => { setEmail(verifiedEmail); setVerified(true); }}
                    />
                ) : (
                    <form onSubmit={handleRegister} className="glass-card rounded-2xl shadow-xl p-8 space-y-5 animate-fade-in-up">
                        {/* Step indicator */}
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm font-bold">✓</div>
                            <div className="h-0.5 flex-1 bg-primary-400 rounded" />
                            <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center text-sm font-bold shadow-md shadow-primary-200">2</div>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-2.5">
                            <BsShieldLockFill className="text-primary-600 text-lg" />
                            Email verified: <span className="font-semibold">{email}</span>
                        </div>

                        {formError && (
                            <div className="p-3 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm">{formError}</div>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                                <input name="name" type="text" placeholder="Anoop Kumar" required className="input-field" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
                                <input name="phone" type="tel" placeholder="9876543210" required className="input-field" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Age</label>
                                <input name="age" type="number" placeholder="28" min="18" required className="input-field" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Gender</label>
                                <select name="gender" className="input-field">
                                    <option value="">Select</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Blood Group</label>
                                <select name="bloodgroup" required className="input-field">
                                    {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(bg => (
                                        <option key={bg} value={bg}>{bg}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Pincode</label>
                                <input name="pincode" type="number" placeholder="160008" required className="input-field" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">City</label>
                                <input name="city" type="text" placeholder="Chandigarh" required className="input-field" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">State</label>
                                <input name="state" type="text" placeholder="Punjab" required className="input-field" />
                            </div>
                        </div>

                        {/* Day Selector */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Available Days</label>
                            <div className="flex flex-wrap gap-2">
                                {DAYS.map(day => (
                                    <button
                                        key={day}
                                        type="button"
                                        onClick={() => toggleDay(day)}
                                        className={`px-3.5 py-1.5 rounded-full text-sm font-medium border transition-all duration-200
                      ${selectedDays.includes(day)
                                                ? 'bg-primary-600 text-white border-primary-600 shadow-sm shadow-primary-200'
                                                : 'bg-white text-gray-500 border-gray-200 hover:border-primary-300 hover:text-primary-600'
                                            }`}
                                    >
                                        {day.slice(0, 3)}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button type="submit" disabled={formLoading} className="btn-primary w-full">
                            {formLoading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <AiOutlineLoading3Quarters className="animate-spin text-lg" />
                                    Registering...
                                </span>
                            ) : 'Register as Donor →'}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}

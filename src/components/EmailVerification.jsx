import { useState } from 'react';
import { sendOtp, verifyOtp } from '../api/auth.api';
import { BsShieldLockFill } from 'react-icons/bs';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export default function EmailVerification({ onVerified, title, subtitle }) {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSendOtp = async () => {
        if (!email) return;
        setLoading(true);
        setError('');
        try {
            await sendOtp(email);
            setOtpSent(true);
        } catch (err) {
            setError(err.data?.error || 'Failed to send OTP');
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            await verifyOtp(email, otp);
            onVerified(email);
        } catch (err) {
            setError(err.data?.error || 'Failed to verify OTP');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="glass-card rounded-2xl shadow-xl p-8 max-w-md mx-auto animate-fade-in-up">
            {/* Step indicator */}
            <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center text-sm font-bold shadow-md shadow-primary-200">1</div>
                <div className="h-0.5 flex-1 bg-gray-200 rounded" />
                <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center text-sm font-bold">2</div>
            </div>

            <h2 className="text-xl font-bold text-gray-900 mb-1">{title || 'Verify Your Email'}</h2>
            <p className="text-sm text-gray-500 mb-6">{subtitle || 'We need to verify your email before proceeding'}</p>

            {error && (
                <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm flex items-center gap-2">
                    <BsShieldLockFill className="text-primary-600 text-lg" />
                    {error}
                </div>
            )}

            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email address</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="input-field"
                        required
                    />
                </div>

                {otpSent ? (
                    <form onSubmit={handleVerifyOtp} className="animate-fade-in-up">
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Enter OTP</label>
                        <p className="text-xs text-gray-400 mb-2">Check your inbox for a 4-digit code</p>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                placeholder="••••"
                                maxLength={4}
                                className="input-field text-center text-2xl font-bold tracking-[1em] font-mono"
                                required
                            />
                            <button type="submit" disabled={loading} className="btn-primary whitespace-nowrap text-sm">
                                {loading ? (
                                    <span className="flex items-center gap-2">
                                        <AiOutlineLoading3Quarters className="animate-spin text-lg" />
                                        Verifying
                                    </span>
                                ) : 'Verify'}
                            </button>
                        </div>
                    </form>
                ) : (
                    <button
                        onClick={handleSendOtp}
                        disabled={loading || !email}
                        className="btn-primary w-full text-sm"
                    >
                        {loading ? (
                            <span className="flex items-center justify-center gap-2">
                                <AiOutlineLoading3Quarters className="animate-spin text-lg" />
                                Sending OTP...
                            </span>
                        ) : 'Send OTP →'}
                    </button>
                )}
            </div>
        </div>
    );
}

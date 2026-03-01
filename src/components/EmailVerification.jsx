import { useState } from 'react';
import { sendOtp, verifyOtp } from '../api/auth.api';

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
                    <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" /></svg>
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
                                placeholder="• • • •"
                                maxLength={4}
                                className="input-field text-center text-lg tracking-[0.5em] font-mono"
                                required
                            />
                            <button type="submit" disabled={loading} className="btn-primary whitespace-nowrap text-sm">
                                {loading ? (
                                    <span className="flex items-center gap-2">
                                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
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
                                <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                                Sending OTP...
                            </span>
                        ) : 'Send OTP →'}
                    </button>
                )}
            </div>
        </div>
    );
}

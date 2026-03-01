import { Link } from 'react-router-dom';
import BloodGroupTable from '../components/BloodGroupTable';

const stats = [
    { value: '2,800+', label: 'Real Blood Banks' },
    { value: '8', label: 'Blood Groups Covered' },
    { value: '24/7', label: 'Platform Access' },
    { value: '100%', label: 'Free Service' },
];

const features = [
    { icon: '🔍', title: 'Find Donors Fast', desc: 'Instantly search for compatible blood donors near your pincode in seconds.' },
    { icon: '🛡️', title: 'Verified & Secure', desc: 'Email OTP verification ensures every donor and seeker is authentic.' },
    { icon: '📱', title: 'Easy Registration', desc: 'Simple two-step registration — verify your email and fill in your details.' },
    { icon: '📍', title: 'Location-Based', desc: 'Smart pincode matching finds donors in your exact area and nearby regions.' },
];

export default function HomePage() {
    return (
        <div className="min-h-screen">
            {/* ========== HERO SECTION ========== */}
            <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-rose-50">
                {/* Decorative blobs */}
                <div className="absolute top-20 -left-20 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-0 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl" />

                <div className="section-container relative py-20 lg:py-28 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    <div className="lg:w-1/2 space-y-7 animate-slide-in-left">
                        <div className="inline-flex items-center gap-2 bg-primary-100/80 text-primary-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
                            Real-time Blood Management System
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-extrabold leading-[1.1] text-gray-900">
                            Be the reason for someone's{' '}
                            <span className="gradient-text">heartbeat</span>
                        </h1>
                        <p className="text-lg text-gray-500 max-w-lg leading-relaxed">
                            We connect blood donors with those in need — a platform for heroes who want to make a difference through the noble act of blood donation.
                        </p>
                        <div className="flex flex-wrap gap-3 pt-1">
                            <Link to="/register" className="btn-primary">
                                Register as Donor →
                            </Link>
                            <Link to="/search" className="btn-secondary">
                                🔍 Search for Blood
                            </Link>
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative animate-slide-in-right">
                        <div className="relative">
                            <img
                                src="/assets/images/PicFront.jpg"
                                alt="Blood donation"
                                className="w-full max-w-lg mx-auto rounded-[2rem] shadow-2xl shadow-primary-200/40 border-4 border-white"
                            />
                            {/* Floating service card */}
                            <div className="absolute -bottom-6 -left-6 glass-card rounded-2xl shadow-xl p-4 animate-float">
                                <h4 className="font-bold text-gray-900 text-sm mb-2">Our Promise</h4>
                                <ul className="text-xs text-gray-600 space-y-1">
                                    <li className="flex items-center gap-1.5">✅ Fast & efficient</li>
                                    <li className="flex items-center gap-1.5">✅ Safe & secure</li>
                                    <li className="flex items-center gap-1.5">✅ Easy to use</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== STATS BAR ========== */}
            <section className="bg-gray-950 py-8">
                <div className="section-container grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((s) => (
                        <div key={s.label} className="text-center">
                            <p className="text-3xl font-extrabold text-white">{s.value}</p>
                            <p className="text-sm text-gray-400 mt-1">{s.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ========== DATA NOTICE ========== */}
            <section className="py-5 bg-gray-50 border-y border-gray-100">
                <div className="section-container">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
                        <div className="flex items-center gap-3">
                            <span className="shrink-0 w-10 h-10 rounded-full bg-green-200 flex items-center justify-center text-lg">🏛️</span>
                            <div>
                                <p className="text-sm font-semibold text-gray-800">
                                    Real Blood Bank directory powered by <span className="text-green-600 uppercase">real Government data</span>
                                </p>
                                <p className="text-xs text-gray-500">
                                    2,800+ Real Blood Banks sourced from India's <a href="https://data.gov.in" target="_blank" rel="noreferrer" className="underline hover:text-blue-600">data.gov.in</a> portal &middot; Donor registration & search are demo features for showcase purposes
                                </p>
                            </div>
                        </div>
                        <Link to="/blood-banks" className="shrink-0 text-xs font-semibold text-blue-600 hover:text-blue-700 bg-blue-100 px-3 py-1.5 rounded-full transition-colors">
                            Explore Real Blood Banks →
                        </Link>
                    </div>
                </div>
            </section>

            {/* ========== FEATURES ========== */}
            <section className="py-20 bg-white">
                <div className="section-container">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">Why Choose HeartBeat?</h2>
                    <p className="text-center text-gray-500 mb-12 max-w-md mx-auto">Everything you need to find or become a blood donor, all in one place</p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((f, i) => (
                            <div key={f.title} className={`group p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:border-primary-100 hover:-translate-y-1 transition-all duration-300 animate-fade-in-up delay-${(i + 1) * 100}`}>
                                <div className="text-3xl mb-4">{f.icon}</div>
                                <h3 className="font-semibold text-gray-900 mb-1.5">{f.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== HERO STORY ========== */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="section-container">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-14">Help Us Save Lives</h2>

                    <div className="grid md:grid-cols-2 gap-14 items-center">
                        <div className="space-y-5 animate-slide-in-left">
                            <h3 className="text-2xl font-bold gradient-text">Be Someone's HERO</h3>
                            <div className="w-12 h-1 bg-primary-400 rounded-full" />
                            <p className="text-gray-600 leading-relaxed">
                                Every year, millions of people need blood transfusions due to illness, surgery, or accidents. By registering as a blood donor, you have the power to make a difference and become a hero to someone in need.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                The process is simple, safe, and takes only a short amount of time. Your donation could save the life of a child, a parent, or a stranger who desperately needs it.
                            </p>
                            <Link to="/register" className="btn-primary inline-flex mt-2">Become a Donor</Link>
                        </div>
                        <div className="flex justify-center">
                            <img src="/assets/images/SuperHero.png" alt="Be a Hero" className="max-h-100 object-contain drop-shadow-2xl animate-float" />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-14 items-center mt-20">
                        <div className="flex justify-center order-2 md:order-1">
                            <img src="/assets/images/bloodDonor.png" alt="Blood Donor" className="max-h-100 object-contain" />
                        </div>
                        <div className="space-y-5 order-1 md:order-2 animate-slide-in-right">
                            <h3 className="text-2xl font-bold gradient-text">Help they need, you are indeed!</h3>
                            <div className="w-12 h-1 bg-primary-400 rounded-full" />
                            <p className="text-gray-600 leading-relaxed">
                                Many people in our communities need blood due to various medical conditions, injuries, and accidents. Your donation can bridge the gap between supply and demand.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Be the reason for someone's smile. Help save a life today.
                            </p>
                            <Link to="/search" className="btn-secondary inline-flex mt-2">Search for Blood</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== BLOOD GROUP TABLE ========== */}
            <section className="py-20 bg-white">
                <div className="section-container">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">Blood Group Compatibility</h2>
                    <p className="text-center text-gray-500 mb-10 max-w-lg mx-auto">
                        Understanding blood compatibility is crucial for safe transfusions
                    </p>
                    <div className="grid lg:grid-cols-5 gap-10 items-start">
                        <div className="lg:col-span-3">
                            <BloodGroupTable />
                        </div>
                        <div className="lg:col-span-2 space-y-4 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                            <h3 className="font-semibold text-gray-900">Eligibility Criteria</h3>
                            <ul className="space-y-3 text-sm text-gray-600">
                                {['Be in good health', 'Be at least 18 years old', 'Weigh above the minimum requirement', 'Pass screening for medical conditions'].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2.5">
                                        <span className="w-5 h-5 shrink-0 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-xs font-bold mt-0.5">{i + 1}</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="pt-3">
                                <Link to="/register" className="text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors">
                                    Start donating →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== CTA ========== */}
            <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-600">
                <div className="section-container text-center">
                    <h2 className="text-3xl font-bold text-white mb-3">Ready to Make a Difference?</h2>
                    <p className="text-primary-200 mb-8 max-w-md mx-auto">Every drop counts. Join thousands of donors and save lives today.</p>
                    <div className="flex flex-wrap justify-center gap-3">
                        <Link to="/register" className="px-8 py-3 rounded-xl bg-white text-primary-700 font-bold shadow-lg hover:bg-gray-50 transition-all">
                            Register Now
                        </Link>
                        <Link to="/search" className="px-8 py-3 rounded-xl border-2 border-white/30 text-white font-bold hover:bg-white/10 transition-all">
                            Find Donors
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

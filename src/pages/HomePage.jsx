import { Link } from 'react-router-dom';
import BloodGroupTable from '../components/BloodGroupTable';
import {
    BsSearch, BsShieldCheck, BsPhone, BsGeoAlt, BsArrowRight,
    BsCheckCircleFill, BsHeart, BsHeartPulse, BsClock, BsGift,
    BsEnvelopeCheck, BsPersonVcard, BsPeopleFill, BsDroplet,
    BsBank, BsStarFill, BsRocketTakeoff, BsMagic
} from 'react-icons/bs';
import {
    HiOutlineArrowRight
} from 'react-icons/hi';
import {
    FaHandHoldingHeart, FaHandsHelping, FaHospital
} from 'react-icons/fa';

const stats = [
    { value: '2,800+', label: 'Real Blood Banks', icon: <FaHospital className="text-primary-400" /> },
    { value: '8', label: 'Blood Groups Covered', icon: <BsDroplet className="text-primary-400" /> },
    { value: '24/7', label: 'Platform Access', icon: <BsClock className="text-primary-400" /> },
    { value: '100%', label: 'Free Service', icon: <BsGift className="text-primary-400" /> },
];

const features = [
    { icon: <BsSearch className="text-blue-600 text-xl" />, title: 'Find Donors Fast', desc: 'Instantly search for compatible blood donors near your pincode in seconds.', color: 'bg-blue-50 border-blue-100' },
    { icon: <BsShieldCheck className="text-emerald-600 text-xl" />, title: 'Verified & Secure', desc: 'Email OTP verification ensures every donor and seeker is authentic.', color: 'bg-emerald-50 border-emerald-100' },
    { icon: <BsPhone className="text-violet-600 text-xl" />, title: 'Easy Registration', desc: 'Simple two-step registration — verify your email and fill in your details.', color: 'bg-violet-50 border-violet-100' },
    { icon: <BsGeoAlt className="text-amber-600 text-xl" />, title: 'Location-Based', desc: 'Smart pincode matching finds donors in your exact area and nearby regions.', color: 'bg-amber-50 border-amber-100' },
];

const howItWorks = [
    { step: '01', title: 'Verify Email', desc: 'Quick OTP verification keeps the platform secure and spam-free.', icon: <BsEnvelopeCheck className="text-white text-xl" /> },
    { step: '02', title: 'Fill Your Details', desc: 'Share your blood group, location, and availability — takes under 2 minutes.', icon: <BsPersonVcard className="text-white text-xl" /> },
    { step: '03', title: 'Get Connected', desc: 'Seekers in your area can find you when they need blood urgently.', icon: <BsPeopleFill className="text-white text-xl" /> },
];

export default function HomePage() {
    return (
        <div className="min-h-screen">
            {/* ========== HERO SECTION ========== */}
            <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-rose-50">
                {/* Decorative blobs */}
                <div className="absolute top-20 -left-20 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-0 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-100/10 rounded-full blur-3xl" />

                <div className="section-container relative py-20 lg:py-28 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    <div className="lg:w-1/2 space-y-7 animate-slide-in-left">
                        <div className="inline-flex items-center gap-2 bg-primary-100/80 text-primary-700 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-primary-200/50">
                            <BsHeartPulse className="text-primary-500 animate-pulse" />
                            Real-time Blood Management System
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-extrabold leading-[1.1] text-gray-900 tracking-tight">
                            Be the reason{' '}
                            <br className="hidden sm:block" />
                            for someone's{' '}
                            <span className="gradient-text">heartbeat</span>
                        </h1>
                        <p className="text-lg text-gray-500 max-w-lg leading-relaxed">
                            We connect blood donors with those in need — a platform for heroes who want to make a difference through the noble act of blood donation.
                        </p>
                        <div className="flex flex-wrap gap-3 pt-1">
                            <Link to="/register" className="btn-primary flex items-center gap-2">
                                Register as Donor
                                <HiOutlineArrowRight className="text-lg" />
                            </Link>
                            <Link to="/search" className="btn-secondary flex items-center gap-2">
                                <BsSearch /> Search for Blood
                            </Link>
                        </div>

                        {/* Trust badges */}
                        <div className="flex items-center gap-4 pt-3 text-xs text-gray-400">
                            <span className="flex items-center gap-1.5">
                                <BsCheckCircleFill className="text-emerald-500" />
                                Verified donors
                            </span>
                            <span className="flex items-center gap-1.5">
                                <BsCheckCircleFill className="text-emerald-500" />
                                Govt. data sourced
                            </span>
                            <span className="flex items-center gap-1.5">
                                <BsCheckCircleFill className="text-emerald-500" />
                                100% free
                            </span>
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative animate-slide-in-right">
                        <div className="relative">
                            <img
                                src="/assets/images/PicFront01.png"
                                alt="Blood donation"
                                className="w-full max-w-lg mx-auto rounded-[2rem] shadow-2xl shadow-primary-200/40 border-4 border-white"
                            />
                            {/* Floating service card */}
                            <div className="absolute -bottom-6 -left-6 glass-card rounded-2xl shadow-xl p-4 animate-float">
                                <h4 className="font-bold text-gray-900 text-sm mb-2 flex items-center gap-1.5">
                                    <BsStarFill className="text-amber-400 text-xs" /> Our Promise
                                </h4>
                                <ul className="text-xs text-gray-600 space-y-1.5">
                                    <li className="flex items-center gap-1.5"><BsCheckCircleFill className="text-emerald-500 text-[10px]" /> Fast & efficient</li>
                                    <li className="flex items-center gap-1.5"><BsCheckCircleFill className="text-emerald-500 text-[10px]" /> Safe & secure</li>
                                    <li className="flex items-center gap-1.5"><BsCheckCircleFill className="text-emerald-500 text-[10px]" /> Easy to use</li>
                                </ul>
                            </div>
                            {/* Floating stats pill */}
                            <div className="absolute -top-3 -right-3 bg-white rounded-xl shadow-lg px-4 py-2.5 border border-gray-100 animate-float delay-300">
                                <p className="text-2xl font-extrabold text-primary-600">2,800+</p>
                                <p className="text-[10px] text-gray-400 font-medium flex items-center gap-1"><BsBank className="text-[8px]" /> Blood Banks</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== STATS BAR ========== */}
            <section className="bg-gray-950 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
                <div className="section-container py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((s, i) => (
                        <div key={s.label} className={`text-center animate-fade-in-up delay-${(i + 1) * 100}`}>
                            <div className="flex justify-center mb-2 text-xl">{s.icon}</div>
                            <p className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">{s.value}</p>
                            <p className="text-sm text-gray-500 mt-1">{s.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ========== DATA NOTICE ========== */}
            <section className="py-5 bg-emerald-50/50 border-y border-emerald-100/50">
                <div className="section-container">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
                        <div className="flex items-center gap-3">
                            <span className="shrink-0 w-10 h-10 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center">
                                <BsBank className="text-emerald-600 text-lg" />
                            </span>
                            <div>
                                <p className="text-sm font-semibold text-gray-800">
                                    Real Blood Bank directory powered by <span className="text-emerald-600 uppercase font-bold">real Government data</span>
                                </p>
                                <p className="text-xs text-gray-500">
                                    2,800+ Real Blood Banks sourced from India's <a href="https://data.gov.in" target="_blank" rel="noreferrer" className="underline decoration-dotted hover:text-blue-600 transition-colors">data.gov.in</a> portal &middot; Donor registration & search are demo features
                                </p>
                            </div>
                        </div>
                        <Link to="/blood-banks" className="shrink-0 text-xs font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-100 hover:bg-emerald-200 px-4 py-2 rounded-full transition-all duration-200 border border-emerald-200 flex items-center gap-1">
                            Explore Blood Banks <HiOutlineArrowRight />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ========== FEATURES ========== */}
            <section className="py-20 bg-white relative overflow-hidden">
                <div className="section-container relative">
                    <div className="text-center mb-14">
                        <span className="inline-flex items-center gap-1.5 bg-primary-50 text-primary-600 text-xs font-semibold px-3 py-1 rounded-full border border-primary-100 mb-4">
                            <BsMagic /> Why HeartBeat?
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 tracking-tight">Everything You Need, One Place</h2>
                        <p className="text-gray-500 max-w-md mx-auto">Find or become a blood donor with our simple, secure, and powerful platform</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((f, i) => (
                            <div key={f.title} className={`group p-6 rounded-2xl border ${f.color} hover:bg-white hover:shadow-xl hover:border-primary-100 hover:-translate-y-1 transition-all duration-300 animate-fade-in-up delay-${(i + 1) * 100}`}>
                                <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {f.icon}
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-1.5">{f.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== HOW IT WORKS ========== */}
            <section className="py-20 bg-gray-50 border-y border-gray-100">
                <div className="section-container">
                    <div className="text-center mb-14">
                        <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full border border-blue-100 mb-4">
                            <BsRocketTakeoff /> Simple Process
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 tracking-tight">How It Works</h2>
                        <p className="text-gray-500 max-w-md mx-auto">Become a registered donor in just 3 simple steps</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {howItWorks.map((step, i) => (
                            <div key={step.step} className={`relative text-center animate-fade-in-up delay-${(i + 1) * 100}`}>
                                {i < howItWorks.length - 1 && (
                                    <div className="hidden md:block absolute top-8 left-[62%] w-[80%] h-px bg-gradient-to-r from-primary-300 to-transparent" />
                                )}
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-500 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary-200">
                                    {step.icon}
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Link to="/register" className="btn-primary inline-flex items-center gap-2">
                            Start Registration <HiOutlineArrowRight className="text-lg" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ========== HERO STORY — BE A HERO ========== */}
            <section className="py-20 bg-white">
                <div className="section-container">
                    <div className="grid md:grid-cols-2 gap-14 items-center">
                        <div className="space-y-5 animate-slide-in-left">
                            <span className="inline-flex items-center gap-1.5 bg-primary-50 text-primary-600 text-xs font-semibold px-3 py-1 rounded-full border border-primary-100">
                                <FaHandHoldingHeart /> Make a Difference
                            </span>
                            <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                                Be Someone's <span className="gradient-text">HERO</span>
                            </h3>
                            <div className="w-12 h-1 bg-primary-400 rounded-full" />
                            <p className="text-gray-600 leading-relaxed">
                                Every year, millions of people need blood transfusions due to illness, surgery, or accidents. By registering as a blood donor, you have the power to make a difference and become a hero to someone in need.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                The process is simple, safe, and takes only a short amount of time. Your donation could save the life of a child, a parent, or a stranger who desperately needs it.
                            </p>
                            <Link to="/register" className="btn-primary inline-flex items-center gap-2 mt-2">
                                Become a Donor <HiOutlineArrowRight className="text-lg" />
                            </Link>
                        </div>
                        <div className="flex justify-center">
                            <img src="/assets/images/SuperHero.png" alt="Be a Hero" className="max-h-120 object-contain" />
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="my-20 flex items-center gap-4">
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                        <BsDroplet className="text-primary-300 text-xl" />
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-14 items-center">
                        <div className="flex justify-center order-2 md:order-1">
                            <img src="/assets/images/bloodDonor.png" alt="Blood Donor" className="max-h-100 object-contain" />
                        </div>
                        <div className="space-y-5 order-1 md:order-2 animate-slide-in-right">
                            <span className="inline-flex items-center gap-1.5 bg-rose-50 text-rose-600 text-xs font-semibold px-3 py-1 rounded-full border border-rose-100">
                                <FaHandsHelping /> Save Lives
                            </span>
                            <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                                Help They Need, <span className="gradient-text">You Are Indeed!</span>
                            </h3>
                            <div className="w-12 h-1 bg-primary-400 rounded-full" />
                            <p className="text-gray-600 leading-relaxed">
                                Many people in our communities need blood due to various medical conditions, injuries, and accidents. Your donation can bridge the gap between supply and demand.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Be the reason for someone's smile. Help save a life today.
                            </p>
                            <Link to="/search" className="btn-secondary inline-flex items-center gap-2 mt-2">
                                <BsSearch /> Search for Blood
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== BLOOD GROUP TABLE ========== */}
            <section className="py-20 bg-gray-50 border-y border-gray-100">
                <div className="section-container">
                    <div className="text-center mb-12">
                        <span className="inline-flex items-center gap-1.5 bg-primary-50 text-primary-600 text-xs font-semibold px-3 py-1 rounded-full border border-primary-100 mb-4">
                            <BsDroplet /> Blood Types
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 tracking-tight">Blood Group Compatibility</h2>
                        <p className="text-gray-500 max-w-lg mx-auto">
                            Understanding blood compatibility is crucial for safe transfusions
                        </p>
                    </div>
                    <div className="grid lg:grid-cols-5 gap-10 items-start">
                        <div className="lg:col-span-3">
                            <BloodGroupTable />
                        </div>
                        <div className="lg:col-span-2 bg-white rounded-2xl p-7 border border-gray-200 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-1">Eligibility Criteria</h3>
                            <p className="text-xs text-gray-400 mb-5">Make sure you meet these requirements before donating</p>
                            <ul className="space-y-4 text-sm text-gray-600">
                                {[
                                    { text: 'Be in good health', detail: 'No recent illness or infection' },
                                    { text: 'Be at least 18 years old', detail: 'Legal age requirement' },
                                    { text: 'Weigh above minimum requirement', detail: 'At least 50 kg / 110 lbs' },
                                    { text: 'Pass medical screening', detail: 'Quick health check before donation' },
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="w-7 h-7 shrink-0 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-xs font-bold mt-0.5 border border-primary-100">{i + 1}</span>
                                        <div>
                                            <p className="font-medium text-gray-800">{item.text}</p>
                                            <p className="text-xs text-gray-400 mt-0.5">{item.detail}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className="pt-5 mt-5 border-t border-gray-100">
                                <Link to="/register" className="text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors flex items-center gap-1.5">
                                    Start donating <HiOutlineArrowRight />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== CTA ========== */}
            <section className="py-20 bg-gradient-to-br from-primary-700 via-primary-600 to-rose-600 relative overflow-hidden">
                <div className="absolute top-10 left-10 w-40 h-40 bg-white/5 rounded-full" />
                <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/5 rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/3 rounded-full" />

                <div className="section-container text-center relative">
                    <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6 backdrop-blur-sm border border-white/10">
                        <BsHeart className="text-primary-200" /> Every Drop Counts
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">Ready to Make a Difference?</h2>
                    <p className="text-primary-100 mb-10 max-w-md mx-auto leading-relaxed">
                        Join thousands of selfless donors and save lives today. Your single donation can help up to 3 people.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/register" className="px-8 py-3.5 rounded-xl bg-white text-primary-700 font-bold shadow-xl hover:shadow-2xl hover:bg-gray-50 transition-all duration-200 flex items-center gap-2">
                            Register Now <HiOutlineArrowRight />
                        </Link>
                        <Link to="/search" className="px-8 py-3.5 rounded-xl border-2 border-white/30 text-white font-bold hover:bg-white/10 hover:border-white/50 transition-all duration-200 flex items-center gap-2">
                            <BsSearch /> Find Donors
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

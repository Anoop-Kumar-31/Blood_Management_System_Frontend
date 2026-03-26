import { BsLinkedin, BsGithub, BsInstagram, BsTelephone, BsEnvelope } from 'react-icons/bs';

const people = [
    {
        id: 1,
        name: 'Anoop Kumar',
        role: 'Full-Stack Developer',
        image: '/assets/images/people/AK.png',
        about: "Full-Stack Developer building scalable web applications with clean backend architecture and modern frontend technologies.",
        phone: '+91 798-534-5837',
        email: 'amt312002@gmail.com',
        social: {
            linkedin: 'https://www.linkedin.com/in/anoop--kumar/',
            github: 'https://github.com/Anoop-Kumar-31',
            instagram: 'https://www.instagram.com/anoopkumar_ak31/',
        },
        portfolio: 'https://myportfolio-kto7.onrender.com/',
    },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-linear-to-br from-primary-50 via-white to-rose-50 py-16 px-6">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-12 animate-fade-in-up">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-2">About HeartBeat</h1>
                    <p className="text-gray-500">Meet the developer behind this platform</p>
                </div>

                {people.map((person) => (
                    <div key={person.id} className="glass-card rounded-2xl shadow-xl overflow-hidden animate-fade-in-up delay-200">
                        {/* Cover gradient */}
                        <div className="h-35 bg-linear-to-br from-primary-700 to-primary-500 relative  flex justify-center items-center">
                            <div className="absolute md:-bottom-20 -bottom-15 md:left-8 w-35 h-fit">
                                <img
                                    src={person.image}
                                    alt={person.name}
                                    className="w-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="pt-16 sm:pt-20 p-6 sm:p-8 text-center sm:text-left">
                            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 mb-4">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900">{person.name}</h2>
                                    <p className="text-sm text-primary-600 font-medium">{person.role}</p>
                                </div>
                                <div className="flex gap-2 justify-center sm:justify-start">
                                    {[
                                        { icon: <BsLinkedin />, href: person.social.linkedin },
                                        { icon: <BsGithub />, href: person.social.github },
                                        { icon: <BsInstagram />, href: person.social.instagram },
                                    ].map(({ icon, href }, i) => (
                                        <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                                            className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary-100 hover:text-primary-600 transition-all">
                                            {icon}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <p className="text-gray-600 leading-relaxed mt-4">{person.about}</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5 pt-5 border-t border-gray-100 text-sm">
                                <p className="text-gray-500 flex items-center gap-2"><span className="shrink-0 text-center opacity-80 p-1.5 rounded-full bg-emerald-100 text-emerald-600 h-fit"><BsTelephone /></span>{person.phone}</p>
                                <p className="text-gray-500 flex items-center gap-2"><span className="shrink-0 text-center opacity-80 p-1.5 rounded-full bg-blue-100 text-blue-600 h-fit"><BsEnvelope /></span>{person.email}</p>
                            </div>

                            {person.portfolio && (
                                <a href={person.portfolio} target="_blank" rel="noopener noreferrer"
                                    className="btn-primary inline-flex mt-5 text-sm">
                                    View Portfolio →
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

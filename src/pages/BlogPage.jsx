export default function BlogPage() {
    const articles = [
        { icon: '🔍', title: 'Finding Nearby Blood Donors', text: 'Our platform provides a comprehensive database of registered blood donors in your local area. Whether you require a specific blood type or are searching for general blood donations, we connect you with potential donors nearby.' },
        { icon: '🏥', title: 'Locating Hospitals with Specific Blood Types', text: 'In addition to connecting you with donors, our platform provides information on nearby hospitals that have the specific blood type you require. Immediate access to the right blood type is crucial in emergencies.' },
        { icon: '🖥️', title: 'User-Friendly Interface', text: 'We designed our website with user convenience in mind. Our intuitive interface allows you to navigate effortlessly, providing a smooth and seamless experience for finding blood donors.' },
        { icon: '✅', title: 'Verified Donor Information', text: 'All donor and hospital information undergoes a thorough verification process. We ensure data is up-to-date, reliable, and trustworthy for informed decision-making.' },
        { icon: '🕐', title: '24/7 Accessibility', text: "Medical emergencies can occur at any time. Our platform is accessible 24/7 with real-time updates, ensuring you have the latest information at your fingertips." },
    ];

    return (
        <div className="min-h-screen bg-white py-16 px-6">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div className="mb-12 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 bg-primary-100/80 text-primary-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                        📝 Latest Article
                    </div>
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
                        The Importance of Real-Time Blood Management
                    </h1>
                    <div className="w-16 h-1 bg-primary-400 rounded-full" />
                </div>

                {/* Intro */}
                <div className="space-y-4 mb-12 animate-fade-in-up delay-100">
                    <p className="text-gray-600 leading-relaxed text-lg">
                        We are thrilled to announce our Real-Time Blood Management System — a powerful solution designed to transform how healthcare institutions handle blood inventory and transfusion processes.
                    </p>
                    <p className="text-gray-500 leading-relaxed">
                        Real-time blood management systems use advanced technology to track blood inventory levels, monitor transfusion processes, and analyze data to identify areas for improvement.
                    </p>
                </div>

                {/* Article Cards */}
                <div className="space-y-4 mb-12">
                    {articles.map((a, i) => (
                        <div key={i} className={`group bg-gray-50/80 hover:bg-white border border-gray-100 hover:border-primary-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 animate-fade-in-up delay-${(i + 1) * 100}`}>
                            <div className="flex items-start gap-4">
                                <span className="text-2xl shrink-0 mt-0.5">{a.icon}</span>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">{a.title}</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">{a.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Outro */}
                <div className="bg-gradient-to-br from-primary-50 to-rose-50 rounded-2xl p-8 border border-primary-100 animate-fade-in-up">
                    <p className="text-gray-700 leading-relaxed">
                        Join our platform today and discover the power of community support when it matters most. Together, we can save lives by bridging the gap between those in need and those ready to make a life-saving difference.
                    </p>
                </div>
            </div>
        </div>
    );
}

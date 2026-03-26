export default function ContactPage() {
    return (
        <div className="min-h-screen bg-linear-to-br from-primary-50 via-white to-rose-50 py-16 px-6">
            <div className="max-w-lg mx-auto">
                <div className="text-center mb-8 animate-fade-in-up">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Get in Touch</h1>
                    <p className="text-gray-500">We'd love to hear your feedback or questions</p>
                </div>

                <form className="glass-card rounded-2xl shadow-xl p-8 space-y-5 animate-fade-in-up delay-200">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Name</label>
                        <input type="text" id="name" name="name" placeholder="Your full name" className="input-field" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                        <input type="email" id="email" name="email" placeholder="you@example.com" className="input-field" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                        <textarea id="message" name="message" rows={5} placeholder="How can we help you?" className="input-field resize-none" />
                    </div>
                    <button type="submit" className="btn-primary w-full">
                        Send Message →
                    </button>
                </form>
            </div>
        </div>
    );
}

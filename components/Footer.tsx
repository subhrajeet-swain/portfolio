import ContactForm from "./ContactForm";

export default function Footer() {
    return (
        <footer id="contact" className="bg-gray-900 border-t border-gray800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                <h2 className="text-3xl text-center md:text-4xl font-bold bg-gradient-to-r
                 from-primary via-secondary to-tertiary bg-clip-text text-transparent mt-12 mb-4">
                    Get in Touch
                </h2>
                <p className="text-gray-400 text-center mb-12">Let&apos;s connect and discuss your next project</p>
                <div className="mb-16">
                    <ContactForm />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="border-t border-gray-800 mt-12 pt-8 text-center">
                        <p className="text-gray-400">
                            &copy; {new Date().getFullYear()} Subhrajeet Swain
                        </p>
                    </div>
                </div>

            </div>

        </footer>
    )
}
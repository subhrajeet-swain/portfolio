import ContactForm from "./ContactForm";
import { socialLinks } from "./constants";
import { GithubIcon, LinkedInIcon } from "./SocialIcons";

export default function Footer() {
    return (
        <footer id="contact" className="bg-background border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
                    <div className="text-center lg:text-left">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r
                         from-primary via-secondary to-tertiary bg-clip-text text-transparent mb-5 pb-1">
                            Get in Touch
                        </h2>
                        <p className="text-lg text-content/70 leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
                            Got something half-defined? That&apos;s usually the interesting part. Tell me what
                            you&apos;re trying to do and we&apos;ll work out the rest.
                        </p>
                        <a
                            href={`mailto:${socialLinks.email}`}
                            className="text-lg font-medium text-content hover:text-primary transition-colors break-all"
                        >
                            {socialLinks.email}
                        </a>
                        <div className="flex gap-3 mt-6 justify-center lg:justify-start">
                            <a
                                href={socialLinks.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="p-2.5 rounded-lg bg-white/5 hover:bg-primary/10 transition-colors group"
                            >
                                <GithubIcon className="h-5 w-5 text-content/80 group-hover:text-primary transition-colors" />
                            </a>
                            <a
                                href={socialLinks.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="p-2.5 rounded-lg bg-white/5 hover:bg-primary/10 transition-colors group"
                            >
                                <LinkedInIcon className="h-5 w-5 text-content/80 group-hover:text-primary transition-colors" />
                            </a>
                        </div>
                    </div>

                    <ContactForm />
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-content/60">
                    <p>&copy; {new Date().getFullYear()} Subhrajeet Swain</p>
                    <p>Noida, India</p>
                </div>

            </div>

        </footer>
    )
}

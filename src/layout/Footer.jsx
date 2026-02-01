import { Github, Instagram, Linkedin } from "lucide-react";

const socialLinks = [
    {
        icon: Github,
        href: "#",
        label: "Github"
    },
    {
        icon: Linkedin,
        href: "#",
        label: "LinkedIn"
    },
    {
        icon: Instagram,
        href: "#",
        label: "Instagram"
    }
];

const footerLinks = [
    {
        href: "#about",
        label: "About"
    },
    {
        href: "#projects",
        label: "Projects"
    },
    {
        href: "#experience",
        label: "Experience"
    },
    {
        href: "#testimonials",
        label: "Testimonials"
    },
    {
        href: "#contact",
        label: "Contact"
    }
];

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-border">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                    {/* Logo & Copyright */}
                    <div className="text-center md:text-left">
                        <a href="#" className="text-xl font-bold tracking-tight hover:text-primary transition-colors duration-300 ease-in-out">
                            AN<span className="text-primary">.</span>
                        </a>
                        <p className="text-sm text-muted-foreground">
                            © {currentYear} Abi Nugroho. All rights reserved.
                        </p>
                    </div>

                    {/* Links */}
                    <nav className="flex flex-wrap justify-center gap-6">
                        {footerLinks.map((link) => (
                            <a key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link.label}</a>
                        ))}
                    </nav>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social) => (
                            <a key={social.label} href={social.href} className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all">
                                <social.icon className="w-5 h-5"/>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};
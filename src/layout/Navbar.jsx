import { Button } from "@/components/Button"
import { Menu } from "lucide-react";

const navLinks = [
    {href: "#about", label: "About"},
    {href: "#projects", label: "Projects"},
    {href: "#experience", label: "Experience"},
    {href: "#testimonials", label: "Testimonials"}
];

export const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 bg-transparent right-0 py-5">
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
                    AN<span className="text-primary">.</span>
                </a>

                <div className="hidden md:flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                        {navLinks.map((link, index) => (
                            <a href={link.href} key={index} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                
                <div className="hidden md:block">
                    <Button size="sm">
                        Contact Me
                    </Button>
                </div>

                <button className="md:hidden p-2 text-foreground">
                    <Menu size={24}/>
                </button>


            </nav>
        </header>
    );

}
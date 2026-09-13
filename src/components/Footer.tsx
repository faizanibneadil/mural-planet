
import Image from "next/image";
import logo from "../../public/logo.png"
import { Button } from "./ui/button";
import { Divider } from "./Divider";
const navLinks = [
    { href: "#", label: "Home" },
    { href: "#", label: "Story" },
    { href: "#", label: "Contact" },
];


export function Footer() {
    return (
        <footer className=" *:px-4 *:md:px-6">
            <div className="flex flex-col gap-6 py-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Image className="size-20" src={logo} alt='logo' />
                    </div>
                    <div className="flex items-center">
                        {[{
                            href: "#",
                            label: "Facebook",
                            icon: null,
                        }].map(({ href, label, icon }) => (
                            <Button key={label} size="icon" variant="ghost" render={<a aria-label={label} href={href} />} nativeButton={false}>{icon}</Button>
                        ))}
                    </div>
                </div>

                <nav>
                    <ul className="flex flex-wrap gap-4 font-medium text-muted-foreground text-sm md:gap-6">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <a className="hover:text-foreground" href={link.href}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <Divider />
            <div className="flex items-center justify-between gap-4 py-4 text-muted-foreground text-sm">
                <p>&copy; {new Date().getFullYear()} DevSlix</p>

                <p className="inline-flex items-center gap-1">
                    <span>Built by</span>
                    <a
                        // aria-label="x/twitter"
                        className="inline-flex items-center gap-1 text-foreground/80 hover:text-foreground hover:underline"
                        href={"https://devslix.com"}
                    // rel="noreferrer"
                    // target="_blank"
                    >
                        {/* <img
                            alt="shaban"
                            className="size-4 rounded-full"
                            height="auto"
                            src="https://github.com/shabanhr.png"
                            width="auto"
                        /> */}
                        DevSlix
                    </a>
                </p>
            </div>
        </footer>
    );
}

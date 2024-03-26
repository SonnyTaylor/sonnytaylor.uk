import {Footer} from "../page";
import {HoverCardMonkeyType} from "@/app/about/monkeytype-hover-card"
import {HoverCardGithub} from "@/app/about/github-hover-card";
import Link from 'next/link'

function Socials() {
    return <section>
        <h2 className="pt-5 text-2xl">Socials</h2>
        <ul className="marker:text-white list-disc pl-4">
            <li>
                Github: <a target="_blank" rel="noopener noreferrer"
                           href={"https://github.com/SonnyTaylor"}><HoverCardGithub/></a>
            </li>
            <li>
                MonkeyType: <a target="_blank" rel="noopener noreferrer"
                               href={"https://monkeytype.com/profile/salami.nipples"}><HoverCardMonkeyType/></a>
            </li>
        </ul>
    </section>;
}

function AboutBio() {
    return (
        <p>
            I'm a passionate and dedicated <strong>full-stack developer</strong> from{" "}
            <strong>Melbourne, Australia</strong>. With a keen interest in both frontend and
            backend development, I strive to create seamless and intuitive user experiences
            while building robust and scalable applications.
        </p>
    )
}

function AboutNavbar() {
    return <nav className="inline-flex space-x-3 list-none">
        <li>
            <Link href={"/"} className={"hover:underline"}>Home</Link>
        </li>
        <li>
            <Link href={"/contact"} className={"hover:underline"}>Contact</Link>
        </li>
    </nav>;
}

export default function AboutPage() {
    return (
        <div className="dark:text-white dark:bg-black min-h-screen p-4">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl lg:text-left pb-3">About Me</h1>
                <AboutNavbar/>
            </div>
            <AboutBio/>
            <Socials/>
            <Footer/>
        </div>
    )
}
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import Link from "next/link";

function Card({
  label,
  link,
  description,
}: {
  label: string;
  link: string;
  description: string;
}) {
  return (
    <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <EvervaultCard text={<a href={link}>{label}</a>} />

      <h2 className="dark:text-white text-black mt-4 text-sm font-light">
        {description}.
      </h2>
    </div>
  );
}

export default function Contact() {
  return (
    <div className="flex flex-col dark:bg-black min-h-screen pt-4 px-4">
      <div className="flex justify-between items-center">
        <Link
          className="duration-200 text-zinc-300 hover:text-zinc-100"
          href="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <path d="m12 19-7-7 7-7"></path>
            <path d="M19 12H5"></path>
          </svg>
        </Link>
        <nav className="dark:text-white">
          <ul className="flex space-x-4">
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex justify-center items-center flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card
            label="Discord"
            link="http://example.com/1"
            description=".salaminipples"
          />
          <Card
            label="Email"
            link="mailto:santinotaylor08@gmail.com"
            description="santinotaylor08@gmail.com"
          />
          <Card
            label="Github"
            link="https://github.com/SonnyTaylor"
            description="SonnyTaylor"
          />
        </div>
      </div>
    </div>
  );
}

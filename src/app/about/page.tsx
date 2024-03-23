import { HoverCardGithub } from "./github-hover-card";
import { HoverCardMonkeyType } from "./monkeytype-hover-card";

export default function About() {
  return (
    <div className="min-h-screen overflow-hidden dark:bg-black dark:text-white">
      <div className="w-2/3 min-h-screen mx-auto">
        <h1 className="py-5 text-3xl">About Me</h1>

        <section className="mb-6">
          <p className="text-base">
            I am a passionate web developer with a strong foundation in
            front-end technologies. I enjoy creating interactive and
            user-friendly interfaces using HTML, CSS, and JavaScript. My primary
            focus is on building robust web applications with React and I also
            have experience with Python for backend development.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="pt-6 text-2xl">Skills</h2>
          <p className="text-base">
            I am skillful in the following areas: HTML, CSS, JavaScript, React,
            Python, and more. I continuously strive to expand my knowledge and
            stay updated with the latest trends and technologies in web
            development.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="pt-6 text-2xl">Socials</h2>
          <ul className="list-none">
            <li className="mb-2">
              <p>Github:</p>
              <HoverCardGithub />
            </li>
            <li className="mb-2">
              <p>Monkeytype:</p>
              <HoverCardMonkeyType />
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

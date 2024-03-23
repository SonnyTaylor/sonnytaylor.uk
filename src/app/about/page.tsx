"use client";
import { HoverCardGithub } from "./github-hover-card";
import { HoverCardMonkeyType } from "./monkeytype-hover-card";

export default function About() {
  return (
    <div className="min-h-screen overflow-hidden dark:bg-black dark:text-white">
      <div className="w-2/3 min-h-screen mx-auto">
        <h1 className="py-5 text-3xl">About Me</h1>

        <section>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            quae, blanditiis architecto provident aliquid ut facere, vitae
            tenetur ipsam amet harum doloribus error voluptas sequi neque? Natus
            explicabo vitae saepe.
          </p>
        </section>

        <section>
          <h2 className="pt-6 text-2xl">Skills</h2>
          <p>
            Im am skillful in the following areas: HTML, CSS, JavaScript, React,
            Python and more.
          </p>
        </section>

        <section>
          <h2 className="pt-6 text-2xl">Experience</h2>
          <p>I have worked on severeal projects, check them out on my github</p>
        </section>

        <section>
          <h2 className="pt-6 text-2xl">Socials</h2>

          <ul>
            <li>
              <HoverCardGithub />
            </li>
            <li>
              <HoverCardMonkeyType />
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

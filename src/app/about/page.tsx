"use client";
import { TracingBeam } from "../../ui/tracing-beam";

export default function About() {
  return (
    <div className="min-h-screen dark:bg-black dark:text-white">
      <div className="w-2/3 min-h-screen mx-auto">
        <TracingBeam>
          <h1 className="py-5 text-3xl">About Me</h1>

          <section>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              quae, blanditiis architecto provident aliquid ut facere, vitae
              tenetur ipsam amet harum doloribus error voluptas sequi neque?
              Natus explicabo vitae saepe.
            </p>
          </section>

          <section>
            <h2 className="pt-6 text-2xl">Skills</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
              dignissimos quas sint. Perferendis, unde quo, tempora delectus
              ipsa accusantium molestiae illum vitae expedita, quisquam modi
              omnis dolorum fugit necessitatibus repellendus?
            </p>
          </section>

          <section>
            <h2 className="pt-6 text-2xl">Tools</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              cum enim aperiam possimus sequi velit explicabo quidem maxime, sed
              repellat exercitationem minima. Illo, dolorem consequatur? Quasi
              eos error at officia?
            </p>
          </section>

          <section>
            <h2 className="pt-6 text-2xl">Experience</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quidem, voluptates, voluptatem, quod eveniet voluptatum quos
              dignissimos dolorum quae quibusdam iure. Quisquam, voluptates
              voluptatem. Quod, quos. Quisquam, voluptates voluptatem. Quod,
              quos.
            </p>
          </section>

          <section>
            <h2 className="pt-6 text-2xl">Education</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quidem, voluptates, voluptatem, quod eveniet voluptatum quos
              dignissimos dolorum quae quibusdam iure. Quisquam, voluptates
              voluptatem. Quod, quos. Quisquam, voluptates voluptatem. Quod,
              quos.
            </p>
          </section>

          <section>
            <h2 className="pt-6 text-2xl">Socials</h2>
          </section>
        </TracingBeam>
      </div>
    </div>
  );
}

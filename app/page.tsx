import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="flex-1 ml-64 overflow-y-auto scroll-smooth">
        <section
          id="home"
          className="min-h-screen flex items-center justify-center"
        >
          <h1 className="text-5xl font-bold">Hi, I&apos;m Sarah 👋</h1>
        </section>

        <section
          id="about"
          className="min-h-screen flex items-center justify-center bg-gray-800"
        >
          <h2 className="text-4xl font-semibold">About Me</h2>
        </section>

        <section
          id="projects"
          className="min-h-screen flex items-center justify-center bg-gray-700"
        >
          <h2 className="text-4xl font-semibold">Projects</h2>
        </section>

        <section
          id="skills"
          className="min-h-screen flex items-center justify-center bg-gray-800"
        >
          <h2 className="text-4xl font-semibold">Skills</h2>
        </section>

        <section
          id="certificates"
          className="min-h-screen flex items-center justify-center bg-gray-700"
        >
          <h2 className="text-4xl font-semibold">Certificates</h2>
        </section>

        <section
          id="contact"
          className="min-h-screen flex items-center justify-center bg-gray-800"
        >
          <h2 className="text-4xl font-semibold">Contact</h2>
        </section>
      </main>
      <footer className="">This web site is a green website.</footer>
    </div>
  );
}

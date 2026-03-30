export default function Home() {
  const skills = [
    "Python",
    "Machine Learning",
    "React",
    "Next.js",
    "TypeScript",
    "HTML",
    "CSS",
    "SQL",
    "GitHub",
  ];

  const projects = [
    {
      title: "Clinical Trial Data Automation",
      description:
        "Developed a system to automate the analysis of clinical trial data, helping identify important warning signs faster and improving efficiency in patient data monitoring.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#140a1f] text-white px-6 md:px-20 py-10">
      
      {/* HERO */}
      <section className="text-center py-20">
        <p className="text-purple-300 mb-3 text-sm uppercase tracking-widest">
          Portfolio Website
        </p>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Hi, I’m Bhoomika M H
        </h1>
        <p className="text-lg text-purple-100 max-w-3xl mx-auto leading-8">
          I’m a 3rd Year B.E (CSE) student at K S Institute of Technology,
          passionate about web development, machine learning, and building
          impactful real-world projects.
        </p>
      </section>

      {/* ABOUT */}
      <section className="py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-purple-100 leading-8 text-lg">
          I am currently pursuing my Bachelor of Engineering in Computer Science
          and Engineering at K S Institute of Technology. I have a strong
          interest in software development, artificial intelligence, and data
          science. I enjoy learning modern technologies and applying them to
          solve real-world problems through meaningful and practical projects.
        </p>
      </section>

      {/* SKILLS */}
      <section className="py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-purple-900 rounded-full text-sm hover:bg-purple-800 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-[#1e1230] p-6 rounded-2xl border border-purple-800 shadow-md hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-purple-100 text-sm leading-7">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Education</h2>

        <div className="space-y-6">
          <div className="bg-[#1e1230] p-6 rounded-2xl border border-purple-800 shadow-md">
            <h3 className="text-2xl font-bold">Bachelor of Engineering (CSE)</h3>
            <p className="text-purple-100 mt-2">3rd Year Student</p>
            <p className="text-purple-300">K S Institute of Technology</p>
          </div>

          <div className="bg-[#1e1230] p-6 rounded-2xl border border-purple-800 shadow-md">
            <h3 className="text-2xl font-bold">2nd PUC</h3>
            <p className="text-purple-300 mt-2">
              Shree Sharadamba Science Independent PU College
            </p>
            <p className="text-purple-100">Tumkur</p>
          </div>

          <div className="bg-[#1e1230] p-6 rounded-2xl border border-purple-800 shadow-md">
            <h3 className="text-2xl font-bold">SSLC</h3>
            <p className="text-purple-300 mt-2">
              Morarji Desai Residential School
            </p>
            <p className="text-purple-100">Pavagada</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p className="text-purple-100 text-lg">Email: bhoomikamh24@gmail.com</p>
        <p className="text-purple-100 text-lg">GitHub: github.com/Bhoomikamh24</p>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-purple-800 text-center py-6 text-purple-300 text-sm mt-10">
        © 2026 Bhoomika M H. Built with Next.js & TypeScript.
      </footer>
    </main>
  );
}

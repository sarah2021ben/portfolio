import Link from "next/link";
import React from "react";

const Sidebar = () => {
  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "certificates", label: "Certificates" },
    { id: "contact", label: "Contact" },
  ];
  return (
    <aside className="w-64 bg-gray-950 text-white fixed h-screen p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold mb-10">Sarah</h2>
        <nav>
          <ul className="space-y-4">
            {sections.map((s) => (
              <li key={s.id}>
                <Link
                  href={`#${s.id}`}
                  scroll={false}
                  className="hover:text-teal-400 transition"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <footer className="text-sm text-gray-400">© 2025 Sarah</footer>
    </aside>
  );
};

export default Sidebar;

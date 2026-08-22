import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link?: string;
}

const featuredProjects: Project[] = [
  {
    id: 2,
    title: "SocialSphere - Social Media App",
    description: "A full-stack (SPRING BOOT) social networking platform enabling users to create posts, view feeds, manage profiles, and interact with other users. Built with React & Tailwind CSS frontend, Spring Boot REST APIs, JWT authentication, MySQL database, and features like liking, commenting, and profile management.",
    link: "https://github.com/Officialdeepankar/SocialSphere",
    image: "/projects/project-3.png",
  },

   {
    id: 3,
    title: "STREAMFLIX",
    description: "A full-stack MERN entertainment discovery platform that helps users discover hidden gems, search trending content, and stream trailers effortlessly with personalized recommendations.",
    link: "https://streamflix-1.onrender.com/",
    image: "/projects/project-5.png",
  },
  {
    id: 1,
    title: "SHOPY - E-commerce Platform MERN",
    description: "A comprehensive full-stack e-commerce platform built with MERN stack. Features include product browsing, secure checkout with PayPal integration, JWT-based authentication, Redux state management for seamless user experience, and MongoDB for flexible data storage.",
    link: "https://pickandpay-deployed-mern-e-comm-1.onrender.com",
    image: "/projects/project-4.png",
  },
  
 
];

export default function Projects(): React.JSX.Element {
  return (
    <section id="lab" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {featuredProjects.map((project) => {
          const isGithubProject = project.link?.includes("github.com");

          return (
            <div key={project.id} className="mb-20 last:mb-0">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start">
                <div className="order-1">
                  <p className="text-purple-400 text-lg lg:text-xl mb-2 font-medium">
                    Featured Project
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-3xl lg:text-5xl font-bold text-white leading-tight transition-colors duration-300 hover:text-purple-400"
                    aria-label={`Open ${project.title} website`}
                  >
                    {project.title}
                  </a>

                  <div className="mt-6 rounded-[24px] border border-white/10 bg-white/5 p-5 lg:p-7 shadow-xl">
                    <p className="text-white/90 text-base lg:text-xl leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-purple-400/40 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-200 transition-colors duration-200 hover:bg-purple-500/20 hover:text-white"
                      aria-label={`Visit ${project.title}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                      {isGithubProject ? "Visit GitHub" : "Open live site"}
                    </a>
                  </div>
                </div>

                <div className="order-2 lg:order-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block aspect-[16/10] w-full overflow-hidden rounded-[24px] border border-white/10 bg-[#020814] shadow-2xl"
                    aria-label={`Open ${project.title} in a new tab`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between border-t border-white/10 bg-black/40 px-5 py-3 backdrop-blur-sm">
                      <span className="text-sm font-medium text-white/90">Website preview</span>
                      <span className="text-sm text-purple-300">Open →</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}


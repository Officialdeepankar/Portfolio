
import Image from "next/image";

export default function About(): React.JSX.Element {

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">Technical Skills</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            <div>
              <p className="text-2xl font-semibold text-purple-400 mb-3">Languages</p>
              <p className="text-lg text-white/90">C/C++, Java, Python, JavaScript, SQL</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-purple-400 mb-3">Technologies & Tools</p>
              <p className="text-lg text-white/90">Spring Boot, Apache Kafka, Trino, Docker, React JS, Node.js, MongoDB, MySQL, JWT, Redux, Tailwind CSS</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-purple-400 mb-3">Education</p>
              <p className="text-lg text-white/90">Master of Computer Applications (MCA) from NIT Bhopal </p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-purple-400 mb-3">Achievements</p>
              <ul className="text-lg text-white/90 space-y-2">
                <li>✓ 300+ coding problems solved on LeetCode & GeeksforGeeks</li>
                <li>✓ 5-star rating in HackerRank problem-solving challenges</li>
                <li>✓ React Basics Certification (META)</li>
                <li>✓ CodeRush Hackathon Participant (Cleared Round 2)</li>
              </ul>
            </div>
          </div>
        </div>
        <Image 
          src="/assets/illustration.png"
          alt="Skills"
          width={800}
          height={800}
          className="object-cover mx-auto"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
    </section>
  );
}


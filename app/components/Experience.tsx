interface ExperienceItem {
  title: string;
  period: string;
  points: string[];
}

const experienceItems: ExperienceItem[] = [
  {
    title: "AI Engineer – Trianz",
    period: "08/2025 – Present",
    points: [
      "Real-Time Data Streaming: Built a real-time data streaming pipeline using Apache Kafka and Spring Boot, cutting data transfer latency by 35% across downstream systems.",
      "CDC Integration & Migration: Replaced Trino with Debezium for Change Data Capture (CDC) and tuned Kafka producers/consumers, boosting data ingestion and migration speed by 70% from relational databases.",
      "API Optimization & Caching: Developed high-performance FastAPI backend services in Python and implemented response caching, reducing API response latency by 40%.",
      "Frontend Development: Built responsive frontend user interfaces using TypeScript and React.js for seamless integration with core backend APIs.",
      "Code Quality & Testing: Expanded Java backend unit test coverage using JUnit and SonarQube, significantly improving code reliability and maintainability.",
      "Leadership & Delivery: Led client demos and delivered high-priority features under tight deadlines.",
    ],
  },
];

export default function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Experience
        </h2>

        <div className="space-y-12 text-white">
          {experienceItems.map((item) => (
            <div key={item.title}>
              <div className="mb-3">
                <h3 className="text-2xl lg:text-3xl font-semibold text-white">
                  {item.title}
                  <span className="text-purple-300"> {item.period}</span>
                </h3>
              </div>

              <ul className="space-y-3 text-base lg:text-lg text-white/85 leading-relaxed list-disc pl-6">
                {item.points.map((point, index) => (
                  <li key={`${item.title}-${index}`}>
                    <span className="text-white">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


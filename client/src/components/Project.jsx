export default function ProjectCard({ title, description, techStack, github, demo }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {techStack.map((tech, index) => (
          <span key={index} className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-4 space-x-4">
        <a href={github} target="_blank" className="text-blue-500 hover:underline">GitHub</a>
        <a href={demo} target="_blank" className="text-green-500 hover:underline">Live Demo</a>
      </div>
    </div>
  );
}

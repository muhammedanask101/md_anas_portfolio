

const Project = ({ project }) => {

  return (
    <div className="p-8 bg-neutral-950 shadow-md shadow-blue-300 w-1/4 m-8 rounded-xl text-center">
      <h2 className="text-2xl text-shadow-2xs text-shadow-amber-400 font-bold font-sans mt-2 mb-8">{project.title}</h2>
      <p className="m-2 font-google-sans">{project.description}</p>
      <div className="m-5 font-sans text-blue-300 hover:text-red-500"> <a href={project.fileurl} target="_blank" rel="noopener noreferrer">view project</a> </div>
      <div className="font-google-sans text-sm">{new Date(project.createdAt).toLocaleString('en-US')}</div>
    </div>
  )
}

export default Project;

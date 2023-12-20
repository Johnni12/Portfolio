import {projectsData} from './data'
import jobbah from '../assets/jobbah.png'

const Projects = () => {
  return (
    <section id='projects'>
      <h1 className='mx-2 text-darkGrayishBlue mb-4 ml-6 text-3xl'>Projects</h1>
      <div className='flex flex-wrap mx-2'>
        {projectsData.map((project) => (
          <div
            key={project.id}
            className='w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 px-4 mb-8 overflow-hidden '
          >
            <div className='bg-bgBlue rounded-lg overflow-hidden border border-BlueGradient shadow-md p-6'>
              <img
                src={jobbah}
                alt={project.title}
                className='w-full h-48 object-cover'
              />
              <div className='p-4'>
                <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
                <p className='text-darkGrayishBlue mb-4'>
                  {project.description}
                </p>
                <div className='flex justify-between'>
                  <a
                    href={project.livePreviewUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='p-3 px-6 pt-2 text-white bg-BlueGradient rounded-full baseline hover:bg-darkGrayishBlue'
                  >
                    Live Preview
                  </a>
                  <a
                    href={project.githubUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='p-3 px-6 pt-2 text-white border border-darkGrayishBlue rounded-full baseline hover:bg-darkGrayishBlue'
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

import { experienceData } from './data'

const Experience = () => {
  return (
    <div className='mb-14 my-24 '>
      <h1 className='mx-2 text-darkGrayishBlue mb-4 ml-6 text-3xl'>
        Experience
      </h1>
      {experienceData.map((experience) => (
        <div key={experience.id} className='ml-6 mr-5 mb-8'>
          <div className='flex items-center justify-between'>
            <div>
              <span className='text-lg font-semibold'>{experience.title}</span>
              <span className='text-darkGrayishBlue ml-4'>
                {experience.company}
              </span>
            </div>
            <span className='text-darkGrayishBlue'>{experience.duration}</span>
          </div>
          <p className='text-textColor mt-2'>{experience.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Experience

import { stackData } from './data'

const Technology = () => {
  const getProgressColor = (level) => {
    let gradientColor
    let width

    
    switch (level) {
      case 'Beginner':
        width = '25%' 
        gradientColor = `linear-gradient(to right, #FF6B6B ${width}, #F0F0F0 ${width})`
        break
      case 'Intermediate':
        width = '50%' 
        gradientColor = `linear-gradient(to right, #FFD166 ${width}, #F0F0F0 ${width})`
        break
      case 'Advanced':
        width = '75%' 
        gradientColor = `linear-gradient(to right, #06D6A0 ${width}, #F0F0F0 ${width})`
        break
      default:
        width = '0%'
        gradientColor = 'linear-gradient(to right, #F0F0F0 0%, #F0F0F0 0%)'
    }

    return {
      background: gradientColor,
      width: width,
    }
  }

  return (
    <div className='mb-14 my-14'>
      <h1 className='mx-2 text-darkGrayishBlue mb-4 ml-6 text-3xl'>
        Technologies
      </h1>
      {stackData.map((data) => (
        <div key={data.id}>
          <div className=' ml-6 mr-5'>
            <div className='flex items-center justify-between'>
              <span className='text-lg font-semibold mr-8'>{data.name}</span>
              <span className='text-darkGrayishBlue ml-6'>{data.level}</span>
            </div>
            <div
              className='w-full h-4 bg-BlueGradient rounded-md overflow-hidden mb-8'
              style={getProgressColor(data.level)}
            ></div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Technology

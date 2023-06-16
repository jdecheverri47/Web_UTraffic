import LeftSide from "../Individuals/LeftSide"
import RightSide from "../Individuals/RightSide"

function Contact() {
  return (
    <div className='h-full w-full grid grid-cols-2'>
      <LeftSide />
      <RightSide />
    </div>
  )
}

export default Contact


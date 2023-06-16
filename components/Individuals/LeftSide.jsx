import { useContext } from "react"
import { ContextProps } from "../Composable/ContextProps"
import ContactBubbles from "./ContactBubbles"

function LeftSide( ) {
  const { leftRef } = useContext(ContextProps)

  return (
    <div className="bg-cyan-950" ref={leftRef}>
      <h1 className='text-center text-8xl text-emerald-300 mt-32 pt-1 font-bold uppercase'>Contáctanos</h1>
      
      <div className="flex flex-wrap flex-row justify-center items-center mt-20">
        <ContactBubbles />
      </div>
    </div>
  )
}

export default LeftSide
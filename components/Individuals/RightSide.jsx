import { ContextProps } from "../Composable/ContextProps"
import { useContext } from "react"

function RightSide() {
  const { rightRef } = useContext(ContextProps)
  const classInput = 'text-left text-xl outline-none h-[40px] w-[25rem] bg-transparent placeholder-cyan-950 text-cyan-950 border-b border-cyan-950 mt-7';

  return (
    <div className="bg-emerald-300 px-10" ref={rightRef}>
      <h1 className='text-center text-8xl text-cyan-950 mt-10 uppercase font-bold '>Te contactamos</h1>

      <div className="flex flex-col justify-start">
        <div className="flex flex-col justify-start mt-10 ml-10 gap-5">

          <div className="flex flex-col justify-start mt-10">
            <textarea name="message" id="message" cols="30" rows="10" className="w-[40vw] h-[150px] text-left text-2xl outline-none bg-transparent placeholder-cyan-950 text-cyan-950 resize-none" placeholder="Háblanos de tu inquietud y como podemos ayudarte."></textarea>
          </div>

          <div className="flex flex-col justify-start relative mt-10">
            <input type="text" name="name" id="name" placeholder="Tu Nombre" className={classInput} />

            <input type="text" name="phone" id="phone" placeholder="Tu Teléfono" className={classInput} />

            <input type="email" name="email" id="email" placeholder="Tu Email" className={classInput} />
          </div>

          <div className="flex flex-row justify-end">
            <button type="submit" className="bg-cyan-950 text-emerald-300 font-semibold text-2xl rounded-full w-[150px] h-[150px] p-15 mb-5 mr-20 flex items-center justify-center">Enviar</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default RightSide
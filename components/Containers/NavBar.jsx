import Image from 'next/image'
import logoPicture from '/public/assets/images/logo.png'


function NavBar() {
  return (
    <>
      <header className="px-4 py-4 bg-white shadow-md w-full">
        <nav className="flex flex-wrap flex-row justify-between items-center">
          <div className='ml-8'>
            <Image 
              src={logoPicture} 
              alt="Logo"
              width={50}
              className="cursor-pointer"
            />
          </div>
          <div className="flex flex-wrap flex-row justify-between gap-8 items-center">
            <ul className="flex flex-wrap flex-row justify-between gap-8 text-cyan-950 font-semibold">
              <li className='py-3 px-4 transition-all ease-in duration-300 rounded-md -z-2'><a href="#">Nosotros</a></li>
              <li className='py-3 px-4'><a href="/about">Que Hacemos</a></li>
              <li className='py-3 px-4'><a href="/contact">Contacto</a></li>
            </ul>
            
            <div className='mr-8'>
              <button type="submit" className="py-2 px-6 bg-cyan-800 text-white rounded-md">Hablémos</button>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default NavBar
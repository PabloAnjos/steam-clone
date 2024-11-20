import logoSteam from './assets/images/logo-steam.png'
import avatar from './assets/images/avatar.png'
import { Bell, ChatCircle, CaretDown } from '@phosphor-icons/react'

function App() {
  return (
    <>
        <header>
                <nav className='flex justify-between items-center w-screen h-20 bg-[#1B2838] pr-8 pl-8'>
                      <div>
                          <ul className='flex items-center gap-9 text-white'>
                              <li><img src={logoSteam} alt="Logo Steam" /></li>
                              <li className='hover:text-[#0094FF] cursor-pointer'>LOJA</li>
                              <li className='hover:text-[#0094FF] cursor-pointer'>BIBLIOTECA</li>
                              <li className='hover:text-[#0094FF] cursor-pointer'>COMUNIDADE</li>
                              <li className='hover:text-[#0094FF] cursor-pointer'>AJUDA</li>
                          </ul>
                      </div>

                      <div>
                            <ul className='flex items-center gap-8'>
                              <Bell size={25} color='white' className='cursor-pointer'/>
                              <ChatCircle size={25} color='white'  className='cursor-pointer'/>
                              <li><img src={avatar} alt="Imagem avatar"  className='cursor-pointer'/></li>
                              <CaretDown size={18} color='#0094FF'  className='cursor-pointer'/>
                            </ul>
                      </div>
                </nav>
        </header>
    </>
  )
}

export default App

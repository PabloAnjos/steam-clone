import logoSteam from './assets/images/logo-steam.png'
import avatar from './assets/images/avatar.png'
import arrow from './assets/images/arrow.png'
import message from './assets/images/message.png'
import noticiations from './assets/images/noticiations.png'

function App() {
  return (
    <>
        <header>
                <nav>
                      <div>
                          <ul>
                              <li><img src={logoSteam} alt="Logo Steam" /></li>
                              <li>LOJA</li>
                              <li>BIBLIOTECA</li>
                              <li>COMUNIDADE</li>
                              <li>AJUDA</li>
                          </ul>
                      </div>

                      <div>
                            <ul>
                              <li><img src={noticiations} alt="Icone noticiations" /></li>
                              <li><img src={message} alt="Icone message" /></li>
                              <li><img src={avatar} alt="Imagem avatar" /></li>
                            </ul>
                      </div>
                </nav>
        </header>
    </>
  )
}

export default App


import Lupa from '../images/lupa.png'
import Logo from '../images/viagens.jpg'
import Style from '../styles/Header.module.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className={Style.content}>
          <Link to='/'>
            <img src={Logo} alt="Logo" className={Style.log}/>
            </Link>
            <nav className={Style.menu}>
                <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='Escocia'> <li>Escócia</li></Link>
                <Link to='GrandCanyon'> <li>GrandCanyon</li></Link>
                <Link to={"http://www.cvc.com.br"}>  <li>Muralhas da China</li></Link>
                <Link to='Arruba'><li>Arruba</li></Link>
                </ul>
            </nav>

            <div className={Style.login}>
                <input type="search" name="" id="" />
            </div>
            <img src={Lupa} alt="Lupa" className={Style.lupa}/>
        </header >
    )
}
export default Header
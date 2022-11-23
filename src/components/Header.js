import { useNavigate } from "react-router-dom"
import { goToHomePage, goToProfilePage, goToIdPage } from "../router/coordinator"

function Header() {
    const navigate = useNavigate()
    return (
        <header>
            <button onClick={() => goToHomePage(navigate)}>Ir para a página inicial</button>
            <button onClick={() => goToProfilePage(navigate, 'Ludmila')}>Ir para a página de perfil</button>
            <button onClick={() => goToIdPage(navigate, 'Id')}>Pesquisa por Id</button>
        </header>
    )
}
export default Header
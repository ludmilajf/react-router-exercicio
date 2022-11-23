import { useParams } from "react-router-dom"
import Header from "../components/Header"

function ProdutcIdPage() {
    const params = useParams()
    return (
        <section>
        <h1>Pesquisa de produto por Id</h1>
        <Header />
      </section>
    )
}
export default ProdutcIdPage
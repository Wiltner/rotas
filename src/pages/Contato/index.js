
import { Link } from "react-router-dom";
function Contato() {
    return (
        <div>
            <h1>Contato</h1>
            <br /><br />
            <main>           
                <section className="contact-info">
                    <h2>Informações de Contato</h2>
                    <p>Email: contato@jogoshistoricosnba.com</p>
                    <p>Telefone: (11) 1234-5678</p>
                </section>
            </main>
            <footer>
                <p>&copy; 2023 Jogos Históricos da NBA. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}export default Contato;
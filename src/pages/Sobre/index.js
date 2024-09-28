import { Link } from "react-router-dom";

function Sobre() {
    return (
        <div>
            <h1>Sobre</h1>
            <br /><br />
            <main>
                <h1>Sobre Nós</h1>
                <section className="company-description">
                    <p>
                        A "Jogos Históricos da NBA" é uma empresa dedicada a preservar e celebrar os momentos mais memoráveis da história da NBA. Nossa missão é proporcionar aos fãs de basquete uma plataforma onde possam reviver os jogos mais emocionantes e aprender mais sobre os eventos que moldaram o esporte.
                    </p>
                </section>
                <section className="mission-vision-values">
                    <h2>Missão</h2>
                    <p>
                        Nossa missão é capturar e compartilhar a essência dos jogos históricos da NBA, proporcionando uma experiência única e educativa para os fãs de basquete de todas as idades.
                    </p>
                    <h2>Visão</h2>
                    <p>
                        Ser a principal referência mundial em conteúdo histórico sobre a NBA, inspirando e educando futuras gerações de fãs de basquete.
                    </p>
                    <h2>Valores</h2>
                    <ul>
                        <li>Paixão pelo Basquete</li>
                        <li>Integridade e Precisão</li>
                        <li>Educação e Inspiração</li>
                        <li>Inovação e Criatividade</li>
                    </ul>
                </section>
            </main>
            <footer>
                <p>&copy; 2023 Jogos Históricos da NBA. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}export default Sobre;
import ButtonComponent from "../button";

export default function About() {
    return (
        <div className="about">
            <div className="left-side-about">
                <p>Nossos processos são<span> 100% documentados e em <strong>total conformidade</strong><strong> com a legislação ambiental</strong>.</span></p>
                <p><span>Clique aqui</span> e confira o vídeo.</p>
            </div>

            <div className="right-side-about">
                <h1>Conheça a <span>Ecobraz</span> <strong>Emigre</strong></h1>

                <p>É uma organização pioneira em reciclagem de resíduos eletrônicos.</p>

                <p>Com o objetivo de auxiliar pessoas físicas, empresas e indústrias dos mais variados tamanhos e segmentos.</p>

                <p>Desenvolvemos um sistema para operacionalizar a Logística Reversa dos clientes de forma eficiente, atuando há mais de 15 anos em todo território nacional.</p>

                <div>
                    <ButtonComponent title="Sobre a Ecobraz" secondTitle="Compense seu Carbono" />
                </div>
            </div>
        </div>
    )
}
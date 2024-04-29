export default function RoadInfo() {
    return (
        <div className="road-info">
            <div className="title-subtitle">
                <h5>Nossa coleta</h5>
                <p>Nós retiramos ou você mesmo pode enviar pelos correios</p>
            </div>

            <div>
                <div className="infos-coleta">
                    <h5>01 Coleta no local</h5>
                    <p>Logística devidamente licenciada para realização da coleta e carregamento. Entregamos a carta de descarte e manifesto de carga para formalizar e assegurar todo o processo.</p>
                </div>

                <div className="infos-coleta">
                    <h5>02 Triagem</h5>
                    <p>Equipe especializada para a descaracterização e análise dos componentes, identificando resíduos para destinação final ou manufatura reversa.</p>
                </div>

                <div className="infos-coleta">
                    <h5>03 Procesamento</h5>
                    <p>Resíduos sem vida útil, são direcionados à usinas para efetivação de acondicionamento e finalização, de acordo com todas as leis ambientais.</p>
                </div>

                <div className="infos-coleta">
                    <h5>04 Manufatura Reversa</h5>
                    <p>Componentes que apresentam sinal de vida útil, são transformados em novos produtos incentivando a economia circular.</p>
                </div>
            </div>
        </div>
    )
}

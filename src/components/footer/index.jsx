import { Envelope, EnvelopeOpen, FacebookLogo, InstagramLogo, LinkedinLogo, PhoneCall, WhatsappLogo, XLogo } from "@phosphor-icons/react";
import VerifiedCarbonLogo from "../../assets/verified-carbon.png"
import CetesbLogo from "../../assets/logo-cetesb.png"
import IbamaLogo from "../../assets/Logo_IBAMA.png"
import ISO14001Logo from "../../assets/iso-14001.png"
import ISO45001Logo from "../../assets/iso-45001.png"

export default function Footer() {
    return (
        <div className="footer">
            <div className="first-div-footer">
                <EnvelopeOpen size={45} />
                <div className="informative-texts">
                    <h3 className="titles-footer">Receba nossos informativos</h3>
                    <p>Não se preocupe, também não gostamos de SPAM</p>
                </div>

                <div className="send-informative">
                    <input type="text" placeholder="Nome" />
                    <input type="text" placeholder="Email" />
                    <button>Cadastrar</button>
                </div>
            </div>

            <div className="infos-footer">
                <div>
                    <h3 className="titles-footer">Institucional</h3>
                    <ol>
                        <li><a href="url_da_pagina_home">Home</a></li>
                        <li><a href="url_da_pagina_sobre">Sobre</a></li>
                        <li><a href="url_da_pagina_como_funciona">Como funciona?</a></li>
                        <li><a href="url_da_pagina_faq">FAQ</a></li>
                        <li><a href="url_da_politica_de_privacidade">Política de Privacidade</a></li>
                        <li><a href="url_da_pagina_contato">Contato</a></li>
                    </ol>
                </div>

                <div>
                    <h3 className="titles-footer">Informações de Contato</h3>
                    <ol>
                        <li><PhoneCall size={18} color="#000000" style={{ marginRight: "0.5vw" }} /> +55 (11 )4329-2001</li>
                        <li><WhatsappLogo size={18} color="#000000" style={{ marginRight: "0.5vw" }} /> +55 (11) 9 9532-1487</li>
                        <li><Envelope size={18} color="#000000" style={{ marginRight: "0.5vw" }} /> contato@ecobraz.org.br</li>
                    </ol>

                    <p className="info-cnpj">CNPJ: 14.197.457/0001-42</p>
                </div>

                <div>
                    <h3 className="titles-footer">Endereço</h3>

                    <p className="infos-address">
                        Rua Dona Maria Quedas, 230
                        Jardim Andaraí, São Paulo - SP
                        CEP: 02175-010
                    </p>
                </div>

                <div>
                    <h3 className="titles-footer">Sobre</h3>

                    <p className="infos-sobre">
                        <strong>Ecobraz Emigre</strong> é uma organização pioneira em reciclagem de resíduos eletrônicos. Com o objetivo de auxiliar pessoas físicas, empresas e indústrias dos mais variados tamanhos e segmentos.
                    </p>
                </div>

            </div>

            <div className="social-certifications">
                <div>
                    <h3 className="titles-footer">Siga-nos nas redes sociais</h3>

                    <ol className="social-medias">
                        <li><a href="url_da_pagina_home"><FacebookLogo size={22} weight="bold" color="#000000" /></a></li>
                        <li><a href="url_da_pagina_sobre"><InstagramLogo size={22} weight="bold" color="#000000" /></a></li>
                        <li><a href="url_da_pagina_como_funciona"><XLogo size={22} weight="bold" color="#000000" /></a></li>
                        <li><a href="url_da_pagina_faq"><LinkedinLogo size={22} weight="bold" color="#000000" /></a></li>
                    </ol>
                </div>

                <div>
                    <h3 className="titles-footer">Certificações</h3>

                    <div className="certificates">
                        <img src={VerifiedCarbonLogo} alt="Verified Carbon Logo" width={150} height={60} />
                        <img src={CetesbLogo} alt="Cetesb Logo" width={90} height={60} />
                        <img src={IbamaLogo} alt="Ibama Logo" width={80} height={70} style={{ marginTop: '-1.5vh'}} />
                        <img src={ISO14001Logo} alt="ISO 14001 Logo" width={115} height={85} style={{ marginTop: '-1.8vh'}} />
                        <img src={ISO45001Logo} alt="ISO 45001 Logo" width={90} height={75} style={{ marginTop: '-1.5vh'}} />
                    </div>
                </div>
            </div>
        </div>
    )
}
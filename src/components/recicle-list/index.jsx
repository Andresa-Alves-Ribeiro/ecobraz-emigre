import { Clock } from "@phosphor-icons/react";
import Lixo from "../../assets/home-lixo-eletronico-2.png"

export default function RecicleList() {
    return (
        <div className="recicle-list">
            <div className="div-recicle">
                <div className="header-recicle">
                    <h3>Lista de materiais que <span>recebemos</span></h3>

                    <button className="button-recicle"><Clock size={20} /> Agende sua coleta</button>
                </div>

                <div className="image-recicle">
                    <img src={Lixo} alt="imagem de um lixo eletronico" />
                </div>
            </div>
        </div>
    )
}

import { useState } from 'react';
import CookieConsent from 'react-cookie-consent';

const CookiesConsent = () => {
    const [, setIsVisible] = useState(true);

    const handleAccept = () => {
        // Lógica para aceitar cookies
        console.log('Cookies aceitos');
        setIsVisible(false);
    };

    const handleDecline = () => {
        // Lógica para rejeitar cookies
        console.log('Cookies rejeitados');
        setIsVisible(false);
    };

    return (
        <div className="CookiesConsent">
            <CookieConsent
                location="bottom"
                buttonText="Aceitar"
                enableDeclineButton
                declineButtonText="Rejeitar"
                cookieName="cookieConsent"
                expires={365}
                onAccept={handleAccept}
                onDecline={handleDecline}
                style={{
                    backgroundColor: "#ffffff",
                    color: "#000000",
                    borderRadius: "24px",
                    width: "1200px",
                    height: "140px",
                    display: "flex",
                    margin: "auto",
                    alignItems: "center",
                    left: "0",
                    right: "0",
                }}
                buttonStyle={{
                    backgroundColor: "#2cb476",
                    color: "white",
                    borderRadius: "5px",
                    width: "110px",
                    height: "50px",
                    fontSize: "14px"
                }}
                declineButtonStyle={{
                    backgroundColor: 'transparent',
                    color: "#2cb476",
                    borderRadius: "5px",
                    border: "1px solid #e0e0e0",
                    width: "110px",
                    height: "50px",
                    fontSize: "14px"
                }}
            >
                <h6 className='title-cookies'>Controle sua privacidade</h6>
                <p className='text-cookies'>Podemos colocá-los para análise dos nossos dados de visitantes, para melhorar o nosso site, mostrar conteúdos personalizados e para lhe proporcionar uma ótima experiência no site. Para mais informações sobre os cookies que utilizamos, abra as configurações. <a href='#politica-de-privacidade'>Política de privacidade</a></p>
            </CookieConsent>
        </div>
    );
};

export default CookiesConsent;

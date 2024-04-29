import '../../main.scss'
import Logo from "../../assets/logo.png"
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';
import { Globe } from '@phosphor-icons/react';
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default function Header() {
    return (
        <header className="header">
            <style type="text/css">
                {`
    .btn-flat {
        background-color: transparent !important;
        color: #4b4b4b;
        font-size: 12px;
        margin-top: 10px !important;
    }

    .btn-flat:hover {
        color: #4b4b4b;
        text-decoration: underline;
    }

    .btn-list-second {
        background-color: transparent !important;
        color: #ffffff;
        font-size: 12px;
        margin-top: 10px !important;
    }

    .btn-list-second:hover {
        color: #ffffff;
        text-decoration: underline;
    }

    .btn-header {
        background-color: white;
        padding: 10px 20px 10px 20px;
        margin-top: 0.5vh;
        border-radius: 4%;
        cursor: pointer;
        color: #4b4b4b;
        font-size: 12px;
    }

    .btn-header:hover {
        background-color: #f1f1f1;
    }
    `}
            </style>

            <img src={Logo} alt='Imagem da logo da empresa' className="logo" />

            <nav className='nav'>
                <div>
                    <ul className="nav">
                        <Button id="dropdown-basic-button" title="Soluções" variant="flat" className='nav-list-text'>Sobre</Button>

                        <DropdownButton id="dropdown-basic-button" title="Soluções" variant="flat" className='nav-list-text'>
                            <Dropdown.Item href="#/action-1">Descarte de eletrônicos</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Descarte de importação temporária com crédito</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Sanitização de mídia</Dropdown.Item>
                        </DropdownButton>

                        <Button id="dropdown-basic-button" title="Compense o CO²" variant="flat" className='nav-list-text'>Compense o CO²</Button>
                    </ul>
                </div>

                <div>
                    <ul className="nav-list">
                        <Button id="dropdown-basic-button" title="Como Funciona?" variant="list-second" className='nav-list-text'>Como Funciona?</Button>

                        <Button id="dropdown-basic-button" title="Blog" variant="list-second" className='nav-list-text'>Blog</Button>

                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Globe size={22} style={{ marginTop: '1vh' }} color='#ffffff' />
                            <DropdownButton id="dropdown-basic-button" title={
                                <>
                                    <span className="fi fi-us fis" /> ENG
                                </>
                            }
                                variant="list-second"
                                className='nav-list-text'>
                                <Dropdown.Item href="#/action-1"><span className="fi fi-de fis" /> DEU</Dropdown.Item>
                                <Dropdown.Item href="#/action-2"><span className="fi fi-it fis" /> ITA</Dropdown.Item>
                                <Dropdown.Item href="#/action-3"><span className="fi fi-es fis" /> ESP</Dropdown.Item>
                                <Dropdown.Item href="#/action-1"><span className="fi fi-br fis" /> PT</Dropdown.Item>
                            </DropdownButton>
                        </div>

                        <Button id="dropdown-basic-button" title="Fale Conosco" variant="header">Fale Conosco</Button>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
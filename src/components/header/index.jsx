import '../../main.scss'
import Logo from "../../assets/logo.png"
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';
import { Globe } from '@phosphor-icons/react';

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

    .btn-list-second {
        background-color: transparent !important;
        color: #ffffff;
        font-size: 12px;
        margin-top: 10px !important;
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
    `}
            </style>

            <img src={Logo} alt='Imagem da logo da empresa' className="logo" />

            <nav className='nav'>
                <div>
                    <ul className="nav">
                        <Button id="dropdown-basic-button" title="Soluções" variant="flat" className='nav-list-text'>Sobre</Button>

                        <DropdownButton id="dropdown-basic-button" title="Soluções" variant="flat" className='nav-list-text'>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>

                        <DropdownButton id="dropdown-basic-button" title="Compense o CO²" variant="flat" className='nav-list-text'>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>
                    </ul>
                </div>

                <div>
                    <ul className="nav-list">
                        <DropdownButton id="dropdown-basic-button" title="Como Funciona?" variant="list-second" className='nav-list-text'>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>

                        <Button id="dropdown-basic-button" title="Blog" variant="list-second" className='nav-list-text'>Blog</Button>

                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Globe size={22} style={{ marginRight: '-0.5vw', marginTop: '1vh' }} color='#ffffff' />
                            <DropdownButton id="dropdown-basic-button" title="ENG" variant="list-second" className='nav-list-text'>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </DropdownButton>
                        </div>

                        <Button id="dropdown-basic-button" title="Soluções" variant="header">Fale Conosco</Button>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
import { useState } from 'react';
import '../../main.scss';
import Logo from '../../assets/logo.png';
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';
import { Globe, List } from '@phosphor-icons/react';
import '/node_modules/flag-icons/css/flag-icons.min.css';

export default function Header() {
    const [showLinks, setShowLinks] = useState(false);

    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };

    return (
        <header className="header">
            <div className='header-group'>
                <img src={Logo} alt='Imagem da logo da empresa' className="logo" />

                <button className="menu-burguer" onClick={toggleLinks}>
                    <List size={32} />
                </button>
            </div>

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
                            <DropdownButton id="dropdown-basic-button" title={
                                <>
                                    <Globe size={22} color='#ffffff' />
                                    <span className='title-language'>ENG</span>
                                </>
                            }
                                variant="list-second"
                                className='nav-list-text'>
                                <Dropdown.Item href="#/action-1"><span className="fi fi-de fis" /> DEU</Dropdown.Item>
                                <Dropdown.Item href="#/action-2"><span className="fi fi-it fis" /> ITA</Dropdown.Item>
                                <Dropdown.Item href="#/action-3"><span className="fi fi-es fis" /> ESP</Dropdown.Item>
                                <Dropdown.Item href="#/action-4"><span className="fi fi-us fis" /> ENG</Dropdown.Item>
                                <Dropdown.Item href="#/action-5"><span className="fi fi-br fis" /> PT</Dropdown.Item>
                            </DropdownButton>
                        </div>
                        <Button id="dropdown-basic-button" title="Fale Conosco" variant="header">Fale Conosco</Button>
                    </ul>
                </div>
            </nav>

            {/* Lista de links mobile */}
            {showLinks && (
                <div className="link-list">
                    <ul>
                        <Button id="dropdown-basic-button" title="Soluções" variant="flat" className='nav-list-text'>Sobre</Button>
                        <DropdownButton id="dropdown-basic-button" title="Soluções" variant="flat" className='nav-list-text'>
                            <Dropdown.Item href="#/action-1">Descarte de eletrônicos</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Descarte de importação temporária com crédito</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Sanitização de mídia</Dropdown.Item>
                        </DropdownButton>
                        <Button id="dropdown-basic-button" title="Compense o CO²" variant="flat" className='nav-list-text'>Compense o CO²</Button>
                        <Button id="dropdown-basic-button" title="Como Funciona?" variant="flat" className='nav-list-text'>Como Funciona?</Button>
                        <Button id="dropdown-basic-button" title="Blog" variant="flat" className='nav-list-text'>Blog</Button>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <DropdownButton id="dropdown-basic-button" title={
                                <>
                                    <Globe size={22} color='#4b4b4b' />
                                    <span className='title-language'>ENG</span>
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
            )}
        </header>
    )
}
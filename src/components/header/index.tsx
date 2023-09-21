import styles from './header.module.scss';
import Footer from '../footer';
import Logo from '../../assets/logo/Logo.png';
import {
  Button,
  Collapse,
  DropdownItem,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from 'reactstrap';
import { GrFacebook } from 'react-icons/gr';
import { ImInstagram } from 'react-icons/im';
import { BsLinkedin } from 'react-icons/bs';

import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import classNames from 'classnames';

function Header() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const Redirected = (uri: string) => {
    if (open) setOpen(false);

    navigate(uri);
  };

  return (
    <div>
      <div>
        <div className={styles['header-social-midia']}>
          <div className={styles['group-social-midia']}>
            <Button
              title="Facebook dantt engenharia"
              onClick={() => {
                alert('facebook');
              }}
            >
              <GrFacebook />
            </Button>

            <Button
              title="Instagram dantt engenharia"
              onClick={() => {
                alert('facebook');
              }}
            >
              <ImInstagram />
            </Button>

            <Button
              title="Linkedin dantt engenharia"
              onClick={() => {
                alert('facebook');
              }}
            >
              <BsLinkedin />
            </Button>
          </div>
        </div>
        <div className={styles['header-page']}>
          <Navbar expand="md" light>
            <NavbarBrand
              style={{ cursor: 'pointer' }}
              onClick={() => navigate('/')}
            >
              <img src={Logo} width="165px" height="70px" />
            </NavbarBrand>
            <NavbarToggler onClick={() => setOpen(!open)} />
            <Collapse navbar isOpen={open}>
              <Nav className={styles['nav-confg']} navbar>
                <DropdownItem onClick={() => Redirected('/')}>
                  Página inicial
                </DropdownItem>
                <DropdownItem onClick={() => Redirected('/clientes')}>
                  Clientes
                </DropdownItem>
                <DropdownItem onClick={() => Redirected('/contatos')}>
                  Contatos
                </DropdownItem>
                <DropdownItem onClick={() => Redirected('/projetos')}>
                  Obras
                </DropdownItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </div>
      <div
        className={classNames({
          [styles['nav-confg-div']]: true,
        })}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Header;

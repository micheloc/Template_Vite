import styles from './footer.module.scss';

import { Button, Col, Label, Row } from 'reactstrap';
import { FaWhatsapp } from 'react-icons/fa';
import { GrFacebook } from 'react-icons/gr';

function Footer() {
  return (
    <div>
      <div className={styles.footer}>
        <center>
          <div style={{ paddingBottom: '40px' }} />
          <Row>
            <Col lg="4">
              <div className={styles['footer-group']}>
                <h3>Entre em contato atráves de nosso whatsapp</h3>
                <div className={styles.contato}>
                  <Button
                    color="link"
                    onClick={() => {
                      window.location.href =
                        'https://api.whatsapp.com/send?phone=5561993644876&text=Ol%C3%A1,%20tudo%20bem%20?%20%0AGostaria%20de%20solicitar%20um%20or%C3%A7amento!';
                    }}
                  >
                    <FaWhatsapp /> Evair Vieira
                  </Button>

                  <Button
                    color="link"
                    onClick={() => {
                      window.location.href =
                        'https://api.whatsapp.com/send?phone=5561994432255&text=Ol%C3%A1,%20tudo%20bem%20?%20%0AGostaria%20de%20solicitar%20um%20or%C3%A7amento!';
                    }}
                  >
                    <FaWhatsapp /> Luis Andre
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg="4">
              <div className={styles['footer-group']}>
                <h3>Curta nossa rede social</h3>
                <Button color="link">
                  <GrFacebook /> Dantt Engenharia
                </Button>
              </div>
            </Col>
            <Col lg="4">
              <div className={styles['footer-group']}>
                <h3>Informações do site</h3>
                <Button color="link">Página inicial</Button>
                <Button color="link">Clientes</Button>
                <Button color="link">Obras</Button>
              </div>
            </Col>
          </Row>
        </center>
      </div>
      <div className={styles.copyright}>
        <Label>DANTT ENGENHARIA ©Kings-Software - 2023</Label>
      </div>
    </div>
  );
}

export default Footer;

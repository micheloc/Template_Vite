import styles from './Contato.module.scss';
import { Col, Input, Label, Row } from 'reactstrap';

export default function Contatos() {
  return (
    <div className={styles.contact}>
      <div className={styles['title-page-contact']}>
        <div style={{ padding: '2%', color: 'whitesmoke' }}>
          <center>
            <h1>CONTATOS</h1>
          </center>
        </div>
      </div>
      <div className={styles['container-message']}>
        <Row>
          <Col lg="6">
            <div>
              <h3>Envie sua mensagem</h3>
              <br />
              <p>Seu nome * </p>
              <Input type="text" />
              <br />
              <p>E-mail * </p>
              <Input type="text" />

              <br />
              <p>Mensagem </p>
              <Input type="textarea" />
            </div>
          </Col>
          <Col lg="6">
            <div className={styles['container-information-contact']}>
              <center>
                <h3>Informações de contato</h3>
              </center>
              <br />
              <Row>
                <Col lg="6">
                  <Label>
                    <b>Fale conosco : </b>
                  </Label>
                  <p>Evair Vieira : (61) 9 9364-4876</p>
                  <p>Luis Andre : (61) 9 9443-2255</p>
                </Col>
                <Col lg="6">
                  <Label>
                    <b>Atendimento</b>
                  </Label>
                  <p>Segunda à Sexta Feira das 08:00 às 18:00</p>
                </Col>
              </Row>

              <Row>
                <Col lg="12">
                  <Label>
                    <b>Endereço</b>
                  </Label>
                  <p>....................................</p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

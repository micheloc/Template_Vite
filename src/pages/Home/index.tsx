import Carousel from '../../components/Carousel';
import styles from './Home.module.scss';

import { Col, Label, Row } from 'reactstrap';

import img_home from '../../assets/home/img.jpg';

function Home() {
  return (
    <div>
      <div className={styles['carousel-confg']}>
        <Carousel />
      </div>
      <div className={styles['config-description-information']}>
        <center>
          <div className={styles['config-titulo']}>
            <div>
              <h1>Qualidade e segurança</h1>
            </div>
            <div>
              <h2>É assim que se constrói!</h2>
            </div>
          </div>
          <div className={styles['config-description-spaces']}>
            <Row>
              <Col lg="4" className={styles['confg-col']}>
                <div className={styles['config-label']}>
                  <h2>Política de Qualidade</h2>
                  <Label>{`Na Dantt Engenharia, nossa política de qualidade é o alicerce que sustenta nossa excelência em engenharia civil. Com um compromisso inabalável com a qualidade, abraçamos os seguintes princípios:`}</Label>
                  <p>{`🌟 Satisfação do Cliente em Primeiro Lugar.`}</p>
                  <p>{`🏗️ Qualidade e Conformidade Inquestionáveis.`}</p>
                  <p>{`🚀 Melhoria Contínua e Inovação Constante.`}</p>
                  <p>{`👷 Equipe Altamente Qualificada.`}</p>
                  <p>{`🌿 Compromisso com a Sustentabilidade.`}</p>
                  <p>{`⚠️ Segurança em Primeiro Lugar.`}</p>
                  <p>{`🤝 Comunicação Transparente e Parceria Duradoura.`}</p>
                  <Label>{`A Política de Qualidade da Dantt Engenharia não é apenas um documento; é nosso compromisso de honrar esses princípios em cada projeto que realizamos. Revisamos regularmente nossa política para garantir que ela continue a guiar nossas operações com a máxima qualidade e integridade.`}</Label>
                  <br />
                  <Label>
                    {`Junte-se a nós na busca pela excelência em engenharia civil. Na Dantt Engenharia, sua visão é nossa missão, e sua satisfação é nosso legado. `}{' '}
                  </Label>
                </div>
              </Col>
              <Col lg="4" className={styles['confg-col-gold']}>
                <div className={styles['config-label']}>
                  <h2>Corpo Técnico Especializado.</h2>
                  <Label>{`Na Dantt Engenharia, nossa equipe técnica é o alicerce sólido que sustenta nossa excelência na área de construção civil. Com um compromisso inabalável com a qualidade e a inovação, nossos especialistas abraçam os seguintes princípios: `}</Label>
                  <p>🏗️ Engenheiros Civis Visionários.</p>
                  <p>🏛️ Arquitetos Criativos.</p>
                  <p>🔧 Técnicos Especializados.</p>
                  <p>👷 Gerentes de Projeto Experientes.</p>
                  <p>🌿 Profissionais Comprometidos com a Sustentabilidade.</p>
                  <p>🛡️ Equipe de Segurança Dedicada.</p>
                  <p>💬 Comunicação Transparente e Parceria Duradoura.</p>
                  <Label>{`
                    Na Dantt Engenharia, nossa equipe técnica é mais do que uma força de trabalho; são parceiros na busca pela excelência. Cada membro contribui com sua experiência e paixão para garantir que nossos projetos se destaquem em qualidade, inovação e sustentabilidade. Combinamos experiência com visão, resultando em soluções de construção civil que transcendem as expectativas de nossos clientes.                
                    Junte-se a nós em nossa jornada de construir um futuro melhor e mais sólido. Nossa equipe técnica está pronta para transformar sua visão em realidade.                
                  `}</Label>
                </div>
              </Col>
              <Col lg="4" className={styles['confg-col']}>
                <div className={styles['config-label']}>
                  <h2>Tradição: Construindo um Futuro Sólido.</h2>
                  <Label>{`A Dantt Engenharia tem sido sinônimo de tradição e excelência na indústria de construção civil. Com uma jornada que se estende por quase uma década, nossa empresa se orgulha de ter construído não apenas estruturas impressionantes, mas também uma reputação sólida e duradoura. Como: `}</Label>
                  <p>🌳 Raízes que Nutrem a Inovação.</p>
                  <p>🤝 Relações Construídas com Confiança.</p>
                  <p>🌟 Excelência Constante.</p>
                  <p>🚀 Compromisso com o Futuro.</p>
                  <Label>{`Na Dantt Engenharia, nossa tradição é nossa força motriz. Ela nos lembra de onde viemos e nos inspira a alcançar alturas ainda maiores. Junte-se a nós enquanto continuamos a construir um futuro sólido, onde a tradição e a inovação caminham de mãos dadas.`}</Label>
                </div>
              </Col>
            </Row>
          </div>
        </center>
      </div>
      <div className={styles['confg-img-description-dantt']}>
        <Row>
          <Col lg="6">
            <div>
              <img
                src={img_home}
                alt="imagem de descrição"
                width="100%"
                height="390px"
              />
            </div>
          </Col>
          <Col md="6" style={{ textAlign: 'justify' }}>
            <h1>Sobre a Dantt Engenharia</h1>
            <p>{`
              A empresa atua em diversos segmentos do mercado como, 
              obras de edificações industriais, institucionais, 
              modais, terraplenagem, infraestrutura, estradas, 
              viadutos, pistas de alto desempenho e projetos de recuperação ambiental e de restauro. 
              A busca por entregar mais do que apenas bons resultados e 
              competência no desenvolvimento dos projetos, 
              garante a satisfação dos nossos clientes.
            `}</p>
          </Col>
        </Row>
      </div>
      <div className={styles['config-projects-gallery']}>
        <center>
          <div>
            <h2>DESTAQUES</h2>
          </div>
          <div className={styles['confg-projetos-imgs']}>
            <Row>
              <Col col="4">
                <div>
                  <img src={img_home} alt="imagem de descrição" />
                </div>
              </Col>
              <Col col="4">
                <div>
                  <img src={img_home} alt="imagem de descrição" />
                </div>
              </Col>
              <Col col="4">
                <div>
                  <img src={img_home} alt="imagem de descrição" />
                </div>
              </Col>
            </Row>
          </div>
        </center>
      </div>
    </div>
  );
}

export default Home;

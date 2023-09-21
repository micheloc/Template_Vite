import viewer from '../../data/projects_viewer.json';
import ImgsViewer from './loading_imgs';
import styles from './Projeto.module.scss';

export default function Projetos() {
  return (
    <div className={styles['container']}>
      <div className={styles['title-page']}>
        <div style={{ padding: '2%', color: 'whitesmoke' }}>
          <center>
            <h1>OBRAS</h1>
          </center>
        </div>
      </div>
      <div className={styles.item}>
        {viewer.map((item) => (
          <ImgsViewer key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

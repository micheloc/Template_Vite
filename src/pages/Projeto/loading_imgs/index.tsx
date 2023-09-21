import Viewers from '../../../data/projects_viewer.json';
import LstImgs from '../carousel_obras_select';
import styles from './Img.module.scss';

import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import React, { useState } from 'react';

type Props = (typeof Viewers)[0];

export default function ImgsViewer(props: Props) {
  const { id, path } = props;
  const [idSelect, setId] = useState(1);
  const [openModal, setOpenModal] = useState(false);

  const OpenModal = (id: number) => {
    setId(id);

    setOpenModal(!openModal);
  };

  return (
    <div>
      <Modal
        isOpen={openModal}
        size="xl"
        toggle={() => {
          setOpenModal(false);
          setId(1);
        }}
      >
        <ModalHeader toggle={() => setOpenModal(false)}>
          Galeria de fotos
        </ModalHeader>
        <ModalBody>
          <LstImgs id={idSelect} />
        </ModalBody>
      </Modal>

      <div className={styles.item__imagem}>
        <img
          id={id.toString()}
          src={path}
          onClick={(e) => {
            OpenModal(parseInt(e.currentTarget.id));
          }}
        />
      </div>
    </div>
  );
}

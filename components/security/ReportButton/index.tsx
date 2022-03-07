import React, { useState } from 'react';
import { Button } from '@mui/material';
import CreateIcon from '@mui/icons-material/ReportProblem';
import { makeStyles } from '@mui/styles';
import Modal from '../Modal/index';
import { Form } from '../Form/index';
import { CloseModalButton } from '../CloseModalButton';

const useStyle = makeStyles({
  reportButton: {
    background: 'linear-gradient(90deg,#ae4eff,#5f64ff)'
  },
  modal: {
    background: 'rgba(32, 35, 41, .8)',
    position: 'fixed',
    top: '-10px',
    left: '-10px',
    right: '-10px',
    bottom: '-10px',
    display: 'flex',
    justifycontent: 'center',
    alignitems: 'center',
    color: 'white',
    zindex: '2'
  }
});

function ReportButton() {
  const [showModal, setShowModal] = useState(false);

  const classes = useStyle();
  return (
    <React.Fragment>
      <Button
        className={classes.reportButton}
        variant="contained"
        startIcon={<CreateIcon />}
        onClick={() => setShowModal(true)}
      >
        Report Abuse
      </Button>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <Form>
          <CloseModalButton cerrarModal={setShowModal} />
        </Form>
      </Modal>
      <br />
      <br />
    </React.Fragment>
  );
}

export { ReportButton };

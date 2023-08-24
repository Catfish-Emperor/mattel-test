import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

export default function Machine3(props) {
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('');

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  const mainButtonColor = selectedStatus === 'option2' ? 'danger' : selectedStatus === 'option1' ? 'success' : selectedStatus === 'option3' ? 'warning' : 'success';

  const handleCloseFirstModal = () => {
    setIsFirstModalOpen(false);
  };

  const handleCloseSecondModal = () => {
    setIsSecondModalOpen(false);
  };

  return (
    <div>
      
        <Button variant={mainButtonColor} onClick={() => setIsFirstModalOpen(true)}>
          {props.name}
        </Button>
      

      {/* First Modal */}
      <Modal size='lg' show={isFirstModalOpen} onHide={handleCloseFirstModal}>
        <Modal.Header closeButton>
          <Modal.Title>Machine Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src='/machine-data.jpg' alt='Machine Data' className="img-fluid" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseFirstModal}>Close</Button>
          <Button variant="primary" onClick={() => setIsSecondModalOpen(true)}>Status Machine</Button>
          <Button variant="secondary">History</Button>
        </Modal.Footer>
      </Modal>

      {/* Status Modal */}
      <Modal show={isSecondModalOpen} onHide={handleCloseSecondModal}>
        <Modal.Header closeButton>
          <Modal.Title>Status Machine</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Select value={selectedStatus} onChange={handleStatusChange}>
            <option value="option1">Running</option>
            <option value="option2">Machine Breakdown</option>
            <option value="option3">Loto Dept</option>
          </Form.Select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseSecondModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

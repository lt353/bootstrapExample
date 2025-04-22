import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function InfoModal(props) {
   return (
      <Modal show={props.show} onHide={props.hide}>
         <Modal.Header closeButton>
            <Modal.Title>Form Information</Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <p>Name: {props.user.fullName}</p>
            <p>Email: {props.user.emailAddr}</p>
            <p>Notifications: {props.user.sendNotifications ? "true" : "false"}</p>
         </Modal.Body>
         <Modal.Footer>
            <Button variant="primary" onClick={props.hide}>
               OK
            </Button>
         </Modal.Footer>
      </Modal>
   );
}

export default InfoModal;

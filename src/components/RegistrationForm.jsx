import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import InfoModal from "./InfoModal";

function RegistrationForm() {

  // For handling modal
  const [isModalVisible, setIsModalVisible] = useState(false);
  const hideModal = () => setIsModalVisible(false);
  const showModal = () => setIsModalVisible(true);

  // Form values to display in the Modal
  const [formInfo, setFormInfo] = useState({
      fullName: "",
      emailAddr: "",
      sendNotifications: false
  });

  function handleSubmit(event) {
      event.preventDefault();
      const form = event.target;

      // Show info from the form
      setFormInfo({
        fullName: form.fullName.value,
        emailAddr: form.email.value,
        sendNotifications: form.notifications.checked
      });

      showModal();
  }

  return (
      <>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="fullName">
              <Form.Label>Full name</Form.Label>
              <Form.Control type="text" placeholder="First Last" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="user@email.com" />
              <Form.Text className="text-muted">
                  Your email address will never be shared.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="notifications">
              <Form.Check type="checkbox" label="Receive email notifications" />
            </Form.Group>
            <Button type="submit">
              Submit
            </Button>
        </Form>

        <InfoModal
            show={isModalVisible}
            hide={hideModal}
            user={formInfo}
        />
      </>
  );
}

export default RegistrationForm;

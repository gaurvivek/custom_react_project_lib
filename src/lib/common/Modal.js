import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import FormButton from './form/FormButton';

export default function CCWModal({
  show,
  title,
  body,
  closeBtnHandler,
  okBtnHandler,
}) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const confirmHandler = () => {
    setIsSubmitting(true);
    okBtnHandler();
  };
  return (
    <>
      <Modal centered size="lg" show={show} onHide={closeBtnHandler}>
        <Modal.Header closeButton>
          <Modal.Title as="span" bsPrefix="fw-bold">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
          <FormButton
            disabled={isSubmitting}
            variant="link"
            type="button"
            btnText="Cancel"
            otherProps={{
              onClick: () => closeBtnHandler(),
            }}
            dataTestId="modal-cancel"
          />
          <FormButton
            disabled={isSubmitting}
            type="button"
            btnText="Confirm"
            otherProps={{
              onClick: () => confirmHandler(),
            }}
            dataTestId="modal-confirm"
          />
        </Modal.Footer>
      </Modal>
    </>
  );
}

CCWModal.propTypes = {
  show: PropTypes.bool,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  closeBtnHandler: PropTypes.func.isRequired,
  okBtnHandler: PropTypes.func.isRequired,
};

CCWModal.defaultProps = {
  show: false,
};

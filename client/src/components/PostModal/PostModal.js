import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export const PostModal = ({ buttonLabel, className, modal, setModal, modalHeader, modalBody, handleMouseLeave }) => {
	const toggle = () => {
		setModal(!modal);
		handleMouseLeave();
	};

	return (
		<div>
			<div onClick={toggle}>{buttonLabel}</div>
			<Modal isOpen={modal} toggle={toggle} className={className}>
				<ModalHeader toggle={toggle}>{modalHeader}</ModalHeader>
				<ModalBody>{modalBody}</ModalBody>
				<ModalFooter>
					<Button color="primary" onClick={toggle}>
						Do Something
					</Button>{' '}
					<Button color="secondary" onClick={toggle}>
						Cancel
					</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
};

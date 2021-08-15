// import libraries/packages
import PropTypes from 'prop-types';
// import UI components
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
// import styles - using module to prevent other components from being affected by CSS
import styles from '../styles/postmodal.module.css';
export const PostModal = ({
	buttonLabel,
	className,
	modal,
	setModal,
	modalHeader,
	modalBody,
	authorName,
	authorCatchPhrase
}) => {
	const toggle = () => {
		setModal(!modal);
	};

	return (
		<div>
			<div onClick={toggle}>{buttonLabel}</div>
			<Modal isOpen={modal} toggle={toggle} className={className}>
				<ModalHeader toggle={toggle}>{modalHeader}</ModalHeader>
				<ModalBody>
					<div>
						<span className={styles['boldPhrases']}>Author Name</span> <br />
						<p className={styles['modalParagraphs']}>{authorName}</p>
					</div>
					<div>
						<span className={styles['boldPhrases']}>Author CatchPhrase</span> <br />
						<p className={styles['modalParagraphs']}>{authorCatchPhrase}</p>
					</div>
					<div>
						<span className={styles['boldPhrases']}>Post Description</span> <br />
						<p className={styles['modalParagraphs']}>{modalBody}</p>
					</div>
				</ModalBody>
			</Modal>
		</div>
	);
};

PostModal.propTypes = {
	buttonLabel: PropTypes.string,
	className: PropTypes.string,
	modal: PropTypes.bool,
	setModal: PropTypes.func,
	modalHeader: PropTypes.string,
	authorName: PropTypes.string,
	authorCatchPhrase: PropTypes.string
};

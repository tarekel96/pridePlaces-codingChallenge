// import libraries/packages
import { useState } from 'react';
// import UI components
import { ListGroupItem } from 'reactstrap';
import { PostModal } from '../PostModal/PostModal.js';
// import styles - using module to prevent other components from being affected by CSS
import styles from '../styles/post.module.css';

export const Post = ({ title, id, authorName, authorCatchPhrase, postTitle, postBody, postId, postUserId }) => {
	const [ colorState, setColorState ] = useState('');
	const [ modal, setModal ] = useState(false);
	const handleMouseEnter = () => {
		const time = 0; // amt time for setTimeout - set to 0 so post bg color states change instantly
		const timerId = setTimeout(() => {
			setColorState('info'); // bootstrap util class
		}, time);
		// clean up function to clear timer
		return () => {
			clearInterval(timerId);
		};
	};
	const handleMouseLeave = () => {
		const time = 0; // amt time for setTimeout - set to 0 so post bg color states change instantly
		const timerId = setTimeout(() => {
			setColorState('');
		}, time);
		// clean up function to clear timer
		return () => {
			// do not clear the timer if modal is still open
			if (modal) {
				return;
			}
			clearInterval(timerId);
		};
	};
	return (
		<ListGroupItem
			key={id}
			className={styles['post']}
			color={colorState}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<PostModal
				buttonLabel={title}
				modal={modal}
				setModal={setModal}
				handleMouseLeave={handleMouseLeave}
				modalHeader={title}
				modalBody={postBody}
				authorName={authorName}
				authorCatchPhrase={authorCatchPhrase}
			/>
		</ListGroupItem>
	);
};

// import libraries/packages
import { useState } from 'react';
import PropTypes from 'prop-types';
// import UI components
import { ListGroupItem } from 'reactstrap';
import { PostModal } from '../PostModal/PostModal.js';
// import styles - using module to prevent other components from being affected by CSS
import styles from '../styles/post.module.css';

export const Post = ({ title, id, authorName, authorCatchPhrase, postTitle, postBody, postId, postUserId }) => {
	const [ modal, setModal ] = useState(false);
	return (
		<ListGroupItem key={id} className={styles['post']}>
			<PostModal
				buttonLabel={title}
				modal={modal}
				setModal={setModal}
				modalHeader={title}
				modalBody={postBody}
				authorName={authorName}
				authorCatchPhrase={authorCatchPhrase}
			/>
		</ListGroupItem>
	);
};

Post.propTypes = {
	title: PropTypes.string,
	id: PropTypes.number,
	authorName: PropTypes.string,
	authorCatchPhrase: PropTypes.string,
	postTitle: PropTypes.string,
	postBody: PropTypes.string,
	postId: PropTypes.number,
	postUserId: PropTypes.number
};

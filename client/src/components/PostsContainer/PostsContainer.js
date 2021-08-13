// import UI components
import { ListGroup } from 'reactstrap';
// import styles - using module to prevent other components from being affected by CSS
import styles from '../styles/posts-container.module.css';

export const PostsContainer = ({ children }) => {
	return <ListGroup className={styles['postsContainer']}>{children}</ListGroup>;
};

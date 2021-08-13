// import libraries/packages
import { useState } from 'react';
// import UI components
import { ListGroupItem } from 'reactstrap';
// import styles - using module to prevent other components from being affected by CSS
import styles from '../styles/post.module.css';

export const Post = ({ id, userId, title, body }) => {
	const [ colorState, setColorState ] = useState('');
	const handleMouseEnter = () => {
		const time = 0; // half a second
		const timerId = setTimeout(() => {
			setColorState('info');
		}, time);
		return () => {
			clearInterval(timerId);
		};
	};
	const handleMouseLeave = () => {
		const time = 0; // half a second
		const timerId = setTimeout(() => {
			setColorState('');
		}, time);
		return () => {
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
			{title}
		</ListGroupItem>
	);
};

// import UI components
import { Spinner } from 'reactstrap';
// import styles - using module to prevent other components from being affected by CSS
import styles from '../styles/loading.module.css';
export const Loading = () => {
	return (
		<div className={styles['loadingSpinnerContainer']}>
			<Spinner className={styles['loadingSpinner']} color="info" children="" />
		</div>
	);
};

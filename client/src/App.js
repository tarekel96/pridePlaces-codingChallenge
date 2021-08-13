// import libraries/packages
import { useState, useEffect } from 'react';
// import util methods
import { fetchData } from './utils/fetchData';
// import UI components
import { PostsContainer } from './components/PostsContainer/PostsContainer';
import { Post } from './components/Post/Post';
// import styles
import './App.css';

const App = () => {
	const [ posts, setPosts ] = useState([]);
	useEffect(() => {
		fetchData('https://jsonplaceholder.typicode.com/posts', setPosts);
	}, []);
	return (
		<div>
			<h1 id="app-header">Posts</h1>

			<PostsContainer>
				{posts.map(({ id, userId, title, body }) => <Post key={id} title={title} />)}
			</PostsContainer>
		</div>
	);
};

export default App;

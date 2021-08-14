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
	const [ authors, setAuthors ] = useState([]);
	const [ posts, setPosts ] = useState([]);
	const [ loading, setLoading ] = useState(true);
	const [ userPosts, setUserPosts ] = useState([]);

	useEffect(() => {
		const fetchAuthors = fetch('https://jsonplaceholder.typicode.com/users');
		const fetchPosts = fetch('https://jsonplaceholder.typicode.com/posts');

		Promise.all([ fetchAuthors, fetchPosts ]).then(async ([ jsonAuthors, jsonPosts ]) => {
			const fetchedAuthors = await jsonAuthors.json();
			const fetchedPosts = await jsonPosts.json();
			setLoading(false);

			const findAuthor = (userId) => {
				let foundAuthor = fetchedAuthors.find((author) => userId === author.id);
				let authorInfo = {
					name: foundAuthor.name,
					catchPhrase: foundAuthor.company.catchPhrase
				};
				return authorInfo;
			};

			let tempUserPosts = [];
			fetchedPosts.forEach((post) => {
				let author = findAuthor(post.userId);
				let currUserPost = {
					authorName: author.name,
					authorCatchPhrase: author.catchPhrase,
					postTitle: post.title,
					postBody: post.body,
					postId: post.id,
					postUserId: post.userId
				};
				tempUserPosts.push(currUserPost);
			});
			setUserPosts(tempUserPosts);
		});
	});

	// useEffect(() => {
	// 	fetchData('https://jsonplaceholder.typicode.com/posts', setPosts);
	// 	fetchData('https://jsonplaceholder.typicode.com/users', setUsers);
	// 	setLoading(false);
	// }, []);

	// useEffect(() => {
	// 	if (users.length === 0 || posts.length === 0) {
	// 		return;
	// 	}

	// const findAuthor = (userId) => {
	// 	let foundUser = users.find((user) => userId === user.id);
	// 	// console.log('foundUser');
	// 	// console.log(foundUser);
	// 	let userInfo = {
	// 		name: foundUser.name,
	// 		catchPhrase: foundUser.company.catchPhrase
	// 	};
	// 	return userInfo;
	// };

	// 	posts.forEach((post) => {
	// 		let author = findAuthor(post.userId);
	// 		let currUserPost = {
	// 			authorName: author.name,
	// 			authorCatchPhrase: author.catchPhrase,
	// 			postTitle: post.title,
	// 			postBody: post.body,
	// 			postId: post.id,
	// 			postUserId: post.userId
	// 		};
	// 		userPosts.push(currUserPost);
	// 	});
	// 	setLoading(false);
	// }, []);

	return (
		<div>
			<h1 id="app-header">Posts</h1>
			{/* <PostsContainer>
				{!loading ? (
					posts.map(
						({ id, title, authorName, authorCatchPhrase, postTitle, postBody, postId, postUserId }) => (
							<Post key={id} title={title} />
						)
					)
				) : (
					<h1>Loading...</h1>
				)}
			</PostsContainer> */}

			<PostsContainer>
				{!loading ? (
					userPosts.map(({ authorName, authorCatchPhrase, postTitle, postBody, postId, postUserId }) => (
						<Post key={postId} title={postTitle} />
					))
				) : (
					<h1>Loading...</h1>
				)}
			</PostsContainer>
		</div>
	);
};

export default App;

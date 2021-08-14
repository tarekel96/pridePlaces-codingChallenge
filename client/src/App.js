// import libraries/packages
import { useState, useEffect } from 'react';
// import util methods
import { findAuthor } from './utils/fetchData';
// import UI components
import { PostsContainer } from './components/PostsContainer/PostsContainer';
import { Post } from './components/Post/Post';
// import styles
import './App.css';

const App = () => {
	// STATE VARS
	// loading - is true until the data has been fetched and mapped into authorPosts
	const [ loading, setLoading ] = useState(true);
	// authors - all of the authors from jsonplaceholder
	const [ authors, setAuthors ] = useState([]);
	// posts - all of the posts from jsonplaceholder
	const [ posts, setPosts ] = useState([]);
	// authorPosts - each post with author name and author catchPhrase
	const [ authorPosts, setAuthorPosts ] = useState([]);

	// fetch data in useEffect Hook
	useEffect(() => {
		// the two fetch requests that will be resolved with Promise.all()
		const fetchAuthors = fetch('https://jsonplaceholder.typicode.com/users');
		const fetchPosts = fetch('https://jsonplaceholder.typicode.com/posts');

		Promise.all([ fetchAuthors, fetchPosts ]).then(async ([ jsonAuthors, jsonPosts ]) => {
			const fetchedAuthors = await jsonAuthors.json();
			const fetchedPosts = await jsonPosts.json();

			// array that will be directly mutated until mapping is finished
			let tempUserPosts = [];
			// map each post and author into tempUserPosts
			fetchedPosts.forEach((post) => {
				let author = findAuthor(fetchedAuthors, post.userId);
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
			// tempUserPosts is done being mapped -> set tempUserPosts value
			setAuthorPosts(tempUserPosts);
			// loading set to false bc author and post data has been fetched and mapped
			setLoading(false);
		});
	});

	return (
		<div>
			<h1 id="app-header">Posts</h1>

			{!loading ? (
				<PostsContainer>
					{authorPosts.map(({ authorName, authorCatchPhrase, postTitle, postBody, postId, postUserId }) => (
						<Post key={postId} title={postTitle} />
					))}
				</PostsContainer>
			) : (
				<h1>Loading...</h1>
			)}
		</div>
	);
};

export default App;

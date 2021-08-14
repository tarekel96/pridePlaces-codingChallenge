// helper function for finding the post's author given the post's userId
export const findAuthor = (authorArray, userId) => {
	let foundAuthor = authorArray.find((author) => userId === author.id);
	let authorInfo = {
		name: foundAuthor.name,
		catchPhrase: foundAuthor.company.catchPhrase
	};
	return authorInfo;
};

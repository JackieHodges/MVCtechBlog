const newCommentHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const comment = document.querySelector('#newComment-text').value.trim();
    const postId = post.id;
    console.log(`the post id is ${postId}`);
  
    if (comment) {
      // Send the e-mail and password to the server
      const response = await fetch('/api/comment/', {
        method: 'POST',
        body: JSON.stringify({ comment }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // document.location.replace('/post/1');
      } else {
        alert('Failed to post comment');
      }
    }
  };
  
  document
    .querySelector('.newComment-form')
    .addEventListener('submit', newCommentHandler);
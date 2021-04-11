const deletePost = async (event) => {
  if (event.target.hasAttribute('post-id')){  
    event.preventDefault();
      const postId = event.target.getAttribute('post-id');
      const response = await fetch(`/api/post/${postId}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        document.location.replace(`/dashboard`);
      } else {
        alert('Failed to delete post');
      }
    }
  };

  document.querySelector('.all-posts')
  .addEventListener('click', deletePost);

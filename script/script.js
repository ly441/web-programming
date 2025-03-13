document.addEventListener('DOMContentLoaded', function() {
  // Select the required elements
  const likeButton = document.querySelector('.like-button');
  const commentButton = document.querySelector('.comment-button');
  const submitCommentButton = document.querySelector('.submit-comment');
  const commentsSection = document.querySelector('.comments');
  const commentList = document.querySelector('.comment-list');
  const textarea = commentsSection.querySelector('textarea');

  // Like button click event
  likeButton.addEventListener('click', function() {
    // Check the current like state
    let liked = this.getAttribute('data-liked') === 'true';
    const likeCountSpan = this.querySelector('.like-count');
    let count = parseInt(likeCountSpan.textContent, 10);
    count++;
    likeCountSpan.textContent = count;

    // Get the text node that contains the heart icon
    // Assuming the first child is a text node containing the heart
    const heartTextNode = this.firstChild;
    
    if (liked) {
      // Update to "unliked" state: empty heart and decrement count
      this.setAttribute('data-liked', 'false');
      if (heartTextNode.nodeType === Node.TEXT_NODE) {
        heartTextNode.nodeValue = '♡ ';  // empty heart symbol
      }
      likeCountSpan.textContent = count - 1;
    } else {
      // Update to "liked" state: full heart and increment count
      this.setAttribute('data-liked', 'true');
      if (heartTextNode.nodeType === Node.TEXT_NODE) {
        heartTextNode.nodeValue = '❤ ';  // full heart symbol
      }
      likeCountSpan.textContent = count + 1;
    }
  });

  // Toggle the comment section visibility when the comment button is clicked
  commentButton.addEventListener('click', function() {
    if (commentsSection.style.display === 'none' || commentsSection.style.display === '') {
      commentsSection.style.display = 'block';
    } else {
      commentsSection.style.display = 'none';
    }
  });

  // Add the comment to the comment list when the submit button is clicked
  submitCommentButton.addEventListener('click', function() {
    const commentText = textarea.value.trim();
    if (commentText !== '') {
      const li = document.createElement('li');
      li.textContent = commentText;
      commentList.appendChild(li);
      textarea.value = ''; // Clear the textarea
    }
  });
});

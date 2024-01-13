// explore.js
document.addEventListener('DOMContentLoaded', () => {
 fetch('explore.json')
    .then(response => response.json())
    .then(data => {
      // Create the container div
      const container = document.createElement('div');
      container.className = 'tweet';

      // Add the avatar, username, handle, content, and image elements
      addElementWithClass(container, 'img', 'avatar', data.avatar);
      addElementWithClassAndText(container, 'a', 'username', 'Max', data.username);
      addElementWithClass(container, 'h5', 'handle', data.handle);
      addElementWithClass(container, 'p', 'content', data.content);
      addElementWithClass(container, 'img', 'image', data.image);

      // Add the interaction elements (likes, comments, shares, and more)
      addElementWithClass(container, 'img', 'likesicon', data.likesicon, null, true);
      addElementWithClassAndText(container, 'p', 'likes', data.likes);
      addElementWithClass(container, 'img', 'commentsicon', data.commentsicon, null, true);
      addElementWithClassAndText(container, 'p', 'comments', data.comments);
      addElementWithClass(container, 'img', 'sharesicon', data.sharesicon, null, true);
      addElementWithClassAndText(container, 'p', 'shares', data.shares);
      addElementWithClass(container, 'img', 'more', data.more);

      // Add the 'Learn More' link
      const learnMoreLink = addElementWithClass(container, 'a', 'link', null, data.link);
      learnMoreLink.textContent = 'Learn More';

      // Append the container to the document body
      document.body.appendChild(container);
    });
});

// Helper function to create an element with specified class and optional text content
function addElementWithClassAndText(parent, tag, className, text, src = null, isIcon = false) {
 const element = addElementWithClass(parent, tag, className, src, null, isIcon);
 if (text) {
    element.textContent = text;
 }
 return element;
}

// Helper function to create an element with specified class, optional src attribute, and isIcon flag
function addElementWithClass(parent, tag, className, src = null, text = null, isIcon = false) {
 const element = document.createElement(tag);
 element.className = className;
 if (src) {
    element.src = src;
 }
 if (text) {
    element.textContent = text;
 }
 if (isIcon) {
    element.alt = '';
 }
 parent.appendChild(element);
 return element;
}

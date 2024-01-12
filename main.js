const main = document.getElementById('main');

fetch('explore.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(tweet => {
            const tweetDiv = document.createElement('div');
            tweetDiv.classList.add('tweet');

            const profileImage = document.createElement('img');
            profileImage.classList.add('profile-image');
            profileImage.src = tweet.profileImage;

            const postImage = document.createElement('img');
            postImage.classList.add('post-image');
            postImage.src = tweet.postImage;

            const content = `
                <h2>${tweet.name} <a href="https://www.ariaplus.net">@${tweet.handle}</a></h2>
                <p>${tweet.caption}</p>
                <img src="https://ariaplus.net/like.svg" alt="Like">
                <span>${tweet.likes}</span>
                <img src="https://ariaplus.net/comment.svg" alt="Comment">
                <span>${tweet.comments}</span>
            `;

            tweetDiv.innerHTML = content;
            main.appendChild(tweetDiv);
        });
    });

fetch('explore.json')
 .then(response => response.json())
 .then(data => {
    let tweetSection = document.createElement('section');
    tweetSection.setAttribute('id', 'tweetSection');

    let tweetProfile = document.createElement('div');
    tweetProfile.setAttribute('id', 'tweetProfile');
    tweetProfile.textContent = data.profile;

    let tweetName = document.createElement('h2');
    tweetName.setAttribute('id', 'tweetName');
    tweetName.textContent = data.name;

    let tweetUsername = document.createElement('h3');
    tweetUsername.setAttribute('id', 'tweetUsername');
    tweetUsername.textContent = data.username;

    let tweetDate = document.createElement('p');
    tweetDate.setAttribute('id', 'tweetDate');
    tweetDate.textContent = data.date;

    let tweetContent = document.createElement('p');
    tweetContent.setAttribute('id', 'tweetContent');
    tweetContent.textContent = data.content;

    let tweetActions = document.createElement('div');
    tweetActions.setAttribute('id', 'tweetActions');
    tweetActions.textContent = data.actions;

    tweetSection.appendChild(tweetProfile);
    tweetProfile.appendChild(tweetName);
    tweetProfile.appendChild(tweetUsername);
    tweetProfile.appendChild(tweetDate);
    tweetSection.appendChild(tweetContent);
    tweetSection.appendChild(tweetActions);

    document.body.appendChild(tweetSection);
 });

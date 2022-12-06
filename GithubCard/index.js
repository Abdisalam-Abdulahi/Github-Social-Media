/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const cards = document.querySelector(".cards");
axios
  .get(" https://api.github.com/users/Abdisalam-Abdulahi")
  .then((response) => {
    info = response;
    // deal with the response data in here
    // console.log(response.data.bio);
    const lastResult = githubSearcher(response);
    cards.append(lastResult);
  })
  .catch((err) => {
    // deal with the error in here
    console.log(err);
  });
  axios
  .get(" https://api.github.com/users/bogoreh")
  .then((response) => {
    info = response;
    // deal with the response data in here
    // console.log(response.data.bio);
    const lastResult = githubSearcher(response);
    cards.append(lastResult);
  })
  .catch((err) => {
    // deal with the error in here
    console.log(err);
  });

axios
  .get(" https://api.github.com/users/shahednasser")
  .then((response) => {
    info = response;
    // deal with the response data in here
    // console.log(response.data.bio);
    const lastResult = githubSearcher(response);
    cards.append(lastResult);
  })
  .catch((err) => {
    // deal with the error in here
    console.log(err);
  });
  axios
  .get(" https://api.github.com/users/mhbaando")
  .then((response) => {
    info = response;
    // deal with the response data in here
    // console.log(response.data.bio);
    const lastResult = githubSearcher(response);
    cards.append(lastResult);
  })
  .catch((err) => {
    // deal with the error in here
    console.log(err);
  });
  axios
  .get(" https://api.github.com/users/wesbos")
  .then((response) => {
    info = response;
    // deal with the response data in here
    // console.log(response.data.bio);
    const lastResult = githubSearcher(response);
    cards.append(lastResult);
  })
  .catch((err) => {
    // deal with the error in here
    console.log(err);
  });
  axios
  .get(" https://api.github.com/users/bradtraversy")
  .then((response) => {
    info = response;
    // deal with the response data in here
    // console.log(response.data.bio);
    const lastResult = githubSearcher(response);
    cards.append(lastResult);
  })
  .catch((err) => {
    // deal with the error in here
    console.log(err);
  });
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

*/

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function githubSearcher(userObject) {
  const card = document.createElement("div");
  card.setAttribute("class", "card");
  const img = document.createElement("img");
  img.setAttribute("src", userObject.data.avatar_url);
  const cardInfo = document.createElement("div");
  cardInfo.setAttribute("class", "card-info");
  const name = document.createElement("h3");
  name.setAttribute("class", "name");
  name.textContent = userObject.data.name;
  const username = document.createElement("p");
  username.setAttribute("class", "username");
  username.textContent = userObject.data.name;
  const location = document.createElement("p");
  location.textContent = `location: ${userObject.data.location}`;
  const profile = document.createElement("p");
  const link = document.createElement("a");
  profile.textContent = `profile: ${userObject.data.url}`;
  // link.setAttribute("href", userObject.data.url);
  const followers = document.createElement("p");
  followers.textContent = `followers: ${userObject.data.followers}`;
  const following = document.createElement("p");
  following.textContent = `following: ${userObject.data.following}`;
  const bio = document.createElement("p");
  bio.textContent = `bio: ${userObject.data.bio}`;
  card.appendChild(img);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(link);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);
  return card;
}

/*
  STEP 4: Pass the data received from Github into your function, and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers, manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each user, and adding that card to the DOM.
*/



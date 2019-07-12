/* Step 1: using axios, send a GET request to the following URL 
           (replacing the placeholder with your Github name):
           https://api.github.com/users/<your name>
*/
//Getting an error that this has already been defined
// const myPromise = axios.get('https://api.github.com/users/szureti');
// console.log(myPromise)

https://api.github.com/users/szureti

//define users to be displayed
  var p1 = axios.get(`https://api.github.com/users/tetondan`); 
  var p2 = axios.get(`https://api.github.com/users/dustinmyers`);
  var p3 = axios.get(`https://api.github.com/users/justsml`); 
  var p4 = axios.get(`https://api.github.com/users/luishrd`); 
  var p5 = axios.get(`https://api.github.com/users/bigknell`);
  

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/
        
        /* Step 4: Pass the data received from Github into your function, 
        create a new component and add it to the DOM as a child of .cards
        */
       
       /* Step 5: Now that you have your own card getting added to the DOM, either 
       follow this link in your browser https://api.github.com/users/<Your github name>/followers 
       , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.

          https://api.github.com/users/SZureti/followers

          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

//I FEEL LIKE THERE'S AN EASIER WAY TO DO THIS, BUT IT WORKS...///////

const followersArray = [
  'szureti', 'tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell', 'cdotdidit', 'andrewbfox', "DeejayEaster", "fskeen", "daredtech", "thisbenrogers", "bryanszendel", "lisaMTayl", "KevinTou", "arvagas", "ehalsmer", "Obaida-Albaroudi"
];

const cards = document.querySelector('.cards');
 

///////FOLLOWERS ARRAY//////////
axios.get(' https://api.github.com/users/SZureti/followers')
.then(data => {
  console.log('Data From Followers: ', data.data)
  data.data.forEach(el => {followersArray.push(el.login)})
  console.log('Created followersArray:', followersArray)
})
.catch (error => {
  console.log('ERROR WITH followersArray', error)
})
//////////// END FOLLOWERS ARRAY////////////



followersArray.forEach(follower => {
  axios.get(`https://api.github.com/users/${follower}`)
  .then(data => {
    // createCard(data);
    console.log('Created New Card For ', follower);
    const user = data.data
    console.log(user)
    cards.appendChild(newCards(user))
  })
  .catch(error => {
    console.log('ERROR OCCURRED WHILE TRYING TO CREATE A NEW CARD FOR FOLLOWER', error)
  })
})
console.log(followersArray);


//Info for EACH CARD 
function newCards(myCard){
  const card = document.createElement('div');
  const pic = document.createElement('img');
  const card_info = document.createElement('div');
  const name = document.createElement('h3');
  const userName = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const address = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  card.classList.add(`card`);
  card_info.classList.add(`card-info`);
  name.classList.add(`name`);
  userName.classList.add(`username`);

  pic.src = myCard.avatar_url;
  name.textContent = myCard.name;
  userName.textContent = myCard.login;
  location.textContent = `Location: ${myCard.location}`;
  // profile.innerHTML = `Profile: <a href=${myCard.url}>${myCard.url}</a>`;
  
  profile.textContent = `Profile:`;
  address.textContent = myCard.html_url
  address.href = myCard.html_url

  followers.textContent = `Followers: ${myCard.followers}`;
  following.textContent = `Following: ${myCard.following}`;
  bio.textContent = `Bio: ${myCard.bio}`;

  card.appendChild(pic);
  card.appendChild(card_info);
  card_info.appendChild(name);
  card_info.appendChild(userName);
  profile.appendChild(address);
  card_info.appendChild(location);
  card_info.appendChild(profile);
  card_info.appendChild(followers);
  card_info.appendChild(following);
  card_info.appendChild(bio);
  return card  
}



//////////DIDN'T WORK -----IDK WHY////////////
// followersArray.push(myPromise, p1, p2, p3, p4, p5);
// Promise.all(followersArray)
// .then(userCards => {
//   userCards.forEach(data => {
//     const userCard = data.data
//     console.log(userCard)
//     cards.appendChild(me(info))
//   })
// })
// .catch(error => {
//   return "ERRRRROOOORRRRRR!!!!!!!!!"
// });

// console.log(followersArray);

// const users= [
//   var promise1 = axios.get(`https://api.github.com/users/tetondan`); 
//   var promise2 = axios.get(`https://api.github.com/users/dustinmyers`);
//   var promise3 = axios.get(`https://api.github.com/users/justsml`); 
//   var promise4 = axios.get(`https://api.github.com/users/luishrd`); 
//   var promise5 = axios.get(`https://api.github.com/users/bigknell`);
//   var promise6 = axios.get(`https://api.github.com/users/szureti`)
//   ]
  
  // users.Promise.all([1, 2, 3, 4, 5, 6]).then(values => { 
  //   console.log(values); 
  // });

///////////COME BACK LATER//////////


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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

// userName.classList.add('username')

// fullName.textContent = data[name];
// userName.textContent = data[login];
// userLocation.textContent = `Location: ${data[location]}`;
// userProfile.textContent = `Profile: ${profileLink}`;
// userFollowers.textContent = `Followers: ${data[followers_url]}`;
// usersFollowing.textContent = `Following: ${data[following_url]}`;
// userBio.textContent = `Bio: ${data[bio]}`;

// profileLink.href = data[html_url];
// userImage.src = data[avatar_url];
// userImage.alt = 'Github User';

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

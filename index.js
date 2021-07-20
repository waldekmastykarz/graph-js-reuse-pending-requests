import { signIn, silentSignIn } from './auth.js';
import { graphClient } from './graphClient.js';

async function displayUI(auto) {
  if (auto) {
    const loggedIn = await silentSignIn();
    if (!loggedIn) {
      return;
    }
  }
  else {
    await signIn();
  }

  document.getElementById('signin').style = 'display: none';
  loadData();
}

export async function loadData() {
  const results = await Promise.all([
    loadUserInfo(),
    loadUserId()
  ]);
  document.getElementById('userInfo').innerHTML = `${results[0].displayName} (${results[0].jobTitle})<br/>${results[1].id}`;
}

async function loadUserInfo() {
  const userInfo = await graphClient
    .api('me?$select=displayName,jobTitle,id')
    .get();
  return userInfo;
}

async function loadUserId() {
  const userInfo = await graphClient
    .api('me?$select=displayName,jobTitle,id')
    .get();
  return userInfo;
}

// Expose for login button AND call immediately to attempt auto-login
window.displayUI = displayUI;
displayUI(true);
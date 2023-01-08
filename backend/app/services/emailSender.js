const fs = require('fs').promises;
const path = require('path');
const process = require('process');
const {authenticate} = require('@google-cloud/local-auth');
const {google} = require('googleapis');

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/gmail.readonly','https://mail.google.com/',
'https://www.googleapis.com/auth/gmail.modify',
'https://www.googleapis.com/auth/gmail.compose',
'https://www.googleapis.com/auth/gmail.send',];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = path.join(process.cwd(), 'token.json');
const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json');
const gmail = google.gmail('v1');
/**
 * Reads previously authorized credentials from the save file.
 *
 * @return {Promise<OAuth2Client|null>}
 */
async function loadSavedCredentialsIfExist() {
  try {
    const content = await fs.readFile(TOKEN_PATH);
    const credentials = JSON.parse(content);
    return google.auth.fromJSON(credentials);
  } catch (err) {
    return null;
  }
}
/**
 * Serializes credentials to a file comptible with GoogleAUth.fromJSON.
 *
 * @param {OAuth2Client} client
 * @return {Promise<void>}
 */
async function saveCredentials(client) {
  const content = await fs.readFile(CREDENTIALS_PATH);
  const keys = JSON.parse(content);
  const key = keys.installed || keys.web;
  const payload = JSON.stringify({
    type: 'authorized_user',
    client_id: key.client_id,
    client_secret: key.client_secret,
    refresh_token: client.credentials.refresh_token,
  });
  await fs.writeFile(TOKEN_PATH, payload);
  console.log("Data Retreived");
}
/**
 * Load or request or authorization to call APIs.
 *
 */
async function authorize() {
  let client = await loadSavedCredentialsIfExist();
  if (client) {
    return client;
  }
  client = await authenticate({
    scopes: SCOPES,
    keyfilePath: CREDENTIALS_PATH,
  });
  if (client.credentials) {
    await saveCredentials(client);
  }
  return client;
}
async function sendMail(auth) {
  google.options({auth});
  const gmail = google.gmail({version: 'v1', auth});
  let messagedata = {'from':'Vyshnav','fromMail':'vyshnavunni371@gmail.com',
  'to' : 'Phantom','toMail':'phantomknight371@gmail.com',
  'subject' : 'Testing'};               
  
  const messageParts = [
    `From: ${messagedata.from} <${messagedata.fromMail}>`,
    `To: ${messagedata.to} <${messagedata.toMail}>`,
    'Content-Type: text/html; charset=utf-8',
    'MIME-Version: 1.0',
    `Subject: ${messagedata.subject}`,
    '',
    'Testing Testing\n',
    '<b>Testing !</b>',
  ];
  const message = messageParts.join('\n');
  
  // The body needs to be base64url encoded.
  const encodedMessage = Buffer.from(message)
  .toString('base64')
  .replace(/\+/g, '-')
  .replace(/\//g, '_')
    .replace(/=+$/, '');
    
    const res = await gmail.users.messages.send({
    userId: 'me',
    requestBody: {
      raw: encodedMessage,
    },
  });
  console.log(res.data);
  return res.data;
}
/**
 * Lists the labels in the user's account.
 *
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */

authorize().then(sendMail).catch(console.error);
module.exports = sendMail;

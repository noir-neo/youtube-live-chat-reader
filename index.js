const YouTube = require('youtube-live-chat');
const child_process = require('child_process')

const youtube = new YouTube(process.env.CHANNEL_ID, process.env.APIKEY);

youtube.on('ready', () => {
  console.log('ready!')
  youtube.listen(1000)
})

youtube.on('message', data => {
  message = `${data.authorDetails.displayName}: ${data.snippet.displayMessage}`
  console.log(message)
  say(message)
})

youtube.on('error', error => {
  console.error(error)
})

function say (message) {
  child_process.exec(`say -v Kyoko ${message}`, function(err, stdout, stderr) {
  });
}

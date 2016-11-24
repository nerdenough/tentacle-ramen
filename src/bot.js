export default class Bot {
  constructor(client) {
    this.client = client;

    client.on('ready', () => this.ready());
    client.on('message', msg => this.message(msg));
  }

  login(token) {
    this.client.login(token);
  }

  ready() {
    console.log(`Logged in as ${this.client.user.username}!`);
  }

  message(msg) {
    console.log(msg.content);
  }
}

class DifyChat {
  constructor() {
    this.conversationId = null;
    this.initUI();
  }

  initUI() {
    document.getElementById('willbots-chat').innerHTML = `
      <div id="chat-history"></div>
      <input type="text" id="user-input">
      <button id="send-btn">Envoyer</button>
    `;
    document.getElementById('send-btn').addEventListener('click', () => this.sendMessage());
  }

  async sendMessage() {
    const message = document.getElementById('user-input').value;
    // Appel sécurisé via votre backend (ex: /api/chat)
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, conversationId: this.conversationId })
    });
    // Gestion de la réponse...
  }
}

new DifyChat();
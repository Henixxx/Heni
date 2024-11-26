// Get elements
const openChatButton = document.getElementById('open-chat');
const chatBox = document.getElementById('chat-box');
const closeChatButton = document.getElementById('close-chat');
const sendMessageButton = document.getElementById('send-message');
const messageInput = document.getElementById('message');

// Open chat box when button is clicked
openChatButton.addEventListener('click', () => {
    console.log('Open chat clicked');
    chatBox.style.display = 'block';  // Show the chat box
    openChatButton.style.display = 'none';  // Hide the open button
});

// Close chat box when 'X' button is clicked
closeChatButton.addEventListener('click', () => {
    console.log('Close chat clicked');
    chatBox.style.display = 'none';  // Hide the chat box
    openChatButton.style.display = 'block';  // Show the open button again
});

// Send message when send button is clicked
sendMessageButton.addEventListener('click', () => {
    console.log('Send message clicked');
    const message = messageInput.value.trim();  // Get the message input value

    if (message !== "") {
        console.log('Sending message: ', message);  // Log the message content

        const messageContainer = document.createElement('div');
        messageContainer.classList.add('chat-message');  // Add CSS class for styling

        // Set the inner HTML to the message text, including 'You:'
        messageContainer.innerHTML = `<p><strong>You:</strong> ${message}</p>`;

        // Append the new message to the chat body
        document.querySelector('.chat-body').appendChild(messageContainer);

        // Scroll to the bottom of the chat to see the new message
        document.querySelector('.chat-body').scrollTop = document.querySelector('.chat-body').scrollHeight;

        // Clear the input field for the next message
        messageInput.value = '';
    } else {
        console.log('Message is empty, not sent');
    }
});
document.addEventListener('DOMContentLoaded', function () {
    // All your code goes here
    const openChatButton = document.getElementById('open-chat');
    const chatBox = document.getElementById('chat-box');
    const closeChatButton = document.getElementById('close-chat');
    const sendMessageButton = document.getElementById('send-message');
    const messageInput = document.getElementById('message');
    
    openChatButton.addEventListener('click', () => {
        console.log('Open chat clicked');
        chatBox.style.display = 'block';
        openChatButton.style.display = 'none';
    });
    
    closeChatButton.addEventListener('click', () => {
        console.log('Close chat clicked');
        chatBox.style.display = 'none';
        openChatButton.style.display = 'block';
    });

    sendMessageButton.addEventListener('click', () => {
        console.log('Send message clicked');
        const message = messageInput.value.trim();
        if (message !== "") {
            console.log('Sending message: ', message);

            const messageContainer = document.createElement('div');
            messageContainer.classList.add('chat-message');
            messageContainer.innerHTML = `<p><strong>You:</strong> ${message}</p>`;
            document.querySelector('.chat-body').appendChild(messageContainer);
            document.querySelector('.chat-body').scrollTop = document.querySelector('.chat-body').scrollHeight;
            messageInput.value = '';
        } else {
            console.log('Message is empty, not sent');
        }
    });
});
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Send AJAX request for login
    fetch('login.php', {
        method: 'POST',
        body: new URLSearchParams({
            'username': username,
            'password': password
        })
    }).then(response => response.json())
      .then(data => {
          if (data.success) {
              window.location.href = 'dashboard.php'; // Redirect to dashboard
          } else {
              alert('Invalid login credentials');
          }
      });
});

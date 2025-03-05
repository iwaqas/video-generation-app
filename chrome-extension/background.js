// filepath: /video-generation-app/chrome-extension/background.js
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Listen for messages from the content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getData") {
        // Fetch data from Firebase Realtime Database
        firebase.database().ref('/path/to/data').once('value').then((snapshot) => {
            sendResponse(snapshot.val());
        }).catch((error) => {
            console.error("Error fetching data: ", error);
            sendResponse({ error: error.message });
        });
        return true; // Indicates that the response will be sent asynchronously
    }
});

// Additional background script functionality can be added here.
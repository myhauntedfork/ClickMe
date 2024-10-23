const button = document.getElementById("shakyButton");
const message = document.getElementById("message");
const loadingScreen = document.getElementById("loadingScreen");
const okButton = document.getElementById("okButton");
const loadingMessage = document.getElementById("loadingMessage");
const infiniteMessages = document.getElementById("infiniteMessages");

const messages = [
  "Downloading files...",
  "Optimizing for system...",
  "Configuring settings...",
  "Initializing modules...",
  "Analyzing data...",
  "Running diagnostics...",
  "Cleaning up files...",
  "Updating registry...",
  "Processing...",
  "Installing components...",
  "Scanning for malware...",
  "Compiling data...",
  "Setting up environment...",
  "Checking for updates...",
  "Syncing with servers...",
  "Encrypting data...",
  "Compressing files...",
  "Backing up system...",
  "Resetting configurations...",
  "Validating processes...",
];

button.addEventListener("mouseenter", () => {
  const buttonWidth = button.clientWidth;
  const buttonHeight = button.clientHeight;

  const maxX = window.innerWidth - buttonWidth;
  const maxY = window.innerHeight - buttonHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  button.style.left = `${x}px`;
  button.style.top = `${y}px`;
});

button.addEventListener("click", () => {
  loadingMessage.textContent = "Successfully clicked button!";
  loadingScreen.style.display = "flex";
  infiniteMessages.classList.add("hidden");
});

okButton.addEventListener("click", () => {
  okButton.style.display = "none";
  loadingMessage.textContent = "";

  infiniteMessages.classList.remove("hidden");
  let messageIndex = 0;

  const showNextMessage = () => {
    infiniteMessages.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    const randomDelay = Math.floor(Math.random() * (15000 - 2000 + 1)) + 2000;

    setTimeout(showNextMessage, randomDelay);
  };

  showNextMessage();
});

const fetchDataButton = document.getElementById('fetch-data');
const dataDisplay = document.getElementById('data-display');

fetchDataButton.addEventListener('click', async () => {
  const response = await fetch('http://localhost:3000/data');
  const data = await response.json();
  dataDisplay.textContent = data.message;
});

// Simulate short polling by calling the fetch function every 1 second
setInterval(() => {
  fetchDataButton.click(); // Simulate button click for demo
}, 1000); // Adjust interval as needed

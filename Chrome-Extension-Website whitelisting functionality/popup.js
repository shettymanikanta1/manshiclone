const websiteInput = document.getElementById('websiteInput');
const addButton = document.getElementById('addButton');
const whitelist = document.getElementById('whitelist');

// Add website to the whitelist
addButton.addEventListener('click', () => {
  const websiteUrl = websiteInput.value.trim();
  if (websiteUrl !== '') {
    chrome.storage.sync.get(['whitelistedSites'], (result) => {
      const whitelistedSites = result.whitelistedSites || [];
      whitelistedSites.push(websiteUrl);
      chrome.storage.sync.set({ whitelistedSites }, () => {
        displayWhitelist();
      });
    });
  }
});

// Display the whitelist
function displayWhitelist() {
  whitelist.innerHTML = '';
  chrome.storage.sync.get(['whitelistedSites'], (result) => {
    const whitelistedSites = result.whitelistedSites || [];
    whitelistedSites.forEach((site) => {
      const li = document.createElement('li');
      li.textContent = site;
      whitelist.appendChild(li);
    });
  });
}

displayWhitelist();
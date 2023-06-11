chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'getWhitelist') {
      chrome.storage.sync.get(['whitelistedSites'], (result) => {
        const whitelistedSites = result.whitelistedSites || [];
        sendResponse({ whitelistedSites });
      });
      return true;
    }
  });  
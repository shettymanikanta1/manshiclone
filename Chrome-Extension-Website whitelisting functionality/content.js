chrome.storage.sync.get(['whitelistedSites'], (result) => {
    const whitelistedSites = result.whitelistedSites || [];
    if (!whitelistedSites.includes(window.location.hostname)) {
      // Redirect or block access to the current website
      // Example: Redirect to a blank page
      window.location.href = 'about:blank';
    }
  });  
chrome.webNavigation.onCommitted.addListener((details) => {
  if (details.url.includes("twitter.com") && details.transitionType === "typed") {
    chrome.tabs.remove(details.tabId);
  }
});

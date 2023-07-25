const sites = ["twitter.com", "news.ycombinator.com"]

chrome.webNavigation.onCommitted.addListener((details) => {
  if (sites.filter(site => details.url.includes(site)).length && details.transitionType === "typed") {
    chrome.tabs.remove(details.tabId);
  }
});

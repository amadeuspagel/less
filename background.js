chrome.webNavigation.onCommitted.addListener(async (details) => {
  const { blocklist } = await chrome.storage.sync.get("blocklist")
  const { hostname } = new URL(details.url)
  const match = blocklist.includes(hostname)
  const typed = details.transitionType === "typed"
  if (match && typed) chrome.tabs.remove(details.tabId);
});

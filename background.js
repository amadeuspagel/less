chrome.webNavigation.onCommitted.addListener(async (details) => {
  let { sites } = await chrome.storage.sync.get("sites")

  sites = sites.split("\n")

  console.log(sites)

  if (sites.filter(site => details.url.includes(site)).length && details.transitionType === "typed") {
    chrome.tabs.remove(details.tabId);
  }
});

const { blocklist } = await chrome.storage.sync.get("blocklist") || ""

const textarea = document.querySelector("textarea")

textarea.value = blocklist

textarea.oninput = (e) => {
  chrome.storage.sync.set({
    blocklist: e.target.value
  })
}

const { sites } = await chrome.storage.sync.get("sites")

const textarea = document.querySelector("textarea")

textarea.value = sites

textarea.oninput = (e) => {
  chrome.storage.sync.set({
    sites: e.target.value
  })
}

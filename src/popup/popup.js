function restore_options() {
  chrome.storage.sync.get("universal_switch", function (items) {
    document.getElementById("universal-switch").checked =
      items.universal_switch;
  });
}

document.addEventListener("DOMContentLoaded", function () {
  restore_options();
  const universal_switch = document.getElementById("universal-switch");
  universal_switch.addEventListener("change", function () {
    chrome.storage.sync.set({ universal_switch: this.checked });
  });
});

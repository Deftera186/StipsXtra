function resotre_options() {
  chrome.storage.sync.get(
    ["darkmode", "self-message", "full-votes"],
    function (items) {
      document.getElementById("darkmode").checked = items["darkmode"];
      document.getElementById("self-message").checked = items["self-message"];
      document.getElementById("full-votes").checked = items["full-votes"];
    }
  );
}

document.addEventListener("DOMContentLoaded", function () {
    resotre_options();
    const darkmode = document.getElementById("darkmode");
    const self_message = document.getElementById("self-message");
    const full_votes = document.getElementById("full-votes");
    darkmode.addEventListener("change", function () {
        chrome.storage.sync.set({ darkmode: this.checked });
    });
    self_message.addEventListener("change", function () {
        chrome.storage.sync.set({ "self-message": this.checked });
    });
    full_votes.addEventListener("change", function () {
        chrome.storage.sync.set({ "full-votes": this.checked });
    });
    }
);
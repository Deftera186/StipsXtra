import * as userUtils from "../Utils/userUtils.js";
import * as templateUtils from "../Utils/templateUtils.js";
import * as apiUtils from "../Utils/apiUtils.js";
import * as observers from "../observers/observers.js";

function insertAddItem(thankswall, darkmode) {
  const form = templateUtils.AddItem(darkmode);
  thankswall.insertBefore(form, thankswall.firstChild);

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    apiUtils.sendThanksMsg(
      document.getElementById("msg").value,
      userUtils.extractUserID()
    );
    window.location.reload();
  });
}

function insertNegativeVotes(appItemList, data) {
  const positive = [];
  const negative = [];
  data.forEach((element) => {
    const elementData = element.data;
    positive.push((elementData.votes_score + elementData.votes_count) / 2);
    negative.push((elementData.votes_count - elementData.votes_score) / 2);
  });
  const listSingleItems = Array.from(appItemList.childNodes).filter(
    (node) => node.classList && node.classList.contains("list-single-item")
  );

  listSingleItems.forEach((item, index) => {
    item.querySelector(".score").innerHTML = positive[index];
    const votesArea = item.querySelector(".votesArea");
    const positiveVoteButton = votesArea.childNodes[1];
    const attribute = positiveVoteButton.attributes[0].name;
    votesArea.insertBefore(
      templateUtils.negativeScore(negative[index], attribute),
      positiveVoteButton
    );
  });
}

function enableDarkMode() {
  var darkmodeCSS = document.createElement("link");
  darkmodeCSS.rel = "stylesheet";
  darkmodeCSS.href = chrome.runtime.getURL("src/styles/darkmode.css");
  document.head.appendChild(darkmodeCSS);
}

function onUrlChange() {
  const path = location.pathname;
  chrome.storage.sync.get(
    { darkmode: true, "self-message": true, "full-votes": true },
    function (items) {
      if (items["darkmode"]) {
        enableDarkMode();
      }
      if (items["self-message"]) {
        if (path.startsWith("/profile/")) {
          observers.observeThanksWall(insertAddItem, items["darkmode"]);
        }
      }
      if (items["full-votes"]) {
        if (path.startsWith("/ask/")) {
          let askid = path.split("/").at(2);
          apiUtils.getAnswersForQuestion(askid).then((answers) => {
            const data = answers.data;
            observers.observeAppItemList(insertNegativeVotes, data);
          });
        }
      }
    }
  );
}

chrome.storage.sync.get({ universal_switch: true }, function (data) {
  if (data.universal_switch) {
    onUrlChange();
    observers.observeUrlChange(onUrlChange);
  }
});

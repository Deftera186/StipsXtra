let lastUrl = location.href;

export function observeUrlChange(callback) {
  new MutationObserver(() => {
    const url = location.href;
    if (url !== lastUrl) {
      lastUrl = url;
      callback();
    }
  }).observe(document, { subtree: true, childList: true });
}

export function observeThanksWall(callback) {
  const darkmode = arguments[1];
  const observer = new MutationObserver(function () {
    const itemsContainer = document.querySelector(".items-container");
    if (itemsContainer) {
      const thankswall = document.querySelector("app-thankswall");
      const childNodes = thankswall.childNodes;
      const addItem = Array.from(childNodes).find(
        (node) =>
          node.classList &&
          node.classList.contains("add-item") &&
          node.classList.contains("ng-star-inserted")
      );

      if (!addItem) {
        callback(thankswall, darkmode);
      }
      observer.disconnect();
    }
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
}

export function observeAppItemList(callback) {
  const data = arguments[1];
  const observer = new MutationObserver(function () {
    const no_results_msg = document.querySelector(".no-results-msg");
    const response_count_title = document.querySelector(
      ".response-count-title"
    );
    if (no_results_msg || response_count_title) {
      const appItemList = document.querySelector("app-item-list");
      callback(appItemList, data);
      observer.disconnect();
    }
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
}

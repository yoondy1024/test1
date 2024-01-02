let timer = 0;
let intervalId = null;

chrome.action.onClicked.addListener((tab) => {
  chrome.storage.sync.get(['timer'], function(result) {
    const timeInSeconds = result.timer || 60; // 기본값은 1분

    timer = timeInSeconds;
    startCountdown(tab.id);
  });
});

function startCountdown(tabId) {
  intervalId = setInterval(() => {
    timer--;

    if (timer >= 0) {
      chrome.action.setBadgeText({ text: timer.toString() });
    } else {
      clearInterval(intervalId);
      chrome.action.setBadgeText({ text: '' });
      chrome.tabs.remove(tabId);
    }
  }, 1000);
}

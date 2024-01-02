let timer = 0;
let intervalId = null;

chrome.action.onClicked.addListener(function(tab) {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const minutes = prompt('분 단위 시간을 설정하세요:', '1');
    if (minutes !== null && !isNaN(minutes)) {
      const timeInSeconds = minutes * 60;
      startCountdown(tabs[0].id, timeInSeconds);
    }
  });
});

function startCountdown(tabId, timeInSeconds) {
  timer = timeInSeconds;

  intervalId = setInterval(() => {
    timer--;

    if (timer >= 0) {
      chrome.action.setBadgeText({ text: timer.toString(), tabId: tabId });
    } else {
      clearInterval(intervalId);
      chrome.action.setBadgeText({ text: '', tabId: tabId });

      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.remove(tabs[0].id);
      });
    }
  }, 1000);
}
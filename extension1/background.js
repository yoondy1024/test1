let timer = 0;
let intervalId = null;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'setTimer') {
    timer = request.value;
    startCountdown(sender.tab.id);
    sendResponse({ status: 'success' });
  }
});

function startCountdown(tabId) {
  intervalId = setInterval(() => {
    timer--;

    if (timer >= 0) {
      chrome.action.setBadgeText({ text: timer.toString(), tabId: tabId });
    } else {
      clearInterval(intervalId);
      chrome.action.setBadgeText({ text: '', tabId: tabId });
      chrome.tabs.remove(tabId);
    }
  }, 1000);
}

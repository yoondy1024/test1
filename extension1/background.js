// 탭이 자동으로 닫히는 시간(밀리초 단위, 예: 5분 = 5 * 60 * 1000)
const closingTime = 5 * 60 * 1000; // 원하는 시간을 밀리초로 설정하세요.

// 탭이 열린 시간을 확인하여 설정한 시간이 지나면 탭을 닫음
chrome.tabs.onCreated.addListener(function(tab) {
  setTimeout(() => {
    chrome.tabs.remove(tab.id);
  }, closingTime);
});

// 탭이 열린 시간을 확인하여 설정한 시간이 지나면 탭을 닫음
chrome.tabs.onCreated.addListener(function(tab) {
    chrome.storage.sync.get(['closingTime'], function(result) {
      const closingTime = result.closingTime || 5 * 60 * 1000; // 기본값은 5분
  
      setTimeout(() => {
        chrome.tabs.remove(tab.id);
      }, closingTime);
    });
  });

chrome.tabs.onActivated.addListener(function(activeInfo) {
    chrome.storage.sync.get(['timer'], function(result) {
      const timer = result.timer || 1 * 60 * 1000; // 기본값은 1분
  
      setInterval(() => {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
          chrome.tabs.remove(tabs[0].id);
        });
      }, timer);
    });
  });

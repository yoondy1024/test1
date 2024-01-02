function setTimer() {
    const minutes = document.getElementById('minutes').value;
    const timeInMillis = minutes * 60 * 1000;
  
    chrome.storage.sync.set({ timer: timeInMillis }, function() {
      console.log('Timer is set to ' + timeInMillis + ' milliseconds');
      window.close();
    });
  }
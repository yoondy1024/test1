function setClosingTime() {
    const closingTimeInMinutes = document.getElementById('closingTime').value;
    const closingTimeInMillis = closingTimeInMinutes * 60 * 1000;
  
    chrome.storage.sync.set({ closingTime: closingTimeInMillis }, function() {
      console.log('Closing time is set to ' + closingTimeInMillis + ' milliseconds');
    });
  }
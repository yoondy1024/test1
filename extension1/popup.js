chrome.runtime.onInstalled.addListener(function() {
    const setTimerButton = document.getElementById('setTimer');
    if (setTimerButton) {
      setTimerButton.addEventListener('click', function() {
        setTimer();
      });
    }
  });
  
  function setTimer() {
    const minutes = document.getElementById('minutes').value;
    const timeInSeconds = minutes * 60;
  
    chrome.runtime.sendMessage({ action: 'setTimer', value: timeInSeconds }, function(response) {
      if (response && response.status === 'success') {
        console.log('Timer is set to ' + timeInSeconds + ' seconds');
        window.close();
      } else {
        console.error('Failed to set timer.');
      }
    });
  }
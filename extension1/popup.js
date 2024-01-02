document.addEventListener('DOMContentLoaded', function() {
    const setTimerButton = document.getElementById('setTimer');
    setTimerButton.addEventListener('click', function() {
      setTimer();
    });
  });
  
  function setTimer() {
    const minutes = document.getElementById('minutes').value;
    const timeInSeconds = minutes * 60;
  
    chrome.storage.sync.set({ timer: timeInSeconds }, function() {
      console.log('Timer is set to ' + timeInSeconds + ' seconds');
      window.close();
    });
  }
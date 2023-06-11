chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'breakAlarm') {
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'Logo.png',
      title: 'Focus Timer',
      message: 'Break time is over. Time to get back to work!',
    });
  }
});

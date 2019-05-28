document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('save').addEventListener('click', saveSettings);
  // Retrieve extension user settings
  chrome.storage.local.get(null,function(storage) {
    console.debug("clientId = " + storage.clientId);
    document.getElementById('id').value = storage.clientId;

    console.debug("userKey = " + storage.userKey);
    document.getElementById('userKey').value = storage.userKey;

    console.debug("enabled = " + storage.enabled);
    document.getElementById('enabled').checked = storage.enabled;

    console.log("default = " + storage.default);
    document.getElementById('default').checked = storage.default;
  });
  function saveSettings() {
    var cid = document.getElementById('id').value;
    chrome.storage.local.set({'clientId': cid}, function() {
      console.log("Settings saved. ClientId = " + cid);
    });
    var userKey = document.getElementById('userKey').value;
    chrome.storage.local.set({'userKey': userKey}, function() {
      console.log("Settings saved. userKey = " + userKey);
    });
    var userKey = document.getElementById('enabled').checked;
    chrome.storage.local.set({'enabled': userKey}, function() {
      console.log("Settings saved. enabled = " + enabled);
    });
    var defaultShow = document.getElementById('default').checked;
    chrome.storage.local.set({'default': defaultShow}, function() {
      console.log("Settings saved. default = " + defaultShow);
    });    
  }
}, false);
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

    console.log("customId = " + storage.customId);
    document.getElementById('customId').value = storage.customId;    
   
    console.log("classEnabled = " + storage.classEnabled);
    document.getElementById('classEnabled').checked = storage.classEnabled;  

    console.log("debuggerHide = " + storage.debuggerHide);
    document.getElementById('debuggerHide').checked = storage.debuggerHide;  
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
    var customId = document.getElementById('customId').value;
    chrome.storage.local.set({'customId': customId}, function() {
      console.log("Settings saved. customId = " + customId);
    });  
    var classEnabled = document.getElementById('classEnabled').checked;
    chrome.storage.local.set({'classEnabled': classEnabled}, function() {
      console.log("Settings saved. classEnabled = " + classEnabled);
    });   
    var debuggerHide = document.getElementById('debuggerHide').checked;
    chrome.storage.local.set({'debuggerHide': debuggerHide}, function() {
      console.log("Settings saved. debugger = " + debuggerHide);
    });    
  }
}, false);
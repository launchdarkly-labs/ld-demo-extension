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

    // Experimentation Options
    console.log("expEnabled = " + storage.expEnabled);
    document.getElementById('expEnabled').checked = storage.expEnabled; 

    console.log("metricName = " + storage.metricName);
    document.getElementById('metricName').value = storage.metricName;

    console.log("winVar = " + storage.winVar);
    document.getElementById('winVar').value = storage.winVar;

    console.log("winConversion = " + storage.winConversion);
    document.getElementById('winConversion').value = storage.winConversion;

    console.log("loseConversion = " + storage.loseConversion);
    document.getElementById('loseConversion').value = storage.loseConversion;

    console.log("refresh = " + storage.refresh);
    document.getElementById('refresh').value = storage.refresh;

    // Misc Options
    console.log("debuggerHide = " + storage.debuggerHide);
    document.getElementById('debuggerHide').checked = storage.debuggerHide;  
  });
  function saveSettings() {
    // Demo Options
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
    // Experimentation Options
    var expEnabled = document.getElementById('expEnabled').checked;
    chrome.storage.local.set({'expEnabled': expEnabled}, function() {
      console.log("Settings saved. expEnabled = " + expEnabled);
    }); 
    var metricName = document.getElementById('metricName').value;
    chrome.storage.local.set({'metricName': metricName}, function() {
      console.log("Settings saved. metricName = " + metricName);
    });  
    var winVar = document.getElementById('winVar').value;
    chrome.storage.local.set({'winVar': winVar}, function() {
      console.log("Settings saved. winVar = " + winVar);
    });
    var winConversion = document.getElementById('winConversion').value;
    chrome.storage.local.set({'winConversion': winConversion}, function() {
      console.log("Settings saved. winConversion = " + winConversion);
    });
    var loseConversion = document.getElementById('loseConversion').value;
    chrome.storage.local.set({'loseConversion': loseConversion}, function() {
      console.log("Settings saved. loseConversion = " + loseConversion);
    });
    var refresh = document.getElementById('refresh').value;
    chrome.storage.local.set({'refresh': refresh}, function() {
      console.log("Settings saved. refresh = " + refresh);
    });
    // Misc Options
    var debuggerHide = document.getElementById('debuggerHide').checked;
    chrome.storage.local.set({'debuggerHide': debuggerHide}, function() {
      console.log("Settings saved. debugger = " + debuggerHide);
    });    
  }
}, false);
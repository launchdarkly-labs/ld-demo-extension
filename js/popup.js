document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('save').addEventListener('click', saveSettings);

  // Retrieve extension user settings
  chrome.storage.local.get(null, function (storage) {
    let activeUrl = document.getElementById('activeUrl');
    let activeState = document.getElementById('activeState');
    if (storage.enabled) {
      console.debug("Plugin enabled; showing active state and URL.");
      activeUrl.hidden = false;
      activeUrl.innerText = storage.activeTab.url;

      activeState.hidden = false;
      if (storage.isActive) {
        console.debug("Plugin active; showing active state in green.");
        activeState.innerText = "ACTIVE";
        activeState.style.color = "green";
      } else {
        console.debug("Plugin inactive; showing inactive state in red.");
        activeState.innerText = "inactive";
        activeState.style.color = "red";
      }
    } else {
      console.debug("Plugin disabled; hiding active state and URL.");
      activeUrl.hidden = true;
      activeState.hidden = true;
    }

    clientId = storage.clientId || "Please set client ID";
    console.debug("clientId = " + clientId);
    document.getElementById('id').value = clientId;

    console.debug("userKey = " + storage.userKey);
    document.getElementById('userKey').value = storage.userKey;

    console.debug("flagKey = " + storage.flagKey);
    document.getElementById('flagKey').value = storage.flagKey;

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

    console.log("cssFlagKey = " + storage.cssFlagKey);
    document.getElementById('cssFlagKey').value = storage.cssFlagKey;
  });

  function saveSettings() {
    // Demo Options
    var cid = document.getElementById('id').value;
    chrome.storage.local.set({ 'clientId': cid }, function () {
      console.log("Settings saved. ClientId = " + cid);
    });
    var userKey = document.getElementById('userKey').value;
    chrome.storage.local.set({ 'userKey': userKey }, function () {
      console.log("Settings saved. userKey = " + userKey);
    });
    var flagKey = document.getElementById('flagKey').value;
    chrome.storage.local.set({ 'flagKey': flagKey }, function () {
      console.log("Settings saved. flagKey = " + flagKey);
    });

    var enabled = document.getElementById('enabled').checked;
    chrome.storage.local.set({ 'enabled': enabled }, function () {
      console.log("Settings saved. enabled = " + enabled);
      if (enabled) {
        chrome.storage.local.get('currentTabId', function (data) {
          chrome.tabs.get(data.currentTabId, function (tab) {
            chrome.storage.local.set({ activeTab: tab }, function () {
              console.debug("Set activeTab to " + tab.url + ".");
            })
          });
        });
      } else {
        chrome.storage.local.set({ activeTab: undefined }, function () {
          console.debug("Unset activeTab.");
        });
      }
    });

    var defaultShow = document.getElementById('default').checked;
    chrome.storage.local.set({ 'default': defaultShow }, function () {
      console.log("Settings saved. default = " + defaultShow);
    });
    var customId = document.getElementById('customId').value;
    chrome.storage.local.set({ 'customId': customId }, function () {
      console.log("Settings saved. customId = " + customId);
    });
    var classEnabled = document.getElementById('classEnabled').checked;
    chrome.storage.local.set({ 'classEnabled': classEnabled }, function () {
      console.log("Settings saved. classEnabled = " + classEnabled);
    });
    // Experimentation Options
    var expEnabled = document.getElementById('expEnabled').checked;
    chrome.storage.local.set({ 'expEnabled': expEnabled }, function () {
      console.log("Settings saved. expEnabled = " + expEnabled);
    });
    var metricName = document.getElementById('metricName').value;
    chrome.storage.local.set({ 'metricName': metricName }, function () {
      console.log("Settings saved. metricName = " + metricName);
    });
    var winVar = document.getElementById('winVar').value;
    chrome.storage.local.set({ 'winVar': winVar }, function () {
      console.log("Settings saved. winVar = " + winVar);
    });
    var winConversion = document.getElementById('winConversion').value;
    chrome.storage.local.set({ 'winConversion': winConversion }, function () {
      console.log("Settings saved. winConversion = " + winConversion);
    });
    var loseConversion = document.getElementById('loseConversion').value;
    chrome.storage.local.set({ 'loseConversion': loseConversion }, function () {
      console.log("Settings saved. loseConversion = " + loseConversion);
    });
    var refresh = document.getElementById('refresh').value;
    chrome.storage.local.set({ 'refresh': refresh }, function () {
      console.log("Settings saved. refresh = " + refresh);
    });
    // Misc Options
    var debuggerHide = document.getElementById('debuggerHide').checked;
    chrome.storage.local.set({ 'debuggerHide': debuggerHide }, function () {
      console.log("Settings saved. debugger = " + debuggerHide);
    });
    var cssFlagKey = document.getElementById('cssFlagKey').value;
    chrome.storage.local.set({ 'cssFlagKey': cssFlagKey }, function () {
      console.log("Settings saved. cssFlagKey = " + cssFlagKey);
    });

    if (enabled) {
      chrome.tabs.getSelected(null, function (tab) {
        chrome.tabs.update(tab.id, { url: tab.url }, function () {
          chrome.storage.local.set({ 
            isActive: true,
            currentTabId: tab.tabId,
            activeTab: tab
          });
        });
      });
    }
  }
}, false);
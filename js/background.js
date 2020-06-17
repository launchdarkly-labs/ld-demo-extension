chrome.runtime.onInstalled.addListener(function () {
	chrome.storage.local.clear(function () {
		let error = chrome.runtime.lastError;
		if (error) {
			console.error(error);
		}
	});

	chrome.storage.local.set({enabled: false});
	chrome.tabs.onActivated.addListener(function (tabData) {
		chrome.storage.local.set({ currentTabId: tabData.tabId });

		chrome.storage.local.get("activeTab", function (data) {
			if (data.activeTab) {
				chrome.tabs.get(tabData.tabId, function (tab) {
					active = data.activeTab.url == tab.url;
					chrome.storage.local.set({ isActive: active }, function () {
						if (active) {
							console.debug("Tab is active.");
						} else {
							console.debug("Tab is inactive.");
						}
					});
				});
			} else {
				chrome.storage.local.set({ isActive: false });
				console.debug("Plugin inactive.");
			}
		});
	});
});
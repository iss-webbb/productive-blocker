chrome.runtime.onInstalled.addListener(() => {
    console.log("im running");
    chrome.storage.local.get({ saved: [] }, (data) => {
        console.log("the blocked sites are: ", data.saved)
    });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete") {
        console.log(`${tabId}`);
        chrome.storage.local.get({ saved: [] }, (data) => {
            data.saved.forEach(dataSet => {
                if (tab.url.includes(dataSet)) {
                    chrome.tabs.update(tabId, { url: chrome.runtime.getURL("pomodoro.html") });
                }
            });
        });
    }
});

chrome.storage.onChanged.addListener((changes, area) => {
    if (area === 'local' && changes.saved) {
        console.log("new site blocked: ", changes.saved.newValue);
    }

    chrome.tabs.query({}, tabs => {
        tabs.forEach(tab => {
            changes.saved.newValue.forEach(site => {
                if (tab.url.includes(site)) {
                    chrome.tabs.update(tab.id, { url: chrome.runtime.getURL('pomodoro.html') })
                }
            });
        })
    })
});

chrome.runtime.onStartup.addListener(() => {
    chrome.storage.local.get({ saved: [] }, (data) => {
        chrome.tabs.query({}, tabs => {
            tabs.forEach(tab => {
                data.saved.forEach(site => {
                    if (tab.url.includes(site)) {
                        chrome.tabs.update(tab.id, { url: chrome.runtime.getURL('pomodoro.html') })
                    }
                });
            });
        });
    });
});

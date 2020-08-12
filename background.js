chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.get({active: false, label: 'Enable'}, () => {
    console.log('The extension has been installed and set to inactive. Click on the "Enable" button to activate it.');
  });

  chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: 'gum-gum-streaming.com' },
          }),
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()],
      },
    ]);
  });
});

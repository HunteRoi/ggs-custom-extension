if (chrome) {
  setInterval(() => {
    chrome.storage.sync.get('active', (data) => {
      if (!data.active) return;

      let ads = document.getElementsByClassName('video-container');
      for (let ad of ads) {
        const adContainer = ad.firstChild;
        if (adContainer.childNodes.length > 0) {
          for (let ggsOffer of adContainer.childNodes) {
            if (ggsOffer.id === 'ggs_offer') {
              ggsOffer.parentElement.remove();
              console.log('The offer has been removed!');
              clearInterval(interval);
            }
          }
        }
      }
    });
  }, 500);
}

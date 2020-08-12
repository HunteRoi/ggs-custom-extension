window.onload = () => {
  chrome.storage.sync.get(['label'], data => {
    const button = document.createElement('button');
    button.setAttribute('id', 'changeAction');
    button.innerText = data.label;

    button.addEventListener('click', () => {
      chrome.storage.sync.get('active', (data) => {
        const label = !data.active ? 'Disable' : 'Enable';
        button.innerHTML = label;

        button.setAttribute('active', !data.active);
        button.setAttribute('label', label);
        
        chrome.storage.sync.set({ active: !data.active, label }, () => {
          console.log('The extension activity has changed to:', !data.active);
        });

      });
    });

    document.body.appendChild(button);
  })
};

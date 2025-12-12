const siteEntries = document.getElementById('siteInput');
const addBtn = document.getElementById('addBtn');
const blocklist = document.getElementById('blockedList');
const dltBtn = document.getElementById('dltBtn');

chrome.storage.local.get({ saved: [] }, (data) => {
    data.saved.forEach(site => {
        const li = document.createElement('li');
        li.textContent = site;
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "X";
        removeBtn.classList.add('remove');

        removeBtn.addEventListener("click", () => {
            const siteToRemove = li.textContent.slice(0, -1); 

            chrome.storage.local.get({ saved: [] }, (data) => {
                const newList = data.saved.filter(s => s !== siteToRemove);
                chrome.storage.local.set({ saved: newList }, () => {
                    li.remove(); 
                });
            });
        });

        li.appendChild(removeBtn);    
        blocklist.appendChild(li);     
    });
});


addBtn.addEventListener("click", () => {
    const siteEntry = siteEntries.value.trim();
    if (!siteEntry) return;

    const li = document.createElement('li');
    li.textContent = siteEntry;
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "X";
    li.appendChild(removeBtn);
    blocklist.appendChild(li);
    removeBtn.classList.add('remove');

    chrome.storage.local.get({ saved: [] }, (data) => {
        const updatedList = [...data.saved, siteEntry];
        chrome.storage.local.set({ saved: updatedList });
    });


    siteEntries.value = "";
});
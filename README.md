# 🚀 Productive Blocker

A Chrome extension that blocks distracting websites and redirects you to a Pomodoro timer for focused work sessions.

## Features

✅ **Site Blocking** — Add domains to a blocklist and prevent access  
✅ **Pomodoro Timer** — Get redirected to a timer when accessing blocked sites  
✅ **Persistent Storage** — Your blocklist is saved across sessions  
✅ **Easy Management** — Add/remove sites from the extension popup  
✅ **Real-time Blocking** — Works across all open tabs and new tabs  
✅ **Lightweight** — Minimal resource usage

## How It Works

1. **Add Sites to Blocklist** — Click the extension icon and enter domain names (e.g., `youtube.com`, `twitter.com`)
2. **Automatic Redirection** — When you try to visit a blocked site, you're instantly redirected to the Pomodoro timer
3. **Focus & Productivity** — Use the Pomodoro timer to track focused work sessions
4. **Manage List** — Remove sites anytime with the delete button

## Tech Stack

- **Chrome Extensions API** (Manifest V3)
- **JavaScript (Vanilla)**
- **Chrome Storage API** for persistence
- **HTML & CSS**

## Installation

### From GitHub

```bash
git clone https://github.com/iss-webbb/productive-blocker.git
cd productive-blocker
```

Then in Chrome:
1. Open `chrome://extensions/`
2. Enable **Developer Mode** (top right)
3. Click **Load unpacked**
4. Select the `productive-blocker` folder
5. Extension is now active!

## Project Structure

```
productive-blocker/
├── manifest.json          # Extension configuration
├── popup.html            # Extension popup UI
├── popup.js              # Popup event handlers & blocklist management
├── background.js         # Service worker - handles tab redirection logic
├── pomodoro.html         # Pomodoro timer UI
├── pomodoro.js           # Timer functionality
├── style.css             # Popup styles
└── styles.css            # Timer styles
```

## Key Features Explained

### Blocklist Management (popup.js)
- Adds sites to Chrome local storage
- Displays live list in popup
- Remove individual sites with delete button
- Input validation (checks for empty entries)

### Automatic Redirection (background.js)
- Listens to tab updates
- Checks URLs against blocklist
- Redirects matching URLs to Pomodoro timer
- Handles new tabs, navigation, and browser startup

### Chrome Storage API
- `chrome.storage.local` for persistent data
- List persists even after browser restarts
- Real-time sync across all tabs

## What I Learned

🎓 **Chrome Extensions Development** — Understanding Manifest V3, background workers, and content scripts  
🎓 **Chrome Storage API** — Managing persistent local storage with callbacks  
🎓 **Tab Management** — Monitoring and controlling browser tabs programmatically  
🎓 **Event-Driven Architecture** — Building with listeners and callbacks  
🎓 **UI/UX for Extensions** — Creating clean popup interfaces  

## Future Improvements

- ⏰ **Customizable Timer Duration** — Let users set work/break intervals
- 📊 **Statistics** — Track sessions completed
- 🎨 **Dark Mode** — Theme toggle
- ⏸️ **Whitelist Mode** — Only allow certain sites during work hours
- 🔔 **Notifications** — Alert when timer completes
- ☁️ **Sync Across Devices** — Cloud backup of blocklist

## How to Use

1. Click the extension icon to open popup
2. Type a website domain in the input field (e.g., `reddit.com`)
3. Click **Add** to add to blocklist
4. When you navigate to that site, you'll be redirected to Pomodoro timer
5. Click **X** to remove sites from the blocklist anytime

## Troubleshooting

**Extension not blocking sites?**
- Make sure you entered the domain correctly (e.g., `youtube.com`, not `https://www.youtube.com`)
- Reload the extension (toggle off/on in `chrome://extensions/`)
- Check that the site is in your blocklist

**Timer not showing?**
- Clear browser cache and reload
- Try navigating to a blocked site again

---

**Built with 💪 for focus and productivity**

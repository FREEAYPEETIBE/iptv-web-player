
# IPTV Web Player

A responsive Netflix-style IPTV player that supports `.m3u`, `.m3u8`, `.ts`, `.mpd`, and JSON-formatted channel lists.

## Features

- 126 channels (from `processed.m3u`)
- **Fixed top video player**
- **Netflix-style UI** with dark/light toggle
- **Search & category filter**
- **Autoplay first channel**
- **Mobile/Desktop responsive**
- **Hybrid streaming** (direct + header proxy-ready)
- **No VOD** – Live TV only

## Usage

1. Open `index.html` in your browser (no server needed).
2. The player auto-loads channels from `channels.json`.
3. Click a category or search to filter channels.
4. Click a channel to start streaming.

## File Structure

```
.
├── index.html        # Main player UI
├── main.js           # JavaScript logic
├── style.css         # Styling
├── channels.json     # 126-channel list from processed.m3u
├── README.md         # This file
```

## Notes

- Some streams may require a proxy for headers (e.g., Referer/User-Agent). Backend is ready to support this.
- Fully offline deployable (just open `index.html`).
- Optimized for modern browsers.

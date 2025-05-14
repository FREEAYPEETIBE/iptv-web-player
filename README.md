# IPTV Web Player

A simple, responsive, web-based IPTV player with proxy support.

## Features
- Netflix-style fixed top video player.
- Playlist channel list (from M3U).
- Supports all M3U formats: `.ts`, `.m3u8`, `.mpd`, `.m3u`.
- Automatic proxying for header-protected streams.
- Autoplay enabled for selected channels.
- Dark/light mode toggle.
- Mobile and desktop browser compatibility.

## Proxy
Protected streams are routed through the Render-hosted proxy:

```
https://iptv-proxy-fgpp.onrender.com/proxy?url=YOUR_STREAM_URL
```

Unprotected streams play directly.

## Deployment
- Uploading all files to GitHub (no folders).
- Serving the index.html in a browser.
- Hosting via Netlify, GitHub Pages, or any static site host.

## File Structure
All files are in a flat structure:
- index.html
- main.js
- style.css
- channels.js
- channels.json
- README.md

## Credits
Created using OpenAI + Custom Development.
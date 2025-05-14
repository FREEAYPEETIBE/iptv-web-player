# IPTV Web App (Responsive & Format-Compatible)

A lightweight, responsive IPTV web player that works on **PC and Android browsers**, with support for multiple stream formats including `.m3u8`, `.mpd`, `.ts`, and more.

## Features

- **Sticky video player** (always at the top)
- **Supports HLS (.m3u8)**, **MPEG-DASH (.mpd)**, and **direct stream (.ts, .mp4, etc.)**
- **Channel grouping** using `group-title` metadata
- **Collapsible categories** for better organization
- **Search bar** for fast filtering
- **Remembers last watched channel**
- **Mobile-first responsive layout**
- No backend required — runs entirely in the browser

## How to Use

1. **Extract the ZIP**
2. Open `index.html` in your web browser (PC or mobile)
3. Click on a channel to start streaming

## Customizing Channels

To update your IPTV sources:

1. Open `channels.json`
2. Format should be:
   ```json
   {
     "Movies": [
       {
         "name": "Channel 1",
         "logo": "https://link.to/logo.png",
         "url": "http://your-stream-url.m3u8"
       },
       ...
     ]
   }

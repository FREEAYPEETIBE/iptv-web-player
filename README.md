
# IPTV Web App

A responsive, web-based IPTV player with a Netflix-style layout. This app plays live streams from `.m3u`, `.m3u8`, `.ts`, and `.mpd` files using Video.js and Shaka Player.

## Features

- Sticky video player (always visible at the top)
- Responsive grid layout for channels (mobile + desktop)
- Live search bar to filter channels by name
- Format support:
  - HLS (`.m3u8`, `.ts`)
  - MPEG-DASH (`.mpd`)
- Autoplay and adaptive streaming
- Dark mode-friendly styling (via Tailwind CSS)
- Lightweight, works directly in browsers (no server required)

## How to Use

1. **Download and unzip the project.**
2. Open `index_with_dash.html` in any modern browser (PC or Android).
3. Click a channel tile to start streaming.

> For full format support, use the `index_with_dash.html` file (includes Shaka Player for DASH).

## Hosting / Deployment

To host your IPTV app online:

### GitHub Pages

1. Create a new GitHub repository.
2. Upload the files from the zip.
3. Go to **Settings > Pages**, and set the branch to `main` and folder to `/root`.
4. Your site will be available at `https://yourusername.github.io/repo-name`.

## Notes

- Make sure your M3U playlist contains **valid and accessible stream URLs**.
- Some streams may require CORS permissions or custom headers (user-agent, referer).

---

**Made with HTML, Tailwind CSS, Video.js, and Shaka Player.**

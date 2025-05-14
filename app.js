
async function loadChannels() {
  const response = await fetch('channels.json');
  const grouped = await response.json();
  const list = document.getElementById('channel-list');
  const video = document.getElementById('video');

  function detectAndPlay(url) {
    if (url.endsWith(".m3u8")) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(url);
        hls.attachMedia(video);
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = url;
      } else {
        alert("This browser does not support HLS.");
      }
    } else if (url.endsWith(".mpd")) {
      if (window.dashjs) {
        const player = dashjs.MediaPlayer().create();
        player.initialize(video, url, true);
      } else {
        alert("DASH.js not loaded");
      }
    } else {
      video.src = url;
    }
    video.play();
    localStorage.setItem("lastChannel", url);
  }

  function renderChannels(filter = "") {
    list.innerHTML = "";
    for (const [group, channels] of Object.entries(grouped)) {
      const section = document.createElement('div');
      const header = document.createElement('div');
      const content = document.createElement('div');

      header.className = 'bg-gray-700 px-4 py-2 font-bold rounded-t cursor-pointer';
      header.textContent = group;
      content.className = 'grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-800 p-4 rounded-b hidden';

      header.addEventListener('click', () => {
        content.classList.toggle('hidden');
      });

      channels
        .filter(c => c.name.toLowerCase().includes(filter.toLowerCase()))
        .forEach(channel => {
          const div = document.createElement('div');
          div.className = 'bg-gray-900 p-4 rounded-lg cursor-pointer hover:bg-gray-700 flex items-center space-x-4';
          div.onclick = () => detectAndPlay(channel.url);

          const img = document.createElement('img');
          img.src = channel.logo;
          img.alt = channel.name;
          img.className = 'w-12 h-12 object-contain rounded';

          const name = document.createElement('span');
          name.textContent = channel.name;
          name.className = 'text-lg';

          div.appendChild(img);
          div.appendChild(name);
          content.appendChild(div);
        });

      section.appendChild(header);
      section.appendChild(content);
      list.appendChild(section);
    }
  }

  document.getElementById("search").addEventListener("input", (e) => {
    renderChannels(e.target.value);
  });

  renderChannels();

  // Autoplay last or first
  const lastUrl = localStorage.getItem("lastChannel");
  if (lastUrl) {
    detectAndPlay(lastUrl);
  } else {
    const first = Object.values(grouped)[0]?.[0];
    if (first) detectAndPlay(first.url);
  }
}

window.addEventListener('DOMContentLoaded', loadChannels);


const channels = [
  {
    name: "Cartoon Network (Proxy)",
    url: "https://iptv-proxy-fgpp.onrender.com/https://nfsnew.newkso.ru/nfs/premium339/mono.m3u8"
  },
  {
    name: "NASA TV (Direct)",
    url: "https://www.nasa.gov/media/nasatv.m3u8"
  }
];

const player = document.getElementById('videoPlayer');
const list = document.getElementById('channelList');

channels.forEach(channel => {
  const btn = document.createElement('div');
  btn.className = 'channel';
  btn.textContent = channel.name;
  btn.onclick = () => {
    player.src = channel.url;
    player.play();
  };
  list.appendChild(btn);
});

// Autoplay first channel
if (channels.length > 0) {
  player.src = channels[0].url;
}

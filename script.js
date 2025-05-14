
async function loadChannels() {
  const res = await fetch('playlist.m3u');
  const text = await res.text();
  const entries = text.split('#EXTINF:-1').slice(1);
  const list = document.getElementById('channel-list');
  const player = document.getElementById('player');
  const search = document.getElementById('search');

  let channels = entries.map(entry => {
    const [info, url] = entry.trim().split('\n');
    const nameMatch = info.match(/,(.*)/);
    const name = nameMatch ? nameMatch[1].trim() : "Unnamed Channel";
    const groupMatch = info.match(/group-title="(.*?)"/);
    return { name, url: url.trim(), group: groupMatch ? groupMatch[1] : "Uncategorized" };
  });

  function display(filtered) {
    list.innerHTML = '';
    filtered.forEach((ch, index) => {
      const div = document.createElement('div');
      div.className = 'channel';
      div.textContent = ch.name;
      div.onclick = () => {
        player.src = ch.url;
        player.play();
      };
      list.appendChild(div);
    });
  }

  search.addEventListener('input', () => {
    const val = search.value.toLowerCase();
    display(channels.filter(c => c.name.toLowerCase().includes(val)));
  });

  display(channels);
  if (channels.length) {
    player.src = channels[0].url;
    player.play();
  }
}
loadChannels();

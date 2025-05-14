
async function loadChannels() {
  const res = await fetch('channels.json');
  const data = await res.json();
  const container = document.getElementById('channelContainer');
  const player = document.getElementById('player');

  for (const group in data) {
    const groupDiv = document.createElement('div');
    groupDiv.classList.add('group');
    const title = document.createElement('h3');
    title.textContent = group;
    groupDiv.appendChild(title);

    data[group].forEach(channel => {
      const div = document.createElement('div');
      div.classList.add('channel');
      div.textContent = channel.name;
      div.onclick = () => {
        player.src = channel.url;
        player.play();
      };
      groupDiv.appendChild(div);
    });

    container.appendChild(groupDiv);
  }
}

window.onload = loadChannels;

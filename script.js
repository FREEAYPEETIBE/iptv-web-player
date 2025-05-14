
let channels = [];
let filteredChannels = [];
let currentGroup = "All";

fetch('channels_from_latest_m3u.json')
  .then(response => response.json())
  .then(data => {
    channels = data;
    renderCategories();
    renderChannels();
  });

function renderCategories() {
  const container = document.getElementById("categories");
  const groups = ["All", ...new Set(channels.map(c => c.group).filter(Boolean))];
  container.innerHTML = '';
  groups.forEach(group => {
    const btn = document.createElement("button");
    btn.textContent = group;
    btn.onclick = () => {
      currentGroup = group;
      renderChannels();
    };
    container.appendChild(btn);
  });
}

function renderChannels() {
  const container = document.getElementById("channelList");
  const search = document.getElementById("search").value.toLowerCase();
  filteredChannels = channels.filter(c =>
    (currentGroup === "All" || c.group === currentGroup) &&
    c.name.toLowerCase().includes(search)
  );
  container.innerHTML = '';
  filteredChannels.forEach(channel => {
    const div = document.createElement("div");
    div.className = "channel";
    div.textContent = channel.name;
    div.onclick = () => {
      const player = document.getElementById("videoPlayer");
      player.src = channel.url;
      player.play();
    };
    container.appendChild(div);
  });
}

document.getElementById("search").addEventListener("input", renderChannels);

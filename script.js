
const videoPlayer = document.getElementById("videoPlayer");
const channelList = document.getElementById("channelList");
const searchInput = document.getElementById("search");
const groupFilter = document.getElementById("groupFilter");

let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

function renderChannels() {
  const query = searchInput.value.toLowerCase();
  const filterGroup = groupFilter.value;
  const filtered = channels.filter(c => 
    c.name.toLowerCase().includes(query) && 
    (filterGroup === "" || c.group === filterGroup)
  );

  const groups = [...new Set(channels.map(c => c.group))];
  groupFilter.innerHTML = '<option value="">All Categories</option>' + groups.map(g => 
    `<option value="${g}">${g}</option>`).join("");

  channelList.innerHTML = filtered.map(c => `
    <div class="channel-card" onclick="playChannel('${c.url}')">
      <img src="${c.logo}" class="channel-logo" alt="${c.name}" />
      <div class="p-2">
        <div class="font-bold">${c.name}</div>
        <button onclick="toggleFavorite(event, '${c.name}')"
          class="text-xs text-${favorites.includes(c.name) ? 'yellow' : 'gray'}-400 hover:text-yellow-500">
          ${favorites.includes(c.name) ? '★' : '☆'} Favorite
        </button>
      </div>
    </div>
  `).join("");
}

function playChannel(url) {
  videoPlayer.src = url;
  videoPlayer.play();
}

function toggleFavorite(e, name) {
  e.stopPropagation();
  if (favorites.includes(name)) {
    favorites = favorites.filter(n => n !== name);
  } else {
    favorites.push(name);
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
  renderChannels();
}

searchInput.addEventListener("input", renderChannels);
groupFilter.addEventListener("change", renderChannels);

document.addEventListener("keydown", e => {
  if (e.code === "ArrowUp") videoPlayer.volume = Math.min(1, videoPlayer.volume + 0.1);
  if (e.code === "ArrowDown") videoPlayer.volume = Math.max(0, videoPlayer.volume - 0.1);
  if (e.code === "KeyF") videoPlayer.requestFullscreen();
});

renderChannels();

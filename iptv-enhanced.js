// IPTV Enhanced JS with external channel list

const video = document.getElementById('videoPlayer');
const channelList = document.getElementById('channelList');
const searchInput = document.getElementById('search');
const categoryFilter = document.getElementById('categoryFilter');
const favoritesSection = document.getElementById('favoritesSection');
const favoritesList = document.getElementById('favoritesList');

let channels = [];

// Load categories into filter dropdown
function loadCategories() {
  const groups = [...new Set(channels.map(ch => ch.group))];
  groups.forEach(group => {
    const option = document.createElement('option');
    option.value = group;
    option.textContent = group;
    categoryFilter.appendChild(option);
  });
}

// Render channels
function renderChannels(list, target) {
  target.innerHTML = '';
  list.forEach(channel => {
    const card = document.createElement('div');
    card.className = 'channel-card p-2';
    card.innerHTML = `
      <img src="${channel.logo}" alt="${channel.name}" class="channel-logo" />
      <div class="mt-1 text-center">${channel.name}</div>
      <div class="text-center text-sm text-yellow-500 cursor-pointer fav-toggle" data-name="${channel.name}">★</div>
    `;
    card.addEventListener('click', () => playChannel(channel));
    target.appendChild(card);
  });
}

// Play selected channel
function playChannel(channel) {
  if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(channel.url);
    hls.attachMedia(video);
  } else {
    video.src = channel.url;
  }
  addToRecent(channel);
}

// Search + filter handler
function updateChannelList() {
  const keyword = searchInput.value.toLowerCase();
  const category = categoryFilter.value;
  const filtered = channels.filter(c =>
    (!category || c.group === category) &&
    c.name.toLowerCase().includes(keyword)
  );
  renderChannels(filtered, channelList);
}

// Favorites handling
function getFavorites() {
  return JSON.parse(localStorage.getItem('favorites') || '[]');
}

function toggleFavorite(name) {
  let favs = getFavorites();
  if (favs.includes(name)) {
    favs = favs.filter(f => f !== name);
  } else {
    favs.push(name);
  }
  localStorage.setItem('favorites', JSON.stringify(favs));
  loadFavorites();
}

function loadFavorites() {
  const favNames = getFavorites();
  const favChannels = channels.filter(c => favNames.includes(c.name));
  if (favChannels.length) {
    favoritesSection.classList.remove('hidden');
    renderChannels(favChannels, favoritesList);
  } else {
    favoritesSection.classList.add('hidden');
  }
}

// Recently watched
function addToRecent(channel) {
  let recent = JSON.parse(localStorage.getItem('recent') || '[]');
  recent = [channel.name, ...recent.filter(c => c !== channel.name)].slice(0, 5);
  localStorage.setItem('recent', JSON.stringify(recent));
}

// Error handling
video.addEventListener('error', () => {
  alert('Failed to load stream. It may be offline or unsupported.');
});

// Night mode toggle
document.getElementById('toggleMode').addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
});

// Event listeners
searchInput.addEventListener('input', updateChannelList);
categoryFilter.addEventListener('change', updateChannelList);
document.addEventListener('click', e => {
  if (e.target.classList.contains('fav-toggle')) {
    e.stopPropagation();
    toggleFavorite(e.target.dataset.name);
  }
});

// Fetch channel list and initialize
fetch('channels.json')
  .then(res => res.json())
  .then(data => {
    channels = data;
    loadCategories();
    updateChannelList();
    loadFavorites();
  });

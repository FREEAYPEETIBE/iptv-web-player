
let channels = [];
const video = document.getElementById('videoPlayer');
const search = document.getElementById('search');
const filter = document.getElementById('categoryFilter');
const list = document.getElementById('channelList');

fetch('channels.json')
  .then(res => res.json())
  .then(data => {
    channels = data;
    loadCategories();
    renderList();
    loadFavorites();
  });

function renderList() {
  const keyword = search.value.toLowerCase();
  const selected = filter.value;
  list.innerHTML = '';
  channels
    .filter(c => (!selected || c.group === selected) && c.name.toLowerCase().includes(keyword))
    .forEach(channel => {
      const card = document.createElement('div');
      card.className = 'channel-card p-2 bg-gray-800 rounded relative';

      const logo = document.createElement('img');
      logo.src = channel.logo;
      logo.alt = channel.name;
      logo.className = 'w-full h-24 object-cover rounded';

      const nameDiv = document.createElement('div');
      nameDiv.className = 'text-center mt-2 text-sm';
      nameDiv.textContent = channel.name;

      const favBtn = document.createElement('div');
      favBtn.className = 'absolute top-1 right-2 text-yellow-400 cursor-pointer text-lg';
      favBtn.innerHTML = isFavorite(channel.name) ? '★' : '☆';
      favBtn.onclick = (e) => {
        e.stopPropagation();
        toggleFavorite(channel.name);
        renderList();
      };

      card.onclick = () => playChannel(channel);

      card.appendChild(logo);
      card.appendChild(nameDiv);
      card.appendChild(favBtn);
      list.appendChild(card);
    });
}

function loadCategories() {
  const groups = [...new Set(channels.map(c => c.group))];
  groups.forEach(group => {
    const opt = document.createElement('option');
    opt.value = group;
    opt.textContent = group;
    filter.appendChild(opt);
  });
}

function playChannel(channel) {
  if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(channel.url);
    hls.attachMedia(video);
  } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = channel.url;
  } else {
    alert('Your browser does not support HLS streaming.');
  }
  addToRecent(channel.name);
}

function toggleFavorite(name) {
  let favs = JSON.parse(localStorage.getItem('favorites') || '[]');
  if (favs.includes(name)) {
    favs = favs.filter(f => f !== name);
  } else {
    favs.push(name);
  }
  localStorage.setItem('favorites', JSON.stringify(favs));
}

function isFavorite(name) {
  const favs = JSON.parse(localStorage.getItem('favorites') || '[]');
  return favs.includes(name);
}

function loadFavorites() {
  const favs = JSON.parse(localStorage.getItem('favorites') || '[]');
  if (favs.length > 0) {
    const favList = document.createElement('div');
    favList.className = 'mb-6';
    const title = document.createElement('h2');
    title.className = 'text-lg font-bold mb-2';
    title.textContent = 'Favorites';
    favList.appendChild(title);

    channels
      .filter(ch => favs.includes(ch.name))
      .forEach(channel => {
        const item = document.createElement('div');
        item.className = 'text-sm mb-1 cursor-pointer text-yellow-300';
        item.textContent = channel.name;
        item.onclick = () => playChannel(channel);
        favList.appendChild(item);
      });

    list.before(favList);
  }
}

function addToRecent(name) {
  let recent = JSON.parse(localStorage.getItem('recent') || '[]');
  recent = [name, ...recent.filter(n => n !== name)].slice(0, 5);
  localStorage.setItem('recent', JSON.stringify(recent));
}

search.addEventListener('input', renderList);
filter.addEventListener('change', renderList);
document.getElementById('toggleMode').addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
});

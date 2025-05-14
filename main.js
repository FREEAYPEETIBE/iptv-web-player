
fetch('channels.json')
  .then(response => response.json())
  .then(data => {
    const video = document.getElementById('videoPlayer');
    const channelList = document.getElementById('channelList');

    data.forEach(channel => {
      const div = document.createElement('div');
      div.className = 'channel';
      div.textContent = channel.name;
      div.onclick = () => {
        video.src = channel.url;
        video.play();
      };
      channelList.appendChild(div);
    });

    if (data.length > 0) {
      video.src = data[0].url;
      video.play();
    }
  });

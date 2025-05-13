const channels = [
  {
    "name": "NBA TV PH",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "NBA\ud83c\udfc0",
    "url": "https://ott.udptv.net/stream/iptv/nbatvphilippines/master.m3u8?u=discord.gg/civ3&p=6d5d9a902ca1be2c5ba915568660086c0d2cb315c3063482ce97b97b0e70b96a"
  },
  {
    "name": "NBA LIVE",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "NBA\ud83c\udfc0",
    "url": "https://nflarcadia.xyz/bRtT37sn3w/Sx5q6YTgCs/11.m3u8"
  },
  {
    "name": "NBA LIVE",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "NBA\ud83c\udfc0",
    "url": "https://nflarcadia.xyz/bRtT37sn3w/Sx5q6YTgCs/11.m3u82f8a60f"
  },
  {
    "name": "NBA TV USA",
    "logo": "https://github.com/tv-logo/tv-logos/blob/main/countries/united-states/nba-tv-us.png?raw=true",
    "group": "NBA\ud83c\udfc0",
    "url": "https://v17.thetvapp.to/hls/NBATV/tracks-v1a1/mono.m3u8"
  },
  {
    "name": "NBA TV USA (SD)",
    "logo": "https://github.com/tv-logo/tv-logos/blob/main/countries/united-states/nba-tv-us.png?raw=true",
    "group": "NBA\ud83c\udfc0",
    "url": "https://v17.thetvapp.to/hls/NBATV/tracks-v2a1/mono.m3u8"
  },
  {
    "name": "4K TRAVEL",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "PH CHANNELS\ud83c\uddf5\ud83c\udded",
    "url": "https://streams2.sofast.tv/sofastplayout/33c31ac4-51fa-46ae-afd0-0d1fe5e60a80_0_HLS/master.m3u8"
  },
  {
    "name": "A2Z/ABS CBN",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "PH CHANNELS\ud83c\uddf5\ud83c\udded",
    "url": "https://cdn.ganbaruby23.xyz/stream/restream/alltv/stream.m3u8?uid=1485345779&u=FiliTV&p=ea3e07a61f5af654b1bc96090db16bf246337738d5fceae3401a1205f2f8a60f"
  },
  {
    "name": "ALL TV",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "PH CHANNELS\ud83c\uddf5\ud83c\udded",
    "url": "https://cdn.ganbaruby23.xyz/stream/restream/alltv/stream.m3u8?uid=1485345779&u=FiliTV&p=ea3e07a61f5af654b1bc96090db16bf246337738d5fceae3401a1205f2f8a60f"
  },
  {
    "name": "BUKO CHANNEL",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "PH CHANNELS\ud83c\uddf5\ud83c\udded",
    "url": "https://cdn.ganbaruby23.xyz/stream/restream/alltv/stream.m3u8?uid=1485345779&u=FiliTV&p=ea3e07a61f5af654b1bc96090db16bf246337738d5fceae3401a1205f2f8a60f"
  },
  {
    "name": "CELESTIAL MOVIE",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "PH CHANNELS\ud83c\uddf5\ud83c\udded",
    "url": "https://cdn.ganbaruby23.xyz/stream/restream/alltv/stream.m3u8?uid=1485345779&u=FiliTV&p=ea3e07a61f5af654b1bc96090db16bf246337738d5fceae3401a1205f2f8a60f"
  },
  {
    "name": "CINEMA ONE GLOBAL",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "PH CHANNELS\ud83c\uddf5\ud83c\udded",
    "url": "https://ott.udptv.net/stream/iptv/cinemaoneglobal/master.m3u8?u=discord.gg/civ3&p=6d5d9a902ca1be2c5ba915568660086c0d2cb315c3063482ce97b97b0e70b96a"
  },
  {
    "name": "CINEMA ONE PH",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "PH CHANNELS\ud83c\uddf5\ud83c\udded",
    "url": "https://ott.udptv.net/stream/iptv/cinemaoneph/master.m3u8?u=discord.gg/civ3&p=6d5d9a902ca1be2c5ba915568660086c0d2cb315c3063482ce97b97b0e70b96a"
  },
  {
    "name": "CINEMO GLOBAL",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "PH CHANNELS\ud83c\uddf5\ud83c\udded",
    "url": "https://ott.udptv.net/stream/iptv/cinemoglobal/master.m3u8?u=discord.gg/civ3&p=6d5d9a902ca1be2c5ba915568660086c0d2cb315c3063482ce97b97b0e70b96a"
  },
  {
    "name": "CINEMO PH",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "PH CHANNELS\ud83c\uddf5\ud83c\udded",
    "url": "https://ott.udptv.net/stream/iptv/cinemoph/master.m3u8?u=discord.gg/civ3&p=6d5d9a902ca1be2c5ba915568660086c0d2cb315c3063482ce97b97b0e70b96a"
  },
  {
    "name": "DZBB SUPER RADYO",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "PH CHANNELS\ud83c\uddf5\ud83c\udded",
    "url": "https://dzbb.iyadix.workers.dev/ioslive/livestream/playlist.m3u8"
  },
  {
    "name": "GMA",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "PH CHANNELS\ud83c\uddf5\ud83c\udded",
    "url": "https://cdn.ganbaruby23.xyz/stream/restream/gma/stream.m3u8?uid=1485345779&u=FiliTV&p=ea3e07a61f5af654b1bc96090db16bf246337738d5fceae3401a1205f2f8a60f"
  },
  {
    "name": "GTV",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "PH CHANNELS\ud83c\uddf5\ud83c\udded",
    "url": "https://cdn.ganbaruby23.xyz/stream/restream/gma/stream.m3u8?uid=1485345779&u=FiliTV&p=ea3e07a61f5af654b1bc96090db16bf246337738d5fceae3401a1205f2f8a60f"
  },
  {
    "name": "IBC",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "PH CHANNELS\ud83c\uddf5\ud83c\udded",
    "url": "https://cdn.ganbaruby23.xyz/stream/restream/gma/stream.m3u8?uid=1485345779&u=FiliTV&p=ea3e07a61f5af654b1bc96090db16bf246337738d5fceae3401a1205f2f8a60f"
  },
  {
    "name": "HEART OF ASIA",
    "logo": "tvg-logo=",
    "group": "PH CHANNELS\ud83c\uddf5\ud83c\udded",
    "url": "https://ott.udptv.net/stream/iptv/heartofasia/master.m3u8?u=discord.gg/civ3&p=6d5d9a902ca1be2c5ba915568660086c0d2cb315c3063482ce97b97b0e70b96a"
  },
  {
    "name": "I HEART MOVIES",
    "logo": "tvg-logo=",
    "group": "PH CHANNELS\ud83c\uddf5\ud83c\udded",
    "url": "https://ott.udptv.net/stream/iptv/iheartmovies/master.m3u8?u=discord.gg/civ3&p=6d5d9a902ca1be2c5ba915568660086c0d2cb315c3063482ce97b97b0e70b96a"
  },
  {
    "name": "JEEPNEY TV",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "PH CHANNELS\ud83c\uddf5\ud83c\udded",
    "url": "https://cdn.ganbaruby23.xyz/stream/restream/jeepneytv/stream.m3u8?uid=1485345779&u=FiliTV&p=ea3e07a61f5af654b1bc96090db16bf246337738d5fceae3401a1205f2f8a60f"
  },
  {
    "name": "KAPAMILYA CHANNEL",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "PH CHANNELS\ud83c\uddf5\ud83c\udded",
    "url": "https://cdn.ganbaruby23.xyz/stream/restream/kapamilyachannel/stream.m3u8?uid=1485345779&u=FiliTV&p=ea3e07a61f5af654b1bc96090db16bf246337738d5fceae3401a1205f2f8a60f"
  },
  {
    "name": "PBA RUSH",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "PH CHANNELS\ud83c\uddf5\ud83c\udded",
    "url": "https://ott.udptv.net/stream/iptv/pbarush/master.m3u8?u=discord.gg/civ3&p=6d5d9a902ca1be2c5ba915568660086c0d2cb315c3063482ce97b97b0e70b96a"
  },
  {
    "name": "One News HD",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "PH CHANNELS\ud83c\uddf5\ud83c\udded",
    "url": "https://ott.udptv.net/stream/iptv/gmanewstv/master.m3u8?u=discord.gg/civ3&p=6d5d9a902ca1be2c5ba915568660086c0d2cb315c3063482ce97b97b0e70b96a"
  },
  {
    "name": "ONE SPORTS+",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "PH CHANNELS\ud83c\uddf5\ud83c\udded",
    "url": "https://ott.udptv.net/stream/iptv/onesports/master.m3u8?u=discord.gg/civ3&p=6d5d9a902ca1be2c5ba915568660086c0d2cb315c3063482ce97b97b0e70b96a"
  },
  {
    "name": "RPTV",
    "logo": "https://i.imgur.com/HvKsHvx.png group-title=",
    "group": "PH CHANNELS\ud83c\uddf5\ud83c\udded",
    "url": "https://ott.udptv.net/stream/iptv/rptv/master.m3u8?u=discord.gg/civ3&p=6d5d9a902ca1be2c5ba915568660086c0d2cb315c3063482ce97b97b0e70b96a"
  },
  {
    "name": "Thrillers",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "PH CHANNELS\ud83c\uddf5\ud83c\udded",
    "url": "https://amc-rushbyamc-1-us.vizio.wurl.tv/playlist.m3u8"
  },
  {
    "name": "TV5",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "PH CHANNELS\ud83c\uddf5\ud83c\udded",
    "url": "https://ott.udptv.net/stream/iptv/tv5hd/master.m3u8?u=discord.gg/civ3&p=6d5d9a902ca1be2c5ba915568660086c0d2cb315c3063482ce97b97b0e70b96a"
  },
  {
    "name": "VIVA CINEMA",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "PH CHANNELS\ud83c\uddf5\ud83c\udded",
    "url": "https://ott.udptv.net/stream/iptv/vivacinema/master.m3u8?u=discord.gg/civ3&p=6d5d9a902ca1be2c5ba915568660086c0d2cb315c3063482ce97b97b0e70b96a"
  },
  {
    "name": "DREAMWORKS TAGALIZED",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "ANIME/CARTOONS\ud83d\udc7d",
    "url": "https://ott.udptv.net/stream/iptv/dreamworkstagalized/master.m3u8?u=discord.gg/civ3&p=6d5d9a902ca1be2c5ba915568660086c0d2cb315c3063482ce97b97b0e70b96a"
  },
  {
    "name": "ANIME ALL DAY",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "ANIME/CARTOONS\ud83d\udc7d",
    "url": "https://pluto.xyadx.workers.dev/stitch/hls/channel/5812b7d3249444e05d09cc49/master.m3u8"
  },
  {
    "name": "ANIME ALL DAY",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "ANIME/CARTOONS\ud83d\udc7d",
    "url": "https://pluto.xyadx.workers.dev/stitch/hls/channel/5812b7d3249444e05d09cc49/master.m3u8"
  },
  {
    "name": "ANIME * HIDAVE",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "ANIME/CARTOONS\ud83d\udc7d",
    "url": "https://amc-anime-x-hidive-1-us.tablo.wurl.tv/192.m3u8"
  },
  {
    "name": "BABY SHARK TV",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "ANIME/CARTOONS\ud83d\udc7d",
    "url": "https://newidco-babysharktv-1-eu.rakuten.wurl.tv/3000.m3u8"
  },
  {
    "name": "BARBIE AND FRIENDS",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "ANIME/CARTOONS\ud83d\udc7d",
    "url": "https://d1xqdnwy1bo05f.cloudfront.net/v1/manifest/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-jh1ol665g3amg/09a20cb2-e0e7-4e17-afdb-aa6b35ce6da0/3.m3u8"
  },
  {
    "name": "BOOMERANG TV",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "ANIME/CARTOONS\ud83d\udc7d",
    "url": "https://fl3.moveonjoy.com/BOOMERANG/index.m3u8"
  },
  {
    "name": "CARTOONITO",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "ANIME/CARTOONS\ud83d\udc7d",
    "url": "https://cdn4.skygo.mn/live/disk1/Boomerang/HLS-FTA/Boomerang-avc1_3000000=8.m3u8"
  },
  {
    "name": "CRUNHYROLL",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "ANIME/CARTOONS\ud83d\udc7d",
    "url": "https://pluto.xyadx.workers.dev/stitch/hls/channel/65652f7fc0fc88000883537a/master.m3u8"
  },
  {
    "name": "ABC AUSTRALIA",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "NEWS/ENTERTAINMEN/DOCUMENTARY",
    "url": "https://streams2.sofast.tv/sofastplayout/33c31ac4-51fa-46ae-afd0-0d1fe5e60a80_0_HLS/master.m3u8"
  },
  {
    "name": "AL JAZEERA",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "NEWS/ENTERTAINMEN/DOCUMENTARY",
    "url": "https://live-hls-web-aje.getaj.net/AJE/index.m3u8"
  },
  {
    "name": "AMERICA FUNNIEST VIDEO",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "NEWS/ENTERTAINMEN/DOCUMENTARY",
    "url": "https://futuretoday-afv-family-2-be.samsung.wurl.tv/1200.m3u8"
  },
  {
    "name": "ARIRANG HD",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "NEWS/ENTERTAINMEN/DOCUMENTARY",
    "url": "https://amdlive-ch01-ctnd-com.akamaized.net/arirang_1ch/smil:arirang_1ch.smil/chunklist_b3256000_sleng.m3u8"
  },
  {
    "name": "BILLIARD TV",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "NEWS/ENTERTAINMEN/DOCUMENTARY",
    "url": "https://1b29dd71cd5e4191a3eb26afff631ed3.mediatailor.us-west-2.amazonaws.com/v1/manifest/9d062541f2ff39b5c0f48b743c6411d25f62fc25/SportsTribal-BilliardTV/c4e6753c-6014-4551-bef0-f212872de6a4/4.m3u8"
  },
  {
    "name": "BOXING TV",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "NEWS/ENTERTAINMEN/DOCUMENTARY",
    "url": "https://1180885077.rsc.cdn77.org/HLS/BOXINGTV_v4.m3u8"
  },
  {
    "name": "BeIN SPORTS USA",
    "logo": "https://raw.githubusercontent.com/pigzillaaaaa/iptv-scraper/refs/heads/main/logos/bein-sports-6.png",
    "group": "NEWS/ENTERTAINMEN/DOCUMENTARY",
    "url": "https://zekonew.newkso.ru/zeko/premium425/mono.m3u8"
  },
  {
    "name": "CGTN",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "NEWS/ENTERTAINMEN/DOCUMENTARY",
    "url": "https://amg00405-rakutentv-cgtndocumentary-rakuten-0ql8j.amagi.tv/master480p.m3u8"
  },
  {
    "name": "CNA",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "NEWS/ENTERTAINMEN/DOCUMENTARY",
    "url": "https://d2e1asnsl7br7b.cloudfront.net/7782e205e72f43aeb4a48ec97f66ebbe/index_5.m3u8"
  },
  {
    "name": "CI USA",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "Other",
    "url": "https://tv.iyadix.workers.dev/57256.m3u8"
  },
  {
    "name": "DISCOVERY ASIA",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "NEWS/ENTERTAINMEN/DOCUMENTARY",
    "url": "https://cdn3.skygo.mn/live/disk1/Discovery_Asia/HLS-FTA/Discovery_Asia.m3u8"
  },
  {
    "name": "DISCOVERY CHANNEL",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "NEWS/ENTERTAINMEN/DOCUMENTARY",
    "url": "https://cdn3.skygo.mn/live/disk1/Discovery_Asia/HLS-FTA/Discovery_Asia-avc1_2499968=15.m3u8"
  },
  {
    "name": "FAIL ARMY",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "NEWS/ENTERTAINMEN/DOCUMENTARY",
    "url": "https://pluto.xyadx.workers.dev/stitch/hls/channel/554158e864526b29254ff105/master.m3u8"
  },
  {
    "name": "FIGHT NETWORK",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "NEWS/ENTERTAINMEN/DOCUMENTARY",
    "url": "https://jmp2.uk/plex-5e20b730f2f8d5003d739db7-606605549dbfca002d2ae877.m3u8"
  },
  {
    "name": "FIGHT TV",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "NEWS/ENTERTAINMEN/DOCUMENTARY",
    "url": "https://streams2.sofast.tv/v1/master/611d79b11b77e2f571934fd80ca1413453772ac7/70e45fc8-1f6c-4492-ac26-9868f70f4e02/manifest.m3u8"
  },
  {
    "name": "FILAM TV",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "NEWS/ENTERTAINMEN/DOCUMENTARY",
    "url": "https://cdn.vegasplus.us/vegas/ftv/playlist.m3u8"
  },
  {
    "name": "Fox Sports 1",
    "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/united-states/fox-sports-1-us.png",
    "group": "NEWS/ENTERTAINMEN/DOCUMENTARY",
    "url": "https://v17.thetvapp.to/hls/FoxSports1/tracks-v1a1/mono.m3u8"
  },
  {
    "name": "Fox Sports 1 (SD)",
    "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/united-states/fox-sports-1-us.png",
    "group": "NEWS/ENTERTAINMEN/DOCUMENTARY",
    "url": "https://v17.thetvapp.to/hls/FoxSports1/tracks-v2a1/mono.m3u8"
  },
  {
    "name": "Fox Sports 2",
    "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/united-states/fox-sports-2-us.png",
    "group": "NEWS/ENTERTAINMEN/DOCUMENTARY",
    "url": "https://v8.thetvapp.to/hls/FoxSports2/tracks-v1a1/mono.m3u8"
  },
  {
    "name": "Fox Sports 2 (SD)",
    "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/united-states/fox-sports-2-us.png",
    "group": "NEWS/ENTERTAINMEN/DOCUMENTARY",
    "url": "https://v8.thetvapp.to/hls/FoxSports2/tracks-v2a1/mono.m3u8"
  },
  {
    "name": "FOX USA",
    "logo": "https://raw.githubusercontent.com/pigzillaaaaa/iptv-scraper/refs/heads/main/logos/fox-usa.png",
    "group": "NEWS/ENTERTAINMEN/DOCUMENTARY",
    "url": "https://zekonew.newkso.ru/zeko/premium54/mono.m3u8"
  },
  {
    "name": "American Pickers",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "NEWS/ENTERTAINMEN/DOCUMENTARY",
    "url": "https://d2fmvezvf9jfft.cloudfront.net/playlist.m3u8"
  },
  {
    "name": "America's Got Talent",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "NEWS/ENTERTAINMEN/DOCUMENTARY",
    "url": "https://dhkq1p9audihq.cloudfront.net/index.m3u8"
  },
  {
    "name": "America's Got Talent",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "NEWS/ENTERTAINMEN/DOCUMENTARY",
    "url": "https://dhkq1p9audihq.cloudfront.net/index.m3u8"
  },
  {
    "name": "ABC (WABC)",
    "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/united-states/us-local/abc-7-wabc-us.png",
    "group": "NEWS/ENTERTAINMEN/DOCUMENTARY",
    "url": "https://fl1.moveonjoy.com/ABC_EAST/index.m3u8"
  },
  {
    "name": "Aspire",
    "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/aspire-tv-us.png",
    "group": "NEWS/ENTERTAINMEN/DOCUMENTARY",
    "url": "https://fl3.moveonjoy.com/Aspire/index.m3u8"
  },
  {
    "name": "BET Jams",
    "logo": "https://github.com/tv-logo/tv-logos/blob/main/countries/united-states/bet-jams-us.png?raw=true",
    "group": "NEWS/ENTERTAINMEN/DOCUMENTARY",
    "url": "https://fl3.moveonjoy.com/BET_Jams/index.m3u8"
  },
  {
    "name": "Cooking Channel USA",
    "logo": "https://raw.githubusercontent.com/pigzillaaaaa/iptv-scraper/refs/heads/main/logos/cooking-channel.png",
    "group": "NEWS/ENTERTAINMEN/DOCUMENTARY",
    "url": "https://dokko1new.newkso.ru/dokko1/premium697/mono.m3u8"
  },
  {
    "name": "COMEDY CENTRAL",
    "logo": "http://schedulesdirect-api20141201-logos.s3.dualstack.us-east-1.amazonaws.com/stationLogos/s10149_dark_360w_270h.png",
    "group": "NEWS/ENTERTAINMEN/DOCUMENTARY",
    "url": "https://fl3.moveonjoy.com/Comedy_Central/index.m3u8"
  },
  {
    "name": "ESPN",
    "logo": "http://schedulesdirect-api20141201-logos.s3.dualstack.us-east-1.amazonaws.com/stationLogos/s10179_dark_360w_270h.png",
    "group": "NEWS/ENTERTAINMEN/DOCUMENTARY",
    "url": "https://41.205.93.154/ESPN/index.m3u8"
  },
  {
    "name": "Pursuit Channel",
    "logo": "https://github.com/tv-logo/tv-logos/blob/main/countries/united-states/pursuit-us.png?raw=true",
    "group": "NEWS/ENTERTAINMEN/DOCUMENTARY",
    "url": "https://fl3.moveonjoy.com/Pursuit_Channel/index.m3u8"
  },
  {
    "name": "National Geographic US - Eastern (SD)",
    "logo": "http://schedulesdirect-api20141201-logos.s3.dualstack.us-east-1.amazonaws.com/stationLogos/s49438_dark_360w_270h.png",
    "group": "NEWS/ENTERTAINMEN/DOCUMENTARY",
    "url": "https://v15.thetvapp.to/hls/NationalGeographicEast/tracks-v2a1/mono.m3u8"
  },
  {
    "name": "National Geographic Wild",
    "logo": "http://schedulesdirect-api20141201-logos.s3.dualstack.us-east-1.amazonaws.com/stationLogos/s66804_dark_360w_270h.png",
    "group": "NEWS/ENTERTAINMEN/DOCUMENTARY",
    "url": "https://v12.thetvapp.to/hls/NationalGeographicWildEast/tracks-v1a1/mono.m3u8"
  },
  {
    "name": "Sky Sports F1 UK",
    "logo": "https://raw.githubusercontent.com/pigzillaaaaa/iptv-scraper/refs/heads/main/logos/sky-sports-f1-uk.png",
    "group": "NEWS/ENTERTAINMEN/DOCUMENTARY",
    "url": "https://windnew.newkso.ru/wind/premium60/mono.m3u8"
  },
  {
    "name": "National Geographic Wild (SD)",
    "logo": "http://schedulesdirect-api20141201-logos.s3.dualstack.us-east-1.amazonaws.com/stationLogos/s66804_dark_360w_270h.png",
    "group": "NEWS/ENTERTAINMEN/DOCUMENTARY",
    "url": "https://v12.thetvapp.to/hls/NationalGeographicWildEast/tracks-v2a1/mono.m3u8"
  },
  {
    "name": "TNT - Eastern Feed",
    "logo": "http://schedulesdirect-api20141201-logos.s3.dualstack.us-east-1.amazonaws.com/stationLogos/s11164_dark_360w_270h.png",
    "group": "NEWS/ENTERTAINMEN/DOCUMENTARY",
    "url": "https://v18.thetvapp.to/hls/TNTEast/tracks-v1a1/mono.m3u8"
  },
  {
    "name": "TNT - Eastern Feed (SD)",
    "logo": "http://schedulesdirect-api20141201-logos.s3.dualstack.us-east-1.amazonaws.com/stationLogos/s11164_dark_360w_270h.png",
    "group": "NEWS/ENTERTAINMEN/DOCUMENTARY",
    "url": "https://v18.thetvapp.to/hls/TNTEast/tracks-v2a1/mono.m3u8"
  },
  {
    "name": "Animal Planet US - East",
    "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/united-states/animal-planet-us.png",
    "group": "NEWS/ENTERTAINMEN/DOCUMENTARY",
    "url": "https://v14.thetvapp.to/hls/AnimalPlanetEast/tracks-v1a1/mono.m3u8"
  },
  {
    "name": "Animal Planet US - East (SD)",
    "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/united-states/animal-planet-us.png",
    "group": "NEWS/ENTERTAINMEN/DOCUMENTARY",
    "url": "https://v14.thetvapp.to/hls/AnimalPlanetEast/tracks-v2a1/mono.m3u8"
  },
  {
    "name": "UFC Network",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/4/41/UFC_Network.png",
    "group": "NEWS/ENTERTAINMEN/DOCUMENTARY",
    "url": "https://supersonictv.live:8080/611366/682256/22177"
  },
  {
    "name": "WWE Network",
    "logo": "https://raw.githubusercontent.com/pigzillaaaaa/iptv-scraper/refs/heads/main/logos/wwe-network.png",
    "group": "NEWS/ENTERTAINMEN/DOCUMENTARY",
    "url": "https://supersonictv.live:8080/611366/682256/22185"
  },
  {
    "name": "TNT Sports 1 UK",
    "logo": "https://raw.githubusercontent.com/pigzillaaaaa/iptv-scraper/refs/heads/main/logos/tnt-sports-1-uk.png",
    "group": "NEWS/ENTERTAINMEN/DOCUMENTARY",
    "url": "https://nfsnew.newkso.ru/nfs/premium31/mono.m3u8|Referer=https://caq21harderv991gpluralplay.xyz/|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 17_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1|Origin=https://caq21harderv991gpluralplay.xyz"
  },
  {
    "name": "TNT Sports 2 UK",
    "logo": "https://raw.githubusercontent.com/pigzillaaaaa/iptv-scraper/refs/heads/main/logos/tnt-sports-2-uk.png",
    "group": "NEWS/ENTERTAINMEN/DOCUMENTARY",
    "url": "https://nfsnew.newkso.ru/nfs/premium32/mono.m3u8|Referer=https://caq21harderv991gpluralplay.xyz/|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 17_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1|Origin=https://caq21harderv991gpluralplay.xyz"
  },
  {
    "name": "TNT Sports 3 UK",
    "logo": "https://raw.githubusercontent.com/pigzillaaaaa/iptv-scraper/refs/heads/main/logos/tnt-sports-3-uk.png",
    "group": "NEWS/ENTERTAINMEN/DOCUMENTARY",
    "url": "https://nfsnew.newkso.ru/nfs/premium33/mono.m3u8|Referer=https://caq21harderv991gpluralplay.xyz/|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 17_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1|Origin=https://caq21harderv991gpluralplay.xyz"
  },
  {
    "name": "TNT Sports 4 UK",
    "logo": "https://raw.githubusercontent.com/pigzillaaaaa/iptv-scraper/refs/heads/main/logos/tnt-sports-4-uk.png",
    "group": "NEWS/ENTERTAINMEN/DOCUMENTARY",
    "url": "https://nfsnew.newkso.ru/nfs/premium34/mono.m3u8|Referer=https://caq21harderv991gpluralplay.xyz/|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 17_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1|Origin=https://caq21harderv991gpluralplay.xyz"
  },
  {
    "name": "TNT USA",
    "logo": "https://raw.githubusercontent.com/pigzillaaaaa/iptv-scraper/refs/heads/main/logos/tnt-usa.png",
    "group": "NEWS/ENTERTAINMEN/DOCUMENTARY",
    "url": "https://zekonew.newkso.ru/zeko/premium338/mono.m3u8|Referer=https://caq21harderv991gpluralplay.xyz/|User-Agent=Mozilla/5.0 (iPhone; CPU iPhone OS 17_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1|Origin=https://caq21harderv991gpluralplay.xyz"
  },
  {
    "name": "Travel Channel US - East",
    "logo": "https://github.com/tv-logo/tv-logos/blob/main/countries/united-states/travel-channel-us.png?raw=true",
    "group": "NEWS/ENTERTAINMEN/DOCUMENTARY",
    "url": "https://v15.thetvapp.to/hls/TravelChannelEast/tracks-v1a1/mono.m3u8"
  },
  {
    "name": "Travel Channel US - East (SD)",
    "logo": "https://github.com/tv-logo/tv-logos/blob/main/countries/united-states/travel-channel-us.png?raw=true",
    "group": "NEWS/ENTERTAINMEN/DOCUMENTARY",
    "url": "https://v15.thetvapp.to/hls/TravelChannelEast/tracks-v2a1/mono.m3u8"
  },
  {
    "name": "DREAMWORKS TAGALIZED",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "ANIME/CARTOONS\ud83d\udc7d",
    "url": "https://cdn.ganbaruby23.xyz/stream/restream/alltv/stream.m3u8?uid=1485345779&u=FiliTV&p=ea3e07a61f5af654b1bc96090db16bf246337738d5fceae3401a1205f2f8a60f"
  },
  {
    "name": "ANIME ALL DAY",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "ANIME/CARTOONS\ud83d\udc7d",
    "url": "https://pluto.xyadx.workers.dev/stitch/hls/channel/5812b7d3249444e05d09cc49/master.m3u8"
  },
  {
    "name": "ANIME ALL DAY",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "ANIME/CARTOONS\ud83d\udc7d",
    "url": "https://pluto.xyadx.workers.dev/stitch/hls/channel/5812b7d3249444e05d09cc49/master.m3u8"
  },
  {
    "name": "ANIME * HIDAVE",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "ANIME/CARTOONS\ud83d\udc7d",
    "url": "https://amc-anime-x-hidive-1-us.tablo.wurl.tv/192.m3u8"
  },
  {
    "name": "BABY SHARK TV",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "ANIME/CARTOONS\ud83d\udc7d",
    "url": "https://newidco-babysharktv-1-eu.rakuten.wurl.tv/3000.m3u8"
  },
  {
    "name": "BARBIE AND FRIENDS",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "ANIME/CARTOONS\ud83d\udc7d",
    "url": "https://d1xqdnwy1bo05f.cloudfront.net/v1/manifest/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-jh1ol665g3amg/09a20cb2-e0e7-4e17-afdb-aa6b35ce6da0/3.m3u8"
  },
  {
    "name": "BOOMERANG TV",
    "logo": "https://i.imgur.com/HvKsHvx.png group-title=",
    "group": "ANIME/CARTOONS\ud83d\udc7d",
    "url": "https://fl3.moveonjoy.com/BOOMERANG/index.m3u8"
  },
  {
    "name": "CARTOONITO",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "ANIME/CARTOONS\ud83d\udc7d",
    "url": "https://cdn4.skygo.mn/live/disk1/Boomerang/HLS-FTA/Boomerang-avc1_3000000=8.m3u8"
  },
  {
    "name": "CRUNHYROLL",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "ANIME/CARTOONS\ud83d\udc7d",
    "url": "https://pluto.xyadx.workers.dev/stitch/hls/channel/65652f7fc0fc88000883537a/master.m3u8"
  },
  {
    "name": "Boomerang",
    "logo": "http://schedulesdirect-api20141201-logos.s3.dualstack.us-east-1.amazonaws.com/stationLogos/s21883_dark_360w_270h.png",
    "group": "ANIME/CARTOONS\ud83d\udc7d",
    "url": "https://v12.thetvapp.to/hls/Boomerang/tracks-v1a1/mono.m3u8"
  },
  {
    "name": "Boomerang (SD)",
    "logo": "http://schedulesdirect-api20141201-logos.s3.dualstack.us-east-1.amazonaws.com/stationLogos/s21883_dark_360w_270h.png",
    "group": "ANIME/CARTOONS\ud83d\udc7d",
    "url": "https://v12.thetvapp.to/hls/Boomerang/tracks-v2a1/mono.m3u8"
  },
  {
    "name": "Nickelodeon",
    "logo": "http://schedulesdirect-api20141201-logos.s3.dualstack.us-east-1.amazonaws.com/stationLogos/s11006_dark_360w_270h.png",
    "group": "ANIME/CARTOONS\ud83d\udc7d",
    "url": "https://fl1.moveonjoy.com/NICKELODEON/index.m3u8"
  },
  {
    "name": "NickToons",
    "logo": "https://github.com/tv-logo/tv-logos/blob/main/countries/united-states/nick-toons-us.png?raw=true",
    "group": "ANIME/CARTOONS\ud83d\udc7d",
    "url": "https://fl1.moveonjoy.com/NICKTOONS/index.m3u8"
  },
  {
    "name": "CARTOON NETWORK USA - Eastern Feed",
    "logo": "http://schedulesdirect-api20141201-logos.s3.dualstack.us-east-1.amazonaws.com/stationLogos/s12131_dark_360w_270h.png",
    "group": "ANIME/CARTOONS\ud83d\udc7d",
    "url": "https://v12.thetvapp.to/hls/CartoonNetworkEast/tracks-v1a1/mono.m3u8"
  },
  {
    "name": "CARTOON NETWORK USA - Eastern Feed (SD)",
    "logo": "http://schedulesdirect-api20141201-logos.s3.dualstack.us-east-1.amazonaws.com/stationLogos/s12131_dark_360w_270h.png",
    "group": "ANIME/CARTOONS\ud83d\udc7d",
    "url": "https://v12.thetvapp.to/hls/CartoonNetworkEast/tracks-v2a1/mono.m3u8"
  },
  {
    "name": "DISNEY CHANNEL - Eastern Feed",
    "logo": "http://schedulesdirect-api20141201-logos.s3.dualstack.us-east-1.amazonaws.com/stationLogos/s10171_dark_360w_270h.png",
    "group": "ANIME/CARTOONS\ud83d\udc7d",
    "url": "https://v3.thetvapp.to/hls/DisneyChannelEast/tracks-v1a1/mono.m3u8"
  },
  {
    "name": "DISNEY CHANNEL - Eastern Feed (SD)",
    "logo": "http://schedulesdirect-api20141201-logos.s3.dualstack.us-east-1.amazonaws.com/stationLogos/s10171_dark_360w_270h.png",
    "group": "ANIME/CARTOONS\ud83d\udc7d",
    "url": "https://v3.thetvapp.to/hls/DisneyChannelEast/tracks-v2a1/mono.m3u8"
  },
  {
    "name": "Disney JR USA - East",
    "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/635e715cb2f2c6d28e9691861d3d331dd040285b/countries/united-states/disney-junior-us.png",
    "group": "ANIME/CARTOONS\ud83d\udc7d",
    "url": "https://v14.thetvapp.to/hls/DisneyJuniorEast/tracks-v1a1/mono.m3u8"
  },
  {
    "name": "Disney JR USA - East (SD)",
    "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/635e715cb2f2c6d28e9691861d3d331dd040285b/countries/united-states/disney-junior-us.png",
    "group": "ANIME/CARTOONS\ud83d\udc7d",
    "url": "https://v14.thetvapp.to/hls/DisneyJuniorEast/tracks-v2a1/mono.m3u8"
  },
  {
    "name": "Disney XD USA - Eastern Feed",
    "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/united-states/disney-xd-us.png",
    "group": "ANIME/CARTOONS\ud83d\udc7d",
    "url": "https://v15.thetvapp.to/hls/DisneyXDEast/tracks-v1a1/mono.m3u8"
  },
  {
    "name": "Disney XD USA - Eastern Feed (SD)",
    "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/united-states/disney-xd-us.png",
    "group": "ANIME/CARTOONS\ud83d\udc7d",
    "url": "https://v15.thetvapp.to/hls/DisneyXDEast/tracks-v2a1/mono.m3u8"
  },
  {
    "name": "NICK JR. - East",
    "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/united-states/nick-jr-us.png",
    "group": "ANIME/CARTOONS\ud83d\udc7d",
    "url": "https://v1.thetvapp.to/hls/NickJrEast/tracks-v1a1/mono.m3u8"
  },
  {
    "name": "NICK JR. - East (SD)",
    "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/united-states/nick-jr-us.png",
    "group": "ANIME/CARTOONS\ud83d\udc7d",
    "url": "https://v1.thetvapp.to/hls/NickJrEast/tracks-v2a1/mono.m3u8"
  },
  {
    "name": "Nickelodeon USA - East Feed",
    "logo": "http://schedulesdirect-api20141201-logos.s3.dualstack.us-east-1.amazonaws.com/stationLogos/s11006_dark_360w_270h.png",
    "group": "ANIME/CARTOONS\ud83d\udc7d",
    "url": "https://v17.thetvapp.to/hls/NickelodeonEast/tracks-v1a1/mono.m3u8"
  },
  {
    "name": "Nickelodeon USA - East Feed (SD)",
    "logo": "http://schedulesdirect-api20141201-logos.s3.dualstack.us-east-1.amazonaws.com/stationLogos/s11006_dark_360w_270h.png",
    "group": "ANIME/CARTOONS\ud83d\udc7d",
    "url": "https://v17.thetvapp.to/hls/NickelodeonEast/tracks-v2a1/mono.m3u8"
  },
  {
    "name": "Nicktoons - East",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/6/6e/Nicktoons.png",
    "group": "ANIME/CARTOONS\ud83d\udc7d",
    "url": "https://v15.thetvapp.to/hls/NicktoonsEast/tracks-v1a1/mono.m3u8"
  },
  {
    "name": "Nicktoons - East (SD)",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/6/6e/Nicktoons.png",
    "group": "ANIME/CARTOONS\ud83d\udc7d",
    "url": "https://v15.thetvapp.to/hls/NicktoonsEast/tracks-v2a1/mono.m3u8"
  },
  {
    "name": "TeenNick - Eastern",
    "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/635e715cb2f2c6d28e9691861d3d331dd040285b/countries/united-states/teen-nick-us.png",
    "group": "ANIME/CARTOONS\ud83d\udc7d",
    "url": "https://v17.thetvapp.to/hls/TeenNickEast/tracks-v1a1/mono.m3u8"
  },
  {
    "name": "TeenNick - Eastern (SD)",
    "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/635e715cb2f2c6d28e9691861d3d331dd040285b/countries/united-states/teen-nick-us.png",
    "group": "ANIME/CARTOONS\ud83d\udc7d",
    "url": "https://v17.thetvapp.to/hls/TeenNickEast/tracks-v2a1/mono.m3u8"
  },
  {
    "name": "CINEMAX - Eastern Feed",
    "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/united-states/cinemax-us.png",
    "group": "MOVIE CHANNELS\ud83d\udcfa",
    "url": "https://v13.thetvapp.to/hls/CinemaxEast/tracks-v1a1/mono.m3u8"
  },
  {
    "name": "CINEMAX - Eastern Feed (SD)",
    "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/united-states/cinemax-us.png",
    "group": "MOVIE CHANNELS\ud83d\udcfa",
    "url": "https://v13.thetvapp.to/hls/CinemaxEast/tracks-v2a1/mono.m3u8"
  },
  {
    "name": "CURIOSITY STREAM",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "MOVIE CHANNELS\ud83d\udcfa",
    "url": "https://fl3.moveonjoy.com/Curiosity_Stream/index.m3u8"
  },
  {
    "name": "HOLLYWOOD MOVIES",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "MOVIE CHANNELS\ud83d\udcfa",
    "url": "https://cdn-apse1-prod.tsv2.amagi.tv/linear/amg01076-lightningintern-actionhollywood-samsungnz/playlist.m3u8"
  },
  {
    "name": "Baywatch",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "MOVIE CHANNELS\ud83d\udcfa",
    "url": "https://d1ku2wsea2oun8.cloudfront.net/playlist.m3u8"
  },
  {
    "name": "MovieSphere",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "MOVIE CHANNELS\ud83d\udcfa",
    "url": "https://moviesphereuk-samsunguk.amagi.tv/playlist.m3u8"
  },
  {
    "name": "AMC",
    "logo": "http://schedulesdirect-api20141201-logos.s3.dualstack.us-east-1.amazonaws.com/stationLogos/s10021_dark_360w_270h.png",
    "group": "MOVIE CHANNELS\ud83d\udcfa",
    "url": "https://fl5.moveonjoy.com/AMC_NETWORK/index.m3u8"
  },
  {
    "name": "American Heroes Channel",
    "logo": "http://schedulesdirect-api20141201-logos.s3.dualstack.us-east-1.amazonaws.com/stationLogos/s18284_dark_360w_270h.png",
    "group": "MOVIE CHANNELS\ud83d\udcfa",
    "url": "https://fl3.moveonjoy.com/American_Heroes_Channel/index.m3u8"
  },
  {
    "name": "Sony Movie Channel",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "MOVIE CHANNELS\ud83d\udcfa",
    "url": "https://fl3.moveonjoy.com/Sony_Movie_Channel/index.m3u8"
  },
  {
    "name": "Start TV",
    "logo": "https://i.imgur.com/HvKsHvx.png",
    "group": "MOVIE CHANNELS\ud83d\udcfa",
    "url": "https://fl3.moveonjoy.com/Start_Tv/index.m3u8"
  },
  {
    "name": "FX Movie Channel",
    "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/united-states/fxm-movie-channel-us.png",
    "group": "MOVIE CHANNELS\ud83d\udcfa",
    "url": "https://v15.thetvapp.to/hls/FXMovieChannel/tracks-v1a1/mono.m3u8"
  },
  {
    "name": "FX Movie Channel (SD)",
    "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/united-states/fxm-movie-channel-us.png",
    "group": "MOVIE CHANNELS\ud83d\udcfa",
    "url": "https://v15.thetvapp.to/hls/FXMovieChannel/tracks-v2a1/mono.m3u8"
  },
  {
    "name": "HBO - Eastern Feed",
    "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/united-states/hbo-us.png",
    "group": "MOVIE CHANNELS\ud83d\udcfa",
    "url": "https://v18.thetvapp.to/hls/HBOEast/tracks-v1a1/mono.m3u8"
  },
  {
    "name": "HBO - Eastern Feed (SD)",
    "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/united-states/hbo-us.png",
    "group": "MOVIE CHANNELS\ud83d\udcfa",
    "url": "https://v18.thetvapp.to/hls/HBOEast/tracks-v2a1/mono.m3u8"
  },
  {
    "name": "HBO 2 - Eastern Feed",
    "logo": "http://schedulesdirect-api20141201-logos.s3.dualstack.us-east-1.amazonaws.com/stationLogos/s68140_dark_360w_270h.png",
    "group": "MOVIE CHANNELS\ud83d\udcfa",
    "url": "https://v2.thetvapp.to/hls/HBO2East/tracks-v1a1/mono.m3u8"
  },
  {
    "name": "HBO 2 - Eastern Feed (SD)",
    "logo": "http://schedulesdirect-api20141201-logos.s3.dualstack.us-east-1.amazonaws.com/stationLogos/s68140_dark_360w_270h.png",
    "group": "MOVIE CHANNELS\ud83d\udcfa",
    "url": "https://v2.thetvapp.to/hls/HBO2East/tracks-v2a1/mono.m3u8"
  },
  {
    "name": "HBO Comedy HD - East",
    "logo": "http://schedulesdirect-api20141201-logos.s3.dualstack.us-east-1.amazonaws.com/stationLogos/s18429_dark_360w_270h.png",
    "group": "MOVIE CHANNELS\ud83d\udcfa",
    "url": "https://v1.thetvapp.to/hls/HBOComedyEast/tracks-v1a1/mono.m3u8"
  },
  {
    "name": "HBO Comedy HD - East (SD)",
    "logo": "http://schedulesdirect-api20141201-logos.s3.dualstack.us-east-1.amazonaws.com/stationLogos/s18429_dark_360w_270h.png",
    "group": "MOVIE CHANNELS\ud83d\udcfa",
    "url": "https://v1.thetvapp.to/hls/HBOComedyEast/tracks-v2a1/mono.m3u8"
  },
  {
    "name": "HBO Family - Eastern Feed",
    "logo": "http://schedulesdirect-api20141201-logos.s3.dualstack.us-east-1.amazonaws.com/stationLogos/s16585_dark_360w_270h.png",
    "group": "MOVIE CHANNELS\ud83d\udcfa",
    "url": "https://v1.thetvapp.to/hls/HBOFamilyEast/tracks-v1a1/mono.m3u8"
  },
  {
    "name": "HBO Family - Eastern Feed (SD)",
    "logo": "http://schedulesdirect-api20141201-logos.s3.dualstack.us-east-1.amazonaws.com/stationLogos/s16585_dark_360w_270h.png",
    "group": "MOVIE CHANNELS\ud83d\udcfa",
    "url": "https://v1.thetvapp.to/hls/HBOFamilyEast/tracks-v2a1/mono.m3u8"
  },
  {
    "name": "HBO Signature (HBO 3) - Eastern",
    "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/united-states/hbo-signature-us.png",
    "group": "MOVIE CHANNELS\ud83d\udcfa",
    "url": "https://v15.thetvapp.to/hls/HBOSignatureEast/tracks-v1a1/mono.m3u8"
  },
  {
    "name": "HBO Signature (HBO 3) - Eastern (SD)",
    "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/united-states/hbo-signature-us.png",
    "group": "MOVIE CHANNELS\ud83d\udcfa",
    "url": "https://v15.thetvapp.to/hls/HBOSignatureEast/tracks-v2a1/mono.m3u8"
  },
  {
    "name": "HBO Zone HD - East",
    "logo": "http://schedulesdirect-api20141201-logos.s3.dualstack.us-east-1.amazonaws.com/stationLogos/s18431_dark_360w_270h.png",
    "group": "MOVIE CHANNELS\ud83d\udcfa",
    "url": "https://v14.thetvapp.to/hls/HBOZoneEast/tracks-v1a1/mono.m3u8"
  },
  {
    "name": "HBO Zone HD - East (SD)",
    "logo": "http://schedulesdirect-api20141201-logos.s3.dualstack.us-east-1.amazonaws.com/stationLogos/s18431_dark_360w_270h.png",
    "group": "MOVIE CHANNELS\ud83d\udcfa",
    "url": "https://v14.thetvapp.to/hls/HBOZoneEast/tracks-v2a1/mono.m3u8"
  },
  {
    "name": "CINEMAX - Eastern Feed",
    "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/united-states/cinemax-us.png",
    "group": "MOVIE CHANNELS\ud83d\udcfa",
    "url": "https://v13.thetvapp.to/hls/CinemaxEast/tracks-v1a1/mono.m3u8"
  },
  {
    "name": "CINEMAX - Eastern Feed (SD)",
    "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/united-states/cinemax-us.png",
    "group": "MOVIE CHANNELS\ud83d\udcfa",
    "url": "https://v13.thetvapp.to/hls/CinemaxEast/tracks-v2a1/mono.m3u8"
  },
  {
    "name": "MovieMax (Max 6) - East",
    "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cinemax-moviemax-us.png",
    "group": "MOVIE CHANNELS\ud83d\udcfa",
    "url": "https://v17.thetvapp.to/hls/MovieMaxEast/tracks-v1a1/mono.m3u8"
  },
  {
    "name": "MovieMax (Max 6) - East (SD)",
    "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/united-states/cinemax-moviemax-us.png",
    "group": "MOVIE CHANNELS\ud83d\udcfa",
    "url": "https://v17.thetvapp.to/hls/MovieMaxEast/tracks-v2a1/mono.m3u8"
  },
  {
    "name": "Paramount Network",
    "logo": "https://raw.githubusercontent.com/pigzillaaaaa/iptv-scraper/refs/heads/main/logos/paramount-network.png",
    "group": "MOVIE CHANNELS\ud83d\udcfa",
    "url": "https://nfsnew.newkso.ru/nfs/premium334/mono.m3u8"
  },
  {
    "name": "Starz - Eastern",
    "logo": "https://github.com/tv-logo/tv-logos/blob/main/countries/united-states/starz-us.png?raw=true",
    "group": "MOVIE CHANNELS\ud83d\udcfa",
    "url": "https://v13.thetvapp.to/hls/StarzEast/tracks-v1a1/mono.m3u8"
  },
  {
    "name": "Starz - Eastern (SD)",
    "logo": "https://github.com/tv-logo/tv-logos/blob/main/countries/united-states/starz-us.png?raw=true",
    "group": "MOVIE CHANNELS\ud83d\udcfa",
    "url": "https://v13.thetvapp.to/hls/StarzEast/tracks-v2a1/mono.m3u8"
  },
  {
    "name": "DZBR Bible Radio 531",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://stream.radio.co/se9de95c10/listen"
  },
  {
    "name": "Radio Maria Philippines",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://dreamsiteradiocp2.com:8052/stream.mp3"
  },
  {
    "name": "RainbowFM",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://rainbowfm2020.radioca.st/stream?1587801467850"
  },
  {
    "name": "Dxki Strong Radio 90.3",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://67.212.238.178:7007/stream"
  },
  {
    "name": "109.1 IDOL FM",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://cast.jomarhost.com/radio/8090/radio.mp3"
  },
  {
    "name": "DZRH News AM",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://streamingv2.shoutcast.com/JamendoLounge"
  },
  {
    "name": "97.5 Love Radio Iloilo",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://loveradio.live24.gr/loveradio-1000"
  },
  {
    "name": "101.1 Smash FM",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://centova57.instainternet.com:8115/stream"
  },
  {
    "name": "Memories FM 89.9",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://s5.reliastream.com:7134/stream"
  },
  {
    "name": "FReSH FM PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://s36.radiolize.com/radio/8170/radio.mp3"
  },
  {
    "name": "PHR 80.9 FM",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://djsamu.radioca.st/stream.nsv"
  },
  {
    "name": "Music Tambayan",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://dharkgfx.com/radio/8000/radio.mp3"
  },
  {
    "name": "CyberPinoy Radio",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://securestreams.autopo.st:1215/stream"
  },
  {
    "name": "COOL FM 90.1",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://equinox.shoutca.st:8938/"
  },
  {
    "name": "Love FM 98.9",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://centova57.instainternet.com:8179/stream"
  },
  {
    "name": "Boracay FM",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://boracayfm.stream.laut.fm/boracayfm?ref=web-app&ampt302=2019-04-09_12-22-23&ampuuid=f6d43b18-d040-49a3-b7af-4ca2f177541a"
  },
  {
    "name": "Supreme FM 98.1",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://centova57.instainternet.com:8191/stream"
  },
  {
    "name": "997 My Friends FM",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://trappist.shoutca.st:8171/live"
  },
  {
    "name": "Mapua Radio Cardinal",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://edge.mixlr.com/channel/nhtli"
  },
  {
    "name": "Atlantis",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://us2.amfmph.com:8080/stream"
  },
  {
    "name": "CoolFm Hits 901",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://equinox.shoutca.st:8938/index.html?sid=1"
  },
  {
    "name": "104.9 Rja Foundation FM",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://cast.jomarhost.com/radio/8100/radio.mp3"
  },
  {
    "name": "Favradio",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://stream.favhosting.com:8109/"
  },
  {
    "name": "Pinoy Rap Radio",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://sp2.streams.ovh/8004/stream/stream/1"
  },
  {
    "name": "Coolfm Rock",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://mediagw.e-tiger.net/stream/zc10"
  },
  {
    "name": "Slowly Radio",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://listen.radioking.com/radio/421816/stream/476452"
  },
  {
    "name": "Bespren Radio",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://streamnavs.net:8089/live"
  },
  {
    "name": "Breezylyn FM",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://178.netromedia.com:8000/BreezeFM"
  },
  {
    "name": "V Hive Radio",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://192.99.8.192:3154/vhiveradiostream"
  },
  {
    "name": "Party Rock FM",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://radio21.streamabc.net/radio21-partyrock-mp3-256-7707367"
  },
  {
    "name": "23.12 Dimension FM Radio",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://cast.jomarhost.com/radio/8030/radio.mp3"
  },
  {
    "name": "Troy FM",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://live.streamguys1.com:2385/troy1"
  },
  {
    "name": "Green Giant FM",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://str1.streamhostpg.com.br:8010/stream?1604661148956"
  },
  {
    "name": "Manila Bay Beach Radio",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://s4.radio.co/sd319ba2a4/listen"
  },
  {
    "name": "97.9 Caerenslovers FM",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://cast.jomarhost.com/radio/8010/radio.mp3?1639372973514"
  },
  {
    "name": "Sunshine FM Radio",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://23203.live.streamtheworld.com/4SFM_SC"
  },
  {
    "name": "Rock109",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://listen.classicrock109.com:10042/"
  },
  {
    "name": "Radio Tamaraw Online",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://audiostreamen.nl:8006/"
  },
  {
    "name": "Love Radio Roxas",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://loveradioroxas.radioca.st:8216/stream"
  },
  {
    "name": "Love Radio Naga",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://loveradionaga.radioca.st:8070/stream"
  },
  {
    "name": "Love Radio Palawan",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://loveradiopalawan.radioca.st:8105/stream"
  },
  {
    "name": "Love Radio Malaybalay",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://lovemalaybalay.radioca.st:8828/stream"
  },
  {
    "name": "Love Radio Tacloban",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://lovetacloban.radioca.st:8113/stream"
  },
  {
    "name": "Love Radio Zamboanga",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://lovezamboanga.radioca.st:8157/stream"
  },
  {
    "name": "Love Radio Lucena",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://loveradiolucena.radioca.st:8158/stream"
  },
  {
    "name": "Love Radio Baguio",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://loveradiobaguio.radioca.st:8024/stream"
  },
  {
    "name": "Love Radio Bacolod",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://loveradiobacolod.radioca.st:8088/stream"
  },
  {
    "name": "Love Radio Daet",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://loveradiodaet.radioca.st:8804/stream"
  },
  {
    "name": "Love Radio Tuguegarao",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://lovetuguegarao.radioca.st:8086/stream"
  },
  {
    "name": "Love Radio Santiago",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://lovesantiago.radioca.st:8832/stream"
  },
  {
    "name": "Love Radio Catarman",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://lovecatarman.radioca.st:8796/stream"
  },
  {
    "name": "Love Radio Butuan",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://loveradiobutuan.radioca.st/"
  },
  {
    "name": "Love Radio Dagupan",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://loveradiodagupan.radioca.st:8195/stream"
  },
  {
    "name": "COOL FM 901",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://equinox.shoutca.st:8938/stream"
  },
  {
    "name": "VHive",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://192.99.8.192:3154/www.vhiveradio.com/"
  },
  {
    "name": "Exclusively The Everly Brothers Listen live",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://streaming.exclusive.radio/er/everlybrothers/icecast.audio"
  },
  {
    "name": "Disco House \u0420\u0430\u0434\u0438\u043e - RadioSpinner Listen live",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://live.radiospinner.com/disco-house-64"
  },
  {
    "name": "91.9 GUIMARAS KISS FM",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://stream2.jomarhost.com/listen/91.9_guimaras_kiss_fm/radio.mp3"
  },
  {
    "name": "AIR FM",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://stream2.jomarhost.com/listen/air_fm/radio.mp3"
  },
  {
    "name": "90.7 Love Radio Manila",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://boracayfm.stream.laut.fm/boracayfm"
  },
  {
    "name": "El Shaddai radio",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://statics-v2.streema.com/static/audios/sample.ea78c3d52389.mp3"
  },
  {
    "name": "Radyo Lipenio - RLNewsFM",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://stream.zeno.fm/3ninviiwep8uv.m3u"
  },
  {
    "name": "TeenRadio Global",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://radio.org.ph/play/rakista-manila/"
  },
  {
    "name": "Love Radio Baguio DWMB",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://loveradiobaguio.radioca.st/"
  },
  {
    "name": "96.3 Easy Rock - DWRK",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://s4.radio.co/s778110174/listen"
  },
  {
    "name": "Wish FM 107.5 - DWNU",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://untv.mmdlive.lldns.net/untv/f55dcf9ae0f542d6a7614893d0c2dd83/manifest.m3u8"
  },
  {
    "name": "RMN Iloilo - DYRI",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://us1.amfmph.com:8011/live"
  },
  {
    "name": "Yes! The Best Cebu - DYHR",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://yesfmcebu.radioca.st:9136/stream"
  },
  {
    "name": "RMN Cebu - DYHP",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://62.138.18.102:8257/stream/"
  },
  {
    "name": "104.7 Yes The Best - DXYR",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://yesfmcdo.radioca.st:8040/stream"
  },
  {
    "name": "LTM Radio Philippines",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://cast4.my-control-panel.com:7396/stream"
  },
  {
    "name": "Crossover",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://streams.radio.co/s1317e9f68/listen"
  },
  {
    "name": "True Life In God Radio Filipino",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://stream.tligradio.org/listen/filipino/radio.mp3"
  },
  {
    "name": "MystFM925",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://eu8.fastcast4u.com:21123/stream"
  },
  {
    "name": "Destiny9911-fm",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://cast3.bntworxtv.com:8020/stream"
  },
  {
    "name": "Radyo Bandera Iloilo - DYKU",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://209.126.124.126:8647/live"
  },
  {
    "name": "89.5 Brigada News FM - DXYM",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://18.141.67.248:8000/"
  },
  {
    "name": "96.9 Easy Rock Cagayan de Oro - DXKS",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://easyrockcagayan.radioca.st:9720/stream/"
  },
  {
    "name": "RPN-DXKS Surigao - DXKS",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://dxks-rpnradio.radioca.st:8448/stream"
  },
  {
    "name": "99.1 Love Radio Naga - DWYN",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://loveradionaga.radioca.st:8070/stream/"
  },
  {
    "name": "Yes The Best Dagupan - DWHR",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://yesfmdagupan.radioca.st:10300/stream/"
  },
  {
    "name": "99.3 Yes The Best - DXFE-FM",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://yesfmiligan.radioca.st:8181/stream/"
  },
  {
    "name": "Hugot Radio 2.0",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://65.108.124.70:8497/stream/"
  },
  {
    "name": "Yes The Best Urdaneta - DZVM",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://yesfmurdaneta.radioca.st:8258/stream"
  },
  {
    "name": "The Ranch FM - DYME-FM",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://206.190.130.182:8004/"
  },
  {
    "name": "Anime Alliance Online Radio",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://s3.citrus3.com:8010/stream"
  },
  {
    "name": "Cathedral of Praise Bible Radio - DZBR",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://stream.radio.co/se9de95c10/listen"
  },
  {
    "name": "14.3 Global Online Radio",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://65.108.124.70:8255/stream"
  },
  {
    "name": "91.9 Radyo Natin - DWSG",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://stream.radyonatinfm.com:8010/dwsg"
  },
  {
    "name": "105.1 Easy Rock Davao - DXYS",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://easyrockdavao.radioca.st:8285/stream"
  },
  {
    "name": "7 SCAF FM",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://radio1.reans.net:8000/radio.mp3"
  },
  {
    "name": "102.7 Yes The Best - DXHT",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://yesfmzamboanga.radioca.st:8313/stream"
  },
  {
    "name": "XFM 96.7 Bacolod",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://209.126.124.126:8684/live"
  },
  {
    "name": "Love Radio 95.1 - DXMB",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://loveradiobutuan.radioca.st:8091/stream/"
  },
  {
    "name": "Yes! The Best Dumaguete - DYYD",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://yesfmdumaguete.radioca.st:8406/stream"
  },
  {
    "name": "POP Radio",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://ssl.geckohost.nz:9267/stream"
  },
  {
    "name": "95.3 Love Radio - DWKS",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://loveradiodaet.radioca.st/stream/"
  },
  {
    "name": "FMR Tagum",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://de3.amfmph.com:8679/live"
  },
  {
    "name": "Yes! The Best Valencia - DXAT",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://yesfmvalencia.radioca.st:8231/stream"
  },
  {
    "name": "102.7 YES FM Zamboanga",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://yesfmzamboanga.radioca.st/"
  },
  {
    "name": "Boracay FM laut.fm",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://boracayfm.stream.laut.fm/boracayfm?ref=vtuner"
  },
  {
    "name": "CoolFm Hits",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://equinox.shoutca.st:8938"
  },
  {
    "name": "Crossover Radio Online",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://streams.radio.co/s1317e9f68/listen"
  },
  {
    "name": "DWMB 95.1 FM Love Radio Baguio",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://loveradiobaguio.radioca.st/"
  },
  {
    "name": "LivingWord.PH iRadio",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://loveradiobutuan.radioca.st/"
  },
  {
    "name": "Love Radio Cebu",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://loveradiocebu.radioca.st/"
  },
  {
    "name": "Love Radio Legaspi",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://loveradiolegaspi.radioca.st/"
  },
  {
    "name": "Love Radio Tarlac",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://loveradiotarlac.radioca.st/"
  },
  {
    "name": "Love Radyo Laoag",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://loveradiolaoag.radioca.st/"
  },
  {
    "name": "Radio Maria Philippines 102.1 FM",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://dreamsiteradiocp2.com:8052/"
  },
  {
    "name": "Yes FM - Boracay",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://yesfmboracay.radioca.st/"
  },
  {
    "name": "101.5 Love Radio \u2013 DXWK",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://loveradiogensan.radioca.st:8021/stream/"
  },
  {
    "name": "105.7 Love Radio Roxas \u2013 DYML",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://loveradioroxas.radioca.st"
  },
  {
    "name": "97.7 Love Radio Tarlac \u2013 DZLT",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://loveradiotarlac.radioca.st"
  },
  {
    "name": "Love Radio Baguio \u2013 DWMB",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://loveradiobaguio.radioca.st:8024/stream/"
  },
  {
    "name": "Yes! The Best Boracay \u2013 DYYR",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://yesfmboracay.radioca.st:8253/stream/"
  },
  {
    "name": "Yes! The Best Cagayan De Oro \u2013 DXYR",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://yesfmcdo.radioca.st:8040/stream/"
  },
  {
    "name": "Yes! The Best Dumaguete \u2013 DYYD",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://yesfmdumaguete.radioca.st:8406/stream/"
  },
  {
    "name": "Kirubai FM - Tamil",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://lovesantiago.radioca.st/"
  },
  {
    "name": "Chernestardreamer Online Radio",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://cast.jomarhost.com/radio/8000/radio.mp3"
  },
  {
    "name": "Coolfm90.1",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://streams.radio.co/s1317e9f68/listen?type=.mp3"
  },
  {
    "name": "DXKI Strong Radio 90.3",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://67.212.238.178:7007/stream.nsv"
  },
  {
    "name": "DYRI",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://us1.amfmph.com:8011/live"
  },
  {
    "name": "Energy",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://stream.hornhost.com:8109/"
  },
  {
    "name": "Loud Radio",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://centova57.instainternet.com:8179/"
  },
  {
    "name": "Love Radio Tacloban DYTM 91.1",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://lovetacloban.radioca.st/"
  },
  {
    "name": "Radyo Magkaisa 98.1 FM",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://s32.myradiostream.com:7202/"
  },
  {
    "name": "Sabik FM",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://nebula.shoutca.st:8334/"
  },
  {
    "name": "Uragon Hot Radio 99.8",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://eu10.fastcast4u.com/uragon98"
  },
  {
    "name": "V-Hive",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://192.99.8.192:3154/www.vhiveradio.com"
  },
  {
    "name": "OK-FM 97.5 DZOK-FM",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://120.28.221.139:8000/stream"
  },
  {
    "name": "Easy RocK",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://easyrockcebu.radioca.st/"
  },
  {
    "name": "Immortalfm",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://trappist.shoutca.st:8165/"
  },
  {
    "name": "Yes The Best 91.5",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://yesfmcebu.radioca.st/stream.mp3"
  },
  {
    "name": "Buangons",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://usa19.fastcast4u.com:6890/stream"
  },
  {
    "name": "Spirit FM 103.9",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://popvip-gecko.radioca.st/stream/1/"
  },
  {
    "name": "ICPRM Network Group Station \u2013 Laoag \u2013 Ilocos \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://stream.zenolive.com/4prwagzv9s5tv.pls"
  },
  {
    "name": "Pinoy Global Stream \u2013 Manila \u2013 National Capital Region \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://stream.zenolive.com/qunkzrt2qvduv.pls"
  },
  {
    "name": "105.8 Loving Arms FM \u2013 105.8 FM \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://cast3.bntworxtv.com/listen/sonata_fm/radio.mp3"
  },
  {
    "name": "104.7 Scaf FM \u2013 Manila \u2013 National Capital Region \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://radio1.reans.net/radio/8000/radio.mp3"
  },
  {
    "name": "Laoag City Radio (LCR-FM) \u2013 Manila \u2013 National Capital Region \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://stream.zenolive.com/8w7hpc4gh1duv.m3u"
  },
  {
    "name": "Crossover Radio Online \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://streams.radio.co/s1317e9f68/low?type=.aac"
  },
  {
    "name": "WILD HEART FM 97.1 \u2013 Manila \u2013 National Capital Region \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://eu10.fastcast4u.com/wildheart"
  },
  {
    "name": "88.9 OFW Cool Radio \u2013 88.9 FM \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://radio.hornhost.com/8066/stream"
  },
  {
    "name": "Elite Reborn FM \u2013 Manila \u2013 National Capital Region \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://radio.eliterebornfm.com:8230/radio.mp3"
  },
  {
    "name": "10.27 WOL FM \u2013 Cebu City \u2013 Central Visayas \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://stream.hornhost.com/8020/stream"
  },
  {
    "name": "Hot FM 96.3 \u2013 96.3 FM \u2013 Zamboanga City \u2013 Zamboanga Peninsula \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://stream.hornhost.com/8052/stream"
  },
  {
    "name": "zRadio \u2013 San Carlos \u2013 Central Luzon \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://streamnavs.net:8091/live"
  },
  {
    "name": "ICPRM Radio Metro Manila \u2013 Dagupan \u2013 Cagayan Valley \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://stream.zenolive.com/89fuftdzyy5tv.pls"
  },
  {
    "name": "Pinoy DJ Radio \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://usa4.fastcast4u.com:5276/"
  },
  {
    "name": "Soundwave 88.8 \u2013 88.8 FM \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://cast.bntworxtv.com/radio/8020/stream"
  },
  {
    "name": "DYHB RMN Bacolod \u2013 Bacolod City \u2013 Western Visayas \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://us2.amfmph.com:8848/stream"
  },
  {
    "name": "SVA Radio \u2013 Manila \u2013 National Capital Region \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://stream.zenolive.com/4uvhk732g9duv.pls"
  },
  {
    "name": "Big Sound FM \u2013 La Union \u2013 Davao \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://www.bigsoundfm.com:2199/tunein/dwaa-stream.pls"
  },
  {
    "name": "92.3 Easy Rock Iloilo \u2013 92.3 FM \u2013 Iloilo City \u2013 Western Visayas \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://easyrockiloilo.radioca.st/"
  },
  {
    "name": "Lovesick versus Dollars FM \u2013 Manila \u2013 National Capital Region \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://centova57.instainternet.com:8099/stream"
  },
  {
    "name": "Angels FM \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://cast2.my-control-panel.com:8557/"
  },
  {
    "name": "CRI Millennial Gospel Radio \u2013 Manila \u2013 National Capital Region \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://stream.zenolive.com/q1uwefuf4ceuv.pls"
  },
  {
    "name": "Spirit FM 101.7 \u2013 101.7 FM \u2013 Baler \u2013 Central Luzon \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://us1.amfmph.com:8559/stream"
  },
  {
    "name": "Guimaras Worldwide Radio FM \u2013 102.7 FM \u2013 Iloilo City \u2013 Western Visayas \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://dharkgfx.com/listen/guimarasworldwidefm/radio.mp3"
  },
  {
    "name": "105.1 Easy Rock Davao \u2013 105.1 FM \u2013 Davao City \u2013 Davao \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://easyrockdavao.radioca.st/"
  },
  {
    "name": "PHR 80.9 FM \u2013 80.9 FM \u2013 Batangas \u2013 Calabarzon \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://philae.shoutca.st:8188"
  },
  {
    "name": "TPPFM \u2013 Legazpi \u2013 Bicol \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://streamnavs.net:8143/live"
  },
  {
    "name": "RainbowFM \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://rainbowfm2020.radioca.st/stream"
  },
  {
    "name": "Map\u00faa Radio Cardinal \u2013 Manila \u2013 National Capital Region \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://edge.mixlr.com/channel/nhtli"
  },
  {
    "name": "POP Radio \u2013 Manila \u2013 National Capital Region \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://popvip-gecko.radioca.st/stream"
  },
  {
    "name": "KissPinas 102.7 FM \u2013 102.7 FM \u2013 Mandaluyong City \u2013 National Capital Region \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://stream.zeno.fm/gdh4m7vsebruv.m3u"
  },
  {
    "name": "Wows Radio Station 91.5 \u2013 91.5 FM \u2013 Manila \u2013 National Capital Region \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://stream.hornhost.com/8022/stream"
  },
  {
    "name": "YES! The Best Cebu 91.5 \u2013 91.5 FM \u2013 Cebu City \u2013 Central Visayas \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://yesfmcebu.radioca.st/"
  },
  {
    "name": "Radyo Katipunan \u2013 Quezon City \u2013 National Capital Region \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://listen.shoutcast.com/radyokatipunan.m3u"
  },
  {
    "name": "101.7 OFW Tambayan FM \u2013 101.7 FM \u2013 Manila \u2013 National Capital Region \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://cast.bntworxtv.com/listen/101.7ofwtambayanfm/radio.mp3"
  },
  {
    "name": "Supreme Radio 99.7 FM \u2013 99.7 FM \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://stream.hornhost.com/8046/stream"
  },
  {
    "name": "YES! The Best Iligan 99.3 \u2013 99.3 FM \u2013 Iligan City \u2013 Soccsksargen \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://yesfmiligan.radioca.st/"
  },
  {
    "name": "15.5 T.L.C.S.P PINOY FM \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://stream.hornhost.com/8014/stream"
  },
  {
    "name": "201.9 Adzaa Online Radio FM \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://stream.hornhost.com/8016/stream"
  },
  {
    "name": "TSSA FM Radio \u2013 Singapore \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://usa10.fastcast4u.com/tssa"
  },
  {
    "name": "DZMM Radio Patrol 630 \u2013 630 AM \u2013 Quezon City \u2013 National Capital Region \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://stream.zeno.fm/vcv559su7mruv.m3u"
  },
  {
    "name": "Radyo Natin Brooke\u2019s Point \u2013 Puerto Princesa City \u2013 Mimaropa \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://xcite.radyonatinfm.com/listen/brookespoint/radio"
  },
  {
    "name": "Einnz Online Radio \u2013 Manila \u2013 National Capital Region \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://dharkgfx.com/listen/einnz/radio.mp3"
  },
  {
    "name": "JAMZ RADIO Philippines \u2013 Mandaluyong City \u2013 National Capital Region \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://stream.zenolive.com/yu7rwcq3wy5tv.pls"
  },
  {
    "name": "CHRK-DB Manila (HD) \u2013 Manila \u2013 National Capital Region \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://cheetah.streemlion.com:1730/stream"
  },
  {
    "name": "Valor FM \u2013 Manila \u2013 National Capital Region \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://radio.valorfm.net:8030/radio.mp3"
  },
  {
    "name": "SPIRITLOVEFM \u2013 Manila \u2013 National Capital Region \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://cast.bntworxtv.com/radio/8030/stream"
  },
  {
    "name": "RMN Radyo lloilo \u2013 Iloilo City \u2013 Western Visayas \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://us1.amfmph.com:8011/mp3"
  },
  {
    "name": "99.9 Star Light FM \u2013 99.9 FM \u2013 Antipolo \u2013 Western Visayas \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://cast.bntworxtv.com/radio/8010/stream"
  },
  {
    "name": "Islamic Radio Filipino / Tagalog \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://104.7.66.64:8009/?icy=http"
  },
  {
    "name": "CyberPinoy Radio \u2013 Pinugay \u2013 Calabarzon \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://securestreams.autopo.st:1215"
  },
  {
    "name": "ONE FM \u2013 Manila \u2013 National Capital Region \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://radio3.reans.net:8030/radio.mp3"
  },
  {
    "name": "104.2 MIX LOVER\u2019S FM \u2013 104.2 FM \u2013 Manila \u2013 National Capital Region \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://stream.hornhost.com/8036/stream"
  },
  {
    "name": "98.3 Love Radio Dagupan \u2013 98.3 FM \u2013 Dagupan \u2013 Cagayan Valley \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://loveradiodagupan.radioca.st/"
  },
  {
    "name": "Bespren Radio \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://streamnavs.net:8089/live"
  },
  {
    "name": "Vine Radio 88.9 \u2013 88.9 FM \u2013 Manila \u2013 National Capital Region \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://cast2.my-control-panel.com:8091"
  },
  {
    "name": "Achieve FM \u2013 Manila \u2013 National Capital Region \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://radio.achievefm.com:8200/radio.mp3"
  },
  {
    "name": "YES! The Best Dagupan 106.3 \u2013 106.3 FM \u2013 Dagupan \u2013 Cagayan Valley \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://yesfmdagupan.radioca.st/"
  },
  {
    "name": "AFK Radio Rocks \u2013 Cebu City \u2013 Central Visayas \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://107.152.38.38:8000/radio.mp3"
  },
  {
    "name": "102.7 Love Radio Fm \u2013 102.7 FM \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://radio.hornhost.com/8068/stream"
  },
  {
    "name": "97.1 Solid Love FM \u2013 Manila \u2013 National Capital Region \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://azura.971solidlovefm.com/radio/8120/radio.mp3"
  },
  {
    "name": "106.7 Radyo Natin Agoo \u2013 106.7 FM \u2013 Agoo \u2013 Ilocos \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://pinas.radyonatinfm.com/listen/dwis/agoo"
  },
  {
    "name": "Mellow 94.7 FM \u2013 94.7 FM \u2013 Mandaluyong City \u2013 National Capital Region \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://s3.free-shoutcast.com/stream/18342/?type=http&nocache=40"
  },
  {
    "name": "PRIMAP 108 FM \u2013 108 FM \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://zeno.fm/radio/primap-108-fm/"
  },
  {
    "name": "93.5 Easy Rock Boracay \u2013 93.5 FM \u2013 Kalibo Town \u2013 Western Visayas \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://easyrockboracay.radioca.st/"
  },
  {
    "name": "Yes FM Dagupan 106.3 \u2013 106.3 FM \u2013 Dagupan \u2013 Cagayan Valley \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://chandra.shoutca.st:10300/"
  },
  {
    "name": "JAKXFM Radio \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://de3.amfmph.com:8150/stream?time=1519230990208"
  },
  {
    "name": "Pinoy Radio \u2013 Filipino Radio \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://usa5.fastcast4u.com:2199/tunein/-stream/mcbnprc.pls"
  },
  {
    "name": "88.7 Love Music Radio \u2013 88.7 FM \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://radio.7lovemusicradio.net:8050/radio.mp3"
  },
  {
    "name": "YES! The Best Valencia 104.1 \u2013 104.1 FM \u2013 Valencia \u2013 Northern Mindanao \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://yesfmvalencia.radioca.st/"
  },
  {
    "name": "Radio NE FM 100.3 \u2013 100.3 FM \u2013 Cabanatuan City \u2013 Central Luzon \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://stream.zenolive.com/k2uz08e71ueuv.pls"
  },
  {
    "name": "Beat FM 102.9 \u2013 102.9 FM \u2013 Zamboanga City \u2013 Zamboanga Peninsula \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://stream.hornhost.com/8058/stream"
  },
  {
    "name": "MSFM 105.3 \u2013 105.3 FM \u2013 Catbalogan \u2013 Eastern Visayas \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://209.126.105.44:8219/stream"
  },
  {
    "name": "KLASSfm \u2013 Iloilo City \u2013 Western Visayas \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://klassfm.radioca.st"
  },
  {
    "name": "DYRN \u2013 Radio Natin 90.9 Laoang \u2013 90.9 FM \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://io.radyonatinfm.com/listen/dyrn/laoang"
  },
  {
    "name": "Brigada News FM Gensan \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://18.141.67.248:8000/stream"
  },
  {
    "name": "101.7 Love Radio La Union \u2013 101.7 FM \u2013 La Union \u2013 Davao \u2013 PH",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://loveradiolaunion.radioca.st/"
  },
  {
    "name": "Mixx Radio Fm",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://mixxradiodjsonline.listen2myradio.com/"
  },
  {
    "name": "Rpm Net Radio",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://station.voscast.com/522ea9678af62/"
  },
  {
    "name": "Radical Edge",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://www.radicaledge.listen2myradio.com"
  },
  {
    "name": "Dance Radio Philippines",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://us1.amfmph.com:8518/autodj"
  },
  {
    "name": "Barangay RT radio",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://www.gmanetwork.com/radio/streaming/dwls"
  },
  {
    "name": "Seduction Dance Tunes Radio",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://24streams.gr/8057/stream"
  },
  {
    "name": "98.4 Love Fm radio",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://cast.jomarhost.com/listen/98.4_love_fm/radio.mp3"
  },
  {
    "name": "Jmj Pasaway Fm Radio",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://cast.jomarhost.com/listen/jmj_pasaway_/radio.mp3"
  },
  {
    "name": "Manila radio",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://stream.hornhost.com/8109/stream.mp3"
  },
  {
    "name": "91.5 Wows Radio Station",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://stream.hornhost.com:8022/stream.nsv"
  },
  {
    "name": "OperaHouseFM101 radio",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://radio.hornhost.com/8052/stream"
  },
  {
    "name": "101.7 Your Love FM radio",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://chloreign.com/listen/sanibpwersa/radio.mp3"
  },
  {
    "name": "02.6 FM BISDAK LAMION TAMBAYAN radio",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://radio.hornhost.com/8044/stream"
  },
  {
    "name": "ZNS Pinoy Online Radio",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://fast.citrus3.com:8484/stream"
  },
  {
    "name": "guimaraskissfm radio",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://dharkgfx.com/radio/8010/radio.mp3"
  },
  {
    "name": "Quezon City radio",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://stream.hornhost.com/8126/stream"
  },
  {
    "name": "Cool radio",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://coolfmhits.radioca.st/stream"
  },
  {
    "name": "Like FM 105.9 radio",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://neoretro.mixlr.com/events/2890639"
  },
  {
    "name": "RVFM radio",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://a3.asurahosting.com:6160/radio.mp3"
  },
  {
    "name": "Radyo Natin - Pinamalayan radio",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://sound.radyonatinfm.com/listen/dwmk/pinamalayan"
  },
  {
    "name": "97.9 Caerens Lovers Fm",
    "logo": "",
    "group": "RADIO CHANELS\ud83c\uddf5\ud83c\udded",
    "url": "https://cast.jomarhost.com/radio/8010/radio.mp3"
  }
];
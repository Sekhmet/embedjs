var expect = require('expect');
var embedjs = require('./../lib/embedjs');

var text = 'Lorem ipsum dolor sit amet https://www.twitch.tv/johnnydarko420, consectetur adipiscing elit, https://soundcloud.com/liluzivert/do-what-i-want-produced-by-maaly-raw-don-cannon sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in https://www.youtube.com/watch?v=waiCd_CVxdc reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, https://www.google.fr/?gws_rd=ssl sunt in culpa qui officia deserunt mollit anim id est laborum.';
var embeds = embedjs.getAll(text);

expect(embeds).toEqual(
  [{
    type: 'video',
    url: 'https://twitch.tv/johnnydarko420,',
    provider_name: 'Twitch',
    id: 'johnnydarko420,',
    embed: '<iframe width="100%" height="400" src="//player.twitch.tv/?channel=johnnydarko420,&autoplay=false" frameborder="0" scrolling="no" allowfullscreen></iframe>'
  },
  {
    type: 'music',
    url: 'https://soundcloud.com/liluzivert/do-what-i-want-produced-by-maaly-raw-don-cannon',
    provider_name: 'SoundCloud',
    id: 'liluzivert/do-what-i-want-produced-by-maaly-raw-don-cannon',
    embed: '<iframe width="100%" height="400" src="//w.soundcloud.com/player/?url=https%3A%2F%2Fsoundcloud.com%2Fliluzivert%2Fdo-what-i-want-produced-by-maaly-raw-don-cannon%3Fvisual%3Dtrue" frameborder="0" scrolling="no" allowfullscreen></iframe>'
  },
  {
    type: 'video',
    url: 'https://youtube.com/watch?v=waiCd_CVxdc',
    provider_name: 'YouTube',
    thumbnail: 'https://i.ytimg.com/vi/waiCd_CVxdc/hqdefault.jpg',
    id: 'waiCd_CVxdc',
    embed: '<iframe width="100%" height="400" src="//www.youtube.com/embed/waiCd_CVxdc?autoplay=1" frameborder="0" scrolling="no" allowfullscreen></iframe>'
  }]
);

console.log('Tests passed');

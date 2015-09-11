angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Janeth Valadez',
    lastText: 'Hola',
    face: 'https://scontent-lax3-1.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/11221452_10204501656570732_6195341945679880806_n.jpg?oh=d427b762f0abd69247d94a69e0c3d89c&oe=56A6ED80'
  }, {
    id: 1,
    name: 'Alee Blanco',
    lastText: 'Donde estas?',
    face: 'https://scontent-lax3-1.xx.fbcdn.net/hphotos-xft1/v/t1.0-9/11889460_618934171579988_4874989478320036159_n.jpg?oh=d2232589fa15de23de959cf0b126bb52&oe=566D2335'
  }, {
    id: 2,
    name: 'Isela Briseño',
    lastText: 'Que tal?',
    face: 'https://scontent-lax3-1.xx.fbcdn.net/hphotos-xtp1/v/t1.0-9/1898253_10206717763416914_1694988025160312490_n.jpg?oh=2b3025dc32d8878f5d8c41c8e449a8b1&oe=56A23A67'
  }, {
    id: 3,
    name: 'Arely Valdez',
    lastText: 'Que haces?',
    face: 'https://scontent-lax3-1.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/11390310_10202942223316124_6761803190300081432_n.jpg?oh=10ee16f8240f0d80d8d2b953d65e148a&oe=5664E99D'
  }, {
    id: 4,
    name: 'Liliana Eli',
    lastText: 'Hey!',
    face: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpf1/v/t1.0-1/11953213_1044271362272303_5171351150476379861_n.jpg?oh=075f33700cb642bccfe910bf1b5c7a8b&oe=5669DB5E&__gda__=1450106825_eb702a8c26d33eb93eaebc7cec666c1e'
  }, {
    id: 3,
    name: 'Marcela mad',
    lastText: 'Te estoy buscando!',
    face: 'https://scontent-lax3-1.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/1176283_10153208355615317_2089314944_n.jpg?oh=00378cead46a47e27c3ba8bfb11c5b98&oe=566F5CFA'
  }, {
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});

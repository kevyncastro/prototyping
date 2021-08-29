const youtubeSearch = require('youtube-search');

var opts = {
  maxResults: 5,
  key: ""
};

youtubeSearch("waves fiji blue", opts, (err, results) => {
  if(err) return console.log(err);

  console.log(results);
});

function loadClient() {
  gapi.client.setApiKey("AIzaSyBrZq3gWBbOv5Rsns1HgkUdhZUcP91HDJk");
  return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
      .then(function() { 
        console.log("GAPI client loaded for API"); 
        execute()
    },
            function(err) { console.error("Error loading GAPI client for API", err); });
}

if (document.documentURI === 'https://izzybrassell.github.io/iCarly-project-1/' || document.documentURI === 'https://izzybrassell.github.io/iCarly-project-1/index.html')  {
    var tag = document.createElement('script')
tag.src = "https://youtube.com/iframe_api"
var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: '9NMm75c832k',
          playerVars: {
            'playsinline': 1
          },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

   
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
        //   setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }

      function loadClient() {
        gapi.client.setApiKey("AIzaSyBrZq3gWBbOv5Rsns1HgkUdhZUcP91HDJk");
        return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
            .then(function() { 
              console.log("GAPI client loaded for API"); 
              execute()
          },
                  function(err) { console.error("Error loading GAPI client for API", err); });
      }
      // Make sure the client is loaded before calling this method.
      
      function execute() {
        return gapi.client.youtube.commentThreads.list({
          "part": [
            "id, snippet"
          ],
          "videoId": "9NMm75c832k"
        })
            .then(function(response) {
              var commentarray = response.result.items
              for(let i=0; i < commentarray.length ;i++) {
                comments = document.createElement(`div`)
                authorName = document.createElement(`div`)
                document.setAttribute(``)
                commentsection = document.getElementById("commentsection")
                comments.innerHTML+= commentarray[i].snippet.topLevelComment.snippet.textOriginal
                authorName.innerHTML+= commentarray[i].snippet.topLevelComment.snippet.authorDisplayName
                commentsection.append(authorName)
                commentsection.append(comments)
                
                var authorAvatar = commentarray[i].snippet.topLevelComment.snippet.authorProfileImageUrl
    
                console.log(comments)
              }
                    // Handle the results here (response.result has the parsed body) (JSON).
                    console.log("Response", response);
                  },
                  
                  function(err) { console.error("Execute error", err); });
      }
} else if (document.documentURI === 'https://izzybrassell.github.io/iCarly-project-1/This.html') {
    var tag = document.createElement('script')
tag.src = "https://youtube.com/iframe_api"
var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: 'eOh-E_DvyYk',
          playerVars: {
            'playsinline': 1
          },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

   
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
        //   setTimeout(stopVideo, 0);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }
      function loadClient() {
        gapi.client.setApiKey("AIzaSyBrZq3gWBbOv5Rsns1HgkUdhZUcP91HDJk");
        return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
            .then(function() { 
              console.log("GAPI client loaded for API"); 
              execute()
          },
                  function(err) { console.error("Error loading GAPI client for API", err); });
      }
      // Make sure the client is loaded before calling this method.

      function execute() {
        return gapi.client.youtube.commentThreads.list({
          "part": [
            "id, snippet"
          ],
          "videoId": "eOh-E_DvyYk"
        })
            .then(function(response) {
              var commentarray = response.result.items
              for(let i=0; i < commentarray.length ;i++) {
                comments = document.createElement(`div`)
                authorName = document.createElement(`div`)
                document.setAttribute(``)
                commentsection = document.getElementById("commentsection")
                comments.innerHTML+= commentarray[i].snippet.topLevelComment.snippet.textOriginal
                authorName.innerHTML+= commentarray[i].snippet.topLevelComment.snippet.authorDisplayName
                commentsection.append(authorName)
                commentsection.append(comments)
                
                var authorAvatar = commentarray[i].snippet.topLevelComment.snippet.authorProfileImageUrl
    
                console.log(comments)

                
                // document.getElementById("commentsection").innerHTML+=authorName 
                
    
                // document.getElementById("commentsection").innerHTML+=comments
                
                
                
                // document.getElementById("commentsection").innerHTML+=authorAvatar
    
              }
                    // Handle the results here (response.result has the parsed body) (JSON).
                    console.log("Response", response);
                  },
                  
                  function(err) { console.error("Execute error", err); });

      }
} else {
    var tag = document.createElement('script')
    tag.src = "https://youtube.com/iframe_api"
    var firstScriptTag = document.getElementsByTagName('script')[0];
          firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        var player;
          function onYouTubeIframeAPIReady() {
            player = new YT.Player('player', {
              height: '390',
              width: '640',
              videoId: 'S6FeBBhu83A',
              playerVars: {
                'playsinline': 1
              },
              events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
              }
            });
          }
    
       
          function onPlayerReady(event) {
            event.target.playVideo();
          }
    
          var done = false;
          function onPlayerStateChange(event) {
            if (event.data == YT.PlayerState.PLAYING && !done) {
            //   setTimeout(stopVideo, 0);
              done = true;
            }
          }
          function stopVideo() {
            player.stopVideo();
          }
          
          // Make sure the client is loaded before calling this method.
          function execute() {
            return gapi.client.youtube.commentThreads.list({
              "part": [
                "id, snippet"
              ],
              "videoId": "S6FeBBhu83A"
            })
                .then(function(response) {
                  var commentarray = response.result.items
                  for(let i=0; i < commentarray.length ;i++) {
                    comments = document.createElement(`div`)
                    authorName = document.createElement(`div`)

                    commentsection = document.getElementById("commentsection")
                    comments.innerHTML+= commentarray[i].snippet.topLevelComment.snippet.textOriginal
                    authorName.innerHTML+= commentarray[i].snippet.topLevelComment.snippet.authorDisplayName
                    commentsection.append(authorName)
                    commentsection.append(comments)
                    
                    var authorAvatar = commentarray[i].snippet.topLevelComment.snippet.authorProfileImageUrl
        
                    console.log(comments)

                  }
                        // Handle the results here (response.result has the parsed body) (JSON).
                        console.log("Response", response);
                      },
                      
                      function(err) { console.error("Execute error", err); });
          }     
}


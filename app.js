"use strict";
var TwitterCollectorAPP = {
    init:function(){
        var TwitterStream = require("node-tweet-stream");
        this.twitter = new TwitterStream({
            consumer_key: '',
            consumer_secret: '',
            token: '',
            token_secret: ''
        });
    }
    ,track:function(keywords){
        var _this = this;
        keywords.forEach(function(keyword){
            _this.twitter.track(keyword);
        });
    }
};


TwitterCollectorAPP.init();

TwitterCollectorAPP.twitter.on('tweet',function(tweet){
    console.log(tweet);
});

TwitterCollectorAPP.twitter.on('error',function(error){
    console.log(error);
});

TwitterCollectorAPP.track(["TestNodeJS"]);
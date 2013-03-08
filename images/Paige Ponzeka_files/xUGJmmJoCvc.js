/*1362619564,178142525*/

if (self.CavalryLogger) { CavalryLogger.start_js(["YtI7a"]); }

__d("ChatFavoriteNux",["AsyncRequest"],function(a,b,c,d,e,f){var g=b('AsyncRequest'),h=null,i=false,j={tryShow:function(k){if(h&&!i){h.setContext(k);h.show();i=true;}},tryHide:function(){if(h&&i){h.hide();h=null;}},registerDialog:function(k){h=k;if(k)k.subscribe('confirm',function(){h=null;new g('/ajax/chat/dismiss_favorite_nux.php').send();k.hide();});}};e.exports=j;});
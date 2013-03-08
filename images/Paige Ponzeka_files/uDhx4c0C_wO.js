/*1361378544,173214271*/

if (self.CavalryLogger) { CavalryLogger.start_js(["ehGMi"]); }

__d("GiftsBirthdayPrompt",["CSS","csx","DOM"],function(a,b,c,d,e,f){var g=b('CSS'),h=b('csx'),i=b('DOM'),j={init:function(k){this._blocks=[];this._productsPreviews=[];var l=i.scry(k,"._4_9c");for(var m=0;m<l.length;m++){var n=l[m],o=n.getAttribute('data-recipientid');this._blocks[o]=i.find(n,"._4_9d");this._productsPreviews[o]=i.find(n,"._4_9e");}},expandGiftsLink:function(k,l){var m=this._productsPreviews[k];i.setContent(m,l);g.hide(this._blocks[k]);g.show(m);}};e.exports=j;});
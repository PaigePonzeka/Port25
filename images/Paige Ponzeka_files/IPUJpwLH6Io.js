/*1362034781,173213979*/

if (self.CavalryLogger) { CavalryLogger.start_js(["25IpF"]); }

__d("MovingStat",[],function(a,b,c,d,e,f){function g(h){h=h||60000;var i={t:new Date(),count:0,v:0},j=i,k=0,l=0;function m(){var n=new Date()-h;while(j&&j.next&&j.t<n){k-=j.v;l-=j.count;j=j.next;}}this.add=function(n){k+=n;l++;var o=new Date();if(o-i.t<1000){i.v+=n;i.count++;}else{i.next={t:o,v:n,count:1};i=i.next;m();}};this.tally=function(n){n=n||1000;m();return {sum:k,count:l,timeAverage:k*n/h};};}e.exports=g;});
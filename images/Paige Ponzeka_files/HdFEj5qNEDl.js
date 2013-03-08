/*1362034781,173217823*/

if (self.CavalryLogger) { CavalryLogger.start_js(["MSFU3"]); }

__d("ChannelSubdomain",["Cookie","JSLogger"],function(a,b,c,d,e,f){var g=b('Cookie'),h=b('JSLogger'),i=h.create('channel'),j=7,k=null;function l(o,p){var q=null,r=m(),s;o--;var t=Math.min(32,j*o);t=Math.max(t,1);var u=false;for(var v=0;v<32;v++){s=(v+p)%t;if(!(r&(1<<s))){u=true;break;}}if(u){k=s;q=k%j;g.set('sub',r|(1<<k));}else{k=-1;q=null;i.error('subdomain_overflow',{slot:k,max:o});}return q;}function m(){var o=g.get('sub')||0;o=parseInt(o,10);return isNaN(o)?0:o;}function n(){if(k!==null&&k>=0){var o=m()&~(1<<k);if(o){g.set('sub',o);}else g.clear('sub');}}e.exports={allocate:l,clear:n};});
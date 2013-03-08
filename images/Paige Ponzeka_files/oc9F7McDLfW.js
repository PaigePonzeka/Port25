/*1361856947,178142507*/

if (self.CavalryLogger) { CavalryLogger.start_js(["Y8UkD"]); }

__d("BrowseLogger",["Banzai"],function(a,b,c,d,e,f){var g=b('Banzai'),h={BANZAI_ROUTE:'browse',logResultClick:function(i,j,k,l,m,n,o,p,q,r){var s={action:'result_click',click_type:j,id:k,path:i,rank:m,referrer:o,result_type:l,session_id:n,abtest_version:p,abtest_params:q,typeahead_sid:r};this.logAction(s);},logControlsClick:function(i,j,k,l,m,n){var o={action:'controls_click',click_type:j,path:i,referrer:n,session_id:l,snack_name:k,typeahead_sid:m};this.logAction(o);},logResultHover:function(i,j,k,l,m,n){var o={action:'result_hover',id:j,path:i,rank:k,session_id:m,time_elapsed:l,typeahead_sid:n};this.logAction(o);},logNUXStep:function(i){var j={action:'nux_step',step:i};this.logAction(j);},logDisambiguationImpression:function(i,j,k,l,m){var n={action:'disambiguation_imp',ids:l,name:i,path:k,type:j,typeahead_sid:m};this.logAction(n);},logDisambiguationClick:function(i,j,k,l,m,n){var o={action:'disambiguation_clk',id:m,index:l,name:i,path:k,type:j,typeahead_sid:n};this.logAction(o);},logAction:function(i){g.post(h.BANZAI_ROUTE,i);}};e.exports=h;});
__d("BrowseResultsAreSlow",["CSS"],function(a,b,c,d,e,f){var g=b('CSS'),h=1500,i={register:function(j,k){setTimeout(function(){if(j.firstChild===k)g.show(k);},h);}};e.exports=i;});
__d("ScubaSample",["Banzai","copyProperties"],function(a,b,c,d,e,f){var g="scuba_sample",h=b("Banzai"),i=b("copyProperties");function j(m,n,o){this.fields={};this.flush=function(){if(!m)return;var p={};i(p,this.fields);p._ds=m;if(n)p._lid=n;p._options=o;h.post(g,p);this.flush=function(){};this.flushed=true;};this.lid=n;return this;}function k(m,n,o){if(!this.fields[m])this.fields[m]={};this.fields[m][n]=o;return this;}function l(m){return function(n,o){if(this.flushed)return this;return k.call(this,m,n,o);};}i(j.prototype,{addNormal:l('normal'),addInteger:l('int'),addDenorm:l('denorm')});e.exports=j;});
__d("ScrollPerfLogger",["Arbiter","Event","Run","ScriptPath","ScubaSample","SubscriptionsHandler","requestAnimationFrame"],function(a,b,c,d,e,f){var g=b('Arbiter'),h=b('Event'),i=b('Run'),j=b('ScriptPath'),k=b('ScubaSample'),l=b('SubscriptionsHandler'),m=b('requestAnimationFrame'),n;function o(){if(n!==undefined)return n;var ha=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame;return (n=!!ha);}function p(){if(w[0]>ca.max_frames){q();y=!ca.continuous;if(y){ba&&ba.release();ba=null;}else{s();m(p);}return;}if(y)return;var ha=Date.now();if(ha-z<ca.max_idle_time)for(var ia in w)if(ha-aa>ia)w[ia]++;aa=ha;m(p);}function q(){if(y||w[0]<ca.min_frames)return;r();}function r(){var ha=new k('scroll',null,{addBrowserFields:true});ha.addNormal('experiment',x);ha.addNormal('time_bucket',t());ha.addNormal('script_path',j.getScriptPath());for(var ia in da)ha.addNormal(ia,da[ia]);for(var event in fa)ha.addNormal('event_'+event,1);var ja={};for(var ka in w){if(ka===0)continue;ja[ka]=Math.round(w[ka]/w[0]*ca.count_ratio);}for(ka in ja){if(ka===0)continue;ha.addInteger('freeze'+ka,ja[ka]);}ha.addInteger('total_frames',w[0]);ha.addInteger('time',Math.round(Date.now()/1000));ha.flush();}function s(){w={0:0,50:0,100:0,200:0,500:0,1000:0};aa=Date.now();}function t(){var ha=Date.now()-ea;if(ha<=300000){return '0 - 5m';}else if(ha<=600000){return '5 - 10m';}else if(ha<=1800000){return '10 - 30m';}else if(ha<=3600000){return '30 - 60m';}else return '1+ h';}function u(ha,ia){r();s();fa[ia.name]=1;}function v(ha,ia){r();s();delete fa[ia.name];}var w,x='',y,z=0,aa=0,ba,ca,da,ea,fa={},ga={init:function(ha,ia,ja){if(ia&&ia.must_support_raf&&!o())return;x=ha;ca=ia;da=ja||{};ea=Date.now();y=false;ba=new l();ba.addSubscriptions(h.listen(window,'scroll',function(){z=Date.now();}));if(da.logging_events==='yes')ba.addSubscriptions(g.subscribe('ScrollPerfLogger/startEvent',u),g.subscribe('ScrollPerfLogger/endEvent',v));s();m(p);i.onLeave(function(){q();y=true;ba.release();ba=null;fa={};});}};e.exports=ga;});
__d("FacebarNavigation",["Arbiter","DOMQuery","FacebarStructuredText","Input","URI"],function(a,b,c,d,e,f){var g=b('Arbiter'),h=b('DOMQuery'),i=b('FacebarStructuredText'),j=b('Input'),k=b('URI'),l=null,m=null,n=null,o=false,p=true,q=(function(){var v={},w=function(x){return 'uri-'+x.getQualifiedURI().toString();};return {set:function(x,y){v[w(x)]=y;},get:function(x){return v[w(x)];}};})();function r(v,w){n=v;o=w;p=false;s();}function s(){if(p){return;}else if(m){o&&m.pageTransition();m.setPageQuery(n);p=true;}else if(l&&!j.getValue(l))j.setValue(l,t()+' ');}function t(){return n?n.structure.map(function(v){return v.text;}).join(''):'';}g.subscribe('page_transition',function(v,w){r(q.get(w.uri),true);});var u={registerInput:function(v){l=h.scry(v,'.structuredText')[0];s();},registerBehavior:function(v){m=v;s();},setPageQuery:function(v){q.set(k.getNextURI(),v);v.structure=i.fromStruct(v.structure);r(v,false);}};e.exports=u;});
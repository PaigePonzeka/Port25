/*1361901172,178142525*/

if (self.CavalryLogger) { CavalryLogger.start_js(["N0AkX"]); }

__d("FBAjaxRequest",["AjaxRequest","copyProperties","XHR"],function(a,b,c,d,e,f){var g=b('AjaxRequest'),h=b('copyProperties'),i=b('XHR');function j(k,l,m){m=h(i.getAsyncParams(k),m);var n=new g(k,l,m);n.streamMode=false;var o=n._call;n._call=function(p){if(p=='onJSON'&&this.json){if(this.json.error){this.errorType=g.SERVER_ERROR;this.errorText='AsyncResponse error: '+this.json.error;}this.json=this.json.payload;}o.apply(this,arguments);};n.ajaxReqSend=n.send;n.send=function(p){this.ajaxReqSend(h(p,m));};return n;}e.exports=j;});
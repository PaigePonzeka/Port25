/*1361243014,178142559*/

if (self.CavalryLogger) { CavalryLogger.start_js(["RrWkz"]); }

__d("FacebarTypeaheadTrigger",["copyProperties","Arbiter"],function(a,b,c,d,e,f){var g=b('copyProperties'),h=b('Arbiter');function i(j){this._typeahead=j;this._core=j.getCore();this._subscription=null;}g(i.prototype,{enable:function(){this._subscription=h.subscribe('FacebarTrigger/select',this._activateTrigger.bind(this));},disable:function(){h.unsubscribe(this._subscription);},_activateTrigger:function(j,k){var l=g({type:'grammar',uri:null,structure:null},k);if(!l.uri){this._core.open();this._core.setQuery(l,false);}else this._core.executeQuery(l);}});e.exports=i;});
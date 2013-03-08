/*1361243014,178130467*/

if (self.CavalryLogger) { CavalryLogger.start_js(["xeyZt"]); }

__d("FacebarTypeaheadShortcut",["KeyEventController","Run","copyProperties","emptyFunction"],function(a,b,c,d,e,f){var g=b('KeyEventController'),h=b('Run'),i=b('copyProperties'),j=b('emptyFunction');function k(l){this._typeahead=l;this._listener=null;}i(k.prototype,{enable:function(){this._registerListener();},disable:j,_registerListener:function(){g.registerKey('SLASH',this._handleKeydown.bind(this));h.onLeave(function(){this._registerListener.bind(this).defer();}.bind(this));},_handleKeydown:function(l){var m=this._typeahead.core.input;m.focus();m.inform('shortcut',{shift:l.getModifiers().shift});return false;}});e.exports=k;});
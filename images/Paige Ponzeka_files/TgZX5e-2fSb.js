/*1361374106,173217599*/

if (self.CavalryLogger) { CavalryLogger.start_js(["ex0B4"]); }

__d("FacebarStructuredText",["copyProperties","createArrayFrom","FacebarStructuredFragment"],function(a,b,c,d,e,f){var g=b('copyProperties'),h=b('createArrayFrom'),i=b('FacebarStructuredFragment'),j=/\s+$/;function k(o){if(!o){return [];}else if(o instanceof n){return o.toArray();}else return h(o).map(function(p){return new i(p);});}function l(o){return new i({text:o,type:'text'});}function m(o,p,q){var r=o.getText(),s=r.replace(p,q);if(r!=s){return new i({text:s,type:o.getType(),uid:o.getUID()});}else return o;}function n(o){this._fragments=o||[];this._hash=null;}g(n,{fromStruct:function(o){return new n(k(o));},fromString:function(o){return new n([l(o)]);}});g(n.prototype,{matches:function(o,p){if(o){var q=this._fragments,r=o._fragments;return q.length==r.length&&!q.some(function(s,t){if(!p&&s.getUID()){return s.getUID()!=r[t].getUID();}else return s.getText()!=r[t].getText()||s.getType()!=r[t].getType();});}return false;},trim:function(){var o=null,p=null;this.forEach(function(r,s){if(!r.isWhitespace()){if(o===null)o=s;p=s;}});if(p){var q=this._fragments.slice(o,p+1);q.push(m(q.pop(),j,''));return new n(q);}else return new n([]);},pad:function(){var o=this.getFragment(-1);if(o&&!j.test(o.getText())){return new n(this._fragments.concat(l(' ')));}else return this;},forEach:function(o){this._fragments.forEach(o);return this;},isEmptyOrWhitespace:function(){return this.isEmpty()||!this._fragments.some(function(o){return !o.isWhitespace();});},isEmpty:function(){return this.getLength()===0;},getFragment:function(o){return this._fragments[o>=0?o:this._fragments.length+o];},getCount:function(){return this._fragments.length;},getLength:function(){var o=0;this.forEach(function(p){o+=p.getLength();});return o;},toStruct:function(){return this._fragments.map(function(o){return o.toStruct();});},toArray:function(){return this._fragments.slice();},toString:function(){return this._fragments.map(function(o){return o.getText();}).join('');},getHash:function(){if(this._hash===null)this._hash=this._fragments.map(function(o){if(o.getUID()){return '[['+o.getHash(1)+']]';}else return o.getText();}).join('');return this._hash;}});e.exports=n;});
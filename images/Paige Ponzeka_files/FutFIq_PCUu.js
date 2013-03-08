/*1361761097,173213727*/

if (self.CavalryLogger) { CavalryLogger.start_js(["lCTOi"]); }

__d("recordTNTreeData",["collectSubtreeData"],function(a,b,c,d,e,f){var g=b('collectSubtreeData');function h(i,j){var k={},l=g(i,['ft']);for(var m in l.ft){k[m+'_tree']=l.ft[m];if(m==='tn-debug')i.setAttribute('tn-debug_subtree',l.ft[m]);}k.evt_value=i.offsetHeight;if(j)k.offset=Math.max(0,i.offsetTop-j.offsetTop);return k;}e.exports=h;});
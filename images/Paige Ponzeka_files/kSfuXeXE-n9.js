/*1361343088,178142517*/

if (self.CavalryLogger) { CavalryLogger.start_js(["yYel\/"]); }

__d("ComposerPublishTrackingStory",["Event","ge","reportData","DOMQuery"],function(a,b,c,d,e,f){var g=b('Event'),h=b('ge'),i=b('reportData'),j=b('DOMQuery');f.init=function(k){g.listen(k,'submit',function(){var l=h('home_stream');if(!l)return;var m=j.scry(l,'.uiStreamStory')[0];if(m&&m.getAttribute('data-ft')){var n=JSON.parse(m.getAttribute('data-ft'));if(!(("mf_story_key" in n)&&("qid" in n)))return;var o={mf_story_key:n.mf_story_key,qid:n.qid};i("compose",{ft:o});}});};});
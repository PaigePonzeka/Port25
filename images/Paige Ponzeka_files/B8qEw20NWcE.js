/*1362500416,173213727*/

if (self.CavalryLogger) { CavalryLogger.start_js(["efFbk"]); }

__d("NotificationXOut",["Arbiter","Event","userAction"],function(a,b,c,d,e,f){var g=b('Arbiter'),h=b('Event'),i=b('userAction');function j(p,q,r){g.inform('notif/negativeCancel',{id:p});k(q,r);h.$E(r).kill();}function k(p,q){i('click',null,q,null,{gt:p});}function l(p,q){k(p,q);h.$E(q).prevent();}function m(p,q){h.listen(p,'click',k.curry(q));}function n(p,q,r){h.listen(p,'click',j.curry(q,r));}function o(p,q){h.listen(p,'click',l.curry(q));}e.exports={setupConfirmListener:m,setupCancelListener:n,setupNoListener:o};});
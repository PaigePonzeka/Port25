/*1361377840,178142561*/

if (self.CavalryLogger) { CavalryLogger.start_js(["6ED7Q"]); }

function CIWebmailBootloader(a,b){this.controllerFn=b;var c=Event.listen(a,'mouseover',function(){c.remove();this.bootload();}.bind(this));return this;}copyProperties(CIWebmailBootloader.prototype,{bootload:function(a){Bootloader.loadComponents('contact-importer-webmail',function(){this.controller=this.controller||this.controllerFn();if(a)this.controller.onSubmit();}.bind(this));},onSubmit:function(){if(this.controller){this.controller.onSubmit();}else this.bootload(true);}});
__d("CalendarUI",["Event","Arbiter","AsyncRequest","CSS","DOM","DOMQuery","DOMScroll","Hovercard","Parent","Run","ScrollAwareDOM","Style","UIPagelet","Vector","ViewportBounds","$","copyProperties","ge","goURI"],function(a,b,c,d,e,f){var g=b('Event'),h=b('Arbiter'),i=b('AsyncRequest'),j=b('CSS'),k=b('DOM'),l=b('DOMQuery'),m=b('DOMScroll'),n=b('Hovercard'),o=b('Parent'),p=b('Run'),q=b('ScrollAwareDOM'),r=b('Style'),s=b('UIPagelet'),t=b('Vector'),u=b('ViewportBounds'),v=b('$'),w=b('copyProperties'),x=b('ge'),y=b('goURI');function z(){}w(z,{EVENT_ACTION:'EVENT_ACTION',SUGGESTIONS_LOADED:'SUGGESTIONS_LOADED',HIDE_SUGGESTED_EVENT:'HIDE_SUGGESTED_EVENT',_todayButton:null,_todayElement:null,_registeredReminders:false,init:function(){h.subscribe(this.EVENT_ACTION,function(){s.loadFromEndpoint('CalendarHeaderPagelet','pagelet_calendar_header');if(x('pagelet_calendar_invites'))s.loadFromEndpoint('CalendarInvitesPagelet','pagelet_calendar_invites');});var aa=u.addTop(function(){var ba=x('pagelet_calendar_header');if(ba&&r.isFixed(ba.firstChild)){var ca=ba.firstChild.getBoundingClientRect();return ca.bottom;}return 0;});p.onLeave(function(){aa.remove();});},initGridItem:function(aa,ba){g.listen(aa,'click',function(event){if(o.byTag(event.getTarget(),'a'))return;i.bootstrap(ba,aa.firstChild);return;});},initGridItemList:function(aa,ba,ca){h.subscribe(this.SUGGESTIONS_LOADED,function(da,ea){if(ba==ea.timestamp)for(var fa=0;fa<ca&&fa<ea.content.length;fa++)k.appendContent(aa,ea.content[fa]);});},initScrollItem:function(aa,ba){g.listen(aa,'click',this.scrollTo.bind(this,ba));},scrollTo:function(aa,ba){aa=l.isNode(aa)?aa:x(aa);var ca=0;if(aa){var da=t.getElementPosition(v('fbCalendarWrapper')).y,ea=t.getElementPosition(aa).y;ca=ea-da;}else ca=t.getElementPosition(v('bottomContent')).y;m.scrollTo(new t(0,ca,'document'),ba!==false);},registerHomepageReminders:function(){if(!this._registeredReminders){h.subscribe(this.EVENT_ACTION,function(aa,ba){if(x('pagelet_reminders'))s.loadFromEndpoint('RemindersPagelet','pagelet_reminders');});this._registeredReminders=true;}},registerTodayClickHandler:function(){this._todayButton.onclick=null;g.listen(this._todayButton,'click',this.scrollTo.bind(this,this._todayElement));},registerTodayElement:function(aa){this._todayElement=l.isNode(aa)?aa:x(aa);this._todayButton&&this.registerTodayClickHandler();},registerTodayButton:function(aa){this._todayButton=aa;this._todayElement&&this.registerTodayClickHandler();},registerEventLink:function(aa,ba){h.subscribe(this.EVENT_ACTION,function(ca,da){if(da.eid===ba){var ea=l.scry(v("facebook"),".fbCalendarSuggestedLabel");if(ea.length>0)j.addClass(ea[0],"hidden_elem");switch(da.action){case 'GOING':j.removeClass(aa.parentNode,"hidden_elem");j.removeClass(aa,"fbCalendarEventSuggested");j.addClass(aa,"fbCalendarEventGoing");break;case 'MAYBE':j.removeClass(aa.parentNode,"hidden_elem");j.removeClass(aa,"fbCalendarEventSuggested");j.removeClass(aa,"fbCalendarEventGoing");break;case 'DECLINED':case 'HIDDEN':n.hide(true);j.addClass(aa.parentNode,"hidden_elem");break;case 'EDITED':if(da.name)k.setContent(aa,da.name);if(da.day){var fa=x("pagelet_calendar_day_"+da.day);if(fa){var ga=l.find(fa,".fbCalendarGridEventList");if(l.scry(ga,"li").length>=4){j.addClass(aa.parentNode,"hidden_elem");s.loadFromEndpoint("CalendarDayPagelet","pagelet_calendar_day_"+da.day,{day:da.timestamp});}else k.prependContent(ga,aa.parentNode);}else j.addClass(aa.parentNode,"hidden_elem");}break;}}});},informEventGoing:function(aa){h.inform(this.EVENT_ACTION,{eid:aa,action:'GOING'});},informEventMaybe:function(aa){h.inform(this.EVENT_ACTION,{eid:aa,action:'MAYBE'});},informEventDeclined:function(aa){h.inform(this.EVENT_ACTION,{eid:aa,action:'DECLINED'});},informEventHidden:function(aa){h.inform(this.EVENT_ACTION,{eid:aa,action:'HIDDEN'});},informEventEdited:function(aa,ba,ca,da){h.inform(this.EVENT_ACTION,{eid:aa,action:'EDITED',name:ba,day:ca,timestamp:da});},informSuggestionsAdded:function(aa,ba){h.inform(this.SUGGESTIONS_LOADED,{timestamp:aa,content:ba});},removeCalendarListHeader:function(aa){var ba=k.scry(aa,"^.fbCalendarList .fbCalendarItem"),ca=k.find(aa,"^.fbCalendarItem");if(ba.length==1)ca=k.find(aa,"^.fbCalendarList");k.remove(ca);},reloadPage:function(){y(window.location);},unhide:function(aa){!function(){q.monitor(aa.nextSibling,j.show.curry(aa));}.defer();}});e.exports=z;});
__d("TooltipLink",["Parent","Tooltip"],function(a,b,c,d,e,f){var g=b('Parent'),h=b('Tooltip'),i={setTooltipText:function(j,k){j=g.byTag(j,'a');j&&h.set(j,k);}};e.exports=i;});
__d("ChatOnlineFriends",["Event","AvailableList","AvailableListConstants","ChannelConnection","Chat","ChatConfig","ChatVisibility","MercuryConstants","CSS","DataStore","DOM","OrderedFriendsList","Parent","Run","ShortProfiles","TooltipLink","XHPTemplate","copyProperties","createObjectFrom","cx","ChatTypeaheadBehavior","ChatTypeaheadCore","ChatTypeaheadDataSource","ChatTypeaheadRenderer","Typeahead"],function(a,b,c,d,e,f){var g=b('Event'),h=b('AvailableList'),i=b('AvailableListConstants'),j=b('ChannelConnection'),k=b('Chat'),l=b('ChatConfig'),m=b('ChatVisibility'),n=b('MercuryConstants'),o=b('CSS'),p=b('DataStore'),q=b('DOM'),r=b('OrderedFriendsList'),s=b('Parent'),t=b('Run'),u=b('ShortProfiles'),v=b('TooltipLink'),w=b('XHPTemplate'),x=b('copyProperties'),y=b('createObjectFrom'),z=b('cx');b('ChatTypeaheadBehavior');b('ChatTypeaheadCore');b('ChatTypeaheadDataSource');b('ChatTypeaheadRenderer');b('Typeahead');function aa(ca){switch(ca){case i.OFFLINE:return 'chatOffline';case i.IDLE:return 'chatIdle';case i.ACTIVE:return 'chatOnline';case i.MOBILE:return 'chatMobile';}}var ba=function(ca,da,ea,fa,ga,ha,ia){var ja=(fa&&ga)||(ha&&ia);if(ca&&da&&ea&&ja)this.init(ca,da,ea,fa,ga,ha,ia);};x(ba.prototype,{chatFriends:{},chatStatuses:['chatOnline','chatIdle','chatMobile','chatOffline'],_availableListSubscribe:function(event,ca){this._arbiterTokens.push(h.subscribe(event,ca));},_channelSubscribe:function(event,ca){this._arbiterTokens.push(j.subscribe(event,ca));},onunload:function(){this._arbiterTokens.forEach(function(ca){ca.unsubscribe();});},_setStatus:function(ca,da){if(o.hasClass(ca,da))return;this.chatStatuses.forEach(function(ea){o.conditionClass(ca,ea,ea==da);});},initTypeahead:function(ca,da,ea){ca.subscribe('reset',function(){o.show(da);});ca.subscribe('query',function(fa,ga){o.conditionShow(da,!ga.value);});if(ea)ca.subscribe(['query','reset'],function(fa){o.conditionShow(ea,fa==='reset');});},init:function(ca,da,ea,fa,ga,ha,ia){this.maxElements=ca;this._faceTmpl=ga;this._arbiterTokens=[];this._root=ea;t.onLeave(this.onunload.bind(this));var ja=q.scry(ea,'.chatUpgradeLink');this.initTypeahead(da,fa||ha,ja[0]);var ka=q.find(ea,'.sidebarBtn');g.listen(ka,'click',function(event){k.toggleSidebar();event.kill();});this._faceFutures&&this._hideAllFaces();this._faceFutures=[];this._orderedFriends=r.getList();this._hashedFriends=y(this._orderedFriends);this._availableListSubscribe(i.ON_AVAILABILITY_CHANGED,this.update.shield(this));this.update.bind(this).defer();this._channelSubscribe(j.CONNECTED,this.update.shield(this));this._channelSubscribe(j.RECONNECTING,this._handleChannelReconnecting.bind(this));this._channelSubscribe(j.SHUTDOWN,this._handleChannelShutdown.bind(this));this._channelSubscribe([j.MUTE_WARNING,j.UNMUTE_WARNING],this.update.shield(this));if(fa){this._facepile=fa.firstChild;g.listen(fa,'click',this.clickHandler.bind(this));}else{this._miniDivebar=ha;this._divebarTmpl=ia;}g.listen(q.find(ea,'.fbChatGoOnlineLink'),'click',function(event){if(j.disconnected()){k.openBuddyList();}else m.goOnline(k.openBuddyList);event.kill();}.bind(this));g.listen(q.find(ea,'.fbChatReconnectLink'),'click',function(event){if(j.disconnected())j.reconnect();event.kill();}.bind(this));h.update();},_updateMiniDivebar:function(){var ca=Math.min(this._orderedFriends.length,10),da=[];for(var ea=0;ea<ca;ea++)da.push(this._renderDivebarItem(this._orderedFriends[ea]));q.setContent(this._miniDivebar,da);},_renderDivebarItem:function(ca){var da=this._divebarTmpl.build(),ea=da.getNode('anchor'),fa=da.getNode('status'),ga=h.get(ca);if(ga===i.ACTIVE){o.addClass(fa,'active');}else if(ga===i.MOBILE)o.addClass(fa,'mobile');u.get(ca,function(ha){da.setNodeContent('name',ha.name).setNodeProperty('profile-photo','src',ha.thumbSrc);g.listen(ea,'click',function(){var ia={source:'online_friends',mode:'miniDivebar'};k.openTab(ca,null,n.MercuryParticipantTypes.FRIEND,ia);return false;});});return da.getRoot();},_handleChannelReconnecting:function(ca,da){var ea=(da<1000),fa=q.find(this._root,'.fbChatReconnectLink'),ga=q.find(this._root,'.fbChatReconnecting');o.conditionShow(fa,!ea);o.conditionShow(ga,ea);},_handleChannelShutdown:function(){var ca=q.find(this._root,'.fbChatReconnectLink'),da=q.find(this._root,'.fbChatReconnecting');o.hide(ca);o.hide(da);},update:function(){var ca=j.disconnected(),da=m.isOnline();o.conditionClass(this._root,'disconnected',ca);if(this._facepile){o.conditionShow(this._facepile,da);da&&this._updateFacepile(ca);}else da&&this._updateMiniDivebar();var ea=q.find(this._root,'.typeaheadContainer');o.conditionShow(ea,da);if(l.get('chat_upgrade_link')){var fa=q.find(this._root,'.chatUpgradeLink');o.conditionShow(fa,da);}var ga=q.find(this._root,'.chatGoOnlineLink');o.conditionShow(ga,!da);var ha=q.find(this._root,'.chatReconnectLink');o.conditionShow(ha,da&&ca);},_updateFacepile:function(ca){h.getAvailableIDs().forEach(function(ja){if(!this._hashedFriends[ja]){this._orderedFriends.push(ja);this._hashedFriends[ja]=true;}}.bind(this));var da=0;for(var ea=0;ea<this._orderedFriends.length;ea++){var fa=this._orderedFriends[ea],ga=h.get(fa),ha=this._faceFutures[ea],ia=(ca||ga!==i.OFFLINE)&&(da<this.maxElements);if(ia){if(!ha){ha=this._makeFace(ea);this._faceFutures[ea]=ha;}da++;}this._updateFace(ha,ia,aa(ga));}},_updateFace:function(ca,da,ea){ca&&ca(function(fa){this._setStatus(fa,ea);o.conditionShow(fa,da);}.bind(this));},_makeFace:function(ca){var da=null,ea=null,fa=this._orderedFriends[ca];u.get(fa,function(ga){ea=this._faceTmpl.render();p.set(ea,'friendID',fa);var ha=w.getNode(ea,'img'),ia=ha.cloneNode(false);ia.setAttribute('src',ga.thumbSrc);q.replace(ha,ia);var ja=w.getNode(ea,'anchor');v.setTooltipText(ja,ga.name);da&&da(ea);var ka=false;for(var la=ca+1;la<this._orderedFriends.length&&!ka;la++){var ma=this._faceFutures[la],na=ma&&ma();if(na){this._facepile.insertBefore(ea,na);ka=true;}}if(!ka)this._facepile.appendChild(ea);}.bind(this));return function ga(ha){if(ha)if(ea){ha(ea);}else da=ha;return ea;};},clickHandler:function(event){var ca=event.getTarget(),da=s.byClass(ca,"_43q7");if(da){var ea=p.get(da,'friendID');if(ea&&m.isOnline()){var fa={source:'online_friends',mode:'miniDivebar'};k.openTab(ea,null,n.MercuryParticipantTypes.FRIEND,fa);return false;}}},_hideAllFaces:function(){this._faceFutures.forEach(function(ca){ca&&ca(function(da){q.remove(da);});});}});e.exports=ba;});
__d("GiftBirthdayRemindersOpportunityLogger",["AsyncRequest","Event"],function(a,b,c,d,e,f){var g=b('AsyncRequest'),h=b('Event'),i={init:function(j,k){var l=false;h.listen(j,'click',function(m){if(l)return true;l=true;new g().setURI('/ajax/gifts/birthday_reminders/log_opportunity').setData({data:k}).send();});}};e.exports=i;});
__d("AppRequestRemindersMenu",["DOMQuery","CSS","Form"],function(a,b,c,d,e,f){var g=b('DOMQuery'),h=b('CSS'),i=b('Form'),j={init:function(k,l,m){var n=m.getTriggerElem();m=m.getPopover();m.subscribe(['show','hide'],function(o){var p=g.find(n,'^.fbRemindersRemove');h.conditionClass(p,'openMenu',o=='show');});l.subscribe('itemclick',function(o,p){var q=p.getValue();if(q){var r={};r[q]=true;i.createHiddenInputs(r,k);i.bootstrap(k);}});}};e.exports=j;});
/*1362371171,173217057*/

if (self.CavalryLogger) { CavalryLogger.start_js(["W77rp"]); }

__d("KeyboardController",["$","Arbiter","CSS","DOM","DOMScroll","DOMQuery","Event","Focus","Keys","NavigationMessage","Parent","Run","Vector","ViewportBounds","copyProperties","ge","throttle"],function(a,b,c,d,e,f){var g=b('$'),h=b('Arbiter'),i=b('CSS'),j=b('DOM'),k=b('DOMScroll'),l=b('DOMQuery'),m=b('Event'),n=b('Focus'),o=b('Keys'),p=b('NavigationMessage'),q=b('Parent'),r=b('Run'),s=b('Vector'),t=b('ViewportBounds'),u=b('copyProperties'),v=b('ge'),w=b('throttle');o.J=74;o.K=75;o.L=76;o.C=67;var x;function y(aa){this.root=aa;this.init();}function z(){x=i.hasClass(document.documentElement,'tinyViewport')?0:g('pagelet_bluebar').offsetTop+g('pagelet_bluebar').offsetHeight;}z.defer();m.listen(window,'resize',w(z));u(y.prototype,{getStories:function(){},getParentStory:function(aa){},isStory:function(aa){},getHeadline:function(aa){},getPreviousStory:function(aa){},getNextStory:function(aa){},setSelected:function(aa){},clickLike:function(){},clickComment:function(){},getAnimationLength:function(aa){return Math.min(Math.abs(s.getElementPosition(aa).y-t.getTop()-document.body.scrollTop),400);},findTop:function(){var aa=this.getStories();for(var ba=0;ba<aa.length;ba++)if(s.getElementPosition(aa[ba]).y>s.getScrollPosition().y)return aa[ba];},onLeave:function(){this.keydownListener&&this.keydownListener.remove();this.focusinListener&&this.focusinListener.remove();this.navigationListener&&h.unsubscribe(this.navigationListener);},init:function(){r.onLeave(this.onLeave.bind(this));this.navigationListener=h.subscribe(p.NAVIGATION_BEGIN,this.onLeave.bind(this));this.keydownListener=m.listen(document,'keydown',function(aa){var ba=m.getKeyCode(aa);if(aa.getModifiers().any)return true;var ca=this.getParentStory(document.activeElement);if((ba!=o.J)&&(ba!=o.K)&&!ca)return true;if(this.isInteractive(document.activeElement))return true;switch(ba){case o.DOWN:case o.J:this.vert(1);break;case o.UP:case o.K:this.vert(-1);break;case o.L:this.clickLike();break;case o.C:this.clickComment();break;case o.RETURN:if(this.selected.id=='pagelet_composer'){var da=j.scry(this.selected,'textarea')[0];da&&n.set(da);}else this.clickComment();break;default:return;}this.hasUsedKeyboard=true;aa.preventDefault();}.bind(this));this.focusinListener=m.listen(document,'focusin',function(aa){var ba=aa.getTarget(),ca=this.getParentStory(ba);if(ca&&(this.selected!=ca)){this.setSelected(ca);if(!this.isInteractive(ba))this.setFocused(ca);}}.bind(this));},click:function(aa){if(this.selected){var ba=l.scry(this.selected,aa);if((ba.length==1)&&i.shown(ba[0]))ba[0].click();}},vert:function(aa){var ba;if(!this.selected){ba=this.findTop();}else{if(this.selected.id=='pagelet_composer'){ba=aa>0?this.getStories()[0]:null;}else ba=aa>0?this.getNextStory(this.selected):(this.getPreviousStory(this.selected)||v('pagelet_composer'));if(!ba){return;}else if(!l.isElementNode(ba)){i.removeClass(this.selected,'selectedStorySimple');this.selected=ba;return this.vert(aa);}}this.anim&&this.anim.stop();var ca=(Date.now()-(this.lastScroll||0)>30);this.anim=k.scrollTo(ba,ca?this.getAnimationLength(ba):0,false,s.getViewportDimensions().y-x-10,this.setFocused.bind(this,ba));this.setSelected(ba);this.lastScroll=Date.now();},isInteractive:function(aa){return ((aa.nodeName=='INPUT')||(aa.nodeName=='TEXTAREA')||(aa.nodeName=='A')||q.byAttribute(aa,'contenteditable'));},setTabindexOnHeadline:function(aa,ba){if(this.isStory(aa)){var ca=this.getHeadline(aa);if(ca)ca.tabIndex=ba;}},setFocused:function(aa){if(this.isStory(aa)){var ba=this.getHeadline(aa);ba&&n.set(ba);}}});e.exports=y;});
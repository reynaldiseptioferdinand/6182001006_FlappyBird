System.register("chunks:///_virtual/background.ts",["./rollupPluginModLoBabelHelpers.js","cc","./startScreen.ts","./resultscreen.ts"],(function(t){var i,n,o,r,e,s,c,a,u,d;return{setters:[function(t){i=t.applyDecoratedDescriptor,n=t.inheritsLoose,o=t.initializerDefineProperty,r=t.assertThisInitialized},function(t){e=t.cclegacy,s=t._decorator,c=t.Node,a=t.Component},function(t){u=t.startScreen},function(t){d=t.default}],execute:function(){var b,h,g,p,k,l,f;e._RF.push({},"28749n3hnlOebKfR/HXoEbX","background",void 0);var y=s.ccclass,v=s.property;t("Background",(b=y("Background"),h=v(c),g=v(c),b((l=i((k=function(t){function i(){for(var i,n=arguments.length,e=new Array(n),s=0;s<n;s++)e[s]=arguments[s];return i=t.call.apply(t,[this].concat(e))||this,o(i,"background1",l,r(i)),o(i,"background2",f,r(i)),i.backgroundWidth=288,i.speed=100,i}n(i,t);var e=i.prototype;return e.start=function(){this.background1.setPosition(0,0,0),this.background2.setPosition(this.backgroundWidth,0,0)},e.update=function(t){0==u.Instance.node.active&&0==d.Instance.node.active&&(this.background1.setPosition(this.background1.position.x-this.speed*t,this.background1.position.y,this.background1.position.z),this.background2.setPosition(this.background2.position.x-this.speed*t,this.background2.position.y,this.background2.position.z),this.background1.position.x<=-this.backgroundWidth&&this.background1.setPosition(this.background2.position.x+this.backgroundWidth,0,0),this.background2.position.x<=-this.backgroundWidth&&this.background2.setPosition(this.background1.position.x+this.backgroundWidth,0,0))},i}(a)).prototype,"background1",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),f=i(k.prototype,"background2",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),p=k))||p));e._RF.pop()}}}));

System.register("chunks:///_virtual/bird.ts",["./rollupPluginModLoBabelHelpers.js","cc","./resultscreen.ts"],(function(t){var e,i,s,a,n,l,o,h,r,c,p,u,d,v,y,b;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,s=t.initializerDefineProperty,a=t.assertThisInitialized},function(t){n=t.cclegacy,l=t._decorator,o=t.Label,h=t.input,r=t.Input,c=t.Collider2D,p=t.Contact2DType,u=t.Animation,d=t.AudioSource,v=t.Vec3,y=t.Component},function(t){b=t.default}],execute:function(){var m,g,f,S,T,G,H,C;n._RF.push({},"e7fb2fMpqdCroU6GvsS7rFS","bird",void 0);var O=l.ccclass,_=l.property;t("default",(m=O("Bird"),g=_({type:o}),f=_({type:o}),m(((C=function(t){function e(){for(var e,i=arguments.length,n=new Array(i),l=0;l<i;l++)n[l]=arguments[l];return e=t.call.apply(t,[this].concat(n))||this,s(e,"labelScore",G,a(e)),s(e,"labelHealth",H,a(e)),e.score=0,e.health=3,e.vy=0,e.gravity=600,e.initialY=0,e.oscillationTime=0,e.isGameStarted=!1,e.isGameOver=!1,e.playTime=0,e}i(e,t);var n=e.prototype;return n.start=function(){e.Instance=this,this.score=0,this.labelScore&&(this.labelScore.node.active=!1),this.labelHealth&&(this.labelHealth.string="Health: "+this.health,this.labelHealth.node.active=!0),this.initialY=this.node.position.y,h.on(r.EventType.TOUCH_START,this.onTouchStart,this);var t=this.getComponent(c);t&&t.on(p.BEGIN_CONTACT,this.onBeginContact,this)},n.resetGame=function(){this.score=0,this.playTime=0,this.health=3,this.labelScore&&(this.labelScore.string=""+this.score,this.labelScore.node.active=!0),this.labelHealth&&(this.labelHealth.string="Health: "+this.health,this.labelHealth.node.active=!0),this.isGameStarted=!0,this.isGameOver=!1,this.vy=0,this.gravity=600,this.node.setPosition(this.node.position.x,this.initialY,this.node.position.z)},n.onTouchStart=function(){this.isGameStarted||(this.isGameStarted=!0,this.playTime=0,this.labelScore&&(this.labelScore.node.active=!0,this.labelScore.string="0")),this.isGameOver||(this.vy=300,this.getComponent(u).play("bird_flap"),this.getComponent(d).playOneShot(this.getComponent(d).clip))},n.onBeginContact=function(t,e,i){"score_collider"!==e.node.name&&(this.health--,this.health=Math.max(this.health,0),this.labelHealth&&(this.labelHealth.string="Health: "+this.health),this.health<=0&&this.triggerGameOver())},n.triggerGameOver=function(){var t=this;this.isGameOver=!0,b.Instance.node.active=!0,this.vy=0,this.scheduleOnce((function(){t.startFalling()}),.5)},n.startFalling=function(){var t=this;this.getComponent(u).play("bird_fall"),this.gravity=1e3,this.schedule((function(){t.node.angle>-75&&(t.node.angle-=2.25)}),.05)},n.update=function(t){if(this.isGameStarted)this.isGameOver?(this.node.translate(new v(0,this.vy*t,0)),this.vy-=this.gravity*t):(this.node.translate(new v(0,this.vy*t,0)),this.vy-=this.gravity*t,this.playTime+=t,this.score=Math.floor(this.playTime),this.labelScore&&(this.labelScore.string=""+this.score));else{this.oscillationTime+=t;var e=this.initialY+20*Math.sin(2*this.oscillationTime);this.node.setPosition(new v(this.node.position.x,e,this.node.position.z))}},e}(y)).Instance=void 0,G=e((T=C).prototype,"labelScore",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),H=e(T.prototype,"labelHealth",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=T))||S));n._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Color,g=t.Canvas,h=t.UITransform,p=t.instantiate,c=t.Label,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[a.WHITE,a.BLACK,a.RED,a.GREEN,a.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(g)){var t=this.node.parent.getComponent(h),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=p(s);l.parent=this.node,l.name="Buttons";var r=p(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=p(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(c);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=a.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?p(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(c);this.labelComponentList[this.labelComponentList.length]=S;var x=p(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(c)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=p(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(c)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=p(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?p(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./background.ts","./bird.ts","./pipe.ts","./resultscreen.ts","./sandBackground.ts","./startScreen.ts"],(function(){return{setters:[null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/pipe.ts",["./rollupPluginModLoBabelHelpers.js","cc","./startScreen.ts","./resultscreen.ts"],(function(t){var n,e,o,r,s,a,i,c;return{setters:[function(t){n=t.inheritsLoose},function(t){e=t.cclegacy,o=t._decorator,r=t.Vec3,s=t.randomRangeInt,a=t.Component},function(t){i=t.startScreen},function(t){c=t.default}],execute:function(){var p;e._RF.push({},"0df47nKMypPBLzGwAz657rq","pipe",void 0);var u=o.ccclass;o.property,t("Pipe",u("Pipe")(p=function(t){function e(){for(var n,e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return(n=t.call.apply(t,[this].concat(o))||this).wBackground=288,n.wPipa=52,n}n(e,t);var o=e.prototype;return o.start=function(){this.node.translate(new r(0,s(-100,100),0))},o.update=function(t){i.Instance&&0==i.Instance.node.active&&c.Instance&&0==c.Instance.node.active&&(this.node.translate(new r(-100*t,0,0)),this.node.position.x<=-196&&(this.node.position.y<0?this.node.translate(new r(this.wBackground+this.wPipa,s(0,100),0)):this.node.translate(new r(this.wBackground+this.wPipa,s(-100,0),0))))},e}(a))||p);e._RF.pop()}}}));

System.register("chunks:///_virtual/resultscreen.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,n,r,c,o;return{setters:[function(e){t=e.inheritsLoose},function(e){n=e.cclegacy,r=e._decorator,c=e.director,o=e.Component}],execute:function(){var s,i;n._RF.push({},"e4051pqUVBIw4E05pYCdJxg","resultscreen",void 0);var u=r.ccclass;r.property,e("default",u("ResultScreen")(((i=function(e){function n(){return e.apply(this,arguments)||this}t(n,e);var r=n.prototype;return r.start=function(){n.Instance=this,this.node.active=!1},r.doRestart=function(){c.loadScene("scene")},n}(o)).Instance=void 0,s=i))||s);n._RF.pop()}}}));

System.register("chunks:///_virtual/sandBackground.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(i){var t,s,n,o,a,e,r,d;return{setters:[function(i){t=i.applyDecoratedDescriptor,s=i.inheritsLoose,n=i.initializerDefineProperty,o=i.assertThisInitialized},function(i){a=i.cclegacy,e=i._decorator,r=i.Node,d=i.Component}],execute:function(){var h,p,c,u,l,f,y;a._RF.push({},"48a35GgkFRISY6Ysc7Aal8U","sandBackground",void 0);var g=e.ccclass,P=e.property;i("SandBackground",(h=g("SandBackground"),p=P(r),c=P(r),h((f=t((l=function(i){function t(){for(var t,s=arguments.length,a=new Array(s),e=0;e<s;e++)a[e]=arguments[e];return t=i.call.apply(i,[this].concat(a))||this,n(t,"sand1",f,o(t)),n(t,"sand2",y,o(t)),t.sandWidth=336,t.speed=100,t}s(t,i);var a=t.prototype;return a.start=function(){this.sand1.setPosition(0,-252.122,0),this.sand2.setPosition(this.sandWidth,-252.122,0)},a.update=function(i){this.sand1.setPosition(this.sand1.position.x-this.speed*i,this.sand1.position.y,this.sand1.position.z),this.sand2.setPosition(this.sand2.position.x-this.speed*i,this.sand2.position.y,this.sand2.position.z),this.sand1.position.x<=-this.sandWidth&&this.sand1.setPosition(this.sand2.position.x+this.sandWidth,-252.122,0),this.sand2.position.x<=-this.sandWidth&&this.sand2.setPosition(this.sand1.position.x+this.sandWidth,-252.122,0)},t}(d)).prototype,"sand1",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=t(l.prototype,"sand2",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),u=l))||u));a._RF.pop()}}}));

System.register("chunks:///_virtual/startScreen.ts",["./rollupPluginModLoBabelHelpers.js","cc","./bird.ts"],(function(t){var e,n,r,c,s;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,r=t._decorator,c=t.Component},function(t){s=t.default}],execute:function(){var a,o;n._RF.push({},"02f5aadf59DIaCG9QBme32p","startScreen",void 0);var i=r.ccclass;r.property,t("startScreen",i("startScreen")(((o=function(t){function n(){return t.apply(this,arguments)||this}e(n,t);var r=n.prototype;return r.start=function(){n.Instance=this},r.update=function(t){},r.clickStart=function(t,e){this.node.active=!1,s.Instance&&s.Instance.resetGame()},n}(c)).Instance=void 0,a=o))||a);n._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});
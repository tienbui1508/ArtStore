import{g as j,h as rt,i as ot,k as O,m as ct,p as lt}from"./chunk-OAEFFKSC.js";import{F as nt,G as it,Q as at,ia as st,o as et}from"./chunk-M46FHHWK.js";import{c as dt,d as P,g as A,h as F,i as L}from"./chunk-JGYM447R.js";import{$ as z,$b as R,Bc as J,Da as f,Eb as $,Ga as q,Jb as x,Ka as H,Kb as v,Lb as W,Nc as tt,Pb as K,Rb as X,Sb as Y,Tb as G,Ub as B,_b as D,a as p,ac as E,db as _,ea as k,eb as c,ec as I,gb as Q,gc as M,ha as C,ja as h,ka as g,l as m,mc as T,oa as S,qa as y,sb as U,xa as N,xb as w,ya as V,yb as Z}from"./chunk-HFQC3EG6.js";function vt(s,n){if(s&1){let l=K();x(0,"div",1)(1,"button",2),Y("click",function(){N(l);let e=B();return V(e.action())}),I(2),v()()}if(s&2){let l=B();_(2),M(" ",l.data.action," ")}}var bt=["label"];function kt(s,n){}var gt=Math.pow(2,31)-1,b=class{constructor(n,l){this._overlayRef=l,this._afterDismissed=new m,this._afterOpened=new m,this._onAction=new m,this._dismissedByAction=!1,this.containerInstance=n,n._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(n){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(n,gt))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},mt=new C("MatSnackBarData"),u=class{constructor(){this.politeness="assertive",this.announcementMessage="",this.duration=0,this.data=null,this.horizontalPosition="center",this.verticalPosition="bottom"}},yt=(()=>{let n=class n{};n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=y({type:n,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"],standalone:!0});let s=n;return s})(),xt=(()=>{let n=class n{};n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=y({type:n,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"],standalone:!0});let s=n;return s})(),At=(()=>{let n=class n{};n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=y({type:n,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"],standalone:!0});let s=n;return s})(),Ct=(()=>{let n=class n{constructor(t,e){this.snackBarRef=t,this.data=e}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}};n.\u0275fac=function(e){return new(e||n)(c(b),c(mt))},n.\u0275cmp=S({type:n,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],standalone:!0,features:[T],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["mat-button","","matSnackBarAction","",3,"click"]],template:function(e,i){e&1&&(x(0,"div",0),I(1),v(),w(2,vt,3,1,"div",1)),e&2&&(_(),M(" ",i.data.message,`
`),_(),$(i.hasAction?2:-1))},dependencies:[st,yt,xt,At],styles:[".mat-mdc-simple-snack-bar{display:flex}"],encapsulation:2,changeDetection:0});let s=n;return s})(),St={snackBarState:dt("state",[F("void, hidden",A({transform:"scale(0.8)",opacity:0})),F("visible",A({transform:"scale(1)",opacity:1})),L("* => visible",P("150ms cubic-bezier(0, 0, 0.2, 1)")),L("* => void, * => hidden",P("75ms cubic-bezier(0.4, 0.0, 1, 1)",A({opacity:0})))])},wt=0,Bt=(()=>{let n=class n extends ot{constructor(t,e,i,a,r){super(),this._ngZone=t,this._elementRef=e,this._changeDetectorRef=i,this._platform=a,this.snackBarConfig=r,this._document=g(tt),this._trackedModals=new Set,this._announceDelay=150,this._destroyed=!1,this._onAnnounce=new m,this._onExit=new m,this._onEnter=new m,this._animationState="void",this._liveElementId=`mat-snack-bar-container-live-${wt++}`,this.attachDomPortal=o=>{this._assertNotAttached();let d=this._portalOutlet.attachDomPortal(o);return this._afterPortalAttached(),d},r.politeness==="assertive"&&!r.announcementMessage?this._live="assertive":r.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(t){this._assertNotAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._afterPortalAttached(),e}attachTemplatePortal(t){this._assertNotAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._afterPortalAttached(),e}onAnimationEnd(t){let{fromState:e,toState:i}=t;if((i==="void"&&e!=="void"||i==="hidden")&&this._completeExit(),i==="visible"){let a=this._onEnter;this._ngZone.run(()=>{a.next(),a.complete()})}}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce())}exit(){return this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId)}),this._onExit}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let t=this._elementRef.nativeElement,e=this.snackBarConfig.panelClass;e&&(Array.isArray(e)?e.forEach(r=>t.classList.add(r)):t.classList.add(e)),this._exposeToModals();let i=this._label.nativeElement,a="mdc-snackbar__label";i.classList.toggle(a,!i.querySelector(`.${a}`))}_exposeToModals(){let t=this._liveElementId,e=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let i=0;i<e.length;i++){let a=e[i],r=a.getAttribute("aria-owns");this._trackedModals.add(a),r?r.indexOf(t)===-1&&a.setAttribute("aria-owns",r+" "+t):a.setAttribute("aria-owns",t)}}_clearFromModals(){this._trackedModals.forEach(t=>{let e=t.getAttribute("aria-owns");if(e){let i=e.replace(this._liveElementId,"").trim();i.length>0?t.setAttribute("aria-owns",i):t.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{let t=this._elementRef.nativeElement.querySelector("[aria-hidden]"),e=this._elementRef.nativeElement.querySelector("[aria-live]");if(t&&e){let i=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(i=document.activeElement),t.removeAttribute("aria-hidden"),e.appendChild(t),i?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}};n.\u0275fac=function(e){return new(e||n)(c(q),c(H),c(J),c(et),c(u))},n.\u0275cmp=S({type:n,selectors:[["mat-snack-bar-container"]],viewQuery:function(e,i){if(e&1&&(D(O,7),D(bt,7)),e&2){let a;R(a=E())&&(i._portalOutlet=a.first),R(a=E())&&(i._label=a.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:1,hostBindings:function(e,i){e&1&&G("@state.done",function(r){return i.onAnimationEnd(r)}),e&2&&X("@state",i._animationState)},standalone:!0,features:[U,T],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(e,i){e&1&&(x(0,"div",1)(1,"div",2,0)(3,"div",3),w(4,kt,0,0,"ng-template",4),v(),W(5,"div"),v()()),e&2&&(_(5),Z("aria-live",i._live)("role",i._role)("id",i._liveElementId))},dependencies:[O],styles:[".mat-mdc-snack-bar-container{display:flex;align-items:center;justify-content:center;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);margin:8px}.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container{width:100vw}.mat-mdc-snackbar-surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;padding-left:0;padding-right:8px}[dir=rtl] .mat-mdc-snackbar-surface{padding-right:0;padding-left:8px}.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface{min-width:344px;max-width:672px}.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface{width:100%;min-width:0}.cdk-high-contrast-active .mat-mdc-snackbar-surface{outline:solid 1px}.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface{color:var(--mdc-snackbar-supporting-text-color, var(--mat-app-inverse-on-surface));border-radius:var(--mdc-snackbar-container-shape, var(--mat-app-corner-extra-small));background-color:var(--mdc-snackbar-container-color, var(--mat-app-inverse-surface))}.mdc-snackbar__label{width:100%;flex-grow:1;box-sizing:border-box;margin:0;padding:14px 8px 14px 16px}[dir=rtl] .mdc-snackbar__label{padding-left:8px;padding-right:16px}.mat-mdc-snack-bar-container .mdc-snackbar__label{font-family:var(--mdc-snackbar-supporting-text-font, var(--mat-app-body-medium-font));font-size:var(--mdc-snackbar-supporting-text-size, var(--mat-app-body-medium-size));font-weight:var(--mdc-snackbar-supporting-text-weight, var(--mat-app-body-medium-weight));line-height:var(--mdc-snackbar-supporting-text-line-height, var(--mat-app-body-medium-line-height))}.mat-mdc-snack-bar-actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box}.mat-mdc-snack-bar-handset,.mat-mdc-snack-bar-container,.mat-mdc-snack-bar-label{flex:1 1 auto}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){color:var(--mat-snack-bar-button-color, var(--mat-app-inverse-primary));--mat-text-button-state-layer-color:currentColor;--mat-text-button-ripple-color:currentColor}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element{opacity:.1}"],encapsulation:2,data:{animation:[St.snackBarState]}});let s=n;return s})();function Dt(){return new u}var Rt=new C("mat-snack-bar-default-options",{providedIn:"root",factory:Dt}),ht=(()=>{let n=class n{get _openedSnackBarRef(){let t=this._parentSnackBar;return t?t._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(t){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=t:this._snackBarRefAtThisLevel=t}constructor(t,e,i,a,r,o){this._overlay=t,this._live=e,this._injector=i,this._breakpointObserver=a,this._parentSnackBar=r,this._defaultConfig=o,this._snackBarRefAtThisLevel=null,this.simpleSnackBarComponent=Ct,this.snackBarContainerComponent=Bt,this.handsetCssClass="mat-mdc-snack-bar-handset"}openFromComponent(t,e){return this._attach(t,e)}openFromTemplate(t,e){return this._attach(t,e)}open(t,e="",i){let a=p(p({},this._defaultConfig),i);return a.data={message:t,action:e},a.announcementMessage===t&&(a.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,a)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(t,e){let i=e&&e.viewContainerRef&&e.viewContainerRef.injector,a=f.create({parent:i||this._injector,providers:[{provide:u,useValue:e}]}),r=new j(this.snackBarContainerComponent,e.viewContainerRef,a),o=t.attach(r);return o.instance.snackBarConfig=e,o.instance}_attach(t,e){let i=p(p(p({},new u),this._defaultConfig),e),a=this._createOverlay(i),r=this._attachSnackBarContainer(a,i),o=new b(r,a);if(t instanceof Q){let d=new rt(t,null,{$implicit:i.data,snackBarRef:o});o.instance=r.attachTemplatePortal(d)}else{let d=this._createInjector(i,o),ut=new j(t,void 0,d),ft=r.attachComponentPortal(ut);o.instance=ft.instance}return this._breakpointObserver.observe(it.HandsetPortrait).pipe(z(a.detachments())).subscribe(d=>{a.overlayElement.classList.toggle(this.handsetCssClass,d.matches)}),i.announcementMessage&&r._onAnnounce.subscribe(()=>{this._live.announce(i.announcementMessage,i.politeness)}),this._animateSnackBar(o,i),this._openedSnackBarRef=o,this._openedSnackBarRef}_animateSnackBar(t,e){t.afterDismissed().subscribe(()=>{this._openedSnackBarRef==t&&(this._openedSnackBarRef=null),e.announcementMessage&&this._live.clear()}),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{t.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):t.containerInstance.enter(),e.duration&&e.duration>0&&t.afterOpened().subscribe(()=>t._dismissAfter(e.duration))}_createOverlay(t){let e=new ct;e.direction=t.direction;let i=this._overlay.position().global(),a=t.direction==="rtl",r=t.horizontalPosition==="left"||t.horizontalPosition==="start"&&!a||t.horizontalPosition==="end"&&a,o=!r&&t.horizontalPosition!=="center";return r?i.left("0"):o?i.right("0"):i.centerHorizontally(),t.verticalPosition==="top"?i.top("0"):i.bottom("0"),e.positionStrategy=i,this._overlay.create(e)}_createInjector(t,e){let i=t&&t.viewContainerRef&&t.viewContainerRef.injector;return f.create({parent:i||this._injector,providers:[{provide:b,useValue:e},{provide:mt,useValue:t.data}]})}};n.\u0275fac=function(e){return new(e||n)(h(lt),h(at),h(f),h(nt),h(n,12),h(Rt))},n.\u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"});let s=n;return s})();var pt=class s{snackbar=g(ht);error(n){this.snackbar.open(n,"Close",{duration:5e3,panelClass:["snack-error"]})}success(n){this.snackbar.open(n,"Close",{duration:5e3,panelClass:["snack-success"]})}static \u0275fac=function(l){return new(l||s)};static \u0275prov=k({token:s,factory:s.\u0275fac,providedIn:"root"})};export{pt as a};

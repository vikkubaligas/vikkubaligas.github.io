"use strict";(self.webpackChunkaxen=self.webpackChunkaxen||[]).push([[592],{2759:(f,p,s)=>{s.d(p,{T:()=>_});var t=s(1135),g=s(7930),r=s(529),e=s(9186),d=s(4650);let _=(()=>{class l extends e.n{constructor(a){super(),this.httpClient=a,this.API_URL="https://mahalakshmi-2-d1614942.deta.app/generators",this.isTblLoading=!0,this.dataChange=new t.X([]),this.genId=new t.X(""),this.newGen=new t.X(new g.R({})),this.errors=new t.X({})}get data(){return this.dataChange.value}getDialogData(){return this.dialogData}getAllAdvanceTables(){this.subs.sink=this.httpClient.get(this.API_URL).subscribe({next:a=>{a=a.map(i=>Object.assign(new g.R(i),i)),this.isTblLoading=!1,this.dataChange.next(a)},error:a=>{this.isTblLoading=!1,console.log(a)}})}addAdvanceTable(a){const i=new r.WM;i.append("Content-Type","application/json"),this.httpClient.post(this.API_URL,a,{headers:i}).subscribe({next:n=>{n.id?(this.dialogData=n,this.newGen.next(this.dialogData)):this.errors.next(n)},error:n=>{this.errors.next(n)}})}updateAdvanceTable(a,i){this.httpClient.put(this.API_URL+"/"+a,i).subscribe({next:n=>{n.id?(this.dialogData=n,this.newGen.next(this.dialogData)):this.errors.next(n)},error:n=>{this.errors.next(n)}})}deleteAdvanceTable(a){this.httpClient.delete(this.API_URL+"/"+a).subscribe({next:i=>{},error:i=>{console.log(i)}})}getGenId(a,i,n){this.httpClient.post(this.API_URL+"/id",{companyName:a,kw:i,is3Phase:n}).subscribe({next:c=>{this.genId.next(c)},error:c=>{console.log(c)}})}}return l.\u0275fac=function(a){return new(a||l)(d.LFG(r.eN))},l.\u0275prov=d.Yz7({token:l,factory:l.\u0275fac}),l})()},9098:(f,p,s)=>{s.d(p,{P:()=>_});var t=s(5938),g=s(6240),r=s(4650),e=s(1781),d=s(4859);let _=(()=>{class l{constructor(a,i,n){if(this.dialogRef=a,this.data=i,this.tableService=n,this.dispData={text1:"",value1:"",text2:"",value2:"",text3:"",value3:""},"cust"==i.type){this.dispData.text1="Customer Name:",this.dispData.text2="Payments:",this.dispData.text3="";const c=new g.O(i.generator);this.dispData.value1=c.name+" , "+c.company,this.dispData.value2="\u20b9"+c.getReceived()+" of \u20b9"+c.total+" received, \u20b9"+c.getPending()+" pending.",this.dispData.value3=""}}onNoClick(){this.dialogRef.close()}confirmDelete(){this.tableService.deleteAdvanceTable(this.data.delId)}}return l.\u0275fac=function(a){return new(a||l)(r.Y36(t.so),r.Y36(t.WI),r.Y36(e.v))},l.\u0275cmp=r.Xpm({type:l,selectors:[["app-delete"]],decls:25,vars:7,consts:[[1,"container"],["mat-dialog-title",""],["mat-dialog-content",""],[1,"clearfix"],[1,"fw-bold"],["mat-dialog-actions","",1,"mb-1"],["mat-flat-button","","color","warn",3,"mat-dialog-close","click"],["mat-flat-button","","tabindex","-1",3,"click"]],template:function(a,i){1&a&&(r.TgZ(0,"div",0)(1,"h3",1),r._uU(2,"Are you sure?"),r.qZA(),r.TgZ(3,"div",2)(4,"ul",3)(5,"li")(6,"p")(7,"span",4),r._uU(8),r.qZA(),r._uU(9),r.qZA()(),r.TgZ(10,"li")(11,"p")(12,"span",4),r._uU(13),r.qZA(),r._uU(14),r.qZA()(),r.TgZ(15,"li")(16,"p")(17,"span",4),r._uU(18),r.qZA(),r._uU(19),r.qZA()()()(),r.TgZ(20,"div",5)(21,"button",6),r.NdJ("click",function(){return i.confirmDelete()}),r._uU(22," Delete "),r.qZA(),r.TgZ(23,"button",7),r.NdJ("click",function(){return i.onNoClick()}),r._uU(24,"Cancel"),r.qZA()()()),2&a&&(r.xp6(8),r.Oqu(i.dispData.text1),r.xp6(1),r.Oqu(i.dispData.value1),r.xp6(4),r.Oqu(i.dispData.text2),r.xp6(1),r.Oqu(i.dispData.value2),r.xp6(4),r.Oqu(i.dispData.text3),r.xp6(1),r.hij("",i.dispData.value3," "),r.xp6(2),r.Q6J("mat-dialog-close",1))},dependencies:[d.lW,t.ZT,t.uh,t.xY,t.H8]}),l})()},7930:(f,p,s)=>{s.d(p,{R:()=>g});var t=s(6895);class g{constructor(e){this.serviceProgress={progress:0,overShoot:0,ngclass:"",health:0,color:"",color2:""},this.maintenanceProgress={progress:0,overShoot:0,ngclass:"",health:0,daysRemain:"",totalDays:0,color:"",color2:""},this.id=e.id||"",this.model=e.model||"",this.companyName=e.companyName||"",this.kw=e.kw||0,this.serialNumber=e.serialNumber||"",this.yearOfMnf=e.yearOfMnf||2020,this.is3Phase=e.is3Phase||!1,this.inRent=e.inRent||!1,this.inService=e.inService||!1,this.forMaintenance=e.forMaintenance||!1,this.oilChangeDuration=e.oilChangeDuration||500,this.prevOilHour=e.prevOilHour||0,this.hoursRun=e.hoursRun||0,this.oilVol=e.oilVol||0,this.fuelFilterNumber=e.fuelFilterNumber||"",this.oilFilterNumber=e.oilFilterNumber||"",this.airFilterNumber=e.airFilterNumber||"",this.beltNumber=e.beltNumber||"",this.batteryCompanyName=e.batteryCompanyName||"",this.batteryCapacity=e.batteryCapacity||0,this.replaceDurationMonths=e.replaceDurationMonths||36,this.batterySerialNumber=e.batterySerialNumber||"",this.installationDate=(0,t.p6)(e.installationDate||new Date,"YYYY-MM-ddTHH:mm:ss.SSSZ","en"),this.lastServiceDate=(0,t.p6)(new Date,"MMM d, y","en"),this.calculateProgress()}fillValuesFromService(e){this.oilChangeDuration=e.oilChangeDuration||500,this.prevOilHour=e.prevOilHour||0,this.hoursRun=e.hoursRun||0,this.oilVol=e.oilVol||0,this.fuelFilterNumber=e.fuelFilterNumber||"",this.oilFilterNumber=e.oilFilterNumber||"",this.airFilterNumber=e.airFilterNumber||"",this.beltNumber=e.beltNumber||""}fillValuesFromBattery(e){this.batteryCompanyName=e.batteryCompanyName||"",this.batteryCapacity=e.batteryCapacity||0,this.replaceDurationMonths=e.replaceDurationMonths||36,this.batterySerialNumber=e.batterySerialNumber||"",this.installationDate=(0,t.p6)(e.installationDate||new Date,"YYYY-MM-ddTHH:mm:ss.SSSZ","en")}getStatus(){return this.inRent?"Rented":this.inService?"Under service":this.forMaintenance?"Under maintenance":"Available"}getRemainingHours(){const e=this.oilChangeDuration-(this.hoursRun-this.prevOilHour);return e<0?0:e}calculateProgress(){let e=100*(this.hoursRun-this.prevOilHour)/this.oilChangeDuration;e=Math.trunc(e),this.serviceProgress.health=100-Math.min(100,e),e>100&&(e=100,this.serviceProgress.overShoot=1),this.serviceProgress.progress=e,this.serviceProgress.color=1==this.serviceProgress.overShoot||e>80?"danger":e>50?"warning":"success",this.serviceProgress.color2=1==this.serviceProgress.overShoot||e>80?"warn":"primary",this.serviceProgress.ngclass="progress-bar progress-bar-"+this.serviceProgress.color+" width-per-"+e;let d=((new Date).valueOf()-new Date(this.installationDate).valueOf())/846e5;this.maintenanceProgress.totalDays=30*this.replaceDurationMonths,e=100*d/this.maintenanceProgress.totalDays,e=Math.trunc(e),d=Math.trunc(d),this.maintenanceProgress.daysRemain=Math.trunc(d/30)+" m, "+Math.trunc(d%30),this.maintenanceProgress.totalDays=this.replaceDurationMonths,this.maintenanceProgress.health=100-Math.min(100,e),e>100&&(e=100,this.maintenanceProgress.overShoot=1),this.maintenanceProgress.progress=e,this.maintenanceProgress.color=1==this.maintenanceProgress.overShoot||e>80?"danger":e>50?"warning":"success",this.maintenanceProgress.color2=1==this.maintenanceProgress.overShoot||e>80?"warn":"primary",this.maintenanceProgress.ngclass="progress-bar progress-bar-"+this.maintenanceProgress.color+" width-per-"+e}}},6240:(f,p,s)=>{s.d(p,{O:()=>t});class t{constructor(r){this.amountProgress={progress:0,color:"",color2:""},this.id=r.id||"",this.name=r.name||"",this.company=r.company||"",this.contactPerson1=r.contactPerson1||"",this.phone1=r.phone1||"",this.contactPerson2=r.contactPerson2||"",this.phone2=r.phone2||"",this.place=r.place||"",this.address=r.address||"",this.pending=r.pending||0,this.received=r.received||0,this.ePending=r.ePending||0,this.eReceived=r.eReceived||0,this.total=this.getPending()+this.getReceived(),this.calculateProgress()}getPending(){return this.ePending+this.pending}getReceived(){return this.eReceived+this.received}calculateProgress(){this.total=this.getPending()+this.getReceived(),this.amountProgress.progress=Math.trunc(this.getReceived()/this.total*100);const r=this.amountProgress.progress;this.amountProgress.color=r<50?"danger":r<90?"warning":"success",this.amountProgress.color2=r<90?"warn":"primary"}}},1781:(f,p,s)=>{s.d(p,{v:()=>_});var t=s(1135),g=s(529),r=s(9186),e=s(6240),d=s(4650);let _=(()=>{class l extends r.n{constructor(a){super(),this.httpClient=a,this.API_URL="https://mahalakshmi-2-d1614942.deta.app/customers",this.isTblLoading=!0,this.dataChange=new t.X([]),this.genId=new t.X(""),this.newGen=new t.X(new e.O({})),this.errors=new t.X({})}get data(){return this.dataChange.value}getDialogData(){return this.dialogData}getAllAdvanceTables(){this.subs.sink=this.httpClient.get(this.API_URL).subscribe({next:a=>{a=a.map(i=>Object.assign(new e.O(i),i)),this.isTblLoading=!1,this.dataChange.next(a)},error:a=>{this.isTblLoading=!1,console.log(a)}})}addAdvanceTable(a){const i=new g.WM;i.append("Content-Type","application/json"),this.httpClient.post(this.API_URL,a,{headers:i}).subscribe({next:n=>{n.id?(this.dialogData=n,this.newGen.next(this.dialogData)):this.errors.next(n)},error:n=>{this.errors.next(n)}})}updateAdvanceTable(a,i){this.httpClient.put(this.API_URL+"/"+a,i).subscribe({next:n=>{n.name?(this.dialogData=n,this.newGen.next(this.dialogData)):this.errors.next(n)},error:n=>{this.errors.next(n)}})}deleteAdvanceTable(a){this.httpClient.delete(this.API_URL+"/"+a).subscribe({next:i=>{},error:i=>{console.log(i)}})}}return l.\u0275fac=function(a){return new(a||l)(d.LFG(g.eN))},l.\u0275prov=d.Yz7({token:l,factory:l.\u0275fac}),l})()},3162:(f,p,s)=>{s.d(p,{Cv:()=>n,pW:()=>a});var t=s(4650),r=(s(6895),s(3238)),e=s(1281);const d=new t.OlP("MAT_PROGRESS_BAR_DEFAULT_OPTIONS"),u=(0,r.pj)(class{constructor(o){this._elementRef=o}},"primary");let a=(()=>{class o extends u{constructor(m,h,P,v,b){super(m),this._ngZone=h,this._changeDetectorRef=P,this._animationMode=v,this._isNoopAnimation=!1,this._value=0,this._bufferValue=0,this.animationEnd=new t.vpe,this._mode="determinate",this._transitionendHandler=y=>{0===this.animationEnd.observers.length||!y.target||!y.target.classList.contains("mdc-linear-progress__primary-bar")||("determinate"===this.mode||"buffer"===this.mode)&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))},this._isNoopAnimation="NoopAnimations"===v,b&&(b.color&&(this.color=this.defaultColor=b.color),this.mode=b.mode||this.mode)}get value(){return this._value}set value(m){this._value=i((0,e.su)(m)),this._changeDetectorRef.markForCheck()}get bufferValue(){return this._bufferValue||0}set bufferValue(m){this._bufferValue=i((0,e.su)(m)),this._changeDetectorRef.markForCheck()}get mode(){return this._mode}set mode(m){this._mode=m,this._changeDetectorRef.markForCheck()}ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._elementRef.nativeElement.addEventListener("transitionend",this._transitionendHandler)})}ngOnDestroy(){this._elementRef.nativeElement.removeEventListener("transitionend",this._transitionendHandler)}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${"buffer"===this.mode?this.bufferValue:100}%`}_isIndeterminate(){return"indeterminate"===this.mode||"query"===this.mode}}return o.\u0275fac=function(m){return new(m||o)(t.Y36(t.SBq),t.Y36(t.R0b),t.Y36(t.sBO),t.Y36(t.QbO,8),t.Y36(d,8))},o.\u0275cmp=t.Xpm({type:o,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:8,hostBindings:function(m,h){2&m&&(t.uIk("aria-valuenow",h._isIndeterminate()?null:h.value)("mode",h.mode),t.ekj("_mat-animation-noopable",h._isNoopAnimation)("mdc-linear-progress--animation-ready",!h._isNoopAnimation)("mdc-linear-progress--indeterminate",h._isIndeterminate()))},inputs:{color:"color",value:"value",bufferValue:"bufferValue",mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],features:[t.qOj],decls:7,vars:4,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(m,h){1&m&&(t.TgZ(0,"div",0),t._UZ(1,"div",1)(2,"div",2),t.qZA(),t.TgZ(3,"div",3),t._UZ(4,"span",4),t.qZA(),t.TgZ(5,"div",5),t._UZ(6,"span",4),t.qZA()),2&m&&(t.xp6(1),t.Udp("flex-basis",h._getBufferBarFlexBasis()),t.xp6(2),t.Udp("transform",h._getPrimaryBarTransform()))},styles:["@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(var(--mdc-linear-progress-primary-half, 83.67142%))}100%{transform:translateX(var(--mdc-linear-progress-primary-full, 200.611057%))}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(var(--mdc-linear-progress-secondary-quarter, 37.651913%))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(var(--mdc-linear-progress-secondary-half, 84.386165%))}100%{transform:translateX(var(--mdc-linear-progress-secondary-full, 160.277782%))}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(-10px)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(var(--mdc-linear-progress-primary-half-neg, -83.67142%))}100%{transform:translateX(var(--mdc-linear-progress-primary-full-neg, -200.611057%))}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(var(--mdc-linear-progress-secondary-quarter-neg, -37.651913%))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(var(--mdc-linear-progress-secondary-half-neg, -84.386165%))}100%{transform:translateX(var(--mdc-linear-progress-secondary-full-neg, -160.277782%))}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}.mdc-linear-progress{position:relative;width:100%;transform:translateZ(0);outline:1px solid rgba(0,0,0,0);overflow:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}@media screen and (forced-colors: active){.mdc-linear-progress{outline-color:CanvasText}}.mdc-linear-progress__bar{position:absolute;width:100%;height:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top-style:solid}.mdc-linear-progress__buffer{display:flex;position:absolute;width:100%;height:100%}.mdc-linear-progress__buffer-dots{background-repeat:repeat-x;flex:auto;transform:rotate(180deg);animation:mdc-linear-progress-buffering 250ms infinite linear}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress__secondary-bar{display:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;display:block}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__bar{right:0;-webkit-transform-origin:center right;transform-origin:center right}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__buffer-dots,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse 250ms infinite linear;transform:rotate(0)}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}.mdc-linear-progress--closed{opacity:0}.mdc-linear-progress--closed-animation-off .mdc-linear-progress__buffer-dots{animation:none}.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar,.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar .mdc-linear-progress__bar-inner{animation:none}.mdc-linear-progress__bar-inner{border-color:var(--mdc-linear-progress-active-indicator-color, #6200ee)}.mdc-linear-progress__buffer-dots{background-image:url(\"data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E\")}.mdc-linear-progress__buffer-bar{background-color:#e6e6e6}.mdc-linear-progress{height:var(--mdc-linear-progress-track-height, 4px)}.mdc-linear-progress__bar-inner{border-top-width:var(--mdc-linear-progress-track-height, 4px)}.mdc-linear-progress__buffer-dots{background-size:10px var(--mdc-linear-progress-track-height, 4px)}.mat-mdc-progress-bar{display:block}.mat-mdc-progress-bar[mode=query]{transform:scaleX(-1)}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner{animation:none}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar{transition:transform 1ms}"],encapsulation:2,changeDetection:0}),o})();function i(o,c=0,m=100){return Math.max(c,Math.min(m,o))}let n=(()=>{class o{}return o.\u0275fac=function(m){return new(m||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[r.BQ]}),o})()}}]);
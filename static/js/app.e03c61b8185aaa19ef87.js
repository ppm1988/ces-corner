webpackJsonp([1],{"1/oy":function(e,t){},"1YeQ":function(e,t){},"1wr4":function(e,t){},GfHa:function(e,t){},Id91:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a("wg8Y"),a("oFcf"),a("vH9D");var s=a("7+uW"),n=a("e6fC"),l=a("XyMi");var o=function(e){a("NY3r")},i=Object(l.a)({name:"app",created:function(){}},function(){var e=this.$createElement;return(this._self._c||e)("router-view")},[],!1,o,null,null).exports,r=a("/ocq"),c={items:[{title:!0,name:"Admin",class:"",wrapper:{element:"",attributes:{}}},{name:"Templates",url:"/templates",icon:"icon-note"},{name:"Briefcase",url:"/briefcase",icon:"icon-briefcase"},{name:"Create Post",url:"/create-post",icon:"icon-envelope"},{title:!0,name:"Updates",class:"",wrapper:{element:"",attributes:{}}},{name:"Food Menu",url:"/food-menu",icon:"icon-list"},{name:"Cab Schedule",url:"/cab-schedule",icon:"icon-speedometer",badge:{variant:"primary",text:"NEW"}}]},m=a("TQur"),u={name:"full",components:{AsideToggler:m.b,AppHeader:m.e,AppSidebar:m.f,AppAside:m.a,TheFooter:m.d,Breadcrumb:m.c,SidebarForm:m.h,SidebarFooter:m.g,SidebarToggler:m.l,SidebarHeader:m.i,SidebarNav:m.k,SidebarMinimizer:m.j},data:function(){return{nav:c.items}},computed:{name:function(){return this.$route.name},list:function(){return this.$route.matched}}},v=Object(l.a)(u,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app"},[a("AppHeader",{attrs:{fixed:""}},[a("SidebarToggler",{staticClass:"d-lg-none",attrs:{display:"md",mobile:""}}),e._v(" "),a("b-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[a("img",{staticClass:"navbar-brand-full",attrs:{src:"static/img/CES-Logo.png",width:"64",alt:"CES IT"}}),e._v(" "),a("img",{staticClass:"navbar-brand-minimized",attrs:{src:"static/img/CES-Logo.png",width:"30",alt:"CES IT"}})]),e._v(" "),a("SidebarToggler",{staticClass:"d-md-down-none position-absolute left-180-p",attrs:{display:"lg"}})],1),e._v(" "),a("div",{staticClass:"app-body"},[a("AppSidebar",{attrs:{fixed:""}},[a("SidebarHeader"),e._v(" "),a("SidebarForm"),e._v(" "),a("SidebarNav",{attrs:{navItems:e.nav}}),e._v(" "),a("SidebarFooter"),e._v(" "),a("SidebarMinimizer")],1),e._v(" "),a("main",{staticClass:"main"},[a("breadcrumb",{attrs:{list:e.list}}),e._v(" "),a("div",{staticClass:"container-fluid"},[a("router-view")],1)],1)],1)],1)},[],!1,null,null,null).exports,d=a("fZjL"),p=a.n(d),b=firebase.database().ref("posts"),h={name:"foodMenu",props:{cardTitle:String},data:function(){return{allPosts:[],allFields:[]}},created:function(){var e=this;b.on("child_added",function(t){"food-menu"===t.val().category&&(e.allPosts.push(t.val()),e.allFields=p()(e.allPosts[0].values[0]))})}};var _=function(e){a("pieq")},f=Object(l.a)(h,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card",[""!==e.cardTitle?a("div",{attrs:{slot:"header"},slot:"header"},[e._v("\n    "+e._s(e.allPosts[0].from)+" till "+e._s(e.allPosts[0].to)+"\n  ")]):e._e(),e._v(" "),e._l(e.allPosts,function(t,s){return a("div",{key:s,staticStyle:{display:"table",width:"100%"}},e._l(t.values,function(s,n){return a("div",{key:n,staticClass:"container"},[t.values[n+1]?[s.Date===t.values[n+1].Date?a("div",{staticClass:"row",class:0===n?"food-header-zero":"food-header"},[a("div",{staticClass:"col"},[a("h3",[e._v(e._s(s.Date))]),e._v("\n            ("+e._s(s.Day)+")\n          ")])]):e._e()]:e._e(),e._v(" "),a("div",{staticClass:"row food-row text-center"},[a("div",{staticClass:"col-sm-12 col-md-4 col-lg-4 "},["Lunch"===s.Option?a("b-badge",{staticStyle:{padding:"10px","margin-top":"10px"},attrs:{variant:"warning"}},[e._v(e._s(s.Option))]):e._e(),e._v(" "),"Dinner"===s.Option?a("b-badge",{staticStyle:{padding:"10px","margin-top":"10px"},attrs:{variant:"success"}},[e._v(e._s(s.Option))]):e._e()],1),e._v(" "),e._l(e.allFields,function(t,n){return"Date"!==t&&"Day"!==t&&"Option"!==t?a("div",{key:n,staticClass:"col-sm-12 col-md-4 col-lg-4 "},[a("code",[e._v(e._s(t))]),e._v(" "),a("div",[e._v(e._s(s[t]))])]):e._e()})],2)],2)}))})],2)},[],!1,_,null,null).exports,C=firebase.database().ref("posts"),T={name:"timeline",components:{FoodMenu:f},data:function(){return{allPosts:[],allFields:[]}},created:function(){var e=this;C.on("child_added",function(t){e.allPosts.push(t.val()),e.allFields.push(p()(e.allPosts[0].values[0]))})},methods:{}};var g=function(e){a("allC")},w=Object(l.a)(T,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ul",{staticClass:"cbp_tmtimeline"},[a("li",[e._m(0),e._v(" "),a("div",{staticClass:"cbp_tmicon"}),e._v(" "),a("div",{staticClass:"cbp_tmlabel"},[a("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle.divFoodMenu",modifiers:{divFoodMenu:!0}}],attrs:{block:"",href:"#",variant:"info"}},[e._v("Food Menu")]),e._v(" "),a("b-collapse",{attrs:{id:"divFoodMenu",accordion:"db-accordion",role:"tabpanel"}},[a("food-menu",{attrs:{"card-title":""}})],1)],1)]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3)])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("time",{staticClass:"cbp_tmtime",attrs:{datetime:"2013-04-10 18:30"}},[t("span",[this._v("02 July 2018")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("time",{staticClass:"cbp_tmtime"},[t("span",[this._v("01 Jan 2018")])]),this._v(" "),t("div",{staticClass:"cbp_tmicon"}),this._v(" "),t("div",{staticClass:"cbp_tmlabel"},[t("h2",[this._v("Holiday List")]),this._v(" "),t("p",[this._v("Coming soon...")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("time",{staticClass:"cbp_tmtime"},[t("span",[this._v("04 July 2018")])]),this._v(" "),t("div",{staticClass:"cbp_tmicon"}),this._v(" "),t("div",{staticClass:"cbp_tmlabel"},[t("h2",[this._v("Cab Schedule")]),this._v(" "),t("p",[this._v("Coming soon...")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("time",{staticClass:"cbp_tmtime"},[t("span",[this._v("01 Jan 2018")])]),this._v(" "),t("div",{staticClass:"cbp_tmicon"}),this._v(" "),t("div",{staticClass:"cbp_tmlabel"},[t("h2",[this._v("Announcement")]),this._v(" "),t("p",[this._v("Coming soon...")])])])}],!1,g,null,null).exports,y=a("NYxO");s.a.use(y.a);var S=new y.a.Store({state:{selectedTemplateName:""},mutations:{selectTemplate:function(e,t){e.selectedTemplateName=t},clearSelected:function(e){e.selectedTemplateName=""}}}),k=firebase.database().ref("templates"),x={name:"manageTemplates",data:function(){return{templates:[]}},props:["cardTitle"],created:function(){var e=this;k.on("child_added",function(t){e.templates.push(t.val())})},methods:{selectTemplate:function(e){S.commit("selectTemplate",e)}}};var N=function(e){a("kd0g")},O=Object(l.a)(x,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card",[a("div",{attrs:{slot:"header"},slot:"header"},[a("strong",[e._v(e._s(e.cardTitle))])]),e._v(" "),a("b-row",[e._l(e.templates,function(t,s){return a("b-col",{key:s,attrs:{sm:"6",lg:"3"}},[a("b-card",{on:{click:function(a){e.selectTemplate(t.name)}}},[a("div",{staticClass:"h4 m-0"},[e._v(e._s(t.name))]),e._v(" "),a("b-progress",{staticClass:"progress-xs my-3",attrs:{height:"{}",variant:"warning",value:100*t.columns.length/6}})],1)],1)}),e._v(" "),a("b-col",{attrs:{sm:"6",lg:"3"}},[a("b-card",{on:{click:function(t){e.selectTemplate("announcement")}}},[a("div",{staticClass:"h4 m-0"},[e._v("Announcement")]),e._v(" "),a("b-progress",{staticClass:"progress-xs my-3",attrs:{height:"{}",variant:"success",value:100}})],1)],1)],2)],1)},[],!1,N,null,null).exports,E=firebase.database().ref("templates"),j={name:"createTemplate",components:{cSwitch:m.m},data:function(){return{vmEnableSave:!1,vmTmplName:"",vmIsDataTemplate:!1,vmColumnControls:[""],vmColumnsTable:[]}},methods:{clkSaveTemplate:function(){var e=this.vmIsDataTemplate?"data":"post";E.push({name:this.vmTmplName,columns:this.vmColumnsTable,postType:e}),this.vmTmplName="",this.vmColumnControls=[""],this.vmColumnsTable=[],this.vmEnableSave=!1},clkResetTemplate:function(){this.vmTmplName="",this.vmColumnControls=[""],this.vmColumnsTable=[],this.vmEnableSave=!1},checkColumns:function(){var e=!0;if(this.vmColumnControls.length>6)return!1;for(var t=0;t<this.vmColumnControls.length;t++)""===this.vmColumnControls[t]&&(e=!1);return e},clkRemoveColumn:function(e){this.vmColumnControls.splice(e,1),this.vmColumnsTable.splice(e,1)},clkUpdateColumn:function(e){this.vmColumnsTable[e]=this.vmColumnControls[e]},clkAddColumn:function(){var e=this.vmColumnControls.length-1;this.vmColumnControls.push(""),this.vmColumnsTable.push(this.vmColumnControls[e])}}};var A=function(e){a("1wr4")},R={name:"templates",components:{ManageTemplates:O,CreateTemplate:Object(l.a)(j,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card",[a("div",{attrs:{slot:"header"},slot:"header"},[a("strong",[e._v("Create New Template")]),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.vmColumnsTable.length>0,expression:"vmColumnsTable.length > 0"}],staticClass:"animated fadeIn"},[a("b-button",{attrs:{type:"submit",variant:"primary"},on:{click:e.clkSaveTemplate}},[e._v("Save Template")]),e._v(" "),a("b-button",{attrs:{type:"button",variant:"secondary"},on:{click:e.clkResetTemplate}},[e._v("Reset")])],1)]),e._v(" "),a("b-row",[a("b-col",{attrs:{sm:"6"}},[a("b-row",[a("b-col",{attrs:{sm:"8"}},[e._v("\n          Is Data template? "),a("c-switch",{staticClass:"mx-1",attrs:{color:"danger",variant:"pill"},model:{value:e.vmIsDataTemplate,callback:function(t){e.vmIsDataTemplate=t},expression:"vmIsDataTemplate"}})],1)],1),e._v(" "),a("b-row",[a("b-col",{attrs:{sm:"8"}},[a("b-form-group",[a("b-input-group",[a("b-input-group-prepend",[a("b-input-group-text",[a("i",{staticClass:"fa fa-envelope-o"})])],1),e._v(" "),a("b-form-input",{attrs:{type:"text",placeholder:"Template Name",title:"eg: FoodTemplate1"},model:{value:e.vmTmplName,callback:function(t){e.vmTmplName=t},expression:"vmTmplName"}})],1)],1)],1)],1),e._v(" "),a("b-row",[a("b-col",{attrs:{sm:"8"}},[a("b-form-group",[a("label",{attrs:{for:""}},[a("strong",[e._v("Columns")])]),e._v(" "),e._l(e.vmColumnControls,function(t,s){return a("span",{key:s},[a("div",{directives:[{name:"show",rawName:"v-show",value:void 0!==e.vmColumnsTable[s],expression:"vmColumnsTable[colIndex] !== undefined"}],staticClass:"cursor-pointer",on:{click:function(t){e.clkRemoveColumn(s)}}},[e._v("- Remove")]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:void 0!==e.vmColumnsTable[s],expression:"vmColumnsTable[colIndex] !== undefined"}],staticClass:"cursor-pointer",on:{click:function(t){e.clkUpdateColumn(s)}}},[e._v("= Update")]),e._v(" "),a("b-form-input",{directives:[{name:"show",rawName:"v-show",value:s<6,expression:"colIndex < 6"}],attrs:{type:"text",placeholder:"eg: Full Name"},model:{value:e.vmColumnControls[s],callback:function(t){e.$set(e.vmColumnControls,s,t)},expression:"vmColumnControls[colIndex]"}})],1)}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.checkColumns(),expression:"checkColumns()"}],staticClass:"cursor-pointer",on:{click:e.clkAddColumn}},[e._v("+ Add column")])],2)],1)],1)],1),e._v(" "),a("b-col",{attrs:{sm:"6"}},[e.vmColumnsTable.length>0&&""!==e.vmTmplName?a("div",[a("strong",[e._v(e._s(e.vmTmplName))]),e._v(" ( sample )\n\n        "),a("b-table",{attrs:{hover:!0,striped:!0,bordered:!0,small:!0,fixed:!0,responsive:"sm",fields:e.vmColumnsTable}})],1):e._e()])],1)],1)},[],!1,A,null,null).exports}};var D=function(e){a("yDK8")},F=Object(l.a)(R,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"animated fadeIn"},[t("create-template"),this._v(" "),t("manage-templates",{attrs:{"card-title":"Edit Template"}})],1)},[],!1,D,null,null).exports,I=a("BO1k"),P=a.n(I),$=a("mvHQ"),M=a.n($),H=firebase.database().ref("templates"),L={name:"newRecord",data:function(){return{selectedTemplate:{},selectedKey:0,dataObj:[],vmPostType:"",newRowObj:{}}},computed:{selectedName:function(){return S.state.selectedTemplateName}},methods:{initiateControls:function(){this.dataObj=[],this.newRowObj={};for(var e=0;e<this.selectedTemplate.columns.length;e++)this.newRowObj[this.selectedTemplate.columns[e]]="";this.dataObj.push(this.newRowObj)},resetTemplate:function(){S.commit("clearSelected")},addNewRow:function(){this.newRowObj={};for(var e=0;e<this.selectedTemplate.columns.length;e++)this.newRowObj[this.selectedTemplate.columns[e]]="";this.dataObj.push(this.newRowObj)},clkSaveChanges:function(){var e={name:this.selectedName,values:JSON.parse(M()(this.dataObj))},t="";t="data"===this.vmPostType?firebase.database().ref("data"):firebase.database().ref("posts"),console.log(this.dataObj),t.push(e,this.fbCallback)},fbCallback:function(e){e?console.log("WRITE FAILED"):console.log("DATA SAVED SUCCESSFULLY")}},created:function(){var e=this;H.on("value",function(t){var a=!0,s=!1,n=void 0;try{for(var l,o=P()(p()(t.val()));!(a=(l=o.next()).done);a=!0){var i=l.value;if(t.val()[i].name===e.selectedName){e.selectedTemplate=t.val()[i],e.selectedKey=i,e.initiateControls(),e.vmPostType=e.selectedTemplate.postType;break}}}catch(e){s=!0,n=e}finally{try{!a&&o.return&&o.return()}finally{if(s)throw n}}})}};var Y=function(e){a("sCty")},B={name:"createPost",components:{ManageTemplates:O,NewRecord:Object(l.a)(L,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"animated fadeIn disable-select"},["announcement"!==e.selectedName?a("b-card",[a("div",{attrs:{slot:"header"},slot:"header"},[a("strong",[e._v(" "+e._s(e.selectedName)+" ")]),e._v(" "),a("span",{on:{click:function(t){e.resetTemplate()}}},[e._v("\n        Cancel and go back to choose template\n      ")])]),e._v(" "),"data"!==e.vmPostType?a("b-row",[a("b-col",{attrs:{sm:"6",lg:"4"}},[e._v("CATEGORY")]),e._v(" "),a("b-col",{attrs:{sm:"6",lg:"4"}},[e._v("DATE RANGE")]),e._v(" "),a("b-col",{attrs:{sm:"6",lg:"4"}},[e._v("Checkbox: Dated post")])],1):e._e(),e._v(" "),a("table",[a("thead",[a("tr",e._l(e.selectedTemplate.columns,function(t,s){return a("th",{key:s},[e._v("\n            "+e._s(t)+"\n          ")])}))]),e._v(" "),a("tbody",e._l(e.dataObj,function(t,s){return a("tr",{key:s},e._l(e.selectedTemplate.columns,function(t,s){return a("td",{key:s},[a("b-form-input",{attrs:{type:"text",placeholder:""},model:{value:e.newRowObj[t],callback:function(a){e.$set(e.newRowObj,t,a)},expression:"newRowObj[eachColumn]"}})],1)}))}))]),e._v(" "),a("b-row",[a("b-col",{attrs:{sm:"4",lg:"4"},on:{click:e.addNewRow}},[e._v("Add New Row")]),e._v(" "),a("b-col",{attrs:{sm:"4",lg:"4"}},[a("b-button",{attrs:{type:"submit",variant:"primary"},on:{click:e.clkSaveChanges}},["data"!==e.vmPostType?a("span",[e._v("Save & Publish")]):e._e(),e._v(" "),"data"===e.vmPostType?a("span",[e._v("Save Data")]):e._e()])],1)],1)],1):e._e(),e._v(" "),"announcement"===e.selectedName?a("b-card",[e._v("\n    TEXT AREA\n  ")]):e._e()],1)},[],!1,Y,null,null).exports},computed:{templateSelected:function(){return S.state.selectedTemplateName}}};var J=function(e){a("OSM3")},U=Object(l.a)(B,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"animated fadeIn"},[""===this.templateSelected?t("manage-templates",{attrs:{"card-title":"Choose a Template"}}):this._e(),this._v(" "),""!==this.templateSelected?t("new-record"):this._e()],1)},[],!1,J,null,null).exports;var z=function(e){a("omrA")},Q=Object(l.a)({name:"cabSchedule"},function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v("\n  Cab Schedule\n")])},[],!1,z,null,null).exports;var K=function(e){a("1YeQ")},q=Object(l.a)({name:"briefcase"},function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v("\n  Briefcase\n")])},[],!1,K,null,null).exports;s.a.use(r.a);var G=new r.a({mode:"hash",linkActiveClass:"open active",scrollBehavior:function(){return{y:0}},routes:[{path:"/",redirect:"/timeline",name:"Home",component:v,children:[{path:"timeline",name:"Timeline",component:w},{path:"templates",name:"Templates",component:F},{path:"create-post",name:"Create Post",beforeEnter:function(e,t,a){S.commit("clearSelected"),a()},component:U},{path:"briefcase",name:"Briefcase",component:q},{path:"food-menu",name:"Food Menu",component:f},{path:"cab-schedule",name:"Cab Schedule",component:Q}]}]});s.a.use(n.a),new s.a({el:"#app",router:G,created:function(){},store:S,template:"<App/>",components:{App:i}})},NY3r:function(e,t){},OSM3:function(e,t){},allC:function(e,t){},kd0g:function(e,t){},omrA:function(e,t){},pieq:function(e,t){},sCty:function(e,t){},yDK8:function(e,t){},zj2Q:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.e03c61b8185aaa19ef87.js.map
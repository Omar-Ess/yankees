(self.webpackChunk=self.webpackChunk||[]).push([[278],{1893:(t,e,a)=>{"use strict";a.d(e,{P:()=>s,_:()=>i});var s={data:function(){return{dtTable:null}},beforeUpdate:function(){this.dtTable&&this.dtTable.destroy()},updated:function(){this.dtTable=$("#dataTable").DataTable({order:[[0,"desc"]]})}},i={data:function(){return{statuses:["pending","processing","out_for_delivery","delivered","cancelled","failed"]}},methods:{customMultiselectLabel:function(t){return translate("admin."+t)},bindStatusClass:function(t,e){switch(!0){case["pending","processing","out_for_delivery"].includes(t):return"badge"==e&&"pending"==t?"badge-secondary":"icon"==e?"fa-clock":"badge-info";case["cancelled","failed"].includes(t):return"icon"==e?"fa-times":"badge-danger";case["delivered"].includes(t):return"icon"==e?"fa-check":"badge-success"}}}}},4742:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});var s=a(3645),i=a.n(s)()((function(t){return t[1]}));i.push([t.id,'fieldset[disabled] .multiselect{pointer-events:none}.multiselect__spinner{position:absolute;right:1px;top:1px;width:48px;height:35px;background:#fff;display:block}.multiselect__spinner:after,.multiselect__spinner:before{position:absolute;content:"";top:50%;left:50%;margin:-8px 0 0 -8px;width:16px;height:16px;border-radius:100%;border:2px solid transparent;border-top-color:#41b883;box-shadow:0 0 0 1px transparent}.multiselect__spinner:before{-webkit-animation:spinning 2.4s cubic-bezier(.41,.26,.2,.62);animation:spinning 2.4s cubic-bezier(.41,.26,.2,.62);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.multiselect__spinner:after{-webkit-animation:spinning 2.4s cubic-bezier(.51,.09,.21,.8);animation:spinning 2.4s cubic-bezier(.51,.09,.21,.8);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.multiselect__loading-enter-active,.multiselect__loading-leave-active{transition:opacity .4s ease-in-out;opacity:1}.multiselect__loading-enter,.multiselect__loading-leave-active{opacity:0}.multiselect,.multiselect__input,.multiselect__single{font-family:inherit;font-size:16px;touch-action:manipulation}.multiselect{box-sizing:content-box;display:block;position:relative;width:100%;min-height:40px;text-align:left;color:#35495e}.multiselect *{box-sizing:border-box}.multiselect:focus{outline:none}.multiselect--disabled{background:#ededed;pointer-events:none;opacity:.6}.multiselect--active{z-index:50}.multiselect--active:not(.multiselect--above) .multiselect__current,.multiselect--active:not(.multiselect--above) .multiselect__input,.multiselect--active:not(.multiselect--above) .multiselect__tags{border-bottom-left-radius:0;border-bottom-right-radius:0}.multiselect--active .multiselect__select{transform:rotate(180deg)}.multiselect--above.multiselect--active .multiselect__current,.multiselect--above.multiselect--active .multiselect__input,.multiselect--above.multiselect--active .multiselect__tags{border-top-left-radius:0;border-top-right-radius:0}.multiselect__input,.multiselect__single{position:relative;display:inline-block;min-height:20px;line-height:20px;border:none;border-radius:5px;background:#fff;padding:0 0 0 5px;width:100%;transition:border .1s ease;box-sizing:border-box;margin-bottom:8px;vertical-align:top}.multiselect__input:-ms-input-placeholder{color:#35495e}.multiselect__input::-moz-placeholder{color:#35495e}.multiselect__input::placeholder{color:#35495e}.multiselect__tag~.multiselect__input,.multiselect__tag~.multiselect__single{width:auto}.multiselect__input:hover,.multiselect__single:hover{border-color:#cfcfcf}.multiselect__input:focus,.multiselect__single:focus{border-color:#a8a8a8;outline:none}.multiselect__single{padding-left:5px;margin-bottom:8px}.multiselect__tags-wrap{display:inline}.multiselect__tags{min-height:40px;display:block;padding:8px 40px 0 8px;border-radius:5px;border:1px solid #e8e8e8;background:#fff;font-size:14px}.multiselect__tag{position:relative;display:inline-block;padding:4px 26px 4px 10px;border-radius:5px;margin-right:10px;color:#fff;line-height:1;background:#41b883;margin-bottom:5px;white-space:nowrap;overflow:hidden;max-width:100%;text-overflow:ellipsis}.multiselect__tag-icon{cursor:pointer;margin-left:7px;position:absolute;right:0;top:0;bottom:0;font-weight:700;font-style:normal;width:22px;text-align:center;line-height:22px;transition:all .2s ease;border-radius:5px}.multiselect__tag-icon:after{content:"\\D7";color:#266d4d;font-size:14px}.multiselect__tag-icon:focus,.multiselect__tag-icon:hover{background:#369a6e}.multiselect__tag-icon:focus:after,.multiselect__tag-icon:hover:after{color:#fff}.multiselect__current{min-height:40px;overflow:hidden;padding:8px 30px 0 12px;white-space:nowrap;border-radius:5px;border:1px solid #e8e8e8}.multiselect__current,.multiselect__select{line-height:16px;box-sizing:border-box;display:block;margin:0;text-decoration:none;cursor:pointer}.multiselect__select{position:absolute;width:40px;height:38px;right:1px;top:1px;padding:4px 8px;text-align:center;transition:transform .2s ease}.multiselect__select:before{position:relative;right:0;top:65%;color:#999;margin-top:4px;border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 0;content:""}.multiselect__placeholder{color:#adadad;display:inline-block;margin-bottom:10px;padding-top:2px}.multiselect--active .multiselect__placeholder{display:none}.multiselect__content-wrapper{position:absolute;display:block;background:#fff;width:100%;max-height:240px;overflow:auto;border:1px solid #e8e8e8;border-top:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;z-index:50;-webkit-overflow-scrolling:touch}.multiselect__content{list-style:none;display:inline-block;padding:0;margin:0;min-width:100%;vertical-align:top}.multiselect--above .multiselect__content-wrapper{bottom:100%;border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:5px;border-top-right-radius:5px;border-bottom:none;border-top:1px solid #e8e8e8}.multiselect__content::webkit-scrollbar{display:none}.multiselect__element{display:block}.multiselect__option{display:block;padding:12px;min-height:40px;line-height:16px;text-decoration:none;text-transform:none;vertical-align:middle;position:relative;cursor:pointer;white-space:nowrap}.multiselect__option:after{top:0;right:0;position:absolute;line-height:40px;padding-right:12px;padding-left:20px;font-size:13px}.multiselect__option--highlight{background:#41b883;outline:none;color:#fff}.multiselect__option--highlight:after{content:attr(data-select);background:#41b883;color:#fff}.multiselect__option--selected{background:#f3f3f3;color:#35495e;font-weight:700}.multiselect__option--selected:after{content:attr(data-selected);color:silver}.multiselect__option--selected.multiselect__option--highlight{background:#ff6a6a;color:#fff}.multiselect__option--selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff}.multiselect--disabled .multiselect__current,.multiselect--disabled .multiselect__select{background:#ededed;color:#a6a6a6}.multiselect__option--disabled{background:#ededed!important;color:#a6a6a6!important;cursor:text;pointer-events:none}.multiselect__option--group{background:#ededed;color:#35495e}.multiselect__option--group.multiselect__option--highlight{background:#35495e;color:#fff}.multiselect__option--group.multiselect__option--highlight:after{background:#35495e}.multiselect__option--disabled.multiselect__option--highlight{background:#dedede}.multiselect__option--group-selected.multiselect__option--highlight{background:#ff6a6a;color:#fff}.multiselect__option--group-selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff}.multiselect-enter-active,.multiselect-leave-active{transition:all .15s ease}.multiselect-enter,.multiselect-leave-active{opacity:0}.multiselect__strong{margin-bottom:8px;line-height:20px;display:inline-block;vertical-align:top}[dir=rtl] .multiselect{text-align:right}[dir=rtl] .multiselect__select{right:auto;left:1px}[dir=rtl] .multiselect__tags{padding:8px 8px 0 40px}[dir=rtl] .multiselect__content{text-align:right}[dir=rtl] .multiselect__option:after{right:auto;left:0}[dir=rtl] .multiselect__clear{right:auto;left:12px}[dir=rtl] .multiselect__spinner{right:auto;left:1px}@-webkit-keyframes spinning{0%{transform:rotate(0)}to{transform:rotate(2turn)}}@keyframes spinning{0%{transform:rotate(0)}to{transform:rotate(2turn)}}',""]);const r=i},4023:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});var s=a(3645),i=a.n(s)()((function(t){return t[1]}));i.push([t.id,"@media print{.modal-dialog{max-width:100%;width:100%}}",""]);const r=i},6292:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});var s=a(3645),i=a.n(s)()((function(t){return t[1]}));i.push([t.id,"a[data-v-308aacff]{color:#0d528b!important}a[data-v-308aacff]:hover{text-decoration:underline}",""]);const r=i},2873:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});var s=a(3645),i=a.n(s)()((function(t){return t[1]}));i.push([t.id,"#map{height:600px}.bg-grey{background:#e9e9e9}.mapbox-directions-route-summary{z-index:0!important}",""]);const r=i},5856:(t,e,a)=>{"use strict";a.d(e,{Z:()=>p});var s=a(7757),i=a.n(s),r=a(9669),n=a.n(r),o=a(7978),l=a(7900),d=a(3299);function c(t,e,a,s,i,r,n){try{var o=t[r](n),l=o.value}catch(t){return void a(t)}o.done?e(l):Promise.resolve(l).then(s,i)}const u={components:{BaseModal:o.Z,MapBoxGl:l.Z},props:["endAddressLine","endAddressDetails"],data:function(){return{token:"pk.eyJ1IjoieWFua2VlcyIsImEiOiJja3IzczE4ZHgyYTF5MnRwbGoxNTVkNm84In0.GI1vBvqx9hTT0mGJhXla-A",deliveryZoneBounds:this.$store.state.deliveryZoneBounds,getLoading:!1,postLoading:!1,startAddressLine:""}},computed:{mapBounds:function(){return[[this.deliveryZoneBounds.south_west.longitude,this.deliveryZoneBounds.south_west.latitude],[this.deliveryZoneBounds.north_east.longitude,this.deliveryZoneBounds.north_east.latitude]]},geocoderBounds:function(){return[this.deliveryZoneBounds.south_west.longitude,this.deliveryZoneBounds.south_west.latitude,this.deliveryZoneBounds.north_east.longitude,this.deliveryZoneBounds.north_east.latitude]}},methods:{toggleInstruction:function(){var t=document.getElementsByClassName("directions-control-instructions");t[0].hidden=!t[0].hidden},mapLoaded:function(t){var e=this;this.map=t,this.directions||(this.directions=new MapboxDirections({accessToken:this.token})),this.map.addControl(this.directions,"top-left"),this.map.resize(),$("#addressDirectionsModal").on("shown.bs.modal",(function(){e.map.resize()}))},fetchCurrentAddress:function(){var t=this;navigator.geolocation?(this.getLoading=!0,navigator.geolocation.getCurrentPosition(function(){var e,a=(e=i().mark((function e(a){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.getAddressFromLatLong(a.coords);case 3:t.startAddressLine=e.sent,t.directions.setOrigin(t.startAddressLine),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),(0,d.$1)("error",translate("front.errorMessage"));case 11:t.directions.setDestination(t.endAddressLine),t.getLoading=!1;case 13:case"end":return e.stop()}}),e,null,[[0,7]])})),function(){var t=this,a=arguments;return new Promise((function(s,i){var r=e.apply(t,a);function n(t){c(r,s,i,n,o,"next",t)}function o(t){c(r,s,i,n,o,"throw",t)}n(void 0)}))});return function(t){return a.apply(this,arguments)}}(),(function(e){(0,d.$1)("error",translate("front.permissionDenied")),t.directions.setDestination(t.endAddressLine),t.getLoading=!1}),{enableHighAccuracy:!0})):(0,d.$1)("error",(0,d.$1)("error",translate("front.geolocationNotSupported")))},getAddressFromLatLong:function(t){var e=this,a=t.longitude,s=t.latitude;return new Promise((function(t,i){n().get("https://api.mapbox.com/geocoding/v5/mapbox.places/".concat(a,",").concat(s,".json?access_token=").concat(e.token,"&limit=1")).then((function(e){t(e.data.features[0].place_name)})).catch((function(t){i(t)}))}))}}};a(1658);const p=(0,a(1900).Z)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("base-modal",{attrs:{"modal-id":"addressDirectionsModal"}},[a("div",[a("div",{staticClass:"container px-0 px-md-4 mt-2"},[a("h2",{staticClass:"modal-title font-weight-bold text-center"},[t._v("\n        "+t._s(t.translate("front.addressDirections"))+"\n      ")]),t._v(" "),a("div",{staticClass:"row mt-4"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"mt-4",attrs:{id:"map"}},[a("map-box-gl",{attrs:{"map-options":{style:"mapbox://styles/mapbox/streets-v11",center:[this.deliveryZoneBounds.south_west.longitude,this.deliveryZoneBounds.south_west.latitude],zoom:9}},on:{"map-load":t.mapLoaded}})],1),t._v(" "),a("div",{staticClass:"input-group mt-3"},[a("div",{staticClass:"bg-grey d-flex w-100"},[a("button",{staticClass:"btn btn-success px-3 mr-2",attrs:{"data-toggle":"tooltip","data-placement":"top",title:"Browser Location",type:"button",disabled:t.getLoading},on:{click:t.fetchCurrentAddress}},[t.getLoading?a("i",{staticClass:"fa fa-spinner fa-spin"}):a("i",{staticClass:"fa fa-map-marker-alt"})]),t._v(" "),t.startAddressLine.length?a("p",{staticClass:"mt-2",staticStyle:{"flex-basis":"90%"}},[t._v("\n                "+t._s(t.startAddressLine)+"\n                "),a("i",{staticClass:"fa fa-long-arrow-alt-right"}),t._v("\n                "+t._s(t.endAddressLine)+" / "+t._s(t.endAddressDetails)+"\n              ")]):a("p",{staticClass:"mt-2 text-muted",staticStyle:{"flex-basis":"90%"}},[t._v("\n                "+t._s(t.translate("front.detectAddresses"))+"\n              ")])])]),t._v(" "),a("button",{staticClass:"btn btn-info btn-block",attrs:{type:"button"},on:{click:t.toggleInstruction}},[t._v("\n            "+t._s(t.translate("front.toggleInstructions"))+"\n          ")])])])])])])}),[],!1,null,null,null).exports},2259:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}const r={props:["order"],data:function(){return{appName:this.$store.state.appName,appLogo:this.$store.state.appLogo,appUrl:this.$store.state.appUrl}},watch:{order:function(t){this.$store.commit("orders/setOrder",t)}},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},(0,a(629).Se)("orders",["orderObject"])),methods:{print:function(){window.print()}}};a(2420);const n=(0,a(1900).Z)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"modal fade invoiceModal",attrs:{tabindex:"-1",role:"dialog","aria-labelledby":"myLargeModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-body"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row d-flex justify-content-center"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"card p-4"},[a("div",{staticClass:"d-flex flex-row align-items-center"},[a("img",{attrs:{src:t.appLogo,width:"70",height:"70"}}),t._v(" "),a("div",{staticClass:"d-flex flex-column"},[a("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.appName))]),t._v(" "),a("small",[t._v("#-"+t._s(t.orderObject.id))])])]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"table-responsive p-4"},[a("table",{staticClass:"table table-borderless"},[a("tbody",[a("tr",{staticClass:"add"},[a("td",[t._v(t._s(t.translate("admin.to")))]),t._v(" "),a("td",[t._v(t._s(t.translate("admin.from")))])]),t._v(" "),a("tr",{staticClass:"content"},[a("td",{staticClass:"font-weight-bold"},[t.orderObject.user?a("p",[t._v("\n                              "+t._s(t.orderObject.user.name)+"\n                            ")]):t._e(),t._v(" "),a("br"),t._v(t._s(t.orderObject.email)),a("br"),t._v(t._s(t.orderObject.address_line+" . "+t.orderObject.address_details)+"\n                          ")]),t._v(" "),a("td",{staticClass:"font-weight-bold"},[t._v("\n                            "+t._s(t.appName)+" "),a("br"),t._v("\n                           "+t._s(t.appUrl)+"\n                          ")])])])])]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"products p-2"},[a("table",{staticClass:"table table-borderless"},[a("tbody",[a("tr",{staticClass:"add"},[a("th",[t._v(t._s(t.translate("admin.menu")))]),t._v(" "),a("th",[t._v(t._s(t.translate("admin.extras")))]),t._v(" "),a("th",[t._v(t._s(t.translate("admin.quantity")))]),t._v(" "),a("th",{staticClass:"text-center"},[t._v("Total")])]),t._v(" "),t._l(t.orderObject.meals,(function(e){return a("tr",{key:e.id,staticClass:"content"},[a("td",[t._v(t._s(e.title))]),t._v(" "),a("td",{staticStyle:{"white-space":"pre-wrap"},domProps:{innerHTML:t._s(e.pivot.user_selected_options)}}),t._v(" "),a("td",[t._v(t._s(e.pivot.qty))]),t._v(" "),a("td",{staticClass:"text-center"},[t._v("\n                            "+t._s(e.pivot.meal_subtotal)+" dhs\n                          ")])])}))],2)])]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"products p-2"},[a("table",{staticClass:"table table-borderless"},[a("tbody",[a("tr",{staticClass:"add"},[a("td"),t._v(" "),a("td",[t._v(t._s(t.translate("admin.subtotal")))]),t._v(" "),a("td",[t._v(t._s(t.translate("admin.tax")))]),t._v(" "),a("td",[t._v(t._s(t.translate("front.delivery")))]),t._v(" "),a("td",{staticClass:"text-center"},[t._v("Total")])]),t._v(" "),a("tr",{staticClass:"content"},[a("td"),t._v(" "),a("td",[t._v(t._s(t.orderObject.subtotal)+" dhs")]),t._v(" "),a("td",[t._v(t._s(t.orderObject.tax_price)+" dhs")]),t._v(" "),a("td",[t._v(t._s(t.orderObject.delivery_price)+" dhs")]),t._v(" "),a("td",{staticClass:"text-center"},[t._v("\n                            "+t._s(t.orderObject.total)+" dhs\n                          ")])])])])]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"address p-2"},[a("table",{staticClass:"table table-borderless"},[a("tbody",[a("tr",{staticClass:"add"},[a("td",[t._v(t._s(t.translate("admin.paymentDetails")))])]),t._v(" "),a("tr",{staticClass:"content"},[a("td",[t._v("\n                            "+t._s(t.translate("admin.paymentMode"))+" :\n                            "+t._s(t.orderObject.payment_mode)+"\n                            "),t.orderObject.name_on_card?a("p",[t._v("\n                              "+t._s(t.translate("admin.nameOnCard"))+":\n                              "+t._s(t.orderObject.name_on_card)+"\n                            ")]):t._e()])])])])])])])])])]),t._v(" "),a("div",{staticClass:"modal-footer d-print-none"},[a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.print}},[a("i",{staticClass:"fa fa-print mr-1"}),t._v(" "+t._s(t.translate("admin.print"))+"\n          ")])])])])])])}),[],!1,null,null,null).exports},1278:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>v});var s=a(629),i=a(1893);const r={};var n=a(1900);const o=(0,n.Z)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4 d-flex"},[a("vue-skeleton-loader",{attrs:{type:"rect",width:"50%",height:"37px",animation:"fade"}}),t._v(" "),a("div",{staticClass:"mx-1"}),t._v(" "),a("vue-skeleton-loader",{attrs:{type:"rect",width:"50%",height:"37px",animation:"fade"}})],1)]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("vue-skeleton-loader",{attrs:{type:"rect",rounded:!0,width:"20%",height:"15px",animation:"fade"}}),t._v(" "),a("div",{staticStyle:{"margin-top":"36px"}}),t._v(" "),a("hr"),t._v(" "),a("div",[a("vue-skeleton-loader",{attrs:{type:"rect",rounded:!0,width:"30%",height:"15px",animation:"fade"}}),t._v(" "),a("br"),t._v(" "),a("vue-skeleton-loader",{attrs:{type:"rect",rounded:!0,width:"20%",height:"15px",animation:"fade"}}),t._v(" "),a("br"),t._v(" "),a("vue-skeleton-loader",{attrs:{type:"rect",rounded:!0,width:"40%",height:"15px",animation:"fade"}})],1),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3 mb-2",staticStyle:{overflow:"hidden"}},[a("vue-skeleton-loader",{attrs:{type:"rect",width:"100%",height:"100px",animation:"fade"}})],1),t._v(" "),a("div",{staticClass:"col-md-5 mb-2"},[a("vue-skeleton-loader",{attrs:{type:"rect",rounded:!0,width:"100%",height:"15px",animation:"fade"}}),t._v(" "),a("br"),t._v(" "),a("vue-skeleton-loader",{attrs:{type:"rect",rounded:!0,width:"80%",height:"15px",animation:"fade"}})],1),t._v(" "),a("div",{staticClass:"col-md-2 mb-2"},[a("vue-skeleton-loader",{attrs:{type:"rect",rounded:!0,width:"50%",height:"15px",animation:"fade"}})],1),t._v(" "),a("div",{staticClass:"col-md-2 font-weight-bold"},[a("vue-skeleton-loader",{attrs:{type:"rect",rounded:!0,width:"50%",height:"15px",animation:"fade"}})],1)]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-5 offset-md-7"},[a("vue-skeleton-loader",{attrs:{type:"rect",rounded:!0,width:"50%",height:"15px",animation:"fade"}}),t._v(" "),a("br"),t._v(" "),a("vue-skeleton-loader",{attrs:{type:"rect",rounded:!0,width:"60%",height:"15px",animation:"fade"}}),t._v(" "),a("br"),t._v(" "),a("vue-skeleton-loader",{attrs:{type:"rect",rounded:!0,width:"100%",height:"15px",animation:"fade"}}),t._v(" "),a("hr"),t._v(" "),a("vue-skeleton-loader",{attrs:{type:"rect",rounded:!0,width:"100%",height:"15px",animation:"fade"}})],1)])],1)])]),t._v(" "),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("vue-skeleton-loader",{attrs:{type:"rect",rounded:!0,width:"30%",height:"15px",animation:"fade"}}),t._v(" "),a("div",{staticStyle:{"margin-top":"36px"}}),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"d-flex"},[a("vue-skeleton-loader",{attrs:{type:"circle",width:50,height:50,animation:"fade"}}),t._v(" "),a("div",{staticClass:"mt-2 ml-2"},[a("vue-skeleton-loader",{attrs:{type:"rect",rounded:!0,width:100,height:15,animation:"fade"}})],1)],1),t._v(" "),a("hr"),t._v(" "),t._l([0,1,2],(function(e){return a("div",{key:e,staticClass:"d-flex align-items-center mb-3"},[a("vue-skeleton-loader",{attrs:{type:"circle",width:20,height:20,animation:"fade"}}),t._v(" "),a("span",{staticClass:"mx-1"}),t._v(" "),a("vue-skeleton-loader",{attrs:{type:"rect",rounded:!0,width:200,height:10,animation:"fade"}})],1)}))],2)])])])])}),[],!1,null,null,null).exports;var l=a(2259),d=(a(8016),a(3299)),c=a(5856);function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(Object(a),!0).forEach((function(e){_(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function _(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}const m={components:{OrdersSingleSkeleton:o,OrdersInvoice:l.Z,AddressDirections:c.Z},mixins:[i._],data:function(){return{form:{}}},watch:{orderObject:function(){this.form=p({},this.orderObject)}},computed:p({availableStatuses:function(){return this.$gate.can("manage-partially")?this.statuses.filter((function(t){return"failed"!=t})):"out_for_delivery"==this.orderObject.status?["delivered"]:[]},getIsLoading:function(){return this.isLoading.get},statusIsLoading:function(){return this.isLoading.status},deliverymenIsLoading:function(){return this.isLoading.deliverymen},chargeIsLoading:function(){return this.isLoading.charge},refundIsLoading:function(){return this.isLoading.refund}},(0,s.Se)("orders",["orderObject","allDeliverymen","isLoading","serverErrors"])),methods:p({handleRefund:function(){var t=this;(0,d.AB)((function(){t.refundUser(t.orderObject)}))},handleDeliverymanRemove:function(){"out_for_delivery"!=this.orderObject.status&&"delivered"!=this.orderObject.status?this.updateOrder({id:this.orderObject.id,deliveryman_id:null,status:this.orderObject.status,loading:"deliverymen"}):(0,d.$1)("error","Validation",translate("admin.deliverymanRequired"))},handleDeliverymanSelect:function(t){this.updateOrder({id:this.orderObject.id,deliveryman_id:t.id,status:this.orderObject.status,loading:"deliverymen"})},handleStatusSelect:function(t){var e=this;if(this.orderObject.deliveryman_id||"out_for_delivery"!=t&&"delivered"!=t){var a={id:this.orderObject.id,status:t,deliveryman_id:this.orderObject.deliveryman_id,loading:"status"};"cancelled"!=t?this.updateOrder(a):(0,d.AB)((function(){e.updateOrder(a)}))}else(0,d.$1)("error","Validation",translate("admin.deliverymanRequired"))}},(0,s.nv)("orders",["fetchOrder","updateOrder","chargeUser","refundUser","fetchDeliverymen"])),mounted:function(){this.$store.commit("orders/clearOrder"),this.$store.commit("orders/clearServerErrors"),this.$gate.can("manage-partially")&&this.fetchDeliverymen(),this.fetchOrder(this.$route.params.id)}};a(9276);const v=(0,n.Z)(m,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("the-breadcrumb",[a("li",{staticClass:"breadcrumb-item active"},[t._v(t._s(t.translate("admin.orders")))])]),t._v(" "),a("orders-invoice"),t._v(" "),a("address-directions",{attrs:{"end-address-line":t.orderObject.address_line,"end-address-details":t.orderObject.address_details}}),t._v(" "),t.getIsLoading?a("orders-single-skeleton"):a("div",{staticClass:"d-print-none"},[a("div",{staticClass:"row mb-0 py-0"},[a("div",{staticClass:"col-md-12 d-flex flex-wrap"},[a("button",{staticClass:"btn btn-danger mr-2",attrs:{"data-toggle":"modal","data-target":".invoiceModal"}},[a("i",{staticClass:"fa fa-print mr-1"}),t._v(" "+t._s(t.translate("admin.invoice"))+"\n        ")]),t._v(" "),a("button",{staticClass:"btn btn-info",attrs:{"data-toggle":"modal","data-target":"#addressDirectionsModal"}},[a("i",{staticClass:"fa fa-location-arrow mr-1"}),t._v("\n          Directions\n        ")])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"card mt-4"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"d-flex flex-wrap align-items-center"},[a("h4",[t._v("\n                "+t._s(t.translate("admin.orderDetails"))+"\n              ")]),t._v(" "),a("div",{staticClass:"mr-2 ml-auto"},[t.$gate.can("update-order",t.orderObject)&&t.$gate.can("manage-partially")?a("multiselect",{attrs:{options:t.allDeliverymen,value:t.orderObject.deliveryman,searchable:!0,placeholder:t.translate("admin.deliveryman"),loading:t.deliverymenIsLoading,disabled:t.deliverymenIsLoading,"track-by":"id",label:"name","show-labels":!1},on:{select:t.handleDeliverymanSelect,remove:t.handleDeliverymanRemove},scopedSlots:t._u([{key:"option",fn:function(e){return[a("div",{staticClass:"option__desc"},[a("span",{staticClass:"option__title"},[t._v(t._s(e.option.name))]),t._v(" "),a("br"),t._v(" "),a("span",{staticClass:"option__small small"},[t._v(t._s(e.option.email))])])]}}],null,!1,477554730)}):t._e()],1),t._v(" "),a("div",{staticStyle:{"max-width":"170px"}},[t.$gate.can("update-order",t.orderObject)?a("multiselect",{attrs:{options:t.availableStatuses,value:t.orderObject.status,allowEmpty:!1,"preserve-search":!0,placeholder:t.translate("admin.status"),"custom-label":t.customMultiselectLabel,"show-labels":!1,loading:t.statusIsLoading,disabled:t.statusIsLoading},on:{select:t.handleStatusSelect},scopedSlots:t._u([{key:"option",fn:function(e){return[a("div",{staticClass:"option__desc"},[a("span",{staticClass:"option__title"},[t._v(t._s(t.translate("admin."+e.option)))])])]}}],null,!1,3535872665)}):t._e()],1)]),t._v(" "),a("hr"),t._v(" "),a("div",[a("span",{staticClass:"p-2 badge float-right",class:t.bindStatusClass(t.orderObject.status,"badge"),staticStyle:{opacity:"0.8"}},[a("i",{staticClass:"fa",class:t.bindStatusClass(t.orderObject.status,"icon")}),t._v("\n                "+t._s(t.translate("admin."+t.orderObject.status))+"\n              ")]),t._v(" "),a("p",{staticClass:"text-muted mb-0"},[t._v("\n                "+t._s(t.translate("admin.order"))+" ID : "+t._s(t.orderObject.id)+"\n              ")]),t._v(" "),a("p",{staticClass:"text-muted mb-0 text-capitalize"},[t._v("\n                "+t._s(t.translate("admin.paymentMode"))+" :\n                "+t._s(t.orderObject.payment_mode)+"\n              ")]),t._v(" "),a("p",{staticClass:"text-muted mb-0 text-capitalize"},[t._v("\n                "+t._s(t.translate("admin.passedAt"))+" :\n                "+t._s(t._f("formatDate")(t.orderObject.created_at))+"\n              ")]),t._v(" "),t.orderObject.deliveryman?a("p",{staticClass:"text-muted mb-0 text-capitalize"},[t._v("\n                "+t._s(t.translate("admin.deliveryman"))+" :\n                "),a(t.$gate.can("manage-partially")?"router-link":"div",{tag:"component",attrs:{to:{name:"users.edit",params:{id:t.orderObject.deliveryman.id}}}},[a("u",[t._v("\n                    "+t._s(t.orderObject.deliveryman.name)+"\n                    "),a("span",{staticClass:"small mr-2"},[t._v(t._s(t.orderObject.deliveryman.email))])])])],1):t._e(),t._v(" "),"stripe"==t.orderObject.payment_mode?a("div",[a("p",{staticClass:"h6 mt-3"},[t._v(t._s(t.translate("admin.onlinePayment")))]),t._v(" "),a("p",{staticClass:"text-muted mb-0 pb-0"},[t._v("\n                  "+t._s(t.translate("admin.nameOnCard"))+" :\n                  "+t._s(t.orderObject.name_on_card)+"\n                ")]),t._v(" "),a("p",{staticClass:"text-muted mb-0 pb-0"},[t._v("\n                  "+t._s(t.translate("admin.clientCharged"))+" :\n                  "),a("i",{staticClass:"fa",class:[t.orderObject.user_charged?"fa-check text-success":"fa-times text-danger"]})]),t._v(" "),a("p",{staticClass:"text-muted mb-0 pb-0"},[t._v("\n                  "+t._s(t.translate("admin.clientRefunded"))+" :\n                  "),a("i",{staticClass:"fa",class:[t.orderObject.user_refunded?"fa-check text-success":"fa-times text-danger"]})]),t._v(" "),t.orderObject.payment_confirmation_required?a("p",{staticClass:"text-muted mb-0 pb-0 text-info"},[a("i",{staticClass:"fa fa-info-circle"}),t._v("\n                  "+t._s(t.translate("admin.paymentRequiredConfirmation"))+"\n                ")]):t._e()]):t._e()]),t._v(" "),a("hr"),t._v(" "),t._l(t.orderObject.meals,(function(e){return a("div",{key:e.id,staticClass:"row mb-3"},[a("div",{staticClass:"col-md-3"},[a("img",{staticClass:"img-fluid",attrs:{src:e.resized_image,alt:e.title}})]),t._v(" "),a("div",{staticClass:"col-md-5"},[a("h4",{staticClass:"mb-0 pb-0",class:{"text-danger":!e.id}},[a(e.id&&t.$gate.can("manage-partially")?"router-link":"div",{tag:"component",attrs:{to:{name:"meals.edit",params:{id:e.id}}}},[e.id?t._e():a("i",{staticClass:"fa fa-info-circle"}),t._v("\n                    "+t._s(e.title)+"\n                  ")])],1),t._v(" "),a("p",{staticClass:"text-muted",staticStyle:{"white-space":"pre-wrap"},domProps:{innerHTML:t._s(e.pivot.user_selected_options)}})]),t._v(" "),a("div",{staticClass:"col-md-2"},[a("p",[t._v(t._s(e.pivot.qty)+"X")])]),t._v(" "),a("div",{staticClass:"col-md-2 font-weight-bold"},[a("p",[t._v(t._s(e.pivot.meal_subtotal)+" dhs")])])])})),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-5 offset-md-7"},[a("p",[a("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.translate("admin.subtotal")))]),t._v(" "),a("span",{staticClass:"float-right"},[t._v(t._s(t.orderObject.subtotal)+" dhs")])]),t._v(" "),a("p",{},[a("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.translate("front.delivery")))]),t._v(" "),a("span",{staticClass:"float-right"},[t._v(t._s(t.orderObject.delivery_price)+" dhs")])]),t._v(" "),a("p",{staticClass:"text-danger"},[a("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.translate("admin.tax")))]),t._v(" "),a("span",{staticClass:"float-right"},[t._v(t._s(t.orderObject.tax_price)+" dhs")])]),t._v(" "),a("hr"),t._v(" "),a("p",{staticClass:"text-success"},[a("span",{staticClass:"font-weight-bold"},[t._v("Total")]),t._v(" "),a("span",{staticClass:"float-right"},[t._v(t._s(t.orderObject.total)+" dhs")])]),t._v(" "),t.$gate.can("manage-partially")?a("div",["stripe"!==t.orderObject.payment_mode||t.orderObject.user_charged||"pending"!==t.orderObject.status?t._e():a("p",{staticClass:"text-info"},[a("i",{staticClass:"fa fa-info-circle"}),t._v("\n                    "+t._s(t.translate("admin.updateStatusInOrderToCharge"))+"\n                  ")]),t._v(" "),t.$gate.can("charge",t.orderObject)?a("button",{staticClass:"btn btn-success btn-block",attrs:{disabled:t.chargeIsLoading},on:{click:t.chargeUser}},[t.chargeIsLoading?a("i",{staticClass:"fa fa-circle-notch fa-spin mr-1"}):a("i",{staticClass:"material-icons mr-1"},[t._v("credit_score")]),t._v("\n                    "+t._s(t.translate("admin.charge"))+"\n                    "+t._s(t.orderObject.total)+" dhs\n                  ")]):t._e(),t._v(" "),t.$gate.can("refund",t.orderObject)?a("button",{staticClass:"btn btn-danger btn-block",attrs:{disabled:t.refundIsLoading},on:{click:t.handleRefund}},[t.refundIsLoading?a("i",{staticClass:"fa fa-circle-notch fa-spin mr-1"}):a("i",{staticClass:"material-icons mr-1"},[t._v("credit_score")]),t._v("\n                    "+t._s(t.translate("admin.refund"))+"\n                    "+t._s(t.orderObject.total)+" dhs\n                  ")]):t._e()]):t._e()])])],2)])]),t._v(" "),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"card mt-4"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"d-flex align-items-center justify-content-between"},[a("h4",[t._v("Client")])]),t._v(" "),a("hr"),t._v(" "),t.orderObject.user?a("div",[a("div",{staticClass:"d-flex"},[a("img",{staticClass:"img-fluid mr-2",staticStyle:{"border-radius":"50%"},attrs:{width:"70",height:"50",src:"/storage/images/design/avatarplaceholder.png",alt:""}}),t._v(" "),a("div",[a("u",{staticClass:"mb-0 text-dark"},[a(t.$gate.can("manage-partially")?"router-link":"div",{tag:"component",attrs:{to:{name:"users.edit",params:{id:t.orderObject.user.id}}}},[t._v("\n                      "+t._s(t.orderObject.user.name)+"\n                    ")])],1),t._v(" "),a("p",{staticClass:"text-muted"},[t._v("ID : "+t._s(t.orderObject.user.id))])])])]):a("div",[a("p",{staticClass:"text-danger"},[a("i",{staticClass:"fa fa-info-circle"}),t._v("\n                "+t._s(t.translate("admin.noUserForOrder"))+"\n              ")])]),t._v(" "),a("hr"),t._v(" "),a("h5",[t._v("Contact")]),t._v(" "),a("p",[a("i",{staticClass:"fa fa-envelope mr-1"}),t._v(" "+t._s(t.orderObject.email))]),t._v(" "),a("p",[a("i",{staticClass:"fa fa-phone mr-1"}),t._v(" "+t._s(t.orderObject.phone))]),t._v(" "),a("p",[a("i",{staticClass:"fa fa-map-marker-alt mr-1"}),t._v("\n              "+t._s(t.orderObject.address_line)+" "),a("br"),t._v("\n              "+t._s(t.orderObject.address_details)+"\n            ")])])])])])])],1)}),[],!1,null,"308aacff",null).exports},8016:(t,e,a)=>{var s=a(4742);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);(0,a(5346).Z)("7f73f513",s,!0,{})},2420:(t,e,a)=>{var s=a(4023);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);(0,a(5346).Z)("16b6cf5a",s,!0,{})},9276:(t,e,a)=>{var s=a(6292);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);(0,a(5346).Z)("19189732",s,!0,{})},1658:(t,e,a)=>{var s=a(2873);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);(0,a(5346).Z)("a3d30954",s,!0,{})}}]);
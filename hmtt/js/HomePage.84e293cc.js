"use strict";(self["webpackChunkhmtt"]=self["webpackChunkhmtt"]||[]).push([[460],{8553:function(t,e,s){s.r(e),s.d(e,{default:function(){return w}});var n=function(){var t=this,e=t._self._c;return e("div",[e("van-nav-bar",{attrs:{fixed:""},scopedSlots:t._u([{key:"left",fn:function(){return[e("img",{staticClass:"logo",attrs:{src:s(6949),alt:""}})]},proxy:!0},{key:"right",fn:function(){return[e("van-icon",{attrs:{name:"search",size:"0.48rem",color:"#fff"},on:{click:t.goSearch}})]},proxy:!0}])}),e("van-tabs",{staticClass:"tabs",attrs:{animated:"",sticky:"","offset-top":"1.226667rem",color:"#007bff"},on:{change:t.channelChangeFn},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.userChannelsList,(function(s){return e("van-tab",{key:s.id,attrs:{title:s.name,name:s.id}},[e("article-list",{attrs:{activeId:t.active}})],1)})),1),e("van-icon",{staticClass:"moreChannels",attrs:{name:"plus",size:"0.37333334rem"},on:{click:t.showPopup}}),e("van-popup",{staticClass:"popup",attrs:{"get-container":"body"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[e("channel-edit",{attrs:{userList:t.userChannelsList,otherList:t.otherChannelsList},on:{addChannelEV:t.addChannelFn,removeChannelEV:t.removeChannelFn,closeEV:t.closeEdit,goChannelEV:t.goChannelFn}})],1)],1)},i=[],a=s(586),l=function(){var t=this,e=t._self._c;return e("div",[e("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[e("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了","immediate-check":!1},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.articleList,(function(s){return e("article-item",{key:s.art_id,attrs:{list:s},on:{dislikeArt:t.dislikeFn,reportArt:t.reportFn}})})),1)],1)],1)},r=[],c=(s(1424),s(6450)),o=s(4429),h={props:{activeId:Number},data(){return{articleList:[],loading:!1,finished:!1,theTime:(new Date).getTime(),isLoading:!1}},components:{ArticleItem:o.Z},async created(){this.getArticlesListFn()},methods:{async getArticlesListFn(){const t=await(0,a.rM)({channelId:this.activeId,timestamp:this.theTime});if(this.articleList=[...this.articleList,...t.data.data.results],this.theTime=t.data.data.pre_timestamp,null===t.data.data.results.pre_timestamp)return this.finished=!0,!0;this.loading=!1,this.isLoading=!1},onLoad(){this.articleList.length>0?this.getArticlesListFn():this.loading=!1},onRefresh(){this.articleList=[],this.theTime=(new Date).getTime(),this.getArticlesListFn()},async dislikeFn(t){await(0,a.s9)({articleId:t}),(0,c.Z)({type:"success",message:"反馈成功"})},async reportFn(t,e){await(0,a.Op)({articleId:t,type:e}),(0,c.Z)({type:"success",message:"举报成功"})}}},d=h,u=s(1001),m=(0,u.Z)(d,l,r,!1,null,null,null),v=m.exports,p=function(){var t=this,e=t._self._c;return e("div",[e("van-nav-bar",{attrs:{title:"频道管理"},scopedSlots:t._u([{key:"right",fn:function(){return[e("van-icon",{attrs:{name:"cross",size:"0.37333334rem",color:"white"},on:{click:t.closeFn}})]},proxy:!0}])}),e("div",{staticClass:"my-channel-box"},[e("div",{staticClass:"channel-title"},[e("span",[t._v("我的频道 "),e("span",{staticClass:"small-title"},[t._v(" 点击"+t._s(t.isEdit?"删除":"进入")+"频道 ")])]),e("span",{on:{click:t.editFn}},[t._v(t._s(t.isEdit?"完成":"编辑"))])]),e("van-row",{attrs:{type:"flex"}},t._l(t.userList,(function(s){return e("van-col",{key:s.id,attrs:{span:"6"}},[e("div",{staticClass:"channel-item van-hairline--surround",on:{click:function(e){return t.clickChannel(s)}}},[t._v(" "+t._s(s.name)+" "),e("van-badge",{directives:[{name:"show",rawName:"v-show",value:t.isEdit&&0!==s.id,expression:"isEdit && val.id!==0"}],staticClass:"cross-badge",attrs:{color:"transparent"},scopedSlots:t._u([{key:"content",fn:function(){return[e("van-icon",{staticClass:"badge-icon",attrs:{name:"cross",color:"#cfcfcf",size:"0.32rem"}})]},proxy:!0}],null,!0)})],1)])})),1)],1),e("div",{staticClass:"more-channel-box"},[t._m(0),e("van-row",{attrs:{type:"flex"}},t._l(t.otherList,(function(s){return e("van-col",{key:s.id,attrs:{span:"6"}},[e("div",{staticClass:"channel-item van-hairline--surround",on:{click:function(e){return t.addFn(s)}}},[t._v(t._s(s.name))])])})),1)],1)],1)},f=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"channel-title"},[e("span",[t._v("点击添加更多频道：")])])}],C={props:{userList:Array,otherList:Array},data(){return{isEdit:!1}},methods:{editFn(){this.isEdit=!this.isEdit},addFn(t){!0===this.isEdit&&this.$emit("addChannelEV",t)},clickChannel(t){!0===this.isEdit?this.$emit("removeChannelEV",t):(this.$emit("closeEV"),this.$emit("goChannelEV",t))},closeFn(){this.$emit("closeEV"),this.isEdit=!1}}},g=C,L=(0,u.Z)(g,p,f,!1,null,"5c9aa6a2",null),k=L.exports,y={name:"HomePage",data(){return{active:0,userChannelsList:[],allChannelsList:[],show:!1,channelScroll:{}}},async created(){const t=await(0,a.vh)();this.userChannelsList=t.data.data.channels;const e=await(0,a.IU)();this.allChannelsList=e.data.data.channels},components:{ArticleList:v,ChannelEdit:k},methods:{showPopup(){this.show=!0},async addChannelFn(t){this.userChannelsList.push(t),await(0,a.nC)({channels:this.userChannelsList})},async removeChannelFn(t){const e=this.userChannelsList.findIndex((e=>e.id===t.id));this.userChannelsList.splice(e,1),await(0,a.ZR)({channelId:t.id})},closeEdit(){this.show=!1},goChannelFn(t){this.active=t.id},goSearch(){this.$router.push("/search")},scrollFn(){this.channelScroll[this.active]=document.documentElement.scrollTop},channelChangeFn(){this.$nextTick((()=>{document.documentElement.scrollTop=this.channelScroll[this.active]}))}},computed:{otherChannelsList(){const t=this.allChannelsList.filter((t=>{const e=this.userChannelsList.findIndex((e=>e.id===t.id));return!(e>-1)}));return t}},activated(){document.addEventListener("scroll",this.scrollFn),document.documentElement.scrollTop=this.channelScroll[this.active]},deactivated(){document.removeEventListener("scroll",this.scrollFn)}},_=y,E=(0,u.Z)(_,n,i,!1,null,"1af1dad2",null),w=E.exports},6949:function(t,e,s){t.exports=s.p+"img/logo.d0d391a4.png"}}]);
//# sourceMappingURL=HomePage.84e293cc.js.map
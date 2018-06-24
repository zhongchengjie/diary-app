<template>
	<f7-view id="view-2" tab  navbar-through toolbar-through :dynamic-navbar="true">
        <f7-navbar  title="动态" :class="appTheme"></f7-navbar>
        <f7-pages>
           <f7-page name="moments">
           	    <f7-buttons class="new-tab-btn">
				   <f7-button tab-link="#tab1" :class="appTheme" active><span>最新动态</span></f7-button>
				   <f7-button tab-link="#tab2" :class="appTheme"><span>最热动态</span></f7-button>
				   <f7-button tab-link="#tab3" :class="appTheme"><span>我的动态</span></f7-button>
				</f7-buttons>
           	    <f7-tabs id="tabs">
				    <f7-tab id="tab1" active>
				  	    <f7-list media-list  class="moments-list">
		                  <f7-list-item v-for="item in list" @click="viewList"
		                  	            :media="'<img src='+item.img+'>'"
		                                title="五年"
		                                subtitle="3分钟前">
		                      <div slot="root" class="moments-content" @click="viewDetail">
		                      	阿里妈妈MUX倾力打造的矢量图标管理、交流平台。
		                                                设计师将图标上传到Iconfont平台，用户可以自定义下载多种格式的icon，平台也可将图标转换为字体，便于前端工程师自由调整与调用。
		                      </div>
		                      <div slot="root" class="icon-btn">
		                         <f7-grid no-gutter>
								   <f7-col width="33"><i class="icon iconfont icon-xihuan" :class="appTheme"></i>1</f7-col>
								   <f7-col width="33"><i class="icon iconfont icon-share" :class="appTheme"></i>1</f7-col>
								   <f7-col width="33"><i class="icon iconfont icon-shoucang" :class="appTheme"></i>1</f7-col>
								</f7-grid>
		                      </div>
		                  </f7-list-item>
		                </f7-list>
				    </f7-tab>
				    <f7-tab id="tab2">
				    	<f7-list media-list  class="moments-list">
				    	  <f7-list-item @click="viewList"
		                  	            media="<img src='static/assets/images/user_photo.jpg'>"
		                                title="五年"
		                                subtitle="3分钟前">
		                      <div slot="root" class="moments-content" @click="viewDetail">
		                      	阿里妈妈MUX倾力打造的矢量图标管理、交流平台。
		                                                设计师将图标上传到Iconfont平台，用户可以自定义下载多种格式的icon，平台也可将图标转换为字体，便于前端工程师自由调整与调用。
		                      </div>
		                      <div slot="root" class="icon-btn">
		                         <f7-grid no-gutter>
								   <f7-col width="33"><i class="icon iconfont icon-xihuan" :class="appTheme"></i>1</f7-col>
								   <f7-col width="33"><i class="icon iconfont icon-share" :class="appTheme"></i>1</f7-col>
								   <f7-col width="33"><i class="icon iconfont icon-shoucang" :class="appTheme"></i>1</f7-col>
								</f7-grid>
		                      </div>
		                  </f7-list-item>
		                </f7-list>
				    </f7-tab>
				    <f7-tab id="tab3">
				       <f7-list media-list  class="moments-list">
				    	  <f7-list-item @click="viewList"
		                  	            media="<img src='static/assets/images/user_photo.jpg'>"
		                                title="五年"
		                                subtitle="3分钟前">
		                      <div slot="root" class="moments-content" @click="viewDetail">
		                      	阿里妈妈MUX倾力打造的矢量图标管理、交流平台。
		                                                设计师将图标上传到Iconfont平台，用户可以自定义下载多种格式的icon，平台也可将图标转换为字体，便于前端工程师自由调整与调用。
		                      </div>
		                      <div slot="root" class="icon-btn">
		                         <f7-grid no-gutter>
								   <f7-col width="33"><i class="icon iconfont icon-xihuan" :class="appTheme"></i>1</f7-col>
								   <f7-col width="33"><i class="icon iconfont icon-share" :class="appTheme"></i>1</f7-col>
								   <f7-col width="33"><i class="icon iconfont icon-shoucang" :class="appTheme"></i>1</f7-col>
								</f7-grid>
		                      </div>
		                  </f7-list-item>
		                </f7-list>
				    </f7-tab>
				</f7-tabs>
               
           </f7-page>
        </f7-pages>
    </f7-view> <!--end of view1-->
</template>


<script>
import appNavbar from "../components/navbar.vue"
export default {
    name:"home",
    props:["appTheme"],
    data:function () {
       return {
           list:[{img:"static/assets/images/user_photo.jpg"},{img:"static/assets/images/user_photo.jpg"},{img:"static/assets/images/user_photo.jpg"}]
       }
    },
    components:{
        "app-navbar":appNavbar
    },
	mounted:function(){
       // this.swipeEvent();
	},
    methods:{
    	viewList:function(){
    		myApp.views[1].loadPage("/momentsList/")
    	},
        viewDetail:function(){
            myApp.views[1].loadPage("/momentsDetail/")
        },
    	swipeEvent:function(){
            var $tabs = document.getElementById("tabs")
            var xx,yy,XX,YY,swipeX,swipeY ;
            $tabs.addEventListener('touchstart',function(event){
                event.stopPropagation();//阻止冒泡
                event.preventDefault();//阻止浏览器默认事件
                xx = event.targetTouches[0].screenX ;
                yy = event.targetTouches[0].screenY ;
                swipeX = true;
                swipeY = true ;
            })
            $tabs.addEventListener('touchmove',function(event){
                XX = event.targetTouches[0].screenX ;
                YY = event.targetTouches[0].screenY ;
			/*	console.log(XX+"   "+xx);
                console.log(YY+"   "+yy);*/
                if(swipeX && parseInt(XX-xx)>0){  //向右滑
                    event.stopPropagation();//阻止冒泡
                    event.preventDefault();//阻止浏览器默认事件
					var activeTab = $$("#tabs .tab.active").attr("id");
					//console.log(activeTab);
                    if(activeTab=="tab1"){
                        myApp.showTab("#tab2")
                    }
                    if(activeTab=="tab2"){
                        myApp.showTab("#tab3")
                    }
                    if(activeTab=="tab3"){
                        myApp.showTab("#tab1")
                    }

                }
                if(swipeX && parseInt(XX-xx)<0){  //向左滑
                    event.stopPropagation();//阻止冒泡
                    event.preventDefault();//阻止浏览器默认事件
                    var activeTab = $$("#tabs .tab.active").attr("id");
                    //console.log(activeTab);
                    if(activeTab=="tab1"){
                        myApp.showTab("#tab3")
                    }
                    if(activeTab=="tab2"){
                        myApp.showTab("#tab1")
                    }
                    if(activeTab=="tab3"){
                        myApp.showTab("#tab2")
                    }
                }
            })
            $tabs.addEventListener('touchend',function(event){
                event.stopPropagation();//阻止冒泡
                event.preventDefault();//阻止浏览器默认事件
            })

		}
    } 
    
}
</script>

<style>
    @import "../../css/share.sass"
</style>

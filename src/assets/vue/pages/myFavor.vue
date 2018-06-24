<template>
	<app-page page-name="myFavor" type="2">
    	<div slot="app-page-content">
    	    <app-navbar type="1" title="收藏日记"></app-navbar>
	  	    <f7-list media-list  class="moments-list">
                <f7-list-item media="<img src='static/assets/images/user_photo.jpg'>"
                            title="五年"
                            subtitle="3分钟前">
                    <div slot="root" class="moments-content">
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
                <f7-list-item media="<img src='static/assets/images/user_photo.jpg'>"
                            title="五年"
                            subtitle="3分钟前">
                    <div slot="root" class="moments-content">
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
                <f7-list-item media="<img src='static/assets/images/user_photo.jpg'>"
                            title="五年"
                            subtitle="3分钟前">
                    <div slot="root" class="moments-content">
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
        </div>
    </app-page> <!--end of view1-->
</template>


<script>
import appNavbar from "../components/navbar.vue"
import appPage from "../components/page.vue"
export default {
    name:"myFavor",
    data:function () {
       return {
          appTheme:store.getters.getAppTheme
       }
    },
    components:{
        "app-navbar":appNavbar,
        "app-page":appPage
    }
    
}
</script>

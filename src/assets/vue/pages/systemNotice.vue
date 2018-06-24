<template>
    <app-page page-name="systemNotice" type="2" class="notice">
	    <div slot="app-page-content">
	  	    <app-navbar type="1" title="系统消息"></app-navbar>
	        <f7-block>
	        	<div class="title">【吾记君】微信公众号<small>2017.06.26</small></div>
	                         阿里妈妈MUX倾力打造的矢量图标管理、交流平台。
                                 设计师将图标上传到Iconfont平台，用户可以自定义下载多种格式的icon，平台也可将图标转换为字体，便于前端工程师自由调整与调用。
	        </f7-block>
	        <f7-block>
	        	<div class="title">【吾记君】微信公众号<small>2017.06.26</small></div>
	                         阿里妈妈MUX倾力打造的矢量图标管理、交流平台。
                                 设计师将图标上传到Iconfont平台，用户可以自定义下载多种格式的icon，平台也可将图标转换为字体，便于前端工程师自由调整与调用。
	        </f7-block>
	        <f7-block>
	        	<div class="title">【吾记君】微信公众号<small>2017.06.26</small></div>
	                         阿里妈妈MUX倾力打造的矢量图标管理、交流平台。
                                 设计师将图标上传到Iconfont平台，用户可以自定义下载多种格式的icon，平台也可将图标转换为字体，便于前端工程师自由调整与调用。
	        </f7-block>
	    </div>
    </app-page>
</template>

<script>
import appNavbar from "../components/navbar.vue";
import appPage from "../components/page.vue";
export default {
	 name:"addMoments",
	 data:function(){
	 	return{
	 	  	
	 	}
	 },
	 components:{
        "app-navbar":appNavbar,
        "app-page":appPage
  }
}
</script>

<style>
.notice .content-block{background: #fff;margin:0 0;padding:10px 15px;font-size:16px;color:#333;border-bottom:1px solid #E9E9E9;border-top:1px solid #E9E9E9;margin-bottom:6px}
.notice .content-block .title{font-size:17px;margin:6px 0px}
.notice .content-block .title small{float: right;padding-top:4px;}
</style>



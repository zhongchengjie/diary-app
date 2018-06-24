<template>
    <app-page page-name="viewMoments" class="bg-white">
    	<div slot="app-page-content">
    	  	<f7-navbar>
				<f7-nav-left>
			        <f7-link icon="iconfont icon-fanhui" back></f7-link>
				</f7-nav-left>
				<f7-nav-center>未分类</f7-nav-center>
				<f7-nav-right sliding>
					<f7-link icon="iconfont icon-lajixiang" @click=""></f7-link>
					<f7-link icon="iconfont icon-bianji" @click=""></f7-link>
				</f7-nav-right>
	        </f7-navbar>
	        <f7-block class="with-border">
	           <div>2017.07.19&nbsp;<small>09:52&nbsp;&nbsp;周三</small></div>
	           <p><i class="icon iconfont icon-dingwei"></i>&nbsp;广东省广州市天河区建工路4号</p>
	        </f7-block>
	        <f7-block>
	        	<p>哈哈</p>
	        	<f7-grid  class="grid-img">
				    <f7-col width="50">
				   	   <img src="../../images/blog_img.jpg">
				    </f7-col>
				    <f7-col width="50">
				   	   <img src="../../images/user_photo.jpg">
				    </f7-col>
				</f7-grid>
	        </f7-block>
	       
    	</div>
    </app-page>
</template>

<script>
import appPage from "../components/page.vue";
export default {
	name:"viewMoments",
	data:function(){
	 	return{
	 	}
	},
	components:{
        "app-page":appPage
    },
    methods:{
    	
    }
    
}
</script>
<style>
.page.bg-white{background: #fff;}
.page.bg-white .content-block{padding:0;margin:10px;color:#333;}
.page.bg-white .content-block.with-border{border-bottom:1px solid #E9E9E9}
.grid-img .col-50 img{width:100%}
</style>



<template>
    <app-page page-name="upgrade" type="2">
    	  <div slot="app-page-content">
    	  	 <app-navbar type="1" title="升级高级账户"></app-navbar>
		     <div class="upgrade" :class="'div-'+appTheme">
		     	<div class="upgrade-div1">超多功能即可拥有，相当划算</div>
		     	<div class="upgrade-div2">限时优惠购买</div>
		     	<f7-grid no-gutter>
				   <f7-col width="33"><f7-button>￥8.6/半年</f7-button></f7-col>
				   <f7-col width="33"><f7-button>￥16.6/一年</f7-button></f7-col>
				   <f7-col width="33"><f7-button>￥38.8/永久</f7-button></f7-col>
				</f7-grid>
		     </div>
		     <f7-list media-list  class="function-list">
                  <f7-list-item :class="appTheme" media="<i class='icon iconfont icon-yunbeifen'>"
                        title="图片云备份"
                        subtitle="日记图片云备份，珍贵照片永不丢失">
                  </f7-list-item>
                  <f7-list-item :class="appTheme" media="<i class='icon iconfont icon-share'>"
                        title="到处日记"
                        subtitle="生成word文档直接导出到邮箱">
                  </f7-list-item>
                  <f7-list-item :class="appTheme"  media="<i class='icon iconfont icon-pifu'>"
                        title="专属主题"
                        subtitle="40种主题色，任君选择">
                  </f7-list-item>
                  <f7-list-item :class="appTheme"  media="<i class='icon iconfont icon-naozhong1-copy'>"
                        title="自定义提醒"
                        subtitle="养成习惯，记录那些珍贵的瞬间">
                  </f7-list-item>
                  <f7-list-item :class="appTheme"  media="<i class='icon iconfont icon-yemian'>"
                        title="自定义信纸"
                        subtitle="日记信纸，可以从相册选择哦">
                  </f7-list-item>
                  <f7-list-item :class="appTheme"  media="<i class='icon iconfont icon-kafei'>"
                        title="对吾记的爱"
                        subtitle="请吾记开发者喝一杯咖啡">
                  </f7-list-item>
             </f7-list>
    	  </div>
    </app-page>
</template>

<script>
import appNavbar from "../components/navbar.vue";
import appPage from "../components/page.vue";
export default {
	 name:"addMoments",
	 data:function(){
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

<style>
.upgrade{color:#fff}
.upgrade .upgrade-div1{padding-top:20px;text-align: center;font-size: 17px;}
.upgrade .upgrade-div2{padding-left:10px;font-size: 16px;margin-top:10px;margin-bottom:0px}
.upgrade .col-33{padding:10px}
.upgrade .col-33 .button{border-color:#fff;color:#fff;height:36px;line-height:34px}
</style>



<template>
    <app-page page-name="systemSetting" type="2">
    	  <div slot="app-page-content">
    	  	 <app-navbar type="1" title="更多设置"></app-navbar>
		     <f7-list style="margin:0px auto">
			    <f7-list-item link="/account/" title="账户安全" ></f7-list-item>
			    <f7-list-item link="/exportDiary/" title="导出日记"></f7-list-item>
			    <f7-list-item link="/remind/" title="提醒写日记"></f7-list-item>
			    <f7-list-item link="/theme/" title="主题"></f7-list-item>
			 </f7-list>
			 <f7-list style="margin:10px auto">
			    <f7-list-item title="地址信息" after="<label class='label-switch'><input type='checkbox'><div class='checkbox'></div></label>"></f7-list-item>
			    <f7-list-item title="侧滑返回" after="<label class='label-switch'><input type='checkbox'><div class='checkbox'></div></label>"></f7-list-item>
			    <f7-list-item title="过客模块" after="<label class='label-switch'><input type='checkbox'><div class='checkbox'></div></label>"></f7-list-item>
			    <f7-list-item title="夜间模式" after="<label class='label-switch'><input type='checkbox'><div class='checkbox'></div></label>"></f7-list-item>
			 </f7-list>
			 <f7-list style="margin:0px auto">
			 	<f7-list-item link="//" title="反馈问题"></f7-list-item>
			    <f7-list-item link="" @click="share" title="推荐给朋友"></f7-list-item>
			    <f7-list-item link="//" title="给个好评"></f7-list-item>
			    <f7-list-item link="/about/" title="关于"></f7-list-item>
			 </f7-list>
    	  </div>
    </app-page>
</template>

<script>
import appNavbar from "../components/navbar.vue";
import appPage from "../components/page.vue";
export default {
	 name:"systemSetting",
	 data:function(){
	 	  return{
             app_theme:localStorage.getItem("appTheme")||"app-theme1"
	 	  }
	 },
	 components:{
        "app-navbar":appNavbar,
        "app-page":appPage
     },
     methods:{
     	share:function(){
     		window.f7.pickerModal('#share-picker');
     	}
     	
     }
}
</script>




<template>
    <f7-page>
	  	 <app-navbar type="1" title="账号安全"></app-navbar>
	     <f7-list style="margin:0px auto">
		    <f7-list-item link="/account/" title="当前账号邮箱" after="465152138@qq.com"></f7-list-item>
		 </f7-list>
		 <f7-list style="margin:10px auto">
		   <f7-list-item link="/modifyPwd/"  title="修改密码"></f7-list-item>
		   <f7-list-item link="/findPwd/"  title="找回密码"></f7-list-item>
		 </f7-list>
		 <f7-list style="margin:0px auto">
		 	<f7-list-item link="/bindWeixin/" title="绑定微信" after="绑定"></f7-list-item>
		    <f7-list-item link="/bindQQ/" title="绑定QQ" after="绑定"></f7-list-item>
		 </f7-list>
    </f7-page>
</template>

<script>
import appNavbar from "../components/navbar.vue";
export default {
	 name:"account",
	 data:function(){
	 	  return{
	 	  	
	 	  }
	 },
	 components:{
         "app-navbar":appNavbar
     }
}
</script>




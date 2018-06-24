<template>
	    <f7-page>
	    	<app-navbar type="5" title="找回密码" right-icon="icon-queren"></app-navbar>
        <f7-list form style="margin-top:0px;">
            <f7-list-item>
                <f7-label>注册邮箱</f7-label>
                <f7-input type="password" placeholder="请输入注册时填写的邮箱" />
            </f7-list-item>
        </f7-list>
		</f7-page>      
</template>

<script>
import appNavbar from "../components/navbar.vue";
export default {
	 name:"findPwd",
	 data:function(){
	 	  return{
	 	  }
	 },
	 components:{
	 	  "app-navbar":appNavbar
	 },
	 mounted:function(){
    	//eventBus.$on("modifyPwd", this.modifyPwd);
   },
	 methods:{
	 }
}
</script>
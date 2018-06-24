<template>
    <f7-page>
    	<app-navbar type="5" title="修改密码" right-icon="icon-queren"></app-navbar>
        <f7-list form style="margin-top:0px;">
            <f7-list-item>
                <f7-label>旧密码</f7-label>
                <f7-input type="password" placeholder="请输入旧密码" v-model="oldPwd"/>
            </f7-list-item>
            <f7-list-item>
                <f7-label>新密码</f7-label>
                <f7-input type="password" placeholder="请输入新密码" v-model="newPwd"/>
            </f7-list-item>
            <f7-list-item>
                <f7-label>确认新密码</f7-label>
                <f7-input type="password" placeholder="请再次输入新密码" v-model="confirmPwd"/>
            </f7-list-item>
        </f7-list>
	</f7-page>      
</template>

<script>
import appNavbar from "../components/navbar.vue";
export default {
	 name:"modifyPwd",
	 data:function(){
	 	  return{
	 	  	 oldPwd:"",
	 	  	 newPwd:"",
	 	  	 confirmPwd:""
	 	  }
	 },
	 components:{
	 	  "app-navbar":appNavbar
	 },
	 mounted:function(){
    	eventBus.$on("iconClick", this.modifyPwd);
     },
	 methods:{
        modifyPwd:function(){
        	if(this.oldPwd==""){
        		eventBus.$emit("toast","请输入原密码");
        		return;
        	}
        	if(this.newPwd==""){
        		eventBus.$emit("toast","请输入新密码");
        		return;
        	}
        	if(this.confirmPwd==""){
        		eventBus.$emit("toast","请输入确认密码");
        		return;
        	}
        }
	 
	 },
}
</script>
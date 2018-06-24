<template>
    <f7-page name="addType" class="theme-page">
        <app-navbar type="5" title="新建分类" right-icon="icon-queren" method="addType"></app-navbar>
        <f7-list form style="margin:0px auto">
			<f7-list-item>
			    <f7-label style="letter-spacing:10px;">名称</f7-label>
			    <f7-input type="text" placeholder="分类名称" v-model="typeName"/>
			</f7-list-item>
			<f7-list-item>
			    <f7-label style="letter-spacing:10px;">主题</f7-label>
			    <div class="item-input">
			    	 <div style="height:30px;width:40px" :style="{background:currTheme}"></div>
			    </div>
			</f7-list-item>
		</f7-list>
		<f7-block style="margin-top:10px">
			<div class="app-theme-box">
				<div class="theme-box app-theme1" @click="setTheme('#4cd964')"></div>
	    	 	<div class="theme-box app-theme2" @click="setTheme('#5ac8fa')"></div>
	    	 	<div class="theme-box app-theme3" @click="setTheme('#ffcc00')"></div>
	    	 	<div class="theme-box app-theme4" @click="setTheme('#8e8e93')"></div>
	    	 	<div class="theme-box app-theme5" @click="setTheme('#ff2d55')"></div>
	        </div>
		</f7-block>
    </f7-page>
</template>

<script>
import appNavbar from "../components/navbar.vue";
export default {
	name:"addType",
	data:function(){
	  	return{
	  	 	typeName:"",
	  		currTheme:"#8e8e93"
	  	}
	},
	components:{
        "app-navbar":appNavbar,
    },
    mounted:function(){
    	eventBus.$on("addType", this.addType);       //添加类型
    },
    destroyed:function(){
    	eventBus.$off("addType");       //销毁
    },
    methods:{
    	setTheme:function(color){
    		this.currTheme=color;
    	},
    	addType:function(){
    	  	 var type_arr = [];
    	  	 var type_obj = {"name":this.typeName,"color":this.currTheme};
    	  	 var typeList = localStorage.getItem("typeList");
    	  	 //console.log(typeList);
    	  	 if(typeList){
    	  	 	  type_arr = typeList.split("-");  
    	  	 }
    	  	 type_arr.push(JSON.stringify(type_obj));
    	  	 //console.log(type_arr.join("-"))
    	  	 localStorage.setItem("typeList",type_arr.join("-"));
    	  	 console.log(JSON.stringify(localStorage.getItem("typeList").split("-")));
    	  	 
    	  	 myApp.views[0].back();  //返回到编辑页面
    	  	 eventBus.$emit("refresh");       //刷新类型
    	}
    }
}
</script>

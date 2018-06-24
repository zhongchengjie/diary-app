<template>
	  <f7-navbar v-if="type=='1'">
			 <f7-nav-left sliding>
			  	<f7-link icon="iconfont icon-fanhui" back></f7-link>
			 </f7-nav-left>
			 <f7-nav-center>{{title}}</f7-nav-center>
	  </f7-navbar>

	  <f7-navbar v-else-if="type=='2'">
			 <f7-nav-center>{{title}}</f7-nav-center>
			 <f7-nav-right sliding>
				  <f7-link  icon="iconfont icon-plus" @click="iconClick"></f7-link>
			 </f7-nav-right>
	  </f7-navbar>
	 
	 	<f7-navbar v-else-if="type=='3'">
			 <f7-nav-center><input type="search" placeholder="搜索"></f7-nav-center>
			 <f7-nav-right sliding>
				  <f7-link  icon="iconfont icon-plus" @click="iconClick"></f7-link>
			 </f7-nav-right>
	  </f7-navbar>
	  
	  <f7-navbar v-else-if="type=='4'">
			  <f7-nav-left sliding>
		       <f7-link icon="iconfont icon-fanhui" back></f7-link>
			  </f7-nav-left>
			  <f7-nav-center>{{title}}</f7-nav-center>
			  <f7-nav-right sliding>
				   <f7-link  @click="iconClick">保存</f7-link>
			  </f7-nav-right>
	  </f7-navbar>
	  
	  <f7-navbar v-else-if="type=='5'">
			  <f7-nav-left>
		       <f7-link icon="iconfont icon-fanhui" back></f7-link>
			  </f7-nav-left>
			  <f7-nav-center>{{title}}</f7-nav-center>
			  <f7-nav-right sliding>
				   <f7-link :icon="'iconfont '+rightIcon" @click="iconClick"></f7-link>
			  </f7-nav-right>
	  </f7-navbar>      
</template>

<script>
export default {
	  name:"navbar",
	  props:["type","title","rightIcon","method"],
	  data:function(){
	  	 return{
	  	 	  
	  	 }
	  },
	  methods:{
	      iconClick:function () {
	      	  if(this.type=="5"){
	      	  	  if(this.method=="toAddType"){
	      	  	  	 eventBus.$emit("toAddType");     //点击右边图标
	      	  	  }else if(this.method=="addType"){
	      	  	  	 eventBus.$emit("addType");     //点击右边图标
	      	  	  }else{
	      	  	  	 eventBus.$emit("iconClick");     //点击右边图标
	      	  	  }
	      	  }
	      	  else{
	      	  	eventBus.$emit("iconClick");     //点击右边图标
	      	  }
            
        }
	  }
	  
}
</script>

<style>
   .navbar .right i.icon-plus,.navbar .right i.icon-queren{margin-top:4px}
</style>
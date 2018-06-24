<template>
	<p class="big-btn">
		<f7-button round fill @click="btnClick" :style="{background:bg}">{{btnName}}</f7-button>
	</p>
</template>

<script>
export default {
	  name:"navbar",
	  props:["btnName","bg","type"],
	  data:function(){
	  	 return{
	  	 }
	  },
      destroyed:function(){
          if(this.type=="logout"){
              eventBus.$off("***");     //退出登录
          }
          
      },
	  methods:{
	      btnClick:function () {
	      	  if(this.type=="logout"){
	      	  	  eventBus.$emit("***");     //退出登录
	      	  }
	      	  
          }
	  }
	  
}
</script>
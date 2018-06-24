<template>
    <f7-page class="theme-page" name="theme">
	  	 <app-navbar :type="'1'" :title="'切换主题'"></app-navbar>
	     <f7-list form style="margin:0px auto">
		    <f7-list-item>
				    <f7-label style="letter-spacing:4px;">当前主题</f7-label>
				    <div class="item-input">
				    	 <div style="height:30px;width:40px" :class="currTheme"></div>
				    </div>
				</f7-list-item>
			</f7-list>
			<f7-block style="margin-top:10px">
				<div class="app-theme-box">
					  <div class="theme-box app-theme1" @click="switchTheme('app-theme1')"></div>
		    	 	  <div class="theme-box app-theme2" @click="switchTheme('app-theme2')"></div>
		    	 	  <div class="theme-box app-theme3" @click="switchTheme('app-theme3')"></div>
		    	 	  <div class="theme-box app-theme4" @click="switchTheme('app-theme4')"></div>
		    	 	  <div class="theme-box app-theme5" @click="switchTheme('app-theme5')"></div>
		    	</div>
			</f7-block>
		
    </f7-page>
</template>

<script>
import appNavbar from "../components/navbar.vue";
export default {
	 name:"addMoments",
	 data:function(){
	 	  return{
	 	  	 currTheme:store.getters.getAppTheme
	 	  }
	 },
	 components:{
          "app-navbar":appNavbar
     },
     methods:{
     	switchTheme:function(theme){
     	    this.currTheme = theme;	
     	    //更换主题
     	    store.commit("setAppTheme",theme);
     	    //设置状态栏
			if(theme=="app-theme1"){
				StatusBar.backgroundColorByHexString("#4cd964");
			}
			if(theme=="app-theme2"){
				StatusBar.backgroundColorByHexString("#5ac8fa");
			}



     	}
     }
}
</script>



<template>
    <app-page page-name="addMoments" class="addMoments">
    	  <div slot="app-page-content" id="page-main-content">
    	  	   <app-navbar type="5" title="发布动态" right-icon="icon-queren"></app-navbar>
		       <f7-list form style="margin:0px auto">
		            <f7-list-item>
		                <f7-input class="item-textarea" id="moments_content" type="textarea" placeholder="发表你此刻的想法..." autofocus @focus="closeModal"></f7-input>
		            </f7-list-item>
		       </f7-list>
		       <div class="toolbox">
		       	    <span @click="openPickerModal(1)"><i class="icon iconfont icon-icon-yxj-font"></i></span>
		       	    <span @click="openPickerModal(2)"><i class="icon iconfont icon-yemian"></i></span>
		       	    <span @click="openPickerModal(3)"><i class="icon iconfont icon-tupian"></i></span>
		       	    <span @click="openPickerModal(4)"><i class="icon iconfont icon-cf-c57"></i></span>
		       	    <span @click="openPickerModal(5)"><i class="icon iconfont icon-shizhong"></i></span>
		       </div>
    	  </div>
    </app-page>
</template>

<script>
import appNavbar from "../components/navbar.vue";
import appPage from "../components/page.vue";
export default {
	name:"addMoments",
	data:function(){
	 	  return{
	 	  }
	},
	components:{
       "app-navbar":appNavbar,
       "app-page":appPage
    },
    mounted:function(){
    	  
    },
    methods:{
    	openPickerModal:function(type){
    		window.f7.closeModal();
    		window.f7.pickerModal('#picker-toolbox'+type);
    		
    		//console.log($$("#page-main-content").css("height"));
	  	    var main_height = parseInt($$("#page-main-content").css("height"));
	  	    var picker_height = parseInt($$(".page-on-center .page-content").css("height"))-main_height-44;
	  	    //console.log(picker_height);
	  	    $$('#picker-toolbox'+type).css("height",picker_height+"px");
    	},
    	closeModal:function(){
    		window.f7.closeModal();
    	}
    }
}
</script>

<template>
	<div class="picker-modal" :id="'picker-toolbox'+type" v-if="type=='1'" style="{height:pickerHeight+'px'}">
	    <div class="picker-modal-inner">
	    	<f7-list form style="margin:10px auto">
		        <f7-list-item>
				    <f7-label>字体大小</f7-label>
				    <f7-input type="range" min="12" max="22" step="1" value="17" @change="setFontSize()" v-model="fontSize"></f7-input>
				</f7-list-item>
				<f7-list-item>
				    <f7-label>字体颜色</f7-label>
				    <div class="item-input font-color-theme">
				    	<div class="color-box bgc1" @click="setFontColor('#333333')"></div>
				    	<div class="color-box bgc2" @click="setFontColor('#5ac8fa')"></div>
			    	 	<div class="color-box bgc3" @click="setFontColor('#4cd964')"></div>
			    	 	<div class="color-box bgc4" @click="setFontColor('#8e8e93')"></div>
			    	 	<div class="color-box bgc5" @click="setFontColor('#ff2d55')"></div>
				    </div>
				</f7-list-item>
		    </f7-list>
	    </div>
	</div>
	
	<div class="picker-modal" :id="'picker-toolbox'+type" v-else-if="type=='2'" :style="{height:pickerHeight+'px'}">
	    <div class="picker-modal-inner">
	       <f7-block style="margin:10px auto">
	       	   <f7-link href="">添加</f7-link>
	       </f7-block>
	    </div>
	</div>
	
    <div class="picker-modal" :id="'picker-toolbox'+type" v-else-if="type=='3'" :style="{height:pickerHeight+'px'}">
	    <div class="picker-modal-inner">
	       <f7-block style="margin:10px auto">
	       	   <f7-link href="">添加</f7-link>
	       </f7-block>
	    </div>
	</div>
	
    <div class="picker-modal" :id="'picker-toolbox'+type" v-else-if="type=='4'" :style="{height:pickerHeight+'px'}">
	    <div class="picker-modal-inner">
	        <f7-list form style="margin:10px auto">
		        <f7-list-item>
				    <f7-label>同步至过客</f7-label>
				    <f7-input type="switch"></f7-input>
				</f7-list-item>
				<f7-list-item>
				    <f7-label>定位地址</f7-label>
				    <f7-input type="text"></f7-input>
				</f7-list-item>
				<f7-list-item>
				    <f7-label>天气情况</f7-label>
				    <f7-input type="text"></f7-input>
				</f7-list-item>
		    </f7-list>
	    </div>
	</div>
	
    <div class="picker-modal" :id="'picker-toolbox'+type" v-else-if="type=='5'" :style="{height:pickerHeight+'px'}">
	    <div class="picker-modal-inner">
	       <f7-list form style="margin:10px auto">
		        <f7-list-item>
				    <f7-label>日&nbsp;&nbsp;&nbsp;期</f7-label>
				    <f7-input type="date"></f7-input>
				</f7-list-item>
				<f7-list-item>
				    <f7-label>时&nbsp;&nbsp;&nbsp;间</f7-label>
				    <f7-input type="time"></f7-input>
				</f7-list-item>
		    </f7-list>
	    </div>
	</div>
</template>

<script>
export default {
	  name:"picker",
	  props:["text","type"],
	  data:function(){
	  	 return{
	        pickerHeight:300,
	        fontSize:17,
	  	 }
	  },
	  methods:{
	  	 setFontColor:function(color){
	  	 	 $$("#moments_content").css("color",color);
	  	 },
	  	 setFontSize:function(){
	  	 	 $$("#moments_content").css("font-size",this.fontSize+"px");
	  	 }
	  	
	  }
}
</script>

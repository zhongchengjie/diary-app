<template>
	<div class="picker-modal" id="share-picker" style="height:180px">
	    <div class="toolbar">
	      <div class="toolbar-inner">
	        <div class="left"></div>
	        <div class="right">
	          <a href="#" class="link close-picker">取消</a>
	        </div>
	      </div>
	    </div>
	    <div class="picker-modal-inner">
	        <div class="row" style="margin-top:20px">
			  <div class="col-25" v-for="item in list">
			  	<a @click="shareApp(item.type)">
			  		<i class="icon iconfont" :class="item.icon"></i>
			  		<p>{{item.name}}</p>
			  	</a>
			  </div>
			</div>
	    </div>
	</div>
</template>

<script>
export default {
	  name:"picker",
	  data:function(){
	  	return{
	  		list:[{type:'1',icon:"icon-xiaoxi",name:"微信"},
	  		      {type:'2',icon:"icon-pengyouquan",name:"朋友圈"},
	  		      {type:'3',icon:"icon-QQ",name:"QQ"},
	  		      {type:'4',icon:"icon-QQkongjian",name:"QQ空间"}
	  		     ]
	  	}
	  },
	  methods:{
	  	 shareApp:function(type){
             var text='日记App';
             var shareInfo = {text:text};
             var platformType;
             if(type==1){
                 platformType = ShareSDK.PlatformType.WechatSession;      //需要申请签名
			 }
             if(type==2){
                 platformType = ShareSDK.PlatformType.WechatTimeline;   //需要申请签名
             }
             if(type==3){
                 platformType = ShareSDK.PlatformType.QQFriend;
             }
             if(type==4){
                 eventBus.$emit("toast","暂不支持")       //暂不支持
				 return;
             }
             sharesdk.share(platformType, ShareSDK.ShareType.Text, shareInfo,
                 function(success){
				 },
                 function(fail){
				 }
			 );
		 }
	  }
}
</script>

<style scoped>
	.row .col-25{text-align:center}
	.row .col-25 i.iconfont{font-size:30px}
    .row .col-25 p{margin-top:0;color:#000}
</style>	

<template>
    <f7-page name="momentsDetail" class="bg-white person" @page:init="pageInit" @page:back="pageBack">
    	<div class="bg-div">
          	<div class="avatar" style="padding-top:15px">
          		<p style="text-align:left;margin-top:0;padding-left:10px"><a class="back"><i style="color:#fff" class="icon iconfont icon-fanhui"></i></a></p>
          	  	<div class="img"><img src="../../images/user_photo.jpg"></img></div>
          	  	<p>w33</p>
          	</div>
        </div>
        <f7-block class="with-border">
           <div>2017.07.19&nbsp;<small>09:52&nbsp;&nbsp;周三</small></div>
           <p><i class="icon iconfont icon-dingwei"></i>&nbsp;广东省广州市天河区建工路4号</p>
        </f7-block>
        <f7-block>
        	<p>哈哈</p>
        	<f7-grid  class="grid-img">
			    <f7-col width="50">
			   	   <img src="../../images/blog_img.jpg">
			    </f7-col>
			    <f7-col width="50">
			   	   <img src="../../images/user_photo.jpg">
			    </f7-col>
			</f7-grid>
       </f7-block>
    </f7-page>
</template>

<script>
export default {
	name:"momentsDetail",
	data:function(){
	 	return{
	 	}
	},
	components:{
    },
    methods:{
    	pageInit:function () {
            $$(".views .toolbar").hide();
            $$("#view-2 .navbar").addClass("navbar-hidden")
        },
        pageBack:function () {
            $$(".views .toolbar").show();
            $$("#view-2 .navbar").removeClass("navbar-hidden")
       }
    }
    
}
</script>



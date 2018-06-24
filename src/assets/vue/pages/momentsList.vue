<template>
    <f7-page name="momentsList" class="person" @page:init="pageInit" @page:back="pageBack">
    	<div class="bg-div">
          	<div class="avatar" style="padding-top:15px">
          		<p style="text-align:left;margin-top:0;padding-left:10px"><a class="back"><i style="color:#fff" class="icon iconfont icon-fanhui"></i></a></p>
          	  	<div class="img"><img src="../../images/user_photo.jpg"></img></div>
          	  	<p>五年</p>
          	</div>
        </div>
		<div class="timeline new-timeline">
			<div class="timeline-item">
				<div class="timeline-item-date" style="font-weight: bold;font-size: 20px">19<small style="padding-left:2px">7月</small></div>
				<div class="timeline-item-divider"></div>
				<div class="timeline-item-content">
					<div class="timeline-item-inner">
						<p>一种等待，一种信念，一份爱。</p>
						<p><small>09:52</small></p>
					</div>
				</div>
			</div>
			<div class="timeline-item">
				<div class="timeline-item-date" style="font-weight: bold;font-size: 20px">01<small style="padding-left:2px">7月</small></div>
				<div class="timeline-item-divider"></div>
				<div class="timeline-item-content">
					<div class="timeline-item-inner">
						<p>演唱会知道结束，我都没有见到你。</p>
						<p><small>20:45</small></p>
					</div>
				</div>
			</div>
		</div>
    </f7-page>
</template>

<script>
export default {
	name:"momentsList",
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



<template>
	<f7-page :name="pageName" @page:init="pageInit" @page:back="pageBack">
		<slot name="app-page-content"></slot>
	</f7-page>
</template>

<script>
export default {
	  name:"page",
	  props:["pageName","type"],
	  data:function(){
	  	 return{

	  	 }
	  },
	  methods:{
          pageInit:function () {
              $$(".views .toolbar").hide();
              if(this.type=="2"||this.type=="3"){        //type=3：我的->日历
                 $$("#view-4 .navbar").removeClass("navbar-hidden")
              }
              if(this.type=="3"){
              	 $$("#calendar-inline-container .toolbar").show();
              }
          },
          pageBack:function () {
              $$(".views .toolbar").show();
              if(this.type=="2"||this.type=="3"){   //type=3：我的->日历
              	 $$("#view-4 .navbar").addClass("navbar-hidden")
              }
          }
	  }
}
</script>

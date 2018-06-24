<template>
    <app-page  page-name="calendar" type="3" class="calendar-page">
    	<div slot="app-page-content">
	    	<app-navbar  title="笔记日历" type="1"></app-navbar>
			<div id="calendar-inline-container"></div>
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
     	//console.log(window.f7);
     	this.initCalendar();
     },
     methods:{
     	 initCalendar:function(){
	     	var calendarInline = myApp.calendar({
			    container: '#calendar-inline-container',
			    value: [new Date()],
			    monthNames:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
			    dayNamesShort:["日","一","二","三","四","五","六"],
			    onDayClick:function(p, dayContainer, year, month, day){
			    	//alert(day)
			    }
			});          
     	 }
     }
}
</script>



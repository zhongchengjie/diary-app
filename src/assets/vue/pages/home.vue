<template>
	<f7-view id="view-1" tab active navbar-through toolbar-through :dynamic-navbar="true">
        <f7-navbar :class="appTheme">
			<f7-nav-left>
		        <f7-link icon="iconfont icon-rili" @click="calendar"></f7-link>
			</f7-nav-left>
		    <f7-nav-center>
		    	<a href="#" data-popover="#popover-type" class="open-popover" style="color:#fff">{{type}}</a>
		    </f7-nav-center>
			<f7-nav-right sliding>
				<f7-link icon="iconfont icon-bianji" @click="addMoments"></f7-link>
			</f7-nav-right>
	    </f7-navbar>
        <f7-pages>
            <f7-page name="home"  pull-to-refresh @ptr:refresh="onRefresh">
            	<div class="timeline new-timeline">
	                <div class="timeline-item" @click="viewMoments">
					    <div class="timeline-item-date">19 <small>周三</small><br/><small>2017.07</small></div>
					    <div class="timeline-item-divider"></div>
					    <div class="timeline-item-content">
					      <div class="timeline-item-inner">
					      	  <p>哈哈</p>
					      	  <p><small>09:52</small></p>
					      </div>
					    </div>
					</div>
					<div class="timeline-item"  @click="viewMoments">
					    <div class="timeline-item-date">19 <small>周三</small><br/><small>2017.07</small></div>
					    <div class="timeline-item-divider"></div>
					    <div class="timeline-item-content">
					      <div class="timeline-item-inner">
					      	  <p>今天注册了吾记</p>
					      	  <p><small>09:45</small></p>
					      </div>
					    </div>
					</div>
				</div>
            </f7-page>
        </f7-pages>
    </f7-view> <!--end of view1-->
</template>


<script>
import appNavbar from "../components/navbar.vue"
export default {
    name:"home",
    props:["appTheme"],
    data:function () {
       return {
          type:"全部"
       }
    },
    components:{
        "app-navbar":appNavbar
    },
    mounted:function(){
        eventBus.$on("fillBackType",  (typeName) =>{
    		this.type = typeName
        });
       
    },
    methods:{
    	calendar:function(){
    		myApp.views[0].loadPage('/calendar/');
    	},
    	addMoments:function(){
    		myApp.views[0].loadPage('/addMoments/');
    	},
    	viewMoments:function(){
    		myApp.views[0].loadPage('/viewMoments/');
        },
        onRefresh:function(){
            setTimeout(function () {
                myApp.pullToRefreshDone();
            }, 2000);
        }
    }
}
</script>


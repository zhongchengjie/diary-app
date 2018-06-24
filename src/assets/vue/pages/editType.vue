<template>
    <app-page :page-name="'editType'">
    	  <div slot="app-page-content">
    	  	    <app-navbar type="5" title="日记分类" right-icon="icon-plus" method="toAddType"></app-navbar>	
    	  	    <div class="list-block media-list" style="margin-top:0px">
                      <ul v-if="typeList.length>0">
                          <li v-for="item in typeList">
                              <a href="#" class="item-link item-content">
                                  <div class="item-media"><i class="icon iconfont icon-pifu" :style="{color:item.color}"></i></div>
                                  <div class="item-inner" style="padding-top:12px">
                                      <div class="item-title">{{item.name}}</div>
                                  </div>
                              </a>
                          </li>
                      </ul>
                </div>
    	  </div>
    </app-page>
</template>

<script>
import appNavbar from "../components/navbar.vue";
import appPage from "../components/page.vue";
export default {
	name:"editType",
	data:function(){
	 	  return{
	 	  	typeList:[],
	 	  	color:"red"
	 	  }
	},
	created:function(){
		this.getTypeList();
	},
	mounted:function(){
	 	 eventBus.$on("toAddType", this.toAddType);
	 	 eventBus.$on("refresh", this.getTypeList);
	},
	components:{
        "app-navbar":appNavbar,
        "app-page":appPage
    },
    destroyed:function(){
    	eventBus.$off("toAddType");
    },
    methods:{
    	toAddType:function(){
    		myApp.views[0].loadPage('/addType/');
    	},
    	getTypeList:function(){
    		if(localStorage.getItem("typeList")){
    			var typeList = localStorage.getItem("typeList").split("-");
			    //console.log(typeList);
			    this.typeList=[];
			    for(var i=0;i<typeList.length;i++){
			    	this.typeList.push(JSON.parse(typeList[i]))
			    }
			    console.log(this.typeList);
    		}
    	}
    }
}
</script>


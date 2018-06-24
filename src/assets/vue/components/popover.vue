<template>
    <f7-popover id="popover-type">
        <div class="list-block">
	        <ul>
	          <li><a href="#" @click="setType('全部')" class="list-button item-link">全部</a></li>
	          <li><a href="#" @click="setType('未分类')" class="list-button item-link">未分类</a></li>
	          <li><a href="#" @click="editType" class="list-button item-link" style="text-align:center;">编辑我的分类</a></li>
	        </ul>
	    </div>
    </f7-popover>
</template>

<script>
export default {
    name:"popover",
    data:function () {
       return {
       
       }
    },
    methods:{
    	setType:function(typeName){
    		window.f7.closeModal("#popover-type"); 
    		eventBus.$emit("fillBackType",typeName);
    	},
    	editType:function(){
    		window.f7.closeModal("#popover-type"); 
    		window.f7.views[0].loadPage('/editType/');
    	}
    }
    
}
</script>

<template>
    <app-page page-name="updateInfo" type="2">
    	  <div slot="app-page-content">
    	  	 <app-navbar type="5" title="修改资料"  right-icon="icon-queren"></app-navbar>
		       <f7-list form style="margin:0px auto"  id="shareForm">
		       	    <f7-list-item>
		       	    	  <f7-label>昵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称</f7-label>
					      <f7-input type="text" placeholder="昵称"/>
				    </f7-list-item>
		            <f7-list-item>
		            	  <f7-label style="top:-40px;">个性签名</f7-label>
		                  <f7-input class="item-textarea" type="textarea" placeholder="我真的是个性签名" ></f7-input>
		            </f7-list-item>
		       </f7-list>
    	  </div>
    </app-page>
</template>

<script>
import appNavbar from "../components/navbar.vue";
import appPage from "../components/page.vue";
export default {
	 name:"updateInfo",
	 data:function(){
	 	  return{
	 	  }
	 },
	 components:{
      "app-navbar":appNavbar,
      "app-page":appPage
  }
}
</script>


<template>
    <app-page page-name="privacySetting" type="2">
    	  <div slot="app-page-content">
    	  	 <app-navbar type="1" title="隐私设置"></app-navbar>
		     <f7-list media-list  class="function-list">
                  <f7-list-item v-for="item in list" :title="item.name"
                  	    after="<label class='label-switch'><input type='checkbox'><div class='checkbox'></div></label>"
                        :subtitle="item.desc">
                  </f7-list-item>
             </f7-list>
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
	 	  	list:[{name:"发表至过客（关闭仅自己可见）",desc:"开启后每篇日记可选择是否发表致过客"},
	 	  	      {name:"隐私密码",desc:"开启后每次打开吾记都需要该密码"},
	 	  	      {name:"指纹解锁",desc:"开启后可以使用指纹或密码进入吾记"}]
	 	  }
	 },
	 components:{
      "app-navbar":appNavbar,
      "app-page":appPage
     }
}
</script>




<template>
  <f7-page name="about">
      <app-navbar type="1" :title="关于吾记"></app-navbar>
      <f7-block-title>我们是谁?</f7-block-title>
      <f7-block>我们是充满激情的团队</f7-block>
  </f7-page>
</template>

<script>
import appNavbar from "../components/navbar.vue";
export default {
	  name:"about",
	  components:{
      "app-navbar":appNavbar,
    } 
}
</script>
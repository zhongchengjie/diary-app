<template>
	<f7-view id="view-4" tab navbar-through toolbar-through :dynamic-navbar="true">
        <f7-navbar  title="个人中心" :class="appTheme"></f7-navbar>
        <f7-pages>
          <f7-page name="person" class="person">
              <div class="bg-div">
              	  <div class="avatar">
              	  	  <div class="img"><img src="../../images/user_photo.jpg"></img></div>
              	  	  <p>w33</p>
              	  </div>
              </div>
              <f7-list style="margin:0px auto">
                  <f7-list-item link="/updateInfo/" :class="appTheme" media="<i class='icon iconfont icon-bianji'></i>" title="修改资料"></f7-list-item>
                  <f7-list-item link="/upgrade/" :class="appTheme"  media="<i class='icon iconfont icon-yonghu1'></i>" title="高级账户"></f7-list-item>
                  <f7-list-item link="/privacySetting/" :class="appTheme"  media="<i class='icon iconfont icon-yinsi'></i>" title="个人隐私"></f7-list-item>
              </f7-list>
              <f7-list style="margin-top:10px;margin-bottom:10px">
                  <f7-list-item link="/myFavor/" :class="appTheme"  media="<i class='icon iconfont icon-shoucang'></i>" title="我的收藏"></f7-list-item>
                  <f7-list-item link="/calendar/" :class="appTheme"  media="<i class='icon iconfont icon-rili'></i>" title="日历"></f7-list-item>
                  <f7-list-item link="/recycleBin/" :class="appTheme"  media="<i class='icon iconfont icon-lajixiang'></i>" title="垃圾箱"></f7-list-item>
              </f7-list>
              <f7-list style="margin-top:0px">
                  <f7-list-item link="/systemNotice/" :class="appTheme"  media="<i class='icon iconfont icon-xiaoxi'></i>" title="系统通知"></f7-list-item>
                  <f7-list-item link="/systemSetting/" :class="appTheme" media="<i class='icon iconfont icon-shezhi'></i>" title="设置"></f7-list-item>
              </f7-list>
          </f7-page>
        </f7-pages>
    </f7-view> <!--end of view4-->
</template>


<script>
import appNavbar from "../components/navbar.vue"
export default {
    name:"home",
    props:["appTheme"],
    data:function () {
       return {
       }
    },
   
    components:{
        "app-navbar":appNavbar
    },
    methods:{
    	
    }
}
</script>

<style>
.person .page-content{padding-top:0px}
.person .bg-div{height:42%;width:100%;background-image:url('../../images/bg.jpg');background-repeat: no-repeat; background-position: center center;background-size: cover;}
.person .bg-div .avatar{padding-top:60px;text-align:center;}
.person .bg-div .avatar div.img{width:78px;height:78px;border-radius:50%;border: 1px solid #fff;margin:0 auto}
.person .bg-div .avatar div.img img{width:100%;height:100%;border-radius: 50%;}
.person .bg-div .avatar p{font-size:16px;color:#fff}
</style>

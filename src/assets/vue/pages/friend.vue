<template>
	<f7-view id="view-3" tab  navbar-through toolbar-through :dynamic-navbar="true">
        <f7-navbar  title="朋友圈" :class="appTheme"></f7-navbar>
        <f7-pages>
           <f7-page name="friend" class="bg-white person">
			   <div class="bg-div">
				   <div class="avatar" style="padding-top:200px">
					   <p style="text-align:right;padding-right:80px">五年</p>
				   </div>
			   </div>
			   <div style="margin-top: -40px;float: right; clear:right;padding-right: 10px;"><img src="../../images/user_photo.jpg" style="width:64px;height:64px"></img></div>
			   <f7-list media-list  class="friend-moments-list" >
				   <f7-list-item media="<img src='static/assets/images/user_photo.jpg'>"
								 title="五年"
								 text="当面对两个选择时，抛硬币总能奏效，因为在你把它抛在空中的那一秒里，你突然知道你希望它是什么。">
					   <div slot="root" class="moments-time">刚刚</div>
					   <div slot="root" class="moments-comment">
						   <div  style="display:none">
							   <span><i class="icon iconfont icon-dianzan"></i><small> 赞</small></span>
							   &nbsp;&nbsp;<span><i class="icon iconfont icon-pinglun1"></i><small> 评论</small></span>
						   </div>
						   <span @click="openComment($event)"><i class="icon iconfont icon-pinglun"></i></span></i>
					   </div>
				   </f7-list-item>
				   <f7-list-item media="<img src='static/assets/images/user_photo.jpg'>"
								 title="七年"
								 text="每个人的性格中都有某些无法让人接受的部分，再美好的人也一样，所以不要苛求别人，也不要埋怨自己。">
					   <div slot="root" class="moments-photo">
						   <f7-grid  class="grid-img">
							   <f7-col width="50">
								   <img src="../../images/blog_img.jpg">
							   </f7-col>
							   <f7-col width="50">
								   <img src="../../images/user_photo.jpg">
							   </f7-col>
						   </f7-grid>
					   </div>
					   <div slot="root" class="moments-time">30分钟前</div>
					   <div slot="root" class="moments-comment">
						   <div  style="display:none">
							   <span><i class="icon iconfont icon-dianzan"></i><small> 赞</small></span>
							   &nbsp;&nbsp;<span><i class="icon iconfont icon-pinglun1"></i><small> 评论</small></span>
						   </div>
						   <span @click="openComment($event)"><i class="icon iconfont icon-pinglun"></i></span></i>
					   </div>
				   </f7-list-item>
				   <f7-list-item media="<img src='static/assets/images/user_photo.jpg'>"
								 title="十年"
								 text="把圈子变小，把语言变干净，把成绩往上提，把故事往心里收一收，现在想要的，以后你都会有。">
					   <div slot="root" class="moments-time">1小时前</div>
					   <div slot="root" class="moments-comment">
						   <div  style="display:none">
							   <span><i class="icon iconfont icon-dianzan"></i><small> 赞</small></span>
							   &nbsp;&nbsp;<span><i class="icon iconfont icon-pinglun1"></i><small> 评论</small></span>
						   </div>
						   <span @click="openComment($event)"><i class="icon iconfont icon-pinglun"></i></span></i>
					   </div>
				   </f7-list-item>
			   </f7-list>
		   </f7-page>
        </f7-pages>
    </f7-view> <!--end of view1-->
</template>


<script>
import appNavbar from "../components/navbar.vue"
export default {
    name:"friend",
    props:["appTheme"],
    data:function () {
       return {

       }
    },
    components:{
        "app-navbar":appNavbar
    },
    methods:{
        openComment:function($event){
            //console.log($$($event.currentTarget).prev().css("display","inline-block"));
            $$($event.currentTarget).prev().toggleClass("comments")
		}
    		
    } 
    
}
</script>


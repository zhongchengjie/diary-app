<template>
	<div id="app">
		<f7-statusbar></f7-statusbar>
		<f7-views tabs>
			<home-view :app-theme="appTheme"></home-view>
			<moments-view :app-theme="appTheme"></moments-view>
			<friend-view :app-theme="appTheme"></friend-view>
			<person-view :app-theme="appTheme"></person-view>
			<f7-toolbar tabbar labels>
				<f7-link icon="iconfont icon-biji" text="日记" tab-link="#view-1" :class="appTheme" active></f7-link>
				<f7-link icon="iconfont icon-cf-c57" text="过客" tab-link="#view-2" :class="appTheme" ></f7-link>
				<f7-link icon="iconfont icon-pengyouquan" text="朋友" tab-link="#view-3" :class="appTheme" ></f7-link>
				<f7-link icon="iconfont icon-yonghu" text="我的" tab-link="#view-4" :class="appTheme" ></f7-link>
			</f7-toolbar>
		</f7-views>
		<app-popover></app-popover>
		<app-picker text="关闭" type="1"></app-picker>
		<app-picker text="关闭" type="2"></app-picker>
		<app-picker text="关闭" type="3"></app-picker>
		<app-picker text="关闭" type="4"></app-picker>
		<app-picker text="关闭" type="5"></app-picker>
		<app-share></app-share>
		<app-toast :text="modalText" :status="status"></app-toast>
	</div>
</template>

<script>
    import homeView from "./assets/vue/pages/home.vue";
    import momentsView from "./assets/vue/pages/moments.vue";
    import friendView from "./assets/vue/pages/friend.vue";
    import personView from "./assets/vue/pages/person.vue";
    import appPopover from "./assets/vue/components/popover.vue";
    import appPicker from "./assets/vue/components/picker.vue";
    import appShare from "./assets/vue/components/share.vue";
    import appToast from "./assets/vue/components/toast.vue";
    export default {
        name:"app",
        data:function(){
            return{
                modalText:"",
                status:false
            }
        },
        components:{
            "home-view":homeView,
            "moments-view":momentsView,
            "friend-view":friendView,
            "person-view":personView,
            "app-popover":appPopover,
            "app-picker":appPicker,
            "app-share":appShare,
            "app-toast":appToast
        },
        computed:{
            appTheme:function(){
                return store.getters.getAppTheme;
            }
        },
        mounted:function(){
            //隐藏第三个view的导航条
            $$("#view-4 .navbar").addClass("navbar-hidden");
            //this.openToast("测试");
            //监听toast事件
            eventBus.$on("toast",  (text) =>{
                this.openToast(text)
            });

           // this.setStatusBar();

        },
        methods:{
            openToast:function(text){
                this.modalText=text;
                this.status=true;
                setTimeout(this.closeToast,2000)
            },
            closeToast:function(){
                this.modalText="";
                this.status=false;
            }
        }
    }
</script>

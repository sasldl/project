<template>
    <div class="swiper-container banner">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="banner of banners" :key="banner.id">
                <img :src="banner.picUrl" alt="" width="100%">
            </div>
            
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
    </div>
</template> 
<script>
// 引入swiper相关，因为只有banner在用，所以把样式也引入到banner里了
import '../../../../node_modules/swiper/dist/css/swiper.min.css'
import Swiper from 'swiper'

export default {
   name:'AppBanner',
   data () {
       return {
           banners: []
       }
   },
   methods: {
       getBanners () {
        //    https://m.maizuo.com
        //https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1523436662965
            // 请求的真正接口前面的/mz其实只是一个暗号
            this.$http.get('/mz/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1523436662965').then( res => {
                this.banners = res.data.data.slider
            } )
       }
   },
   created () {
       this.getBanners()
   },
   updated () {
       new Swiper ('.banner', {
          direction: 'horizontal',
          loop: true,
          autoplay: {
                delay: 1000,
                stopOnLastSlide: false,
                disableOnInteraction: false,
            },
          
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          }
        })   
   }
}
</script>
<style lang="scss" scoped>

</style> 

<template>
  <header class="header">
      <nav>
         <i>
             <img src="https://y.gtimg.cn/mediastyle/mobile/yqq_v5/img/logo.png?max_age=19830212&d=20151105145423" alt="">
             
         </i>
         <a>下载APP</a>
      </nav>
  </header>
</template>
<script>
export default {
  name : 'AppHeader'
}
</script>
<style lang="scss" scoped>
    .header{
        // position: fixed;
        height: 0.44rem;
        top: 0;
        left: 0;
        background: #31c27c;
       
         
        nav{ 
            display: flex;
            justify-content: space-between;
            i{
                display: block;
                width: 0.9rem;
                height: 0.25;
                margin: 9px 0 0 10px;
                
                img{
                    width: 100%;
                    height: 100%;
                }
                
            }
            a{
                margin: 8px 10px 0 0;
                display: inline-block;
                height: 0.28rem;
                padding: 0 12px;
                line-height: 0.28rem;
                border-radius: 99px;
                font-size: 14px;
                background: #149c5a;
                color: #fff;
            }
        }

    }
</style>

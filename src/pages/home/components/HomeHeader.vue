<template>
  <div class="home-header">
      <ul class='lwq-fen'>
        <li><p class='iconfont'>&#xeb99;</p></li>
        <li><input type="text" placeholder='输入城市/景点/游玩主题' /></li>
        
        <li>
          <router-link to='/city'>
            <span>{{city}}</span>
            <i class='iconfont'>&#xe606;</i>
          </router-link>
        </li>
      </ul>
  </div>
</template>

<script>

export default {
  name: 'HomeHeader',
  props:{
    city:String
  },
  data () {
    return {

    }
  },
  methods: {

  },
  mounted () {

  },
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'; 
.home-header
  width:4.8rem;
  height:0.56rem;
  // border:0.01rem solid red;
  background :$bgColor;
  color:$textColor;
.lwq-fen{
  display :flex;
  align-items:center;
  // justify-content :space-around;
  line-height 0.52rem;
}
.lwq-fen>li{
  margin-left:0.15rem;
}
input 
  width:3.43rem;
  height:0.4rem;
  border-radius:0.05rem; 
  font-size :0.2rem; 
span,i
  font-size:0.2rem; 
  color:#fff
</style>
<template>
  <div class="home-header">
      <ul class='lwq-fen'>
        <li><p class='iconfont'>&#xeb99;</p></li>
        <li><input type="text" placeholder='输入城市/景点/游玩主题' /></li>
        <router-link to='/city'>
          <li class='lwq-city'>
            <span>{{this.doubleCity}}</span>
            <span class='iconfont arrow-icon' >
              &#xe606;
            </span>
          </li>
        </router-link>
      </ul>
  </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
export default {
  name: 'HomeHeader',
  props:{
    city:String
  },
  computed: {
    ...mapState(['city']),
    ...mapGetters(['doubleCity'])
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
  width:3.3rem;
  height:0.4rem;
  border-radius:0.05rem; 
  font-size :0.2rem; 
span,i
  font-size:0.18rem; 
  color:#fff
a 
  margin-left:-0.1rem;
.lwq-city
  min-width:1rem;
  padding:0 0.15rem;
  height:0.56rem;
  line-height:0.56rem;
  float:right
  // background:red
  text-align:center;
  .arrow-icon
    margin-left:-0.04rem;

</style>
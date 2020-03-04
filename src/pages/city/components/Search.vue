<template>
  <div>
    <div class="search">
      <input v-model="keyword" type="text" class='search-input' placeholder="请输入城市名或拼音" />
    </div>
    <div class="search-content" ref='search' v-show='keyword'>
      <ul>
        <li class='search-item border-bottom' v-for='item of list' :key='item.id' @click="handleCityClick(item.name)">
          {{item.name}}
        </li>
        <li class='search-item border-bottom' v-show='hasNoData'>
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll' 
export default {
  name: 'CitySearch',
  props:{
     cities:Object
  },
  data() { 
    return {
      keyword:'',
      list:[],
      timer:null
    }
  },
  computed: {
    hasNoData(){
      return !this.list.length
    }
  },
  methods: {
    handleCityClick(city){
      this.$store.commit('changCtiyValue',city)
      this.$router.push('/');
    }
  },
  mounted() {
    // 搜索出来的内容实现滚动
    this.scroll=new BScroll(this.$refs.search)
  },
  watch:{
    keyword(){
      // 函数节流问题
      if(this.timer){
        clearTimeout(this.timer);
      }
      this.timer=setTimeout(() => {
        const result=[]
        if(!this.keyword){
          this.list=[]
          return;
        }
        for(let i in this.cities){
          this.cities[i].forEach((value)=>{
            console.log(value);
            if(value.name.indexOf(this.keyword)>-1 || value.spell.indexOf(this.keyword)>-1){
              result.push(value);
            }
          })
        }
        this.list=result
      }, 200);
    }
  }
 }
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
  .search
    height:0.62rem;
    padding:0 0.1rem;
    background:$bgColor;
    .search-input
      box-sizing:border-box;
      width:100%;
      height:0.52rem;
      padding:0 0.1rem;
      line-height:0.52rem;
      text-align:center;
      border-radius:0.06rem;
      color:#666
      font-size:0.3rem;
  .search-content
    overflow hidden
    position:absolute
    top:1.2rem;
    left:0;
    right:0;
    bottom:0;
    background:#ccc;
    z-index:1;
    .search-item
      line-height:0.62rem;
      padding-left:0.2rem;
      background:#fff
      color:red
</style>
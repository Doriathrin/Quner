<template>
  <div class="">
    <div class="item" v-for='(item,key) of list' :key='key'> 
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div class="item-chilren" v-if='item.children'>
        <!-- 组件内部自己调用自身 -->
        <DetailList :list='item.children'></DetailList>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props:{
    list:Array
  },
  data() { 
    return {
      
    }
  },
  methods: {

  },
  mounted() {

  },
 }
</script>

<style lang="stylus" scoped>
.item-title-icon
  display: inline-block;
  position: absolute;
  width: .36rem;
  height: .36rem;
  top: .26rem;
  left: .1rem;
  background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
  margin-right: .1rem;
  background-size: .4rem 3rem;
.item-title
  line-height:0.8rem;
  font-size:0.32rem;
  padding:0 0.5rem;
</style>
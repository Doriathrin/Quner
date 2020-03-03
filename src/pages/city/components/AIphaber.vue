<template>
  <ul class='list'>
    <li class='item' v-for='(item,key) of cities' :key='key'>
      {{key}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAiphader',
  props:{
    cities:Object
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
@import '~styles/varibles.styl';
.list
  display:flex
  flex-direction:column
  justify-content:center
  position:absolute
  top:1.58rem;
  right:0;
  bottom:0
  width:0.44rem;
  // background:red
  .item
    line-height:0.3rem;
    text-align:center;
    color:$bgColor
</style>
<template>
  <h1>Counter-Vuex</h1>
  <h2>Direct access: {{$store.state.counter.count}}</h2>
  <h2>Computed: {{countComputed}}</h2>

  <button @click="increment" >+1</button>
  <button @click="incrementBy(5)" >+5</button>
  <button @click="randomInt" :disabled="isLoading" >Ramdom</button>

  <h1>mapState</h1>
  <h2>mapState: {{count}}</h2>
  <h2>Last Mutation {{lastMutation}}</h2>
  <h2>mutation getter: {{$store.getters['counter/squereCount']}}</h2>
</template>

<script>

import {mapState,mapActions} from 'vuex'
export default {
  computed:{
    countComputed(){
      return this.$store.state.counter.count
    },
    ...mapState('counter',['count','lastMutation','isLoading'])
    // ...mapState({
    //   count: state=>state.count
    // })
  },
  methods:{
    increment(){
      this.$store.commit('counter/increment');
    },
    incrementBy(value){
      this.$store.commit('counter/incrementBy',value)
    },
    // ...mapActions('counter',['incrementRandomInt'])
    ...mapActions('counter',{
      randomInt:'incrementRamdomInt'
    })
  },
}
</script>
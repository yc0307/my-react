<template>
  <div>
    {{count}}
     <hr/>
     {{getcount}}
    <button @click="add">加一</button>
    <button @click="addN(5)">加5</button>
    <button @click="addAsync">自增1+async</button>
    <button @click="addNAsync(2)">自增N+async</button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["count"]),
    ...mapGetters(['getcount'])
  },
  methods: {
    ...mapMutations(["add", "addN"]),
    ...mapActions(["addAsync","addNAsync"]),
  },
};
</script>

<style>
</style>
<template>
  <div>
    <Post :Data="Data[index]" v-for="(a,index) in Data" :key="index"/>
  </div>
</template>

<script>
import Post from "./Post.vue";
export default {
  name: "ContainerBox",
  components: {
    Post,
  },
  props: {
    Data:Array,
  },
};
</script>

<style>
</style>

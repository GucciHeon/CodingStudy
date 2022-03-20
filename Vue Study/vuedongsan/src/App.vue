<template>

  <transition name="fade">
  <Modal @closeModal="모달창열렸니=0;" :원룸들="원룸들" :누른거="누른거" :모달창열렸니="모달창열렸니" />
  </transition>

  <div class="menu">
    <a v-for="작명 in 메뉴들" :key="작명">{{작명}}</a>
  </div> 

  <Discount :showDiscount="showDiscount" />
 
  <button @click="priceSortLow">낮은가격순</button>
  <button @click="priceSortHigh">높은가격순</button>
  <button @click="textSort">가나다순</button>
  <button @click="sortBack">되돌리기</button>

  <Card @openModal="모달창열렸니=1; 누른거=$event" :원룸="원룸들[i]" v-for="(작명,i) in 원룸들" :key="i"/>


</template>

<script>

import data from './assets/oneroom.js';
import Discount from './Discount.vue';
import Modal from './Modal.vue';
import Card from './Card.vue';


export default {
  name: 'App',
  data(){
    return{
      showDiscount : 30,
      누른거 : 0,
      원룸들 : data,
      원룸들오리지널 : [...data],
      모달창열렸니 : false,
      메뉴들 : ['Home', 'Shop', 'About'],
      products : [ '역삼동원룸', '천호동원룸', '마포구원룸'],
      신고수 : [0,0,0],
    }
  },
  methods : {
    sortBack(){
      this.원룸들 = [...this.원룸들오리지널];
    },
    priceSortLow(){
      this.원룸들.sort(function(a,b){
        return a.price - b.price
      })      
    },
    priceSortHigh(){
      this.원룸들.sort(function(a,b){
        return b.price - a.price
      })      
    },
    textSort(){
      this.원룸들.sort(function(a,b){
        return a.title - b.title
      })      
    }
  },
  mounted(){
    setInterval(() => {
      if(this.showDiscount>=0){
        this.showDiscount--;
      }
    }, 1000);
  },
  components: {
    Discount,
    Modal,
    Card,
  },
}
</script>

<style>
.fade-enter-from {
  transform: translateY(-1000px);
}
.fade-enter-active {
  transition: all 500ms;
}
.fade-enter-to {
  transform: translateY(0px);
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: all 500ms;
}
.fade-leave-to {
  opacity: 0;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin : 0
}
div{
  box-sizing: border-box;
}
.black-bg{
  width:100%; height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed; padding: 20px;
}
.white-bg{
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
}
.room-img{
  width: 100%;
  margin-top:40px;
}
.menu{
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color : white;
  padding: 10px;
}
.discount {
  background : #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
</style>

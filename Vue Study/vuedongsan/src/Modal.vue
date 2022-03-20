<template>
    <div class="black-bg" v-if="모달창열렸니==true">
    <div class="white-bg">
      <img :src="원룸들[누른거].image" class="room-img">
      <h4>{{원룸들[누른거].title}}</h4>
      <p>{{원룸들[누른거].content}}</p>
      <input v-model="month">
      <p>{{month}}개월 선택함 : 가격 {{원룸들[누른거].price*month}}원</p>
      <button @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ModalPage',
    data(){
        return{
            month : 1,
        }
    },
    watch : {
        month(a){
            if(a>=13){
                alert('13개월 이상 할 수 없습니다.');
                this.month=12;
            }
            if(isNaN(a)==true){
                alert('문자는 입력할 수 없습니다.');
                this.month=1;
            }
        }
    },
    props: {
        원룸들 : Array,
        누른거 : Number,
        모달창열렸니 : Number,
    },
    beforeUpdate() {
        if(this.month==2){
            alert('2개월은 너무 적음.. 안팝니다.')
            this.month = 3
        }
    },
}
</script>

<style>

</style>
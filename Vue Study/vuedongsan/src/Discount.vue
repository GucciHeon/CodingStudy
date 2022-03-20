<template>
  
  <div class="discount">
    <h4> 지금 결제하면 {{showDiscount}}% 할인</h4>
  </div>

</template>

<script>
export default {
  name: 'component',

  props : {
    showDiscount : Number
  }
}
</script>

<style>

</style>
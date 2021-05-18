<template>
   <button class="btn">
      <slot></slot>  
   </button>
</template>

<script>
export default {

}
</script>

<style lang="scss">
$primary-color: #66615B;

.btn{
  border: 2px solid $primary-color;
  padding: 10px;
  font-size: 16px;
  border-radius: 20px;
  color: $primary-color;

  &:hover {
    background-color:$primary-color;
    color: white;
  }
}

</style>

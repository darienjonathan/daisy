<template lang="pug">
  .box
    .box__content
      slot
</template>

<style lang="scss" scoped>
.box__content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  height: 550px;
}
</style>

<script>
export default {
  name: "Box"
}
</script>

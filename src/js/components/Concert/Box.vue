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

.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  width: 100vw;
  height: 550px;

  position: fixed;
  top: 50%;
  transform: translateY(-50%);

  background-color: rgba(255,255,255,0.85);

  box-sizing: border-box;

  transition: opacity 0.5s linear;
}

</style>

<script>
export default {
  name: "Box"
}
</script>

<template lang="pug">
  transition(name="fade")
    .modal(v-if="isModalShown")
      .close(@click="$emit('exit')") ✕
      .content
        .characters
          .character {{ content.japanese }}
          .character {{ content.romaji }}
        .text(v-html="content.html")
</template>
<script>
export default {
  name: 'modal',
  props: ['isModalShown', 'content'],
  watch: {
    isModalShown() {
      document.body.dataset.modal = this.isModalShown
    }
  }
}
</script>
<style lang="scss" scoped>
  @import 'import';

  $black: black;
  $turquoise: #2EECF3;

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .modal {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #{$turquoise}E0;
  }
  .close {
    position: absolute;
    right: 15px;
    top: 5px;
    color: $black;
    font-size: 30px;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .character {
    &s {
      text-align: center;
      margin-bottom: 30px;
    }
    font-family: serif;
    font-weight: bold;
    font-size: 36px;
  }
  .text {
    margin: 0 40px;
    font-weight: bold;
  }

  /deep/ .emphasize {
    color: darkred;
    text-decoration: underline;
  }
</style>
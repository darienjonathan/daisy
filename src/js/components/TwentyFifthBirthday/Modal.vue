<template lang="pug">
  transition(name="fade")
    .modal(v-if="isModalShown")
      .close(@click="$emit('exit')") ✕
      .content(:data-size="content.isPartOfGrid ? 'default' : 'small'")
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
      const scrollY = this.isModalShown ? window.scrollY : parseInt(document.body.style.top || '0') * -1
      document.body.dataset.modal = this.isModalShown
      document.body.style.top = this.isModalShown ? `-${scrollY}px` : '';
      if(!this.isModalShown) {
        window.scrollTo(0, scrollY);
      }
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
    top: 0;
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
    &[data-size="small"] {
      .character {
        font-size: 24px;
      }
      .text {
        font-size: 12px;
      }
    }
  }
  .character {
    &s {
      text-align: center;
      white-space: pre-wrap;
      margin: 0 20px 30px;
    }
    font-family: serif;
    font-weight: bold;
    font-size: 36px;
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
  .text {
    margin: 0 40px;
    font-weight: bold;
    white-space: pre-wrap;
  }

  /deep/ .emphasize {
    color: darkred;
    text-decoration: underline;
  }
</style>
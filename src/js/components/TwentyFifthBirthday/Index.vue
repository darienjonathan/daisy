<template lang="pug">
  .wrapper
    modal(:isModalShown="isModalShown" :content="contents[clickedIndex]" @exit="onModalExit")
    .nav daichrstn
    .profile
      .top
        img.profile-picture(src="img/25th-birthday/pp.jpg")
        .numbers
          .numbers__group
            .numbers__value 230
            .numbers__label 投稿
          .numbers__group
            .numbers__value 942
            .numbers__label フォロワー
          .numbers__group
            .numbers__value 852
            .numbers__label フォロー中
      .info
        .info__name Daisy Christina
        .info__bio phlegmatic • ISFJ • melophilia • ailurophobia • Phil 1:21
      .box(
        :data-active="isAllOpened"
        @click="onItemClick(contents.length - 1)"
      ) お誕生日おめでとう！
      .catchphrase someone is a big fan that he made a fake instagram page of yours 🙃
    .grid
      .item(
        v-for="(content, index) of gridContents"
        @click="onItemClick(index)"
        :key="index"
        :data-visible="content.isVisible"
        :data-active="isAllOpened || (index === activeIndex)"
      )
        .item__character {{ content.japanese }}
        .item__character {{ content.romaji }}
    .troll.troll-first hayo cari apa hayo 😏
    .troll.troll-finish gak ada apa-apa 🤪
</template>

<script>
  import Modal from './Modal'
  import contents, { finalContent } from '@/data/25th-birthday/contents'

  export default {
    components: {
      Modal
    },
    data() {
      return {
        isModalShown: false,
        contents: contents.map((content, index) => ({
          ...content,
          isVisible: false,
          isPartOfGrid: content.isPartOfGrid === false ? false : true
        })),
        clickedIndex: null,
        activeIndex: null,
        isAllOpened: false
      }
    },
    computed: {
      gridContents() {
        return this.contents.filter(content => content.isPartOfGrid !== false)
      }
    },
    mounted() {
      setTimeout(() => {
        this.contents[0].isVisible = true
        this.activeIndex = 0
      }, 1000)
    },
    methods: {
      onItemClick(index) {
        this.clickedIndex = index
        this.isModalShown = true
      },
      onModalExit() {
        this.isModalShown = false
        if(this.clickedIndex !== this.activeIndex) return
        this.clickedIndex = null
        if(!this.contents.some(content => !content.isVisible)) {
          this.isAllOpened = true
          return
        }
        this.activeIndex = this.activeIndex + 1
        this.contents[this.activeIndex].isVisible = true
        if(this.activeIndex !== this.contents.length - 1) return
        setTimeout(() => {
          this.clickedIndex = this.activeIndex
          this.isModalShown = true
        }, 2000)
      }
    }
  }
</script>
<style lang="scss" scoped>

  $white: white;
  $grey: grey;
  $black: #262626;
  $margin-bottom: 15px;
  
  @mixin stand-out-font {
    font-size: 13px;
    font-weight: bold;
  }

  @mixin normal-font {
    font-size: 12px;
  }

  @keyframes border-color-animation {
    0% {
      border-color: $grey;
    }
    100% {
      border-color: turquoise;
    }
  }

  .wrapper {
    position: relative;
    height: 3000px;
    color: $black;
    font-weight: normal;
  }

  .nav {
    height: 44px;
    line-height: 44px;
    text-align: center;
    border-bottom: 1px solid $grey;
    font-size: 14px;
    font-weight: bold;
  }

  .profile {
    margin: auto 16px;
  }

  .top {
    margin: $margin-bottom 0;
    display: flex;
    align-items: center;
  }

  .profile-picture {
    width: 77px;
    height: 77px;
    border-radius: 50%;
    border: 2px solid $white;
    box-shadow: 0 0 0 1px $grey;
    margin-right: 28px;
  }

  .numbers {
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    &__group {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 0 0 auto;
    }
    &__value {
      @include stand-out-font;
    }
    &__label {
      @include normal-font;
    }
  }

  .info {
    margin-bottom: $margin-bottom;
    &__name {
      @include stand-out-font;
    }
    &__bio {
      @include normal-font;
    }
  }

  .box {
    @include stand-out-font;
    width: 100%;
    height: 28px;
    line-height: 28px;
    border: 1px solid $grey;
    border-radius: 5px;
    text-align: center;
    margin-bottom: $margin-bottom;
    pointer-events: none;
    &[data-active="true"] {
      animation: border-color-animation 0.75s infinite;
      animation-direction: alternate;
      pointer-events: auto;
    }
  }

  .catchphrase {
    margin-bottom: 2 * $margin-bottom;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
  }

  .grid {
    width: 375px;
    height: 375px;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 2px;
    grid-column-gap: 2px;
  }

  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 2px solid $grey;
    opacity: 0;
    pointer-events: none;
    transition: opacity 1s;
    &[data-visible="true"] {
      opacity: 1;
      pointer-events: auto;
    }
    &[data-active="true"] {
      animation: border-color-animation 0.75s infinite;
      animation-direction: alternate;
    }
    &__character {
      text-align: center;
      font-size: 24px;
      font-weight: bold;
      font-family: serif;
    }
  }

  .troll {
    @include stand-out-font;
    position: absolute;
    width: 100%;
    text-align: center;
    color: darkred;
  }

  .troll-first {
    bottom: 50%;
  }

  .troll-finish {
    bottom: 20px;
  }

</style>
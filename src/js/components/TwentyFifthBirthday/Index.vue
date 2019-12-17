<template lang="pug">
  .wrapper
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
      .box お誕生日おめでとう
    .grid
      .item
        .item__character O
        .item__character お
      .item
        .item__character TAN
        .item__character 誕
      .item
        .item__character JO
        .item__character 生
      .item
        .item__character BI
        .item__character 日
      .item
        .item__character O
        .item__character お
      .item
        .item__character ME
        .item__character め
      .item
        .item__character DE
        .item__character で
      .item
        .item__character TO
        .item__character と
      .item
        .item__character U
        .item__character う
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>

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

  .wrapper {
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
    border: 2px solid white;
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
    border: 1px solid grey;
    border-radius: 5px;
    text-align: center;
    margin-bottom: 2 * $margin-bottom;
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
    border: 1px solid $grey;
    &__character {
      text-align: center;
      font-size: 24px;
      font-weight: bold;
      font-family: serif;
    }
  }
</style>
<template lang="pug">
  .lyrics(:class="className")
    .top
      template(v-for="lyric in top")
        pipe(v-if="lyric == '|'")
        template(v-else) {{ lyric }}
    .bottom
      template(v-for="lyric in bottom")
        pipe(v-if="lyric == '|'")
        template(v-else) {{ lyric }}
</template>

<script>

import Pipe from './Pipe';

export default {
  name: "Lyrics",
  props: ['top', 'bottom', 'className'],
  components: {
    Pipe
  }
}
</script>

<style lang="scss" scoped>

</style>

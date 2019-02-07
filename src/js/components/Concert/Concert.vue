<template lang="pug">
  .concert
    transition(name="fade")
      .loading(v-if="!loaded" key="notLoaded") Loading...

      .wrapper(:class="wrapperClass" v-else key="loaded")

        transition(name="fade" v-on:after-enter="startPlay" mode="out-in")
          box.box--prompt.box--prompt-button(v-if="!start" key="notStarted")
            button.prompt-button(v-on:click="initiate")
              | Tap to start

          box.box--prompt.box--prompt-scroll(:style="{'opacity': playStart ? getOpacity.prompt : 0 }" v-else key="started")
            | Scroll Down Gently ↓

        box(:style="{'opacity': getOpacity.daisy }")
          | Dear Daisy...

        box(:style="{'opacity': getOpacity.video }")
          video.content__video(src="/video/video.mp4" muted playsinline v-play="start")

        box(:style="{'opacity': getOpacity.goodluck }")
          .content__top
            span.content__text.content__text--kanji 頑張って
            span.content__text.content__text--romaji Ganbatte!
          .content__bottom Good Luck!

        box(:style="{'opacity': getOpacity.pray }")
          .content__top
            span.content__text.content__text--kanji 祈って
            span.content__text.content__text--romaji Inotte...
          .content__bottom Pray...

        box(:style="{'opacity': getOpacity.havefun }")
          .content__top
            span.content__text.content__text--kanji 楽しんで
            span.content__text.content__text--romaji Tanoshinde.
          .content__bottom Have Fun.

        box.box--closing(:style="{'opacity': getOpacity.closing }")
          .content__top
            video.content__video(src="/video/video.mp4" muted playsinline v-play="start")
          .content__bottom
            | May all your hardwork pays off.
            br
            br
            | Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.
            br
            br
            | (Colossians 3:23)

</template>

<style lang="scss" scoped>

@import "common";

/* transition */

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

/* loading */
.loading {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* wrapper */

.wrapper:before {
  content: "";
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: image-url('bg_icon.jpg');
  background-repeat: repeat;
  background-size: 60px 60px;
  background-position: center;
}
.wrapper--pre-click {
  height: 100vh;
}
.wrapper--post-click {
  height: calc(14*100vh);
}

/* prompt */

.box--prompt-button {
  z-index: 1;
}

.prompt-button {
  color: rgb(88, 226, 222);
  border: 1px solid rgb(88, 226, 222);
  cursor: crosshair;
  background: none;
  font-size: 1.1rem;
  padding: 10px;
}

/* content-specific */
.box--closing {
  font-size: 1rem;
}
.content__video {
  width: 300px;
}

.content__text {
  padding: 1px 10px;
}
.content__text--kanji {
  font-size: 1.2rem;
  border-right: 2px solid rgb(88, 226, 222);
}

</style>

<script>

import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
import * as _ from 'lodash';

import Box from './Box';

import loadSound from '@/lib/loadSound';
import calc from '@/lib/concert/calc';

export default {
  name: "Concert",
  data: function() {
    return {
      playStart: 0
    }
  },
  components: {
    Box
  },
  computed: {
    ...mapState('concert', {
      start: state => state.start,
      loaded: state => state.loaded,
      elPos: state => state.elPos,
      volume: state => state.volume,
      audioContext: state => state.audioContext,
      gainNode: state => state.gainNode
    }),
    ...mapGetters('concert', ["getOpacity"]),
    wrapperClass() {
      return this.start ? 'wrapper--post-click' : 'wrapper--pre-click';
    }
  },
  methods: {
    ...mapMutations('concert', ["setLoaded", "setStart", "setOpacity", "setVolume"]),
    ...mapActions('concert', ['mountAudio']),
    initiate: function() {
      this.setStart();
      if(this.audioContext) this.audioContext.start();
    },
    setElementOpacity: function() {
      Object.keys(this.elPos).forEach(el => {
        this.setOpacity({
          el,
          opacity: calc.opacity(calc.pos(this.elPos[el]))
        });
      });
    },
    setAudioVolume: function() {
      let maxVolEl = this.elPos.video;
      let minVolEl = this.elPos.pray;
      this.setVolume({
        volume: calc.volume(calc.pos(maxVolEl), calc.pos(minVolEl))
      });
      this.gainNode.gain.value = this.volume;
      console.log({ volume: this.gainNode.gain.value });
      this.audioContext.connect(this.gainNode);
    },
    startPlay: function(el) {
      this.playStart = 1;
    }
  },
  directives: {
    play: {
      update: function(el, binding) {
        if(binding.expression) {
          el.play();
        } else {
          el.pause();
        }
      }
    }
  },
  mounted() {
      loadSound('/audio/audio.mp3')
        .then(({ source, gainNode }) => {
          this.setLoaded();
          this.mountAudio({
            audioContext: source,
            gainNode
          });
          window.addEventListener('scroll', _.throttle(() => {
            this.setElementOpacity();
            this.setAudioVolume();
          }, 25));
        })
  }
  
}
</script>

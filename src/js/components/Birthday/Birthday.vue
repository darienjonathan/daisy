<template lang="pug">
  .birthday
    transition(name="fade")
      .loading(v-if="!loaded" key="notloaded")
        | Loading...
      .wrapper(v-else key="loaded")

        transition(name="fade" mode="out-in" v-on:after-enter="startPlay")
          .prompt(v-if="!start" key="notStarted")
            .prompt-wait(v-show="!isBirthday")
              | Whoops, it's not your birthday yet!
              br
              br
              | You'll wait a little more, won't you? 😉
            .prompt-play(v-show="isBirthday")
              | Hi Daisy! I've made a song for your birthday!
              br
              | Please kindly listen by tapping the button below:
              br
              br
              br
              button.prompt-button(@click="setStart")
                | Tap to play

          .lyrics_container(v-else key="start")
            lyrics.block(
              v-for="(lyric, idx) in lyrics"
              :className="lyric.className"
              :top="lyric.top"
              :bottom="lyric.bottom"
              :key="idx"
              ref="lyric") 

            .block.greeting
              .greeting__content
                | Happy Birthday, dear!
</template>

<script>

import Pipe from './Pipe';
import Lyrics from './Lyrics';
import { mapState, mapMutations } from 'vuex';

import loadSound from '@/lib/loadSound';
import lyrics from '@/lib/birthday/lyrics';

const birthdayTime = 1545411600000;
const tempo = 74;
const frame = 16;
const audioDuration = 133;

export default {
  name: "Birthday",
  components: {
    Pipe,
    Lyrics
  },
  data: function() {
    return {
      isBirthday: new Date().getTime() > birthdayTime,
      playStart: 0,
      lyrics
    }
  },
  computed: {
    ...mapState('birthday', {
      start: state => state.start,
      loaded: state => state.loaded,
      audioContext: state => state.audioContext,
      gainNode: state => state.gainNode,
    })
  },
  methods: {
    ...mapMutations('birthday', ['setStart', 'setLoaded', 'setAudioContext', 'setGainNode']),
    startPlay: function() {
      this.playStart = 1;
      this.lyrics
    }
  },
  mounted() {
    loadSound('/audio/birthday.mp3')
      .then(({ source, gainNode }) => {
        this.setLoaded();
        this.setAudioContext({
          audioContext: source
        });
        this.setGainNode({
          gainNode
        });
      })
  }
}
</script>

<style lang="scss" scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.birthday {
  margin: 0;
  font-weight: bold;
  color: rgb(80, 150, 144);
  text-align: center;

  font-size: 1.45rem;
}

/* loading */
.loading, .prompt {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100vw;
  height: 70vw;

  background-color: rgba(255, 255, 255, 0.8);

  margin: 0 auto;
}

.prompt-wait, .prompt-play {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  box-sizing: border-box;

  width: 100vw;
  padding: 50px;

  font-size: 1rem;
  color: black;
}

.prompt-play {
  padding: 20px;
}

.prompt-button {
  color: black;
  border: 3px solid rgb(88, 226, 222);
  background: none;
  font-size: 1.1rem;
  font-weight: bold;
  font-family: inherit;
  padding: 10px;
}

/* wrapper */
.wrapper {
  height: 100vh;
  // background-image: url('/img/bg_birthday.jpg');
  background-size: cover;
  background-position: left;
}

.block {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  height: 70vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  
  padding: 30px;
  box-sizing: border-box;
  transition: opacity 1s linear;

  background-color: rgba(255, 255, 255, 0.8);
}

.turquoise {
  background-color: rgba(88, 226, 222, 0.6);
  color: white;
}

.fade-in {
  opacity: 1;
  z-index: 1;
}

.fade-out {
  opacity: 0;
  z-index: 0;
}

</style>

import lyrics from '@/data/birthday/lyrics';

export default {
    namespaced: 'true',
    state: {
      loaded: 0,
      start: 0,
      finish: 0,
      audioContext: null,
      gainNode: null,
      lyrics: lyrics.map(lyric => ({ ...lyric, opacity: 0 })),
      frame: 16,
      tempo: 74
    },
    mutations: {
      setLyricOpacity(state, payload) {
        state.lyrics[payload.index].opacity = payload.opacity ;
      },
      setStart(state) {
        state.start = 1;
      },
      setFinish(state) {
        state.finish = 1;
      },
      setLoaded(state) {
        state.loaded = 1;
      },
      setAudioContext(state, payload) {
        state.audioContext = payload.audioContext;
      },
      setGainNode(state, payload) {
        state.gainNode = payload.gainNode;
      },
    },
    getters: {

    },
    actions: {
      mountAudio({ commit }, payload) {
        commit({
          type: 'setAudioContext',
          audioContext: payload.audioContext
        });
        commit({
          type: 'setGainNode',
          gainNode: payload.gainNode
        });
      },
      animateLyrics({ dispatch, state }) {
        const { lyrics, frame, tempo } = state;
        lyrics.forEach((_, index) => {
          setTimeout(() => dispatch({
            type: 'showLyric',
            index, opacity: 1
          }), 1000*(frame/tempo*60)*index);
        })
      },
      showLyric({ commit, state }, payload) {
        state.lyrics.forEach((_, index) => {
          let newOpacity = index === payload.index ? payload.opacity : 0;
          commit({
            type: 'setLyricOpacity',
            index,
            opacity: newOpacity
          })
        })
      },
      finishLyricAnimation({ commit, state }) {
        commit({
          type: 'setLyricOpacity',
          index: state.lyrics.length - 1,
          opacity: 0
        });
        commit('setFinish');
      }
    }
};

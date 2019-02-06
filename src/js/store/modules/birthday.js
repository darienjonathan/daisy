export default {
    namespaced: 'true',
    state: {
      loaded: 0,
      start: 0,
      audioContext: null,
      gainNode: null,
    },
    mutations: {
      setStart(state) {
        state.start = 1;
      },
      setLoaded(state, payload) {
        state.loaded = 1;
      },
      setAudioContext(state, payload) {
        state.audioContext = payload.audioContext
      },
      setGainNode(state, payload) {
        state.gainNode = payload.gainNode
      },
    },
    getters: {

    },
    actions: {

    }
};

export default {
    namespaced: 'true',
    state: {
      loaded: 0,
      start: 0,
      volume: 0,
      audioContext: null,
      gainNode: null,
      elPos: {
        prompt: {
          baseHeightMult: 0, elementIntervalMult: 0, opacity: 1
        },
        daisy: {
          baseHeightMult: 1, elementIntervalMult: 0, opacity: 0
        },
        video: {
          baseHeightMult: 1, elementIntervalMult: 1, opacity: 0
        },
        goodluck: {
          baseHeightMult: 1, elementIntervalMult: 2, opacity: 0
        },
        pray: {
          baseHeightMult: 1, elementIntervalMult: 3, opacity: 0
        },
        havefun: {
          baseHeightMult: 1, elementIntervalMult: 4, opacity: 0
        },
        closing: {
          baseHeightMult: 1, elementIntervalMult: 5, opacity: 0
        }
      }
    },
    mutations: {
      setLoaded(state) {
        state.loaded = 1;
      },
      setStart(state) {
        state.start = 1;
      },
      setOpacity(state, payload) {
        state.elPos[payload.el].opacity = payload.opacity;
      },
      setVolume(state, payload) {
        state.volume = payload.volume;
      },
      setAudioContext(state, payload) {
        state.audioContext = payload.audioContext;
      },
      setGainNode(state, payload) {
        state.gainNode = payload.gainNode;
      }
    },
    getters: {
      getOpacity: state => {
        let obj = {};
        Object.keys(state.elPos).forEach(el => obj[el] = state.elPos[el].opacity);
        return obj;
      }
    },
    actions: {
    }
};

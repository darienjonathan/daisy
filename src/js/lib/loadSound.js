export default function(filePath) {
  var context = 'AudioContext' in window
  ? new AudioContext()
  : new webkitAudioContext();

  var source = context.createBufferSource();
  var gainNode = context.createGain();
  
  return new Promise((resolve, reject) => {
    var req = new XMLHttpRequest();
    req.open('GET', filePath, true);
    req.responseType = 'arraybuffer';
    req.onload = function(){
      context.decodeAudioData(req.response, function(buffer){
        source.buffer = buffer;
        gainNode.gain.value = 0;
        gainNode.connect(context.destination);
        source.connect(gainNode);
        resolve(({ source, gainNode }));
      }, function(err){
        console.log(`Error: ${err}`);
      });
    };
    req.onerror = () => reject(({ source, gainNode }))
    req.send();
  })
}
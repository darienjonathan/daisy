let lyrics = 
[
  {
    className: null,
    top: ['syukur satu tahun Tuhan','plihara'],
    bottom: ['berkat a','nugrahNya melimpah','besar bagimu']
  },
  {
    className: null,
    top: ['kasih','dan pimpinanNya dalam hi','dupmu'],
    bottom: ['jadi sak','si kebaikan Tuhan ba','gi hidupmu']
  },
  {
    className: null,
    top: ['Ku berdo','a agar kau tetap seti','a dalam Tuhan'],
    bottom: ['agar','trang Kristus terpancar mela','luimu']
  },
  {
    className: null,
    top: ['Teruslah','melayani Tuhan dan mu','liakan namaNya'],
    bottom: ['jadi tla','dan dan berkat bagi skliling','mu']
  },
  {
    className: 'turquoise',
    top: ['Smoga Tu','han, trus menyinari wajah','Nya kepadamu'],
    bottom: ['dan','melimpahkan damai sejahtra','bagimu']
  },
  {
    className: 'turquoise',
    top: ['Aku bersyu','kur, atas hari ulang','tahun sahabatku'],
    bottom: ['slamat hari','ulang tahun Daisy Christi','na']
  },
  {
    className: 'turquoise',
    top: ['Smoga Tu','han, trus menyinari wajah','Nya kepadamu'],
    bottom: ['dan','melimpahkan damai sejahtra','bagimu']
  },
  {
    className: 'turquoise',
    top: ['Aku bersyu','kur, atas hari ulang','tahun sahabatku'],
    bottom: ['slamat hari','ulang tahun Daisy Christi','na']
  },
  {
    className: 'turquoise',
    top: ['slamat hari','ulang tahun Daisy Christi','na'],
    bottom: []
  }
];

const insertBetweenElements = (arr, char) => arr.reduce((accumulator, current, index) => {
    accumulator.push(current)
    if(index < arr.length - 1) accumulator.push(char)
    return accumulator;
}, []);

lyrics = lyrics.map(lyric => {
  let { className, top, bottom } = lyric;
  return {
    className,
    top: insertBetweenElements(top, '|'),
    bottom: insertBetweenElements(bottom, '|'),
  }
});

export default lyrics;
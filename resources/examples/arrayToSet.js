const array1 = [
  '#112',
  '#14B',
  '#152240',
  '#15E',
  '#19152F',
  '#1C1C2C',
  '#1C1D2A',
  '#1D1028',
  '#1D1C2F',
  '#1D2545',
  '#1D2545',
  '#1D2555',
  '#201039',
  '#201C39',
  '#202135',
  '#221B25',
  '#221D25',
  '#22E',
  '#235',
  '#235',
  '#235',
  '#235',
  '#25E',
  '#27E',
  '#29153A',
  '#295',
  '#2A2040',
  '#2A255A',
  '#2BD',
  '#2C203C',
  '#327',
  '#34D',
  '#369ec7',
  '#38A',
  '#38A',
  '#38A',
  '#38A',
  '#38A',
  '#38A',
  '#38A',
  '#38A',
  '#38A',
  '#38A',
  '#39E',
  '#426',
  '#426',
  '#42B',
  '#42b',
  '#458588',
  '#49F',
  '#4AE',
  '#4AE',
  '#4AE',
  '#4AE',
  '#506899',
  '#527',
  '#52A',
  '#52A',
  '#52A',
  '#52A',
  '#53E',
  '#53E',
  '#53E',
  '#55F',
  '#58E',
  '#5AE',
  '#5BE',
  '#5BE',
  '#5BE',
  '#618',
  '#618',
  '#64C',
  '#667',
  '#667',
  '#67F',
  '#689D6A',
  '#689d6a',
  '#694',
  '#694',
  '#698',
  '#6AF',
  '#6BF',
  '#6CE',
  '#6DF',
  '#6EB',
  '#716',
  '#716',
  '#716',
  '#716',
  '#716',
  '#716',
  '#716',
  '#716',
  '#716',
  '#716',
  '#722',
  '#749',
  '#752',
  '#771166',
  '#7AD',
  '#7B5',
  '#7C2',
  '#7ec16e',
  '#848',
  '#8AE180',
  '#8B3',
  '#8B3',
  '#8B3',
  '#8BD',
  '#8D5',
  '#8DA',
  '#8DA',
  '#8DA',
  '#8DA',
  '#8DC',
  '#8ec07c',
  '#928374',
  '#95B',
  '#95B',
  '#98971A',
  '#98971a',
  '#99C6CA',
  '#99c6ca',
  '#9C3',
  '#9C8',
  '#9C8',
  '#9E8',
  '#A5B',
  '#A5E',
  '#AD3',
  '#ADC',
  '#ADC',
  '#AE4',
  '#AE4',
  '#AE4',
  '#B16286',
  '#B35',
  '#B35',
  '#B35',
  '#B5C033',
  '#B6B',
  '#b8bb26',
  '#B98',
  '#BB3',
  '#BD2',
  '#BD2',
  '#BE5',
  '#BE5',
  '#C02030',
  '#C02030',
  '#C0B0A0',
  '#C32',
  '#C3B',
  '#C60',
  '#C68',
  '#cc241d',
  '#CC241D',
  '#D1A',
  '#D25',
  '#d3869b',
  '#D4C',
  '#D5A',
  '#D5A',
  '#d5c4a1',
  '#d65d0e',
  '#D65',
  '#D66282',
  '#D67',
  '#d79921',
  '#D79',
  '#D89',
  '#D89',
  '#DB9',
  '#DCA',
  '#DCA',
  '#DCA',
  '#DCA',
  '#DCA',
  '#DCA',
  '#DCA',
  '#DCA',
  '#DCA',
  '#DCA',
  '#DDBC9A',
  '#DDCCAA',
  '#DDD',
  '#DDD',
  '#DF8',
  '#E11',
  '#E1A',
  '#E25',
  '#E35',
  '#E3D',
  '#E42C3E',
  '#E43',
  '#E47',
  '#E47',
  '#E47',
  '#E47',
  '#E47',
  '#E5D',
  '#E7A931',
  '#E81',
  '#E85',
  '#E85',
  '#E8D',
  '#EB5',
  '#ebdbb2',
  '#EDA',
  '#EDA',
  '#EDA',
  '#EDA',
  '#EDA',
  '#EDE',
  '#EE3',
  '#F15',
  '#F15',
  '#F15',
  '#F15',
  '#F15',
  '#F1A',
  '#F42',
  '#f42c3e',
  '#F42C3E',
  '#F42',
  '#F45',
  '#F45',
  '#F73',
  '#F73',
  '#F91',
  '#FABD2F',
  '#fabd2f',
  '#FB9',
  '#FBA',
  '#FC5',
  '#FC6',
  '#FC6',
  '#FC6',
  '#FC6',
  '#FC6',
  '#FC6',
  '#FDB92F',
  '#fe8019',
  '#FEB',
  '#FEC',
  '#FEC',
  '#FEC',
  '#FEC',
  '#FED',
  '#FFF'
];

const array2 = [...new Set(array1)];
array2.forEach(value => console.log("'" + value + "',"));
// console.log('array2', array2);
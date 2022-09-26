let optionList = document.getElementById('color-select').options;
let options = [
  {
    text: 'Select an Option',
    value: 'white',
    selected: true
  },
  {
    text: 'Red',
    value: 'red'
  },
  {
    text: 'Green',
    value: 'green'
  },
  {
    text: 'Blue',
    value: 'blue'
  }
];

function colorFunction(color) {     
    document.body.style.backgroundColor = color;
  }
 
options.forEach(option =>
  optionList.add(
    new Option(option.text, option.value, option.selected)
  )
);
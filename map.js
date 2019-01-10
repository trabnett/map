var words = ["ground", "control", "to", "major", "tom"];

function map(word, callback) {
  arr = [];
  for (var item of word) {
    arr.push(callback(item));
  };
  return arr;
};

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});
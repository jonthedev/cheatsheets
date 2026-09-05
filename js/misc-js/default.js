const greet = (person, greeting = "hi") => {
  console.log(`${greeting} ${greeting}`);
};

const blah = (x, y = [1, 2, 3]) => {
  console.log(x, y);
};

blah(2, [4]);

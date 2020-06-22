// console.log(process.argv.slice(2, 3));

const parseArgs = require("minimist");
const colors = require("colors");
const command = parseArgs(process.argv.slice(2, 3));
delete command._;
// console.log(command);

const handleCommand = ({ add, remove, list }) => {
  // console.log(add, remove, list);
  if (add) {
    if (typeof add !== "string") {
      return console.log("wpisz nazwę dodawanego zadania (tekst!!!)".red);
    } else if (add.length < 7) {
      return console.log("nazwa zadania musi mieć więcej niż 6 znaków".red);
    }
    console.log("będę dodawać coś");
  } else if (remove) {
    console.log("będę coś usuwać");
  } else if (list) {
    console.log("pokazuję listę");
  } else {
    console.log("Nie rozumiem polecenia");
  }
};

handleCommand(command);

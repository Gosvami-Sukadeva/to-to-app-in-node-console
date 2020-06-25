const handleData = require("./handleData");

const handleCommand = ({ add, remove, list }) => {
  // console.log(add, remove, list);
  if (add) {
    if (typeof add !== "string") {
      return console.log("wpisz nazwę dodawanego zadania (tekst!!!)".red);
    } else if (add.length < 7) {
      return console.log("nazwa zadania musi mieć więcej niż 6 znaków".red);
    }

    handleData(1, add);
  } else if (remove) {
    if (typeof remove !== "string" || remove.length < 7) {
      return console.log(
        "wpisz nazwę usuwanego zadania. To musi być tekst i musi mieć więcej niż 6 znaków"
          .red
      );
    }
    handleData(2, remove);
  } else if (list || list === "") {
    handleData(3, null);
  } else {
    console.log(
      'Nie rozumiem polecenia. Użyj --add="nazwa zadania",--remove="nazwa zadania" lub opcji --list'
        .red
    );
  }
};

module.exports = handleCommand;

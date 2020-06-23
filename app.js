// console.log(process.argv.slice(2, 3));

const parseArgs = require("minimist");
const colors = require("colors");
const fs = require("fs");
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
    );
  }
};

const handleData = (type, title) => {
  //type - number (1 - add; 2 - remove; 3 - list)
  // title(string || null)

  let data = fs.readFileSync("data.json");
  // const data = fs.readFileSync("data.json", "utf8");
  // let data = fs.readFileSync("data.json");
  //
  // data = data.toString();
  const tasks = JSON.parse(data);
  console.log(tasks);

  if (type === 1 || type === 2) {
    isExisted = tasks.find((task) => task.title === title) ? true : false;
    if (type === 1 && isExisted) {
      return console.log("takie zadanie już istnieje");
    } else if (type === 2 && !isExisted) {
      return console.log("Nie mogę usunąć zadania, które nie istnieje");
    }
  }
  switch (type) {
    case 1:
      console.log("dodaje zadanie");
      const id = tasks.length + 1;
      tasks.push({ id, title });
      console.log(tasks);
      const dataJSON = JSON.stringify(tasks);
      console.log(dataJSON);
      fs.writeFileSync("data.json", dataJSON);
      console.log(`dodaje zadanie: ${title}`.white.bgGreen);
      break;

    case 2:
      console.log("usuwam zadanie");
      break;

    case 3:
      console.log("wyświetlam listę");
      break;
  }
};
handleCommand(command);

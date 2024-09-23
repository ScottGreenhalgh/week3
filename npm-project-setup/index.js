import chalk from "chalk";
import * as cowsay from "cowsay";

console.log(chalk.blue("Hello world!"));

console.log(
  cowsay.say({
    text: "Cow be talking ",
    e: "^^",
    T: "VV ",
  })
);

// ES2015 template literal
console.log(`
    CPU: ${chalk.red("90%")}
    RAM: ${chalk.green("40%")}
    DISK: ${chalk.yellow("70%")}
    `);

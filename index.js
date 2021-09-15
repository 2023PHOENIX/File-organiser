#!/usr/bin/nodecle

const path = require("path");
const fs = require("fs");
const { Console } = require("console");
const treeObj = require("./tree");
const organizeObj = require("./Organize");
const input = process.argv.slice(2);

const chalk = require("chalk");

// console.log(input);

let cmd = input[0];

switch (cmd) {
  case "pwd":
    console.log(chalk.redBright(process.cwd()));
    break;
  case "tree":
    treeObj.tree(input[1]);
    break;
  case "organize":
    organizeObj.organize(input[1]);
    break;
  case "help":
    HelperFn();
    break;
  default:
    console.log("₱ⱠɆ₳₴Ɇ ł₦₱Ʉ₮ ₵ØⱤⱤɆ₵₮ ₵Ø₥₥₳₦Đ... 😃");
}
// TODO: organise files into directory according to filetype.

// TODO: Making Tree for given directory

// TODO: Helper f/n.

function HelperFn() {
  console.log(
    chalk.bold.blue(`

        All the commands available:

    `)
  );
  console.log(
    chalk.yellowBright(`
            1. tree 'dir path' 
                this will return you tree veiw of the folder


            2. organize 'dir path'
                this will help you to organize the folder according to their extension


            3. Help Cmd
            `)
  );
}

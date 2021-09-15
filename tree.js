const path = require("path");
const fs = require("fs");
const chalk = require("chalk");
function treeFn(dirPath) {
  if (dirPath === undefined) {
    console.log(chalk.bold.bgRedBright("₭ł₦ĐⱠɎ Ɇ₦₮ɆⱤ V₳ⱠłĐ ₣łⱠɆ ₱₳₮Ⱨ"));
    return;
  }

  if (!fs.existsSync(dirPath)) {
    console.log(chalk.red("₱₳₮Ⱨ ĐØɆ₴ ₦Ø₮ ɆӾł₴₮"));
    console.log(chalk.blue(`Need Help....!!!
          use node index.js help
      `));
    return;
  }
  console.log("log it");

  TreeHelper(dirPath, "\t");
}

function TreeHelper(dirPath, indent) {
  // console.log(fs.lstatSync(dirPath).isFile());
  if (fs.lstatSync(dirPath).isFile()) {
    let fileName = path.basename(dirPath);
    console.log(chalk.blue(indent + "├── ", fileName));
  } else {
    let folderName = path.basename(dirPath);
    console.log(chalk.bold.greenBright(indent + "└── " + folderName));

    let childrens = fs.readdirSync(dirPath);
    // console.log(childrens);
    for (let i = 0; i < childrens.length; i++) {
      let child = childrens[i];
      let childPath = path.join(dirPath, child);
      // console.log(childPath);
      TreeHelper(childPath, indent + "\t");
    }
  }
}

module.exports = {
  tree: treeFn,
};

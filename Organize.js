const path = require("path");
const fs = require("fs");
const chalk = require("chalk");


let types = {
  media: ["mp4", "mkv"],
  archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
  documents: [
    "docx",
    "doc",
    "pdf",
    "csv",
    "xlsx",
    "xls",
    "odt",
    "ods",
    "odp",
    "odg",
    "odf",
    "txt",
    "ps",
    "tex",
    "java",
    "cpp",
    "js",
    "css",
    "html",
  ],
  app: ["exe", "dmg", "pkg", "deb"],
};



function organizeFn(dirPath) {
  /*
          path -> read the files inside the given path
          create 4 folders -> send them to folder according to their file.extension.
      */
  if (dirPath === undefined) {
    console.log(chalk.bold.bgRedBright("₭ł₦ĐⱠɎ Ɇ₦₮ɆⱤ V₳ⱠłĐ ₣łⱠɆ ₱₳₮Ⱨ"));
    return;
  }

  if (!fs.existsSync(dirPath)) {
    console.log(chalk.red("₱₳₮Ⱨ ĐØɆ₴ ₦Ø₮ ɆӾł₴₮"));
    return;
  }

  let destPath = path.join(dirPath, "organized_files");
  if (!fs.existsSync(destPath)) {
    fs.mkdirSync(destPath);
  }
  organizeHelper(dirPath, destPath);
}
function organizeHelper(src, dest) {
  let childrens = fs.readdirSync(src);
  for (let child of childrens) {
    // console.log(child);
    let childPath = path.join(src, child);
    // console.log(childPath);

    if (fs.lstatSync(childPath).isFile()) {
      let category = GetCategorie(child);

      if (category !== undefined) {
        console.log(chalk.yellow(`child belong to ${category}`));

        sendFile(childPath, category, dest);
      }
    }
  }
}

function sendFile(srcFilePath, category, destPath) {
  let categoryPath = path.join(destPath, category);
  console.log(chalk.grey(categoryPath));
  if (!fs.existsSync(categoryPath)) {
    fs.mkdirSync(categoryPath);
  }

  let fileName = path.basename(srcFilePath);
  let destFilePath = path.join(categoryPath, fileName);
  fs.copyFileSync(srcFilePath, destFilePath);
  console.log(chalk.blueBright(`${fileName} is copies successfully....`));
}

function GetCategorie(name) {
  let extension = path.extname(name).slice(1);

  for (let type in types) {
    let arrayFile = types[type];

    for (let i = 0; i < arrayFile.length; i++) {
      if (extension === arrayFile[i]) {
        return type;
      }
    }
  }
}

module.exports = {
  organize: organizeFn,
};

const path = require('path');
const fs = require('fs');



const input = process.argv.slice(2);

console.log(input);

let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}


let cmd = input[0];


switch(cmd){
    case 'tree':
        treeFn(input[1]);
        break;
    case 'organize':
        organizeFn(input[1]);
        break;
    case 'help':
        HelperFn();
        break;
    default:
        console.log('₱ⱠɆ₳₴Ɇ ł₦₱Ʉ₮ ₵ØⱤⱤɆ₵₮ ₵Ø₥₥₳₦Đ... 😃');
}
// TODO: organise files into directory according to filetype.

function organizeFn(dirPath){
    if(dirPath===undefined){
        console.log('₭ł₦ĐⱠɎ Ɇ₦₮ɆⱤ V₳ⱠłĐ ₣łⱠɆ ₱₳₮Ⱨ');
        return;
    }


    if(!fs.existsSync(dirPath)){
        console.log('₱₳₮Ⱨ ĐØɆ₴ ₦Ø₮ ɆӾł₴₮');
        return;
    }

    let destPath = path.join(dirPath,'organized_files');
    fs.mkdirSync(destPath);
    organizeHelper(dirPath,destPath);

    
}
// TODO: Making Tree for given directory 
function treeFn(path){
    /*
        path -> read the files inside the given path
        create 4 folders -> send them to folder according to their file.extension.
    */

    
}


// TODO: Helper f/n.

function HelperFn(){
    console.log(`
        All the commands available:

    `);
}




function organizeHelper(src,dest){

    let childrens = fs.readdirSync(src);
    for(let child of childrens){
        // console.log(child);
        let childPath = path.join(src,child);
        // console.log(childPath);

        if(fs.lstatSync(childPath).isFile()){
            console.log(child);
        }
    }
}
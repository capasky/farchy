
const fs = require('fs');
const path = require('path');
const archy = require('archy');

function readDirDeep(dirPath, tree) {
  const files = fs.readdirSync(dirPath);
  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    if (stat) {
      const fileObj = {
        label: file,
        ext: path.extname(file),
        directory: stat.isDirectory(),
      };
      fileObj.filename = path.basename(file, fileObj.ext);
      if (fileObj.directory) {
        fileObj.nodes = [];
        readDirDeep(filePath, fileObj.nodes);
      }
      tree.push(fileObj);
    }
  });
}

const cwd = process.cwd();
const hierarchies = {
  label: path.basename(cwd),
  nodes: [],
};

readDirDeep(cwd, hierarchies.nodes);

const s = archy(hierarchies);
console.log(s);

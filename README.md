# farchy [![npm version](https://img.shields.io/npm/v/farchy.svg?style=flat-square)](https://www.npmjs.com/package/farchy)
Print file hierarchies use `npm ls` style

```sh
npm install farchy -g
cd /path/to/dir/
farchy
```
will show the file hierarchies as:
```
mcss
├── base.mcss
├─┬ grid
│ ├── editor.mcss
│ └── index.mcss
├── grid.mcss
├─┬ icon
│ ├── font.mcss
│ └── images.mcss
├─┬ module
│ └── modal.mcss
├── module.mcss
├─┬ unit
│ ├── form.mcss
│ └── numberInput.mcss
└── unit.mcss
```

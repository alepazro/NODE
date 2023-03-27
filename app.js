
require("dotenv").config();
const fs = require('fs')
const arrayOfFiles=[];
const path=process.env.RUTA;
const filtro=process.env.FILTRO;

readAllFiles(path, arrayOfFiles);


async function readAllFiles(path, arrayOfFiles = []){
    const files = fs.readdirSync(path)
	files.forEach(file => {
		const stat = fs.statSync(`${path}/${file}`)
		if(stat.isDirectory()){
			readAllFiles(`${path}/${file}`, arrayOfFiles)
		}else{
			arrayOfFiles.push(`${path}/${file}`)
            if(`${file}`.includes(filtro)){
                fs.unlinkSync(`${path}/${file}`)
                console.log("---------Eliminado el archivo--------");
                console.log(`${file}`);
            }
		}

	}
	)
	return arrayOfFiles
}
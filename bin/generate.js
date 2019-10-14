const path = require("path");
const fs = require("fs-extra");

module.exports = function(projectName) {
    const targetDir = path.resolve(process.cwd() , projectName);
    const templateDir = path.resolve(__dirname, "../template");
    if(fs.existsSync(targetDir)) {
        console.log(`<${projectName}> has already been created, please change the dist.`);
    } else {
        try {
        fs.mkdirSync(targetDir);
        fs.copySync(templateDir, path.resolve(targetDir))
            console.log('Your project has been completed successfully.');
            console.log('Thank you for using sve-record.');
        } catch(e) {
            console.log(e);
        }
    }   
}
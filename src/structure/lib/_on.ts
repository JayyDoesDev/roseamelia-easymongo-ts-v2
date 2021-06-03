export = async (message?: string) => {
    const chalk = require('chalk')
    if(!message) {
        return console.log(`${chalk.green("[ Easymongo ]")} Mongodb is now connected`)
    } else {
        return console.log(`${chalk.green("[ Easymongo ]")} ` + message)
    }
}
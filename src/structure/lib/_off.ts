export = async (message?: string) => {
    const chalk = require('chalk')
    if(!message) {
        return console.log(`${chalk.red("[ Easymongo ]")} Mongodb is disconnected`)
    } else {
        return console.log(`${chalk.red("[ Easymongo ]")} ` + message)
    }
}
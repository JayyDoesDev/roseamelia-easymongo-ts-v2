"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
module.exports = (message) => __awaiter(void 0, void 0, void 0, function* () {
    const chalk = require('chalk');
    if (!message) {
        return console.log(`${chalk.green("[ Easymongo ]")} Mongodb is now connected`);
    }
    else {
        return console.log(`${chalk.green("[ Easymongo ]")} ` + message);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX29uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3N0cnVjdHVyZS9saWIvX29uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxpQkFBUyxDQUFPLE9BQWdCLEVBQUUsRUFBRTtJQUNoQyxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDOUIsSUFBRyxDQUFDLE9BQU8sRUFBRTtRQUNULE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLDJCQUEyQixDQUFDLENBQUE7S0FDakY7U0FBTTtRQUNILE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsQ0FBQTtLQUNuRTtBQUNMLENBQUMsQ0FBQSxDQUFBIn0=
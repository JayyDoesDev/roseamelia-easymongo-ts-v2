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
Object.defineProperty(exports, "__esModule", { value: true });
class MongoClient {
    constructor(ops = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }) {
        this.useNewUrlParser = ops.useNewUrlParser || true;
        this.useUnifiedTopology = ops.useUnifiedTopology || true;
        this.useFindAndModify = ops.useFindAndModify || false;
        this.useCreateIndex = ops.useCreateIndex || true;
        this.mongoose = require('mongoose');
        this._on = require('../structure/lib/_on');
        this._off = require('../structure/lib/_off');
        this._connect = require('../structure/lib/_connect');
    }
    on(message) {
        return __awaiter(this, void 0, void 0, function* () {
            this._on(message);
        });
    }
    off(message) {
        return __awaiter(this, void 0, void 0, function* () {
            this._off(message);
        });
    }
    connect(message) {
        return __awaiter(this, void 0, void 0, function* () {
            this._connect(message);
        });
    }
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            this.mongoose.disconnect();
        });
    }
}
exports.default = MongoClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3N0cnVjdHVyZS9DbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxNQUFxQixXQUFXO0lBZTVCLFlBQVksR0FBRyxHQUFHO1FBQ2QsZUFBZSxFQUFFLElBQUk7UUFDckIsa0JBQWtCLEVBQUUsSUFBSTtRQUN4QixnQkFBZ0IsRUFBRSxLQUFLO1FBQ3ZCLGNBQWMsRUFBRSxJQUFJO0tBQ3ZCO1FBSUcsSUFBSSxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQTtRQUNsRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsR0FBRyxDQUFDLGtCQUFrQixJQUFJLElBQUksQ0FBQTtRQUN4RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDLGdCQUFnQixJQUFJLEtBQUssQ0FBQTtRQUNyRCxJQUFJLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFBO1FBSWhELElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ25DLElBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUE7UUFDMUMsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQTtRQUM1QyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxDQUFBO0lBQ3hELENBQUM7SUFFSyxFQUFFLENBQUMsT0FBZ0I7O1lBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDckIsQ0FBQztLQUFBO0lBRUssR0FBRyxDQUFDLE9BQWdCOztZQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ3RCLENBQUM7S0FBQTtJQUVLLE9BQU8sQ0FBQyxPQUFnQjs7WUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUMxQixDQUFDO0tBQUE7SUFFSyxVQUFVOztZQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUE7UUFDOUIsQ0FBQztLQUFBO0NBQ0o7QUFwREQsOEJBb0RDIn0=
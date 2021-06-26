export default class MongoClient {
    /**
     * Mongo
     */
    private _on;
    private _off;
    private _connect;
    private mongoose;
    /**
     * ops
     */
    private useNewUrlParser: boolean;
    private useUnifiedTopology: boolean;
    private useFindAndModify: boolean;
    private useCreateIndex: boolean;
    constructor(ops = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }) {
        /**
         * Boolean ops
         */
        this.useNewUrlParser = ops.useNewUrlParser || true
        this.useUnifiedTopology = ops.useUnifiedTopology || true
        this.useFindAndModify = ops.useFindAndModify || false
        this.useCreateIndex = ops.useCreateIndex || true
        /**
         * Structure
         */
        this.mongoose = require('mongoose')
        this._on = require('../structure/lib/_on')
        this._off = require('../structure/lib/_off')
        this._connect = require('../structure/lib/_connect')
    }
    
    async on(message?: string) {
        this._on(message)
    }

    async off(message?: string) {
        this._off(message)
    }

    async connect(message?: string) {
        this._connect(message)
    }

    async disconnect() {
        this.mongoose.disconnect()
    }
}

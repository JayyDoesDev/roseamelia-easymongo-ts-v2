export default class MongoClient {
    /**
     * Mongo
     */
    public _on;
    public _off;
    public _connect;
    public mongoose;
    /**
     * ops
     */
    public useNewUrlParser: boolean;
    public useUnifiedTopology: boolean;
    public useFindAndModify: boolean;
    public useCreateIndex: boolean;
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
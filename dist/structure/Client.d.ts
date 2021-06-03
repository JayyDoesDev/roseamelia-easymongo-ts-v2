export default class MongoClient {
    _on: any;
    _off: any;
    _connect: any;
    mongoose: any;
    useNewUrlParser: boolean;
    useUnifiedTopology: boolean;
    useFindAndModify: boolean;
    useCreateIndex: boolean;
    constructor(ops?: {
        useNewUrlParser: boolean;
        useUnifiedTopology: boolean;
        useFindAndModify: boolean;
        useCreateIndex: boolean;
    });
    on(message?: string): Promise<void>;
    off(message?: string): Promise<void>;
    connect(message?: string): Promise<void>;
    disconnect(): Promise<void>;
}

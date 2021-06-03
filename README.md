# roseamelia/easymongo-ts-v2
 This is a typescript version of [@roseamelia/easymongo](https://www.npmjs.com/package/@roseamelia/easymongo)
All credit goes to [RoseAmelia](https://github.com/RoseAmelia)


## TypeScript Setup
```typescript
import { MongoClient } from '.'
const mongo: MongoClient = new MongoClient({
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})

mongo.connect("Mongodb Url")
mongo.on()

```

## JavaScript Setup
```javascript
const { MongoClient } = require(".");

const mongo = new MongoClient({
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

mongo.connect("Mongodb url");
mongo.on();
```

## Credits
[RoseAmelia](https://github.com/RoseAmelia)
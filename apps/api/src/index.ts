import 'dotenv/config'
import server from './server'
import { connectToDatabase } from './infra/mongodb';
import { Logger } from './utils/logger';

(async () => {
    try { await connectToDatabase();
    }
    catch { process.exit(1); }
    
    server.listen(process.env.PORT, () => {
        Logger.info(`Server started on port http:localhost:${process.env.PORT}`);
    });
})();
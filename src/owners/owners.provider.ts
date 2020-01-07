import { Connection } from 'mongoose';
import { OwnerSchema } from './schemas/owners.schema';

export const ownerProviders = [
  {
    provide: 'OWNER_MODEL',
    useFactory: (connection: Connection) => {
        return connection.model('Owner', OwnerSchema);
    },
    inject: ['DATABASE_CONNECTION'],
  },
];
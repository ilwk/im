import {
  Account,
  Appwrite,
  Databases,
  Storage,
  Teams,
} from '@pankod/refine-appwrite';
import { APPWRITE_URL, APPWRITE_PROJECT } from './config';

const appwriteClient = new Appwrite()
  .setEndpoint(APPWRITE_URL)
  .setProject(APPWRITE_PROJECT);

// for authentication
const account = new Account(appwriteClient);
// for file upload
const storage = new Storage(appwriteClient);

const database = new Databases(appwriteClient);

const team = new Teams(appwriteClient);

export { appwriteClient, account, storage, database, team };

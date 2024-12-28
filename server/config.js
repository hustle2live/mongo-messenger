import path from 'node:path';
import { fileURLToPath } from 'node:url';

import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const STATIC_PATH = path.join(__dirname, 'public');
export const HTML_FILES_PATH = path.join(STATIC_PATH, 'html');

dotenv.config();

export const PORT = process.env.PORT || 3001;
export const DATABASE_URL = process.env.ATLAS_URI;

export const CLIENT_URL = process.env.CLIENT_APP_URL;

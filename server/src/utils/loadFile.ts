import fs from 'fs'
import path from 'path'

export const loadData = (location: string) => {
    const dataPath = path.join(__dirname, location);
    const jsonData = fs.readFileSync(dataPath, 'utf8');
    return JSON.parse(jsonData);
};
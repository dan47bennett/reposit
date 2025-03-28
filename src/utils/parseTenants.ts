import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'csv-parse';

function parseTenants() {
    const csvFilePath = path.resolve('./', 'data/tenants.csv');

    const headers = ['id', 'propertyId', 'name'];

    const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });

    parse(
        fileContent,
        {
            delimiter: ',',
            columns: headers,
        },
        (error, result: unknown[]) => {
            if (error) {
                console.error(error);
            }
            return result;
        }
    );
}

export default parseTenants;

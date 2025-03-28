import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'csv-parse';
import { Tenant } from '../types';

function parseTenants(): Promise<Tenant[]> {
    const csvFilePath = path.resolve('./', 'data/tenants.csv');

    const headers = ['id', 'propertyId', 'name'];

    const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });

    const result: Tenant[] = [];

    return new Promise((resolve, reject) => {
        parse(fileContent, {
            delimiter: ',',
            columns: headers,
        })
            .on('data', (data: Tenant) => result.push(data))
            .on('error', reject)
            .on('end', () => {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const [_, ...rest] = result;
                resolve(rest);
            });
    });
}

export default parseTenants;

import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'csv-parse';
import { CsvProperty, Property, Region } from '../types';

async function parseProperties(): Promise<Property[]> {
    const csvFilePath = path.resolve('./', 'data/properties.csv');

    const headers = [
        'id',
        'address',
        'postcode',
        'monthlyRentPence',
        'region',
        'capacity',
        'tenancyEndDate',
    ];

    const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });

    const result: CsvProperty[] = [];

    return new Promise((resolve, reject) => {
        parse(fileContent, {
            delimiter: ',',
            columns: headers,
        })
            .on('data', (data: CsvProperty) => result.push(data))
            .on('error', reject)
            .on('end', () => {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const [_, ...rest] = result;

                const processedResult: Property[] = rest.map((r) => ({
                    address: r.address,
                    capacity: Number(r.capacity),
                    id: r.id,
                    monthlyRentPence: Number(r.monthlyRentPence),
                    postcode: r.postcode,
                    region: r.region as Region,
                    tenancyEndDate: new Date(r.tenancyEndDate),
                }));

                resolve(processedResult);
            });
    });
}

export default parseProperties;

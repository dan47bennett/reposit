import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'csv-parse';

function parseProperties() {
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
            console.log('Result:', result);
            return result;
        }
    );
}

export default parseProperties;

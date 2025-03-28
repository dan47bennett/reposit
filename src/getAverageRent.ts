import { Region } from './types';
import { parseProperties } from './utils';

export async function getAverageRent(region: Region) {
    const properties = await parseProperties();
    const propertiesInRegion = properties.filter((p) => p.region === region);

    let totalRent = 0;

    propertiesInRegion.forEach((p) => {
        totalRent += p.monthlyRentPence;
    });

    const average = totalRent / propertiesInRegion.length;
    return Math.floor(average);
}

import { parseProperties, parseTenants } from '../utils';

async function getMonthlyRentPerTenant(propertyId: string) {
    const properties = await parseProperties();
    const tenants = await parseTenants();

    const property = properties.find((p) => p.id === propertyId);

    if (!property) {
        throw Error('Property not found');
    }

    const totalRent = property.monthlyRentPence;

    const numberOfTenants = tenants.filter(
        (t) => t.propertyId === propertyId
    ).length;

    if (numberOfTenants === 0) {
        throw Error('No tenants in property');
    }

    return Math.ceil(totalRent / numberOfTenants);
}

export default getMonthlyRentPerTenant;

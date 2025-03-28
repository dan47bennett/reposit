import { parseProperties, parseTenants } from '../utils';

async function getPropertyStatus(propertyId: string) {
    const properties = await parseProperties();
    const tenants = await parseTenants();

    const property = properties.find((p) => p.id === propertyId);

    if (!property) {
        throw Error('No property found');
    }

    const tenantsInProperty = tenants.filter(
        (t) => t.propertyId === propertyId
    );

    const numberOfTenants = tenantsInProperty.length;

    if (numberOfTenants === 0) {
        return 'PROPERTY_VACANT';
    }

    const isTenancyPastEnd = new Date() > property.tenancyEndDate;

    if (isTenancyPastEnd) {
        return 'PROPERTY_OVERDUE';
    }

    if (numberOfTenants < property.capacity) {
        return 'PARTIALLY_VACANT';
    }

    if (numberOfTenants === property.capacity) {
        return 'PROPERTY_ACTIVE';
    }

    // should never be triggered
    return 'ERROR';
}

export default getPropertyStatus;

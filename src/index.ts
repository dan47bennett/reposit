import { getAverageRent } from './getAverageRent';
import { getMonthlyRentPerTenant } from './getMonthlyRentPerTenant';
import { getPropertyStatus } from './getPropertyStatus';
import { validatePostCode } from './validatePostCode';

export function runGetAverageRent() {
    getAverageRent('ENGLAND').then((averageRent) => {
        console.log('averageRent: ', averageRent);
    });
}

// no tenants at p_1029
export function runGetMonthlyRentPerTenant() {
    getMonthlyRentPerTenant('p_1029').then((rent) => {
        console.log('rent: ', rent);
    });
}

export function runValidatePostCode() {
    validatePostCode().then((ids) => {
        console.log('ids: ', ids);
    });
}

export function runGetPropertyStatus() {
    getPropertyStatus('p_1016').then((status) => {
        console.log('status: ', status);
    });
}

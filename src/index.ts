import { getAverageRent } from './getAverageRent';
import { getMonthlyRentPerTenant } from './getMonthlyRentPerTenant';

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

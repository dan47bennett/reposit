import {
    getAverageRent,
    getMonthlyRentPerTenant,
    validatePostCodes,
    getPropertyStatus,
} from './lib';
import { Region } from './types';

export function runGetAverageRent(region: Region) {
    getAverageRent(region).then((averageRent) => {
        console.log('averageRent: ', averageRent);
    });
}

export function runGetMonthlyRentPerTenant(id: string) {
    getMonthlyRentPerTenant(id).then((rent) => {
        console.log('rent: ', rent);
    });
}

export function runValidatePostCodes() {
    validatePostCodes().then((ids) => {
        console.log('ids: ', ids);
    });
}

export function runGetPropertyStatus(id: string) {
    getPropertyStatus(id).then((status) => {
        console.log('status: ', status);
    });
}

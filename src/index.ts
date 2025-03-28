import { getAverageRent } from './getAverageRent';

export function runGetAverageRent() {
    getAverageRent('ENGLAND').then((averageRent) => {
        console.log('averageRent: ', averageRent);
    });
}

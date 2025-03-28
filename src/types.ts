export interface Tenant {
    id: string;
    name: string;
    propertyId: string;
}

export type Region = 'ENGLAND' | 'N.IRELAND' | 'SCOTLAND' | 'WALES';

export interface CsvProperty {
    id: string;
    address: string;
    postcode: string;
    monthlyRentPence: string;
    region: string;
    capacity: string;
    tenancyEndDate: string;
}

export interface Property {
    id: string;
    address: string;
    postcode: string;
    monthlyRentPence: number;
    region: Region;
    capacity: number;
    tenancyEndDate: Date;
}

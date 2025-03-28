import { parseProperties } from './utils';

export async function validatePostCode() {
    const properties = await parseProperties();

    // below found in answers to https://stackoverflow.com/questions/13969461/javascript-uk-postcode-validation
    const regex = /^[A-Z]{1,2}[0-9]{1,2}[A-Z]{0,1} ?[0-9][A-Z]{2}$/i;

    const filteredProperties = properties.filter(
        (p) => !regex.test(p.postcode)
    );

    return filteredProperties.map((p) => p.id);
}

# reposit

This repo reads data from two csvs of tenants and properties, and then performs various functions

## Running the functions

The various functions can be run from the command line as follows:

- You can get the average rent for a region using `REGION={region} npm run start:getAverageRent`
- To get the monthly rent per tenant for a property using the property id use `ID={id} npm run start:getMonthlyRentPerTenant`
- To get the status of a property using the property id use `ID={id} npm run start:getPropertyStatus`
- To get a list of invalid properties with invalid postcodes use `npm run start:validatePostCodes`

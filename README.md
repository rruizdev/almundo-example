# almundo-example
Solution with backend in Express (fake API) and frontend with Angular 8th version to test connection between both, and on-the-fly changes.

## Backend
First, you must be type in console:

`npm install`
`npm start`

The API was started in port 3000, if you don't specified another. You don't care, this API support CORS and you don't have any issue related.

*ProTip: If you need to start in DEBUG mode, type `set DEBUG=almundo-backend & npm start` or `npm run debug` instead of `npm start`*

### Methods

- **GET** /hotels: Retrieves a lot of hotels, supported from a .txt file.

## Frontend
In this case, you must be type in console:

`npm install`
`ng serve`

If you don't have a Angular CLI installed, please visit [this site](https://angular.io/guide/setup-local) now.
The frontend solution was started in 4200 port, if you don't change them.

*ProTip: If you need to create a production build (to deploy in a nginx server), you must be type in console `ng build --prod`*
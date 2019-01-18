// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  authEnabled: false,
  token: "QeOv74uiEDNz7QM91bjYKc82VgS2",
  apiUrl: "http://localhost:5000/",
  firebaseConfig: {
    apiKey: "AIzaSyAOdenXy2X7kx9LWwVHk9zn3Humr2Cl9Tc",
    authDomain: "vouchers-c334a.firebaseapp.com",
    databaseURL: "https://vouchers-c334a.firebaseio.com",
    projectId: "vouchers-c334a",
    storageBucket: "vouchers-c334a.appspot.com",
    messagingSenderId: "269739409229"
  },
  o365Config: {
    tenant: "d92b247e-90e0-4469-a129-6a32866c0d0a",
    clientId: "4e60c128-a813-4031-bd99-cf4327cce885", //=> Application ID in Azure
    cacheLocation: "localStorage",
    endpoints: {
      graphApiUri: "https://graph.microsoft.com",
      sharePointUri: "https://integrationsonline.sharepoint.com" // Replace "integrationsonline" with your Tenant-Name & Make sure you assign permissions in Azure AD and enable Implicit Flow
    },
    returnUrl: "http://localhost:4200"
  }
};

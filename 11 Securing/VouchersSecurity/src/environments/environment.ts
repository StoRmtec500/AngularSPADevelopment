// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  authEnabled: false,
  token: "QeOv74uiEDNz7QM91bjYKc82VgS2",
  apiUrl: "http://localhost:5000/",
  o365Endpoints: {
    graphApiUri: "https://graph.microsoft.com",
    sharePointUri: "https://integrationsonline.sharepoint.com" // Replace "integrationsonline" with your Tenant-Name & Make sure you assign permissions in Azure AD and enable Implicit Flow
  }
};

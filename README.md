# Playwright Integretions
Playing with qase playwright integretion


# Xray Integretion
1. Setup playwright and Create your playwright tests.
2. Set _junit_ as reporter in the `playwright.config.ts` file.
```typescript
reporter: [['junit', { outputFile: 'results.xml' }]],
 ```
4. Run the playwright tests.
5. Get your API key from XRay `client_id` and `client_secret`.
6. Get the authentication token.
```powershell
curl -H "Content-Type: application/json" -X POST --data '{ "client_id": "client_id","client_secret": "client_secret" }'  https://xray.cloud.getxray.app/api/v1/authenticate
```
7. Get your `project_key` and `test_plan_key` from XRay.
8. Upload test result to XRay
```
curl -H "Content-Type: text/xml" -X POST -H "Authorization: Bearer $token"  --data @"junit.xml" https://xray.cloud.getxray.app/api/v2/import/execution/junit?projectKey=project_key&testPlanKey=test_plan_key
```
------

**Note**: If anyone face any trouble, kindly create an issue for that. I will try to resolve it for you asap.

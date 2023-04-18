import { StaticSite, StackContext, Api } from "sst/constructs";

export function API({ stack }: StackContext) {
  const api = new Api(stack, "api", {
    routes: {
      "GET /": "packages/functions/src/lambda.handler",
    },
  });

  const web = new StaticSite(stack, "web", {
    path: "packages/web",
    buildOutput: "dist",
    buildCommand: "pnpm build",
    environment: {
      EMBER_APP_API_URL: api.url,
    }
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
    Website: web.url,
  });
}

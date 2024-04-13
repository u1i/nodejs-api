# Currency Exchange API – NodeJS

docker run -d -p 8080:8080 u1ih/nodejs-api

curl -i http://localhost:8080/fx

CI/CD pipeline implemented using GitHub Actions:

* create docker container
* push to gcr.io container registry
* deploy to Google Cloud Run (knative / PaaS)

Live endpoint available at: [https://nodejsapi-tgihgzgplq-uc.a.run.app/](https://nodejsapi-tgihgzgplq-uc.a.run.app/)

[https://nodejsapi-tgihgzgplq-uc.a.run.app/fx](https://nodejsapi-tgihgzgplq-uc.a.run.app/fx)


The CI/CD build workflow needs documentation. For now, here is how you connect it to GCP: [https://gcp-examquestions.com/ci-cd-solutions-deploy-to-google-cloud-run-using-github-actions/](https://gcp-examquestions.com/ci-cd-solutions-deploy-to-google-cloud-run-using-github-actions/)

In order for this to be provisioned on your Google Cloud instance, you need to make sure you create/update these GitHub secrets:

* GCP_APPLICATION
* GCP_CREDENTIALS
* GCP_EMAIL
* GCP_PROJECT

You'll also need to activate a couple of APIs in Google Cloud, the first deployment will probably fail and point you into the right direction. Alternatively, you could deploy the first version manually.

## Updates

### Web Access

https://nodejsapi-hkqcqmboga-uc.a.run.app

### Changed GCP action to version 2

This is to fix the deprecation error on version 0 before.

The new version requires different authentication semantics. A separate auth action is added, depending only on the JSON key of an GCP service account, from the `GCP_CREDENTIALS`; `GCP_EMAIL` is no longer needed.

### Workflow change for the forked repo

We add an GitHub environment for storing the deployment credentials. This is added to the `deploy.yml` script, so the workflow can access the credentials variables, including the GCP service account key.

The GCP service account used in this project is created as an Editor role, under a GCP project. It thus only have access to this project and do not need to switch project in the `gcloud` shell.


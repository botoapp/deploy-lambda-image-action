# deploy-lambda-image-action
Github Action to Update the Image URI from ECR for a given Lambda Function

# How to use

```
name: Test Run
on:
  push
jobs:
  lambda:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@master
      - uses: botoapp/deploy-lambda-image-action
        with:
          LAMBDA_FUNCTION_NAME: FunctionName
          ECR_IMAGE_URI: XXXXXX.dkr.ecr.XXXXXX.amazonaws.com/XXXXX:XXXXXX 
          AWS_REGION: ${{ secrets.AWS_REGION }}
          AWS_SECRET_ID: ${{ secrets.AWS_SECRET_ID }}
          AWS_SECRET_KEY: ${{ secrets.AWS_SECRET_KEY }}
```

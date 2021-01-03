# Blue-Green Continuous Deployment via CodePipeline on Fargate

**Creating th structure:**

`aws cloudformation create-stack --template-body file://pipeline.yml --cli-input-yaml file://pipeline-parameter.yml`


**Destroying the structure:**

`aws cloudformation delete-stack --stack-name blue-green-test-ecs`
  
  
`aws cloudformation delete-stack --stack-name blue-green-test-pipeline`

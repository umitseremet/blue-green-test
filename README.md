# Blue-Green Continuous Deployment via CodePipeline on Fargate

**Creating the structure:**

*Set the parameters in the following files*

`cloudformation/pipeline-parameter.yml`
`cloudformation/stack-config.yml`

`aws cloudformation create-stack --template-body file://cloudformation/pipeline.yml --cli-input-yaml file://cloudformation/pipeline-parameter.yml`


**Destroying the structure:**

`aws cloudformation delete-stack --stack-name blue-green-test-ecs`
  
  
`aws cloudformation delete-stack --stack-name blue-green-test-pipeline`

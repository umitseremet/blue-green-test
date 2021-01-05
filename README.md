# Blue-Green Continuous Deployment via CodePipeline on Fargate

**Creating the structure:**

*Set the parameters in the following files*

- cloudformation/pipeline-parameter.yml
- cloudformation/stack-config.yml

*Run the command below after completing authentication and aws profile settings;*

`aws cloudformation create-stack --template-body file://cloudformation/pipeline.yml --cli-input-yaml file://cloudformation/pipeline-parameter.yml`


**Configure alarm-based auto-rollback**

*Run the command below after setting STACK_NAME with the value you had already set on stack-config.yml before*

> STACK_NAME=blue-green-test-ecs
> 
> aws cloudformation update-stack \
>   --region us-east-1 \
>   --stack-name $STACK_NAME  \
>   --use-previous-template \
>   --capabilities CAPABILITY_NAMED_IAM \
>   --parameters \
>        ParameterKey=Vpc,UsePreviousValue=true \
>        ParameterKey=Subnet1,UsePreviousValue=true \
>        ParameterKey=Subnet2,UsePreviousValue=true \
>        ParameterKey=ImageUrl,UsePreviousValue=true \
>        ParameterKey=EcrRepoName,UsePreviousValue=true \
>   --rollback-configuration "RollbackTriggers=[{Arn=arn:aws:cloudwatch:us-east-1:$AWS_ACCOUNT_ID:alarm:${STACK_NAME}-Unhealthy-Hosts-Blue,Type=AWS::CloudWatch::Alarm},{Arn=arn:aws:cloudwatch:us-east-1:$AWS_ACCOUNT_ID:alarm:${STACK_NAME}-Http-500-Blue,Type=AWS::CloudWatch::Alarm},{Arn=arn:aws:cloudwatch:us-east-1:$AWS_ACCOUNT_ID:alarm:${STACK_NAME}-Unhealthy-Hosts-Green,Type=AWS::CloudWatch::Alarm},{Arn=arn:aws:cloudwatch:us-east-1:$AWS_ACCOUNT_ID:alarm:${STACK_NAME}-Http-500-Green,Type=AWS::CloudWatch::Alarm}]"


**Destroying the structure:**

*Run the command below with the specific order*

`aws cloudformation delete-stack --stack-name blue-green-test-ecs` 

`aws cloudformation delete-stack --stack-name blue-green-test-pipeline`

*Delete the S3 created with aws-cli or manually*
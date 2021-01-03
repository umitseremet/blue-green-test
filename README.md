# nodejs-test


aws cloudformation create-stack \
  --template-body file://pipeline.yml \
  --cli-input-yaml file://pipeline-parameter.yml

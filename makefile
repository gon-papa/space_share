.PHONY: help openapi openapi-lint schema
.DEFAULT_GOAL := help

openapi:
	npx redocly bundle openapi/openapi.yml -o openapi/build/openapi.yml

openapi-lint:
	npx redocly lint openapi/openapi.yml

schema:
	npx redocly lint openapi/openapi.yml
	npx redocly bundle openapi/openapi.yml -o openapi/build/openapi.yml
	npx openapi-generator-cli generate -i ./openapi/build/openapi.yml -g typescript-axios -o ./api
.PHONY: help openapi openapi-lint schema
.DEFAULT_GOAL := help

openapi:
	npx redocly bundle openapi/openapi.yml -o openapi.yml

openapi-lint:
	npx redocly lint openapi/openapi.yml

schema:
	make openapi-lint
	make openapi
	npx openapi-generator-cli generate -i ./openapi.yml -g typescript-axios -o ./api
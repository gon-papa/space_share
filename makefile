.PHONY: help openapi openapi-lint schema
.DEFAULT_GOAL := help

openapi:
	npx redocly bundle openapi/openapi.yml -o openapi.yml

openapi-html:
	npx redocly build-docs ./openapi.yml -o openapi.html

openapi-lint:
	npx redocly lint openapi/openapi.yml

schema:
	make openapi-lint
	make openapi
	make openapi-html
	rm -rf src/api/gen/*
	npx openapi-ts -i openapi.yml -o src/api/gen/ -c @hey-api/client-fetch; 

openapi-split: # 一枚のopenapi.ymlを複数のファイルに分割する(確定後はほぼ使用することはない)
	npx redocly split openapi.yml --outDir=./openapi 
FROM hasura/graphql-engine:v2.6.0.cli-migrations-v3
COPY metadata /metadata
COPY migrations /migrations
#Install curl
RUN apk update && apk add curl
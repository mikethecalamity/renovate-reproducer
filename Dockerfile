ARG MY_IMAGE_REGISTRY
ARG BUILD_IMAGE=${MY_REGISTRY}/ext.hub.docker.com/library/alpine:3.20.0

# renovate: datasource=github-releases depName=liquibase/liquibase
ARG LIQUIBASE_VERSION=4.27.0

FROM $BUILD_IMAGE as build

RUN echo "Hello World"
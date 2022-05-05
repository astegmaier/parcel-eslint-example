# Parcel + ESlint Example

This repo demonstrates how to set up parcel with eslint and the `@parcel/validator-eslint` plugin, which will provide eslint warnings/errors as part of the parcel build process.

An important limitation (at the moment) is that the `@parcel/validator-eslint` will only work with eslint version 7 or less (not the newest v8).

The `master` branch demonstrates everything working correctly with eslint `7.29.4`. The `v8` branch demonstrates the current broken experience with eslint `8.14.0`.
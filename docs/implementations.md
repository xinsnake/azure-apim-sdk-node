# Implementations

## API entity

* ✔ Get a list of all APIs
* ✔ Get a specific API
* ✔ Get the metadata for a specific API
* ✔ Create or import a new API
* ✔ Update an API via import
* ✔ Update an API
* ✔ Delete an API
* Get a list of all operations for a specific API
* Get a specific operation
* Get the metadata for a specific operation
* Create a new operation
* Update an operation
* Delete an operation
* Get policy for an operation
* Check for policy on an operation
* Set policy for an operation
* Remove policy configuration from an operation
* Get policy for an API
* Check for policy on an API
* Set policy on an API
* Remove policy configuration from an API

## Authorization ​Server entity

* Get a list of authorization servers
* Get a specific authorization server
* Get the metadata for a specific authorization server
* Create a new authorization server
* Update an authorization server
* Delete an authorization server

## Backend entity

* ✔ List backend services
* ✔ Get a specific backend
* ✔ Get the metadata for a specific backend
* ✔ Create a backend
* ✔ Update a backend
* ✔ Delete a backend

## Certificate entity

* Get a list of all certificates
* Get a certificate
* Get the metadata for a certificate
* Add or update a certificate
* Remove a certificate

## Group entity

* Get a list of all groups
* Get a specific group
* Get the metadata for a specific group
* Create a new group
* Update an existing group
* Delete a group
* List group members
* Add a member to a group
* Remove a member from a group
* Check membership in a group

## Logger entity

* ✔ List loggers
* ✔ Get a specific logger
* ✔ Get the metadata for a specific logger
* ✔ Create a logger
* ✔ Update a logger
* ✔ Delete a logger

## Product entity

* ✔ Get a list of all products
* ✔ Get a specific product
* ✔ Get the metadata for a specific product
* ✔ Create a new product
* ✔ Update a product
* ✔ Delete a product
* List APIs associated with a product
* Check API membership in a product
* Add an API to a product
* Remove an API from a product
* List subscriptions to a product
* Get policy configuration for a product
* Check a product for attached policy configuration
* Set policy configuration for a product
* Remove policy configuration from a product
* List developer groups associated with a product
* Associate a developer group with a product
* Delete a developer group association with a product

## Property ​entity

* Get a list of all properties
* Get a specific property
* Get the metadata for a specific property
* Create a new property
* Update an existing property
* Delete a property

## Report entity

* Get metrics over a period of time
* Get metrics aggregated by geographical region
* Get metrics aggregated by user
* Get metrics aggregated by product
* Get metrics aggregated by API
* Get metrics aggregated by operation
* Get metrics aggregated by subscription
* Get request log entries

## Subscription entity

* Get a list of all subscriptions
* Get subscription details
* Get the metadata for a subscription
* Subscribe a user to a product
* Update subscription details
* Delete a subscription
* Regenerate subscription primary key
* Regenerate subscription secondary key

## Tenant entity

* Get global policy configuration for a tenant
* Check a tenant for attached global policy configuration
* Set global policy configuration for a tenant
* Remove global policy configuration from a tenant
* Get tenant Git access information
* Get the metadata for Git access configuration
* Enable or disable Git access
* Regenerate Git configuration primary key
* Regenerate Git configuration secondary key
* Get a list of all async operation results
* Get an async operation result
* Commit configuration snapshot
* Deploy Git changes to configuration database
* Validate Git changes
* Get the status of the latest synchronization

## User entity

* Get a specific user
* Get the metadata for a specific user
* Create a new user
* Update a user
* Delete a user
* List developer groups associated with a user
* List subscriptions for a specific user
* Get single sign-on URL for a user
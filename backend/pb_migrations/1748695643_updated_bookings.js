/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_986407980")

  // update collection data
  unmarshal({
    "viewRule": "@request.auth.collectionName = \"admins\""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_986407980")

  // update collection data
  unmarshal({
    "viewRule": "@request.auth.id != \"\""
  }, collection)

  return app.save(collection)
})

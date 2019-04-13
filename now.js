{
  "version": "2",
  "name": "workshop-1",
  "builds": [{ "src": "./package.json", "use": "@now/next" }],
  "routes": [{ "src": "/(.*)", "dest": "./src" }],
  "alias": "workshop-1"
}
*** How do I make API requests?
* What is the base URL for all requests?
`https://openapi.etsy.com/v2`

* Are there any headers or query parameters required? What kind of response should I expect?
`api_key` (string), `method` (string), `limit` (int), `offset` (int), `fields` (array/string), `includes` (array/string), `callback` (string)

### How does the API handle authentication?
* Do I need to authenticate? with user credentials?
  - Yes-- The Etsy API requires an application key that is provided during app registration. The key identifies your application to the Etsy web service, and is used to track overall call usage. It's passed using the standard api_key parameter.

* What can I do with an unauthenticated request?
  - Retrieve the most recent active listings on Etsy. (???)

* How can I authenticate my request? (what methods)
  - For write access and for accessing private user data, an OAuth access token is required. Your application key is required to start the OAuth authentication process.
  - New users register an application and receive a provisional API key upon signup. These keys have full access to resources in the Etsy API, however they are restricted to allow authentication only for the user who registered the application.



Here's another batch of questions to guide your research on the Etsy API. Chances are high that you'll get asked these questions in class tomorrow or that you'll need them for your homework.

What Resource in the API represents...
an individual product?
a group or collection of products?
images associated with a product?
sizes and colors for a product?
What actions and endpoints exist for each of these Resources?
What parameters do each endpoint require or accept?
What fields are returned for each Resource, specifically:
an individual product?
a group or collection of products?
What additional fields can be requested for each?

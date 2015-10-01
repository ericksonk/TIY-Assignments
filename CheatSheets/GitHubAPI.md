# [GitHub API](https://developer.github.com/v3/)
Application Programming Interfaces lets programs talk to each other.

## [Authentication](https://developer.github.com/v3/#authentication)
There are 3 ways to authenticate. Requests that require authentication will return `404 Not Found` instead of `403 Forbidden` in some places. This is to prevent the accidental leakage of private repositories to unauthorized users.
* Basic Authentication: `$ curl -u "username" https://api.github.com`
* OAuth2 Token (sent in a header): '$ curl -H "Authorization: token OAUTH-TOKEN" https://api.github.com'
* OAuth2 Token (sent as a parameter): `$ curl https://api.github.com/?access_token=OAUTH-TOKEN`
* OAuth2 Key/Secret: `$ curl 'https://api.github.com/users/whatever?client_id=xxxx&client_secret=yyyy'`
  - should only be used in server to server senarios. Dont leak you OAuth app's client secret to your users.
* Failed login limit
  - Authenticating w/ invalid credentials will return `404 Unauthorized`:
```
  $ curl -i https://api.github.com -u foo:bar

HTTP/1.1 401 Unauthorized

{
  "message": "Bad credentials",
  "documentation_url": "https://developer.github.com/v3"
}
```
  - After detecting several request w/ invalid credentials within a short period, the API will temporarily reject all authentication attempts for that user (including ones with valid credetials) with `403 Forbidden`:
```
$ curl -i https://api.github.com -u valid_username:valid_password

HTTP/1.1 403 Forbidden

{
  "message": "Maximum number of login attempts exceeded. Please try again later.",
  "documentation_url": "https://developer.github.com/v3"
}
```

> Do I need to authenticate?

> What can I do with an unauthenticated request?

> What _can't_ I do with an unauthenticated request?

> How can I authenticate my request?


## [Users](https://developer.github.com/v3/users/)

### Get a single user
```
GET /users/:username
```
Response:
```
Status: 200 OK
X-RateLimit-Limit: 5000
X-RateLimit-Remaining: 4999
{
  "login": "octocat",
  "id": 1,
  "avatar_url": "https://github.com/images/error/octocat_happy.gif",
  "gravatar_id": "",
  "url": "https://api.github.com/users/octocat",
  "html_url": "https://github.com/octocat",
  "followers_url": "https://api.github.com/users/octocat/followers",
  "following_url": "https://api.github.com/users/octocat/following{/other_user}",
  "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
  "organizations_url": "https://api.github.com/users/octocat/orgs",
  "repos_url": "https://api.github.com/users/octocat/repos",
  "events_url": "https://api.github.com/users/octocat/events{/privacy}",
  "received_events_url": "https://api.github.com/users/octocat/received_events",
  "type": "User",
  "site_admin": false,
  "name": "monalisa octocat",
  "company": "GitHub",
  "blog": "https://github.com/blog",
  "location": "San Francisco",
  "email": "octocat@github.com",
  "hireable": false,
  "bio": "There once was...",
  "public_repos": 2,
  "public_gists": 1,
  "followers": 20,
  "following": 0,
  "created_at": "2008-01-14T04:33:35Z",
  "updated_at": "2008-01-14T04:33:35Z"
}
```
### Get authenticated user
`GET /user`
Response:
```
Status: 200 OK
X-RateLimit-Limit: 5000
X-RateLimit-Remaining: 4999
{
  "login": "octocat",
  "id": 1,
  "avatar_url": "https://github.com/images/error/octocat_happy.gif",
  "gravatar_id": "",
  "url": "https://api.github.com/users/octocat",
  "html_url": "https://github.com/octocat",
  "followers_url": "https://api.github.com/users/octocat/followers",
  "following_url": "https://api.github.com/users/octocat/following{/other_user}",
  "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
  "organizations_url": "https://api.github.com/users/octocat/orgs",
  "repos_url": "https://api.github.com/users/octocat/repos",
  "events_url": "https://api.github.com/users/octocat/events{/privacy}",
  "received_events_url": "https://api.github.com/users/octocat/received_events",
  "type": "User",
  "site_admin": false,
  "name": "monalisa octocat",
  "company": "GitHub",
  "blog": "https://github.com/blog",
  "location": "San Francisco",
  "email": "octocat@github.com",
  "hireable": false,
  "bio": "There once was...",
  "public_repos": 2,
  "public_gists": 1,
  "followers": 20,
  "following": 0,
  "created_at": "2008-01-14T04:33:35Z",
  "updated_at": "2008-01-14T04:33:35Z",
  "total_private_repos": 100,
  "owned_private_repos": 100,
  "private_gists": 81,
  "disk_usage": 10000,
  "collaborators": 8,
  "plan": {
    "name": "Medium",
    "space": 400,
    "private_repos": 20,
    "collaborators": 0
  }
}
```
## Rate Limiting
* For requests w/ Basic Authentication or OAuth, you can make up to 5,000 requests per hour.
* For unauthenticated requests, the rate limit allows you to make up to 60 requests per hour
  - unauthenticated requests are associated w/ your IP address and not the user making requests.
* Check the returned HTTP headers of any API request to see rate limit status:
```
$ curl -i https://api.github.com/users/whatever

HTTP/1.1 200 OK
Date: Mon, 01 Jul 2013 17:27:06 GMT
Status: 200 OK
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 56
X-RateLimit-Reset: 1372700873
```
* Once you go over the rate limit you will recieve an error message

## `Promise`
The promise object is used for defferred and asynchronous computations. A promise represents an operation that hasnt completed yet, but is expected in the future.
* Syntax: `Promise(executor);`

#### What are the endpoint for fetching...

API Endpoint: any url that the api understands/any URL that will return info back.

* the profile data for a user?
  - https://api.github.com/users/USERNAME

* the organizations a user belongs to?
  - https://api.github.com/users/USERNAME/orgs

* the repositories a user has created?
  - https://api.github.com/users/USERNAME/repos

* a filtered list of repositories?
  - You can use parameters such as `visibility`, `affilitiation`, `type`, and `direction` to filter your results.

* a sorted list of repositories?
  - Use the `sort` parameter to sort the results into `created`, `updated` `pushed`, and `full_name`.

* public events for a user?
  - https://api.github.com/users/USERNAME/events/public

#### When fetching public events for a user...
* How many results are returned by default?
  - The fixed page size is 30 items. Fetching up to ten pages is supported, for a total of 300 events.

* What limitations exist on fetching ​_more_​ results?
  - Only events created within the past 90 days will be included in timelines. Events older than 90 days will not be included (even if the total number of events in the timeline is less than 300).

* What is the basic structure of the results?

* What fields are included in each result?
  - type, public, payload, repo (id, name, url), actor (id, login, gravatar_id, avatar_url, url), org (id, login, gravatar_id, url, avatar_url), created_at and id.

* What are the data types for each field?
  - all data types are represented as Strings except for the "id" field which is represented as a Number and the "public" field which is represented as a Boolean.

* What are some of the different values for the type field?
  - links, file paths, strings, empty strings, string of numbers, Numbers
```
[
  {
    "type": "Event",
    "public": true,
    "payload": {
    },
    "repo": {
      "id": 3,
      "name": "octocat/Hello-World",
      "url": "https://api.github.com/repos/octocat/Hello-World"
    },
    "actor": {
      "id": 1,
      "login": "octocat",
      "gravatar_id": "",
      "avatar_url": "https://github.com/images/error/octocat_happy.gif",
      "url": "https://api.github.com/users/octocat"
    },
    "org": {
      "id": 1,
      "login": "github",
      "gravatar_id": "",
      "url": "https://api.github.com/orgs/github",
      "avatar_url": "https://github.com/images/error/octocat_happy.gif"
    },
    "created_at": "2011-09-06T17:26:27Z",
    "id": "12345"
  }
]
```

#### How can I use the Github API to...
* get all the comments for a particular issue?
* add a comment to an issue?

#### How can I use the jQuery API to...
* get the HTML contents of an element?
* create a new HTML element?
* add an HTML element to the page?

#### How can I use the Lodash API to...
* replace placeholders with values from an object?
* repeat code for every item of an array?

# PKCE Code Generator
Tiny Node.JS app to generate Verifiers and Challenges for PKCE 

https://pkce-code-challenge.now.sh/


## How to use it:

- You can start by visiting https://pkce-code-challenge.now.sh/.
- If you already have a `verifier`, you can input it there to generate multiple `challenges`.
- If you **don't have a verifier** you can generate the `verifier` and the respective `challenges` by clicking the buttons in the interface.

## API

```
POST /verifier
body: {}
```
Generates a verifier code as `{ verifier: "your-code-here"` }




```
POST /challenger
body: { verifier: "your-code-here" }
```
Generates a challenge based on the verifier send in the request body as `{ challenge: "your-challenge" }`

## Logs

I don't keep any of them for security purposes.

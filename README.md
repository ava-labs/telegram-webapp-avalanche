# telegram-webapp-avalanche

> Starter template for a new TWA interacting with the Avalanche Fuji blockchain using the [Thirdweb SDK](https://portal.thirdweb.com/react/v5/connecting-wallets/ui-components)

> This project is forked from [twa-template](https://github.com/ton-community/twa-template)

# Overview

The project is highly-opinionated, and there are many other alternate routes it could have taken. Some examples:

- A react-based TWA-ready app, interacting with Avalanche Fuji Network
- Uses vite with react (alternative to create-react-app)
- Uses the `thirdweb` npm package

# Prerequesities

- Node.js v16 (other versions may work, needs more testing)
- A [ThirdWeb Client ID](https://thirdweb.com/dashboard/settings/api-keys)

# What does this repo contain?

- A react-based TWA-ready app, interacting with Avalanche Fuji Network
- Github actions set to deploy app to github pages
- A script to connect a telegram bot to the deployed app

# How to use

1. Create a template from this repo with the "Use this template" button

   1. Choose a name for your repo
   2. `**IMPORTANT!!**` mark "Include all branches", otherwise github pages deployment will not work.

2. Clone this repo and run `yarn` to install packages
3. Create a `.env` in the project root and set `VITE_THIRDWEB_CLIENT_ID` with your own client ID [from Thirdweb](https://thirdweb.com/dashboard/settings/api-keys)

4. Create a new bot with [botfather](https://t.me/botfather)
   1. Type `/newbot`
   2. Choose a name for your bot, e.g. `My Avalanche TWA`
   3. Choose a username for your bot, e.g. `my_avalanche_twa_482765_bot`
   4. Take note of the access token, e.g. `5712441624:AAHmiHvwrrju1F3h29rlVOZLRLnv-B8ZZZ`
   5. Run `yarn configbot` to link your bot to the webapp

# Development

1. Run `yarn run dev` and edit the code as needed
2. On push to the `main` branch, the app will be automatically deployed via github actions.

# License

MIT

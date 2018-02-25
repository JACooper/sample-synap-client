Sample email client for Synap application process.  Bootstrapped with [create-react-app](https://github.com/facebook/create-react-app).

## Table of Contents

- [Running](#running)
- [Design details](#design-details)
- [Known issues](#known-issues)
- [Other notes](#other-notes)

## Running

To start the application, run:
```
npm start
```
Or, if using yarn:
```
yarn run start
```

This should automatically launch Chrome. If for some reason you need to manually navigate to the app, you can find it on ```localhost/3000```.

## Design details

As specified in the instructions, exact requirements for the app were left intentionally vague, and a few assumptions and design choices had to be made.

- Who is it for: The sample messages are to and from several different users, making it unlikely that the app can be tailored to a particular user. As such, I opted to simply display all messages available - adding a login screen was out of scope, and no other alternative made much sense. This also precludes a sensible way to integrate Contacts and other common "Inbox" features, at least at this scope and scale.
- Network efficiency: ". . .over an internet connection" was mentioned in the instructions, implying the app should have a relatively low network footprint. As such, messages load 25 at a time and are cached until the page is reloaded. New messages are only loaded if the user scrolls the bottom of the current message list.
- Relevant user data: User avatars, names, and other data are only fetched upon opening a message - the idea being that since this isn't a specific user who has contacts, we don't need to know about any user all the time. Company data is minimally parsed, but I failed to see any useful reason to display company data beyond saying where a user works.
- Misc UX: User avatars lazy load. Mostly mention because I'd never implemented it before and it was a fun challenge.

## Known Issues

- The search bar is non-functional. While this explicitly allowed in the instructions, it's worth pointing out.
- The app uses the default create-react-app favicon.

## Other notes

Unit testing and prop types were omitted in the interests of time. Also absent are animations, for the same reasons - I've never found a *fast* way to implement animations in React.
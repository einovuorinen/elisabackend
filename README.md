## Elisa Viihde developer trainee pre-assignment
This is an app for browsing program and channel data from Elisa's REST api.

## Description
It is a single page app with four tabs: Live programs, Channels, Search and Favorites. Channels and live programs are fetched on every
reload by a React effect hook. On the search page, user can select a channel and a date and data is then fetched with those parameters.
User can add any program or channel to their favorites page. This data is saved to browser's localstorage. Every tab also features
a search function with keywords. The app matches the keywords to the name or description of a program or channel.

The frontend code is available here: https://github.com/einovuorinen/elisafrontend
The deployed app is at https://infinite-bastion-14193.herokuapp.com/

### Rei Actions
Always watching for the creativity of reactions. Counts and lists the number of new reactions created.

####Install

`$ yarn`

####Environment and stuffs
Create a .env file containing:

    SLACK_TOKEN="xoxp-xxxxxxxxxxxxxxxx"
    FILE_NAME="emojis.txt"
    

Slack Token is the token that you can obtain when you create an app;
File name is the "local database" of acquired emojis. There's already one file containing the data on the repo.

At least on emojis.txt you must have an empty array (I should fix it sooner or laaaaaaaaater...)

####Run

`$ node count.js`

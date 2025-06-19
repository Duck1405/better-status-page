# Better Status page

A modern looking webpage to show your amazing status page. Built using the Hetrix tools API. This project changes the good old Hetrix monitoring data into a user-friendly status dash. 

Do note AI was used to enhance the code to make it shorter and have a lil better features. AI was also used for some brainstorming and debugging some errors and features.

## Demo
Coming soon

## How to install


Method 1 (Cloudflare pages)

1. Clone the repo 
2. Add it to the pages
3. Setup the .env file and add the following variables
    - "HETRIX_API=<your_api_key>"
4. Deploy and Enjoy your website


Method 2 (Using your device)

1. clone the repo
    ```bash
    git clone https://github.com/Duck1405/better-status-page.git
    cd better-status-page
    ```
2. Install the dependences
    ```bash 
    npm install
    ```
3. Edit the .env file and add the value
    - "HETRIX_API=<your_api_key>"
4. Start the App
    ```bash 
    npm run start
    ```

## Tech Stack used
    - Next.js
    - TypeScript
    - Tailwind CSS

## API 
    - "/api/monitors" Fetches all the devices
    - "/api/monitors/:id/stats" Fetches a speific device by ID (the ID is from Hetrix)


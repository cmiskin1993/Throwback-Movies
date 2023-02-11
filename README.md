# Phase 5 Project
## Throwback Movies
Carrie Nestel (Miskin)

### Overview

### Requirements
- Ruby 2.7.4
- NodeJS (v16), and npm
- Postgresql

- Fonts
  - Nasalization
  - Stormfaze

### Setup

- fork and clone repository into your own GitHub
- bundle install
- npm install --prefix client
- rails db:create (is is creating the database)
- then run rails db:migrate 
- you can then uncomment the seeded data that has already been created in the seeds file under /db/seeds.rb and then run rails db:seed (this will add some dummy data into the database so you have a starting point)


You can now run the application: 

- rails s: to get your backend server running 
  - to check that the backend is up and running you should see the data here [http://localhost:3000]
- npm start --prefix client: to run the react application
  - the app should be running on [http://localhost:4000] 
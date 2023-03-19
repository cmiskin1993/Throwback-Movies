# Phase 5 Project

## Throwback Movies

Carrie Nestel (Miskin)

### Overview

        Are you a 90's baby or just love 90's Y2k nostalgia? Then you are going
        to love Throwback Movies. Whether you have a movie in mind or you are
        looking for some movie recs we got you covered. Plus check out and see
        what other 90's babies are saying about the movies if it really hits the
        nostalgia spot or is it a flop that you somehow forgot about. Enjoy!

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

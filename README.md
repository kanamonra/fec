![Login page example](https://github.com/kanamonra/fec/assets/122510628/5acd76f2-d2a6-4b51-a988-552033fed79f)**FEC Smart Agriculture Monitoring Web Application**

**Description**
Real-time rendering sensor datas from backend using React which include 15 pages fautures and UI/UX design. 
**Features**
[Dashboard]: Real-time rendering data of 4 sensors from Backend. 4 sensor data visualization and UX for data types including alert with safe, warning, danger.
[Profile/Account management]: User information table with option for non manager accounts. Can accept or decline requests of new users as a manager account. 
Show error if regular account try to enter accounts management page.
[Overview]: Overview of 4 sensor data with option for dates. Show charts for each types of sensor and update their average data in real-time
[Performance]: For all users they can modify calendars for next outcome or supply for smart-agriculture. 
Show data of plants that is ready for harvest and make appointment for harvest them. User can add, delete, update, search events on calendar.
[Plant status]: Using our AI model sends photo of plant and detect if there is a plant ill or not. 
User friendly illustration shows the result for each types of plant in database.
[Login, Register]: Include illustration and brief explain on functions and benefits of project.
[Landing page]: Include 3D model of our project character which fully responsible for mouse movement


**Installation**

1. Clone the repository:

```
git clone https://github.com/kanamonra/fec.git
```

2. Install dependencies:

```
npm install
```

3. Start the development server:

```
npm run dev
```
**License**
MIT License

Copyright (c) Meta Platforms, Inc. and affiliates.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

**Additional Information**
Landing page
![Landing page](https://github.com/kanamonra/fec/assets/122510628/c400c4d1-9d47-4ef8-a3e6-4dbb31bd154d)

Login page
![Login page example](https://github.com/kanamonra/fec/assets/122510628/8e63d918-92f5-4a58-a074-8b65ca74d440)

**Available Scripts**

In the project directory, you can run:

* `npm start`: Runs the app in the development mode.
* `npm build`: Builds the app for production.
* `npm test`: Starts the test runner.

**Project structure**
src/
  Assets/
  Components/
    AI/
      VideoContainer.jsx
    Charbar/
      HumidityForDashboard.jsx
      TemperatureCharBar.jsx
      co2CharBar.jsx
    Homepage/
      AboutProject.jsx
      AboutUs.jsx
      Footer.jsx
      Header.jsx
      Hero.jsx
      Homepage.css
    Layout/
      DashboardLayout.jsx
    Overview/
      OverviewMain.jsx
      WeatherOverview.jsx
      PerformanceMain
      Calendar.jsx
      Performancemain.jsx
    PlantInfo/
      PlantInfo.jsx
      PlantStatusMain.jsx
    Profile
      userProfileGrid.jsx
    Sidebar/
      SideBar.jsx
    HomepageAssets
    LoginAssets/
    logo.png
    video.mp4
    video1.mp4
  Pages/
    Homepage/
      Hero.jsx
      Homepage.jsx
    Login
      Login.css
      Login.css.map
      Login.jsx
      Login.scss
    OtherPages
      ErrorPage.jsx
      ForbiddenPage.jsx
      Loading.jsx
    Protected/
      Dashboard/
        Dashboard.jsx
      ManageUsers/
        ManageUsers.jsx
      Overview/
        Overview.jsx
      Performance/
        Performance.jsx
      Profile/
        UserProfile.jsx
      Status/
        Status.jsx
      Register/
        Register.css
        Register.css.map
        Register.jsx
        Register.scss
  Route/
    PrivateRoutes.jsx
    index.jsx
  hook/
    useAuth.jsx
  provider
    AuthProvider.jsx
  App.jxs
  index.css
  main.jsx
package.json
README.md
index.html
package-lock.json
package.json
postcss.config.js
tailwind.config.js
vite.config.js
```

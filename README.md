# Project Description:

This website is designed to belike the RP Diet App, Fitbit, or MyFitnessPal but for instrumental practice.  Track practice frequency, length, etc and display it in cool graphs to keep people motivated.

# Tech Stack:
- Frontend - React.js
- Backend - Django/Python
- Database - postgresql

# Installations required

- Front End
	- npm i axios
	- npm i bootstrap@5.2.0
	- npm i react-chartjs-2
	- npm i cdbreact

# User Stories:

- As a performer, I want to be able to track my flute practicing so I know what I've done and to help clarify what to do to improve moving forward.
- As a performer, I want the bells and whistles and shinies of my diet/productivity apps in a practice app.  
- As a performer, I want a one stop shop for tracking all my practice, rather than juggling notebooks, handwritten notes in music, google docs, and miscellaneous notes in my phone
- As a performer, I want to a place to store my practice data, and keep it safe
- As a teacher, I want to be able to track all of my students information in one place, rather than how I currently do it in multiple places
- As a teacher, I want to be able to store lesson notes and then email parents a summary
- As a teacher, I want students to be able to log in and be held accountable for their practicing this way
- As a teacher, I need this app to be *very* fast.  Faster than using google docs.  Students still feel distracted when they see me on my phone, regardless of whether I tell them what I am doing or not.

# Wireframe

- https://miro.com/app/board/uXjVPcjc31o=/?share_link_id=335800240099

# Roadmap

## v.1 (Practice Journal - Performer and Practice_session model, CRUD, Host Backend)

- Create model Performer
	- Name
	- Email
- Create model Practice_session
	- Length
- Get CRUD working with Django/Admin
    - Be able to save practice data for graph 
    - Be able to read all data collected somehow, graph or list.
    - Be able to edit submissions
    - Be able to remove submissions
- Host backend on Heroku

## v.2 (Practice Journal - Frontend Basic Design)

- Basic Styling for functionality
    - Login Page Placeholder
    - Initiate Session page
    - Session Page w/ Submit 
    - Review Page with Submit, Update, and Delete 
    - History page with session history placeholder 


## v.3 (Practice Journal - React CRUD)

- Get CRUD working with frontend
    - Be able to save practice data for graph 
    - Be able to read all data collected somehow, graph or list.
    - Be able to edit submissions
    - Be able to remove submissions

- Display data in history page as a list

## v.4 - (Practice Journal - Graph Update and Styling Upgrade 1)

- Make the data display in any chart at all
- Do a round of restyling.  Get acquainted with bootstrap

## v.5 - MVP (Practice Journal - Hosting and connecting)

- Host frontend on Netlify
- Re Host backend
- Connect front end to back end with new live heroku link

## v.5.5 - (Practice Journal - Presentation)

- Prep class presentation

# Presentation

## v.6 - (Practice Journal - User Authentication)

- Incorporate user authentication

## v.7 (Practice Journal - Model upgrade: Instruments and Practice Types)

- Update model Practice_session
	- Instrument (Flute, Piccolo, Baroque Flute, Classical Flute)
	- Warmup T/F
	- Long Tones T/F
	- Technique T/F
	- Repertoire T/F
	- Date Collected

- Front end to accomodate updated model.
- Update displays to show new model data.

## v.8 (Practice Journal - Model Upgrade: Final Additions)

- update model Practice_session
	- Warmup Type (Dropdown)
	- Long Tone Type (Dropdown)
	- Tuning? (Dropdown: Tuner, Drone, Tuner+Drone)
	- Type of Technique (Dropdown: Scales, Articulation)
	- Type of Repertoire (Dropdown: Etude, Solo Rep, Excerpts, Gig Rep)
	- Notes (Text Field)

- Front end to accomodate updated model
- Update displays to show new model data

## v.9 (Practice Journal - User Feedback)

- Quick polish
- Show to colleagues and get user feedback (2-3 weeks)

## v.9.5 (Practice Journal - Implement feedback, Styling Upgrade 2)

- Implement feedback
- Styling upgrade 2
- Final polish

# v1.0 (Practice Journal - COMPLETE)

## v1.1 (Teaching Tool - First Student Update)

- Create model Student
	- Name
	- Phone Number
	- Email
	- Address (If In Person)
	- Lesson Type (Skype, Zoom, In Person)
	- Rate
	- Pay Frequency (Weekly, Bi-Weekly, Monthly, Batch of 4)
	- Pay Type (Cash, Check, Venmo, PayPal, Zelle, Bi-Weekly DD, Monthly DD)
	- Last Paid Date

- Create model Lesson
	- Length
	- Days Practiced Since Last Lessons
	- Notes

## v1.2 (Teaching Tool - Share Function and live testing)

- Allow for email sharing with click of button.  This way I can email parents a lesson summary each week.  
- Streamline user experience to make this who process fast.
- Test this and update for 3-6 weeks to iron out problems.

## v1.3 (Teaching Tool - Closed Beta)

- Create model Student_Input
	- Practiced? T/F
	- What did you practice? (Text Field)
- Login page on my website for students to input data throughout week
- Closed Beta for student feedback

## v1.4 (Teaching Tool - Student Experience Update based on feedback)

- Implement student feedback

## v1.5 (Teaching Tool - Database of useful resources)

- Populate a DB of potential etudes, scales, exercises choices, long tone routines
- Let students see DB's and choose what to do.

## v2.0 (Teaching Tool)

# Final Version Models

model Performer<br/>
- Name
- Email

model Practice_session<br/>
- Length (Integer in minutes)
- Instrument Type (Dropdown: Flute, Piccolo, Baroque Flute, Classical Flute)
- Warmup? (T/F)
- Warmup Type (Dropdown: Sight Reading, Vocalise, Whistle Tones)
- Long Tone? (T/F)
- Long Tone Type (Dropdown: Moyse Method, Hairpins, Other Method)
- Tuning? (T/F)
- Tuning Type (Dropdown: Tuner, Drone, Tuner+Drone)
- Technique? (T/F)
- Technique Type (Dropdown: Scales, Arpeggios, Articulation, Trills)
- Etude? (T/F)
- Etude Type (Dropdown: Andersen, Altes, Berbiguer, Gariboldi, Kohler)
- Repertoire? (T/F)
- Repertoire Type (Dropdown: Solo Rep, Gig Rep, Excerpts)
- Notes (Text Field)

model Student<br/>
- Name (str)
- Phone Number (int) 
- Email (str)
- Address (str: If In Person) 
- Lesson Type (Dropdown: Skype, Zoom, In Person) 
- Rate ($ int)
- Pay Frequency (Dropdown: Weekly, Bi-Weekly, Monthly, Batch of 4)
- Pay Type (Dropdown: Cash, Check, Venmo, PayPal, Zelle, Bi-Weekly DD, Monthly DD)
- Last Paid Date (str)

model Lesson<br/>
- Length (int in minutes)
- Days Practiced Since Last Lessons (int in days)
- Notes (text field)

model Student_Input<br/>
- Practiced? (T/F)
- What did you practice? (Text Field)

# Stretch/Ideas:
- Payment History 
- Make into an iOS/Android app
- Allow for notes to be taken with voice capture
- Scale Randomizer
- Etude Randomizer
- Warmup Randomizer
- Drone Randomizer
- Input 2017, 2018, 2019, 2020, and 2021 data into my own database

# Project Description:

This website is RP Diet App or My Fitness Pal but for instrumental practice.  Track practice frequency, length, etc and display it in cool graphs to keep people motivated.

# Tech Stack:
- Frontend - React.js
- Backend - Django/Python
- Database - postgresql

# User Stories:

- As a user, I want to a place to store my practice data, and keep it safe
- As a user, I want to be able to track all of my students information in one place, rather than how I currently do it in multiple places
- As a user, I want to be able to store lesson notes and then email parents a summary
- As a user, I want students to be able to log in and be held accountable for their practicing this way
- As a user, I need this app to be *very* fast.  Faster than using google docs.  Students still feel distracted when they see me on my phone, regardless of whether I tell them what I am doing or not.

# Wireframe

- https://miro.com/app/board/uXjVPcjc31o=/?share_link_id=335800240099

# Roadmap

## v.01 (Practice Journal - Performer and Practice_session model, CRUD, Host Backend)

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

## v.02 (Practice Journal - Frontend Design)

- Basic Styling for functionality
    - Login Page Placeholder
    - Initiate Session page
    - Session Page w/ Submit 
    - Review Page with Submit, Update, and Delete 
    - History page with session history placeholder 


## v.03 (Practice Journal - React CRUD)

- Get CRUD working with frontend
    - Be able to save practice data for graph 
    - Be able to read all data collected somehow, graph or list.
    - Be able to edit submissions
    - Be able to remove submissions

- Display data in history page as a list

## v.04 (Practice Journal - User Authentication and Hosting)

- Incorporate user authentication
- Host frontend on Netlify

## v.05 (Practice Journal - Instruments, Practice Types, Frontend update)

- Update model Practice_session
	- Instrument (Flute, Piccolo, Baroque Flute, Classical Flute)
	- Warmup T/F
	- Long Tones T/F
	- Technique T/F
	- Repertoire T/F

- Front end design to collect practice data (Checklist of general practice types: Warmup, Long Tones, Technique, Repertoire)
- Front end design to select instrument.  Allow for multiple choice of instruments (Flute, Piccolo, Baroque Flute, Classical Flute)
- Update display to show new data

## v.06 (Practice Journal - Graph Update and Notes)

- update model Practice_session
	- Warmup Type (Dropdown)
	- Long Tone Type (Dropdown)
	- Tuning? (Dropdown: Tuner, Drone, Tuner+Drone)
	- Type of Technique (Dropdown: Scales, Articulation)
	- Type of Repertoire (Dropdown: Etude, Solo Rep, Excerpts, Gig Rep)
	- Notes (Text Field)

- Front end design to accomodate Practice_session model changes
    - Warmup Type
    - Long Tone Type
    - Tuning Type
    - Technique Type
    - Repertoire Type
    - Notes

- Seed database  with practice data from 2018

## v.07 (Practice Journal - Graph Update)

- Make pretty graphs and charts

## v.08 (Practice Journal - Database Update)

- Populate a DB of potential etudes, scales, exercises choices, long tone routines
- Let User see these DB’s

## v.09 (Practice Journal - First Styling Update, Feedback Submission)

- Match the RP Diet App or MFP App for tracking progress.
- Choose color scheme
- Redo Button design if necessary
- Revisit graphs
- Contact Page for feedback submission.  Home button.  

## BREAK

## v.06 (Teaching Tool - First Student Update)

- Create User(Student)
	- Name
	- Phone Number
	- Email
	- Address (If In Person)
	- Lesson Type (Skype, Zoom, In Person)
	- Rate
	- Pay Frequency (Weekly, Bi-Weekly, Monthly, Batch of 4)
	- Pay Type (Cash, Check, Venmo, PayPal, Zelle, Bi-Weekly DD, Monthly DD)
	- Last Paid Date

- Create Lesson model
	- Length
	- Days Practiced Since Last Lessons
	- Notes


## v.07 (Teaching Tool - Share Function and live testing)

- Allow for email sharing with click of button.  This way I can email parents a lesson summary each week.  
- Streamline user experience to make this who process fast
- Test this and update for 3-6 weeks to iron out problems.

## v.08 (Teaching Tool/Website - Closed Beta)

- Login page on my website for students to input data throughout week
- Secure users
- Create model Student_Input
	- Practiced? T/F
	- What did you practice? (Text Field)
- Closed Beta

## v.09 (Teaching Tool/Website - Student Experience Update based on feedback)

- Graphs etc
- More Testing
- implementing feedback
- Final style update

## v1.0 (Teaching Tool/Website) - Release!


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
- Input 2019 data to my own database

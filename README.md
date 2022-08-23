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

## v.01 (Practice Journal - Initial Build, Users, Collect Data, Graph Data)

- Basic Styling for functionality
- Create model Performer
	- Name
	- Email
- Create model Practice_session
	- Length
- Collect practice data (Frequency by days, length of session)
- Graph practice data in a bar graph or dot graph
- Seed database  with practice data from 2018

## v.02 (Practice Journal - Graph Update and Instruments )

- Collect practice data (Checklist of general practice types: Warmup, Long Tones, Technique, Repertoire
- Allow for multiple instruments (Flute, Piccolo, Classical Flute, Baroque Flute, whatever)

- Update model Practice_session
	- Instrument (Flute, Piccolo, Baroque Flute, Classical Flute)
	- Warmup T/F
	- Long Tones T/F
	- Technique T/F
	- Repertoire T/F

- Put instrument frequence on some sort of cool chart
- Update practice graph to allow for new parameters
- Update 2018 database with new information

## v.03 (Practice Journal - Graph Update and Notes)

- Collect practice data(Checklist of more specific practice types: Type of Warmup, Type of Long Tones, Tuning?, Type of Technique (scales, articulation), type of repertoire (etudes, solo rep)
- Allow a text field to take general notes from practice session

- update model Practice_session
	- Warmup Type (Dropdown)
	- Long Tone Type (Dropdown)
	- Tuning? (Dropdown: Tuner, Drone, Tuner+Drone)
	- Type of Technique (Dropdown: Scales, Articulation)
	- Type of Repertoire (Dropdown: Etude, Solo Rep, Excerpts, Gig Rep)
	- Notes (Text Field)

- Update practice graph to allow for new parameters
- Update 2018 data to match new model.

## v.04(Practice Journal - Database Update)

- Populate a DB of potential etudes, scales, exercises choices, long tone routines
- Let User see these DB’s

## v.05(Practice Journal - First Styling Update)

- Match the RP Diet App or MFP App for tracking progress.
- Choose color scheme
- Redo Buttons
- Revisit graphs

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

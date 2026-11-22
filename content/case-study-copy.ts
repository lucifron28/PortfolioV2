export const caseStudyCopy = {
  "unipm": {
    "projectType": "Team capstone",
    "stack": [
      "ASP.NET Core",
      "C#",
      "Entity Framework Core",
      "SQL Server",
      "React",
      "TypeScript",
      "Flutter"
    ],
    "overview": "UniPM is a web and mobile preventive maintenance system for the university's General Services Department. It keeps equipment records, inspection schedules, digital forms, and maintenance reports in one place. Staff can find an asset through its QR code and check the work linked to that asset.",
    "problem": [
      "The department maintains different kinds of equipment, including fire extinguishers, fire alarm systems, emergency lights, and water drinking stations. Each category needs its own inspection details and schedule. Staff also need to know which inspections are complete and which forms are still waiting for acknowledgement. A saved inspection and an official maintenance record are not the same thing."
    ],
    "contribution": [
      "I worked on the ASP.NET Core backend. My work included the asset registry, QR lookup, maintenance schedules, inspection forms, form acknowledgement, and reporting APIs. I also worked on the rules that turn natural-language questions into supported maintenance reports. My teammate worked on the Flutter mobile app."
    ],
    "howItWorks": [
      "The asset registry stores equipment details and links each asset to its maintenance schedule. The web app supports setup, monitoring, and record review. Inspectors use the Flutter app to find assets, complete checklists, and prepare inspection forms in the field.",
      "A preventive maintenance form can contain several asset inspections from one department and maintenance cycle. Its status moves from Draft to Submitted to Acknowledged. The first completed inspection save accepted by the server records the completion time for that asset's schedule. This can happen before the whole form is submitted. Acknowledgement records receipt of the form; it does not change the inspection's completion time.",
      "For new forms, only acknowledged inspection rows enter the official maintenance history. Draft and Submitted rows stay outside that history. Older records without a form can still appear where the system keeps them for continuity. This rule keeps working records separate from acknowledged records.",
      "The mobile app can keep encrypted Draft work while the device is offline. It queues changes and sends them when a connection returns. The app also has a way to review conflicts. Submission, photo upload, and acknowledgement still need a connection. The server's accepted completion time is used for reporting, so late synchronization can affect whether an inspection counts as on time.",
      "If an acknowledged inspection finds a problem that needs corrective work, UniPM prepares information for a handoff. Staff still enter that work into the department's existing Work Management System. UniPM does not directly control corrective maintenance in that system."
    ],
    "decisions": [
      "Separate inspection completion from form acknowledgement. An inspection can complete a schedule before the form is acknowledged. The acknowledgement step controls official history, not the work-completion timestamp. This prevents a delayed signature from changing when the inspection was recorded.",
      "Check natural-language reports before running them. A supported question becomes a structured report plan. The system checks the requested measure, category, time period, and grouping against its reporting rules. The user can review the plan before the backend calculates the result. A rule-based interpreter works without an external AI service. An optional model interpreter can help with phrasing, but the backend still checks the plan. The model does not run arbitrary SQL or make maintenance decisions.",
      "Keep access rules on the server. The API uses authentication and role-based policies for maintenance operations. The web and mobile clients do not decide who may change official records on their own."
    ],
    "status": [
      "UniPM is an academic capstone, not a confirmed university production system. The repository contains xUnit backend tests, web tests, browser checks, and Flutter tests. It also contains records of project demonstrations and workflow verification. Some checks used synthetic users and maintenance records. Native database, institutional setup, and physical-device checks have their own limits; the repository's test evidence should not be presented as unrestricted production acceptance."
    ]
  },
  "ingress": {
    "projectType": "Team course project",
    "stack": [
      "Laravel",
      "PHP",
      "PostgreSQL",
      "React Native",
      "Expo",
      "Firebase Authentication"
    ],
    "overview": "Ingress is a web ticketing and event admission system. Students and other attendees can register for events and get tickets online. At the venue, staff can scan tickets over a local network even if the public internet connection is down.",
    "problem": [
      "Online ticketing and gate admission have different needs. Registration depends on the web service, but a busy entrance cannot stop whenever the public connection fails. Several staff members may also scan tickets at the same time. The system needs one reliable place to decide whether a ticket is valid and whether an entry has already been recorded."
    ],
    "contribution": [
      "I worked on the Laravel and PostgreSQL backend, the split between the Cloud and Event Node, and the Expo staff-scanner flows. This included event and ticket APIs, local admission rules, synchronization, scanner pairing, ticket review, confirmation, and walk-in handling."
    ],
    "howItWorks": [
      "The Cloud handles online registration, tickets, event setup, and attendance reports. Students use the website to manage their tickets. The mobile app is for gate staff only; it does not include a student ticket wallet.",
      "Before an event, the organizer prepares a versioned snapshot of the event data. The snapshot includes the information that the Event Node needs to validate tickets and staff access. The transfer is an operator-controlled process, not automatic background delivery. The Node checks the transferred data, imports it into a separate PostgreSQL database, and activates a signed authority grant. Only then can it record admission for that event.",
      "Staff phones connect to the Node through the venue LAN. A scan first shows a preview of the ticket and attendee. The scan alone does not record entry. Staff must confirm the action. The Node checks the ticket, staff assignment, gate, and current admission state again before it saves an entry or exit.",
      "The Node keeps admission records in its local database when the Cloud is unreachable. When connectivity returns, it sends records to the Cloud in authenticated batches. The sync process can retry the same batch without creating duplicate admissions.",
      "Ingress also supports ticket transfers. Accepted transfers replace the old ticket credentials so the earlier QR cannot be used again. The checkout flow for paid tickets is simulated; it does not charge real money."
    ],
    "decisions": [
      "Use a separate local admission authority. Staff phones share one Event Node instead of making independent admission decisions. This allows local operation while keeping one database responsible for entry and exit records. The venue LAN and Event Node must still work; only the public internet connection can be absent.",
      "Use transactions and locks for competing requests. Registration checks event capacity inside a database transaction. Admission checks the ticket and access rules while holding the required database locks. This helps prevent two concurrent requests from taking the last seat or recording the same entry twice.",
      "Make retries safe. Each scanner request carries a client scan ID. The backend can recognize a repeated request and return the recorded result. Authenticated batch synchronization uses the same principle when the Node reconnects to the Cloud."
    ],
    "status": [
      "Ingress is a course project under active development. The repository includes Laravel feature tests and a separate PostgreSQL concurrency test script. That script runs overlapping database requests to check final-seat registration, admission races, and retry behavior. These checks are stronger than testing the same sequence one request at a time.",
      "Live venue and physical-device acceptance remain pending. The current design also requires manual snapshot delivery. It does not have a complete safe recovery procedure if an active Node must be replaced after receiving authority. It has no real payment-provider integration."
    ]
  },
  "sidekick": {
    "projectType": "Team bootcamp capstone",
    "stack": [
      "React",
      "JavaScript",
      "ASP.NET Core",
      "ASP.NET Core Identity",
      "PostgreSQL",
      "Docker Compose"
    ],
    "overview": "Sidekick is a community gig platform. People can post small jobs, browse local work, and share their skills through a profile. The project was built by a team during the Open iT Bootcamp.",
    "problem": [
      "People who need help with small tasks and people looking for short-term work need a place to find each other. The team also needed a shared local setup so the React client, ASP.NET Core API, and PostgreSQL database could run together during development."
    ],
    "contribution": [
      "I worked on the React frontend, including gig screens, profile details, and skill views. I connected the frontend to the authentication and API flows. I also helped configure the Docker Compose environment and reviewed code with the team."
    ],
    "howItWorks": [
      "Users can sign in, browse gig posts, search by title or description, and create their own listings. The React gig page also has forms for editing and deleting posts. Profile screens display account details, skills, and social links.",
      "The client calls an ASP.NET Core API. The backend uses ASP.NET Core Identity for authentication and Entity Framework Core with PostgreSQL for data storage. The frontend sends an access token with protected requests and uses the refresh flow to restore an expired session.",
      "Docker Compose starts the client, API, and PostgreSQL database. The API waits for the database health check before it starts. This reduces the setup needed when another teammate runs the project locally."
    ],
    "decisions": [
      "Use the existing authentication flow in the React app. The frontend uses a shared API client for authorized requests. It does not ask each page to manage its own token handling.",
      "Keep local setup repeatable. Docker Compose defines the services, ports, and dependencies in one place. The team can start the same basic environment rather than setting up each service by hand."
    ],
    "status": [
      "Sidekick received the Best in Capstone award at the Open iT Bootcamp. It was built as a team project for local demonstration, not as a public production marketplace. The repository has application and contract endpoints, but their complete frontend flows are not finished. It does not contain an automated test suite in the inspected tree."
    ]
  },
  "enverga-arena": {
    "projectType": "Solo project",
    "stack": [
      "React",
      "TypeScript",
      "Django REST Framework",
      "SQLite",
      "Cloudflare Turnstile",
      "Brevo"
    ],
    "overview": "Enverga Arena is a university intramurals web app. It brings student tryouts, team registrations, schedules, results, medal rankings, and news into one place. Students can follow the games while department representatives and sports staff manage event records.",
    "problem": [
      "An intramurals event involves several groups. Students need to apply for tryouts and see results. Department representatives need to review applicants and prepare rosters. Sports staff need to check registrations, schedules, and official results. These groups should not all have the same access."
    ],
    "contribution": [
      "I built the React frontend and Django REST Framework backend. I worked on student tryout verification, department and administrator screens, registration and roster workflows, results, and news features. I also added the AI-assisted sports recap workflow."
    ],
    "howItWorks": [
      "A student can apply for a tryout without creating a full account. The public form requires a university student email address. The server checks a Cloudflare Turnstile response and sends a one-time code through Brevo. It stores a hash of the code instead of the plain code. Rate limits and duplicate checks help reduce repeated or automated submissions.",
      "Department representatives review verified applications. They can select students, maintain athlete records, prepare rosters, and submit team registrations. Sports staff can manage events, schedules, venue areas, registration review, results, and official news. Each role sees the operations that match its work.",
      "The public website shows schedules, results, medal totals, and published news. Medal ranking follows gold medals first, then silver and bronze. It does not use a separate points formula.",
      "The app also has an AI assistant named Rooney and a recap feature. The recap feature builds a draft from recorded match or podium information. An administrator can review and edit it before publication. A generated draft is not automatically official news."
    ],
    "decisions": [
      "Verify public tryout requests on the server. The backend checks the email domain, OTP, Turnstile token, and request limits. A browser-side check by itself would be easy to bypass.",
      "Keep AI text separate from official results. The model can help write a recap, but a staff member must approve it. The official scores and medal records remain in the application database.",
      "Use role-based views and API checks. The application separates public visitors, department representatives, and sports administrators. The frontend changes the available screens, while the backend checks protected operations."
    ],
    "status": [
      "Enverga Arena is a solo academic project. Its repository includes Django test modules and an API testing guide, but this review did not run the tests. The current local database is SQLite. PostgreSQL appears as a future direction, not a verified production database. External email, Turnstile, and AI features need valid service configuration for live use."
    ]
  },
  "studylens": {
    "projectType": "Solo Android course project",
    "stack": [
      "Kotlin",
      "Jetpack Compose",
      "CameraX",
      "Google ML Kit",
      "Room",
      "Retrofit",
      "Django REST Framework",
      "PostgreSQL"
    ],
    "overview": "StudyLens is an Android study app. Students can organize course modules, save notes from classroom whiteboards, track reading progress, and create summaries, flashcards, and quizzes from their learning material.",
    "problem": [
      "Course files, classroom notes, and practice questions often live in different places. Taking a photo of a whiteboard also leaves the student with an image instead of editable notes. StudyLens brings these tasks together without putting AI service credentials in the Android app."
    ],
    "contribution": [
      "I built the Android app using Kotlin and Jetpack Compose. I worked on the subject and module screens, camera capture, OCR note review, study tools, and Django API integration. I also built the app's state and data flow using ViewModels, repositories, and Retrofit."
    ],
    "howItWorks": [
      "Students can group learning material into subjects, modules, and chapters. The app shows recent activity and reading progress. A module reader displays supported course content, including PDFs.",
      "For whiteboard notes, CameraX captures an image. The student can crop the image before text extraction. Google ML Kit recognizes text on the device. The student can correct the result and save it as a board note linked to learning material. An image can also be uploaded when the student chooses to keep it with the note.",
      "The Android app calls a Django REST Framework API. PostgreSQL stores student-owned learning records, scans, and study-tool results. The backend checks record ownership so one student cannot read another student's data by changing a request.",
      "The backend can extract text from uploaded PDF, DOCX, and PPTX files. That text can be used to create summaries, flashcards, quizzes, and tutor prompts. The Android app sends those requests to Django, not directly to an AI provider. The server selects the provider, prepares the prompt, checks structured results, and stores the response.",
      "The tutor feature uses student answers to decide whether to continue or finish a practice session. It is not meant to be a permanent unrestricted chat room."
    ],
    "decisions": [
      "Use on-device OCR. Text recognition runs on Android. This gives the student an editable result without sending every image to an external OCR service. Saving a scan to the backend is a separate action.",
      "Keep AI work behind the API. The Android app does not store the AI provider key. Backend code also checks generated flashcards and quizzes before saving them.",
      "Keep a small local cache. Room stores selected read data, such as subjects, modules, and scans, for faster repeat views and limited offline access. DataStore holds tokens and preferences. The app does not have a general offline write queue or conflict-resolution system."
    ],
    "status": [
      "StudyLens is an Android course project and is not published on Google Play. The repository contains Django API tests and Android test scaffolding. It also documents the current build and API boundaries. This review did not run the app or claim broad device compatibility. Teacher features, offline write synchronization, and production file storage are not part of the current implementation."
    ]
  },
  "provision": {
    "projectType": "Solo project; in development",
    "stack": [
      "FastAPI",
      "Python",
      "SQLAlchemy",
      "PostgreSQL",
      "SwiftUI",
      "iOS Keychain",
      "pytest"
    ],
    "overview": "Provision is a household pantry app for iPhone. It helps people track food, check expiry dates, plan what to cook, and add missing ingredients to a shopping list. Its Cook with Pip features connect recipes to the food that a household already has.",
    "problem": [
      "A household may buy the same item twice, forget older stock, or plan a recipe without checking what is available. Food choices can also depend on allergies and preferences. A useful cooking app needs to check real pantry records and ask before it changes shopping or inventory data. It should not treat an AI answer as a reliable stock count or food-safety decision."
    ],
    "contribution": [
      "I built the FastAPI backend and worked on the native SwiftUI app. My work covers pantry records, stock batches, shopping lists, recipe matching, household access rules, and Cook with Pip. I also worked on the review and confirmation steps that protect shopping and inventory changes."
    ],
    "howItWorks": [
      "Provision stores pantry items in batches. Each batch can have its own quantity, purchase date, and expiry date. When a user records consumption, the backend uses first-expiring-first-out (FEFO) order so earlier-expiring stock is used first where possible. Inventory actions leave records of what changed.",
      "A household can have more than one member. The backend checks household membership before it returns or changes shared pantry data. Member food preferences and declared allergies are also part of recipe evaluation. Unknown ingredient details or an unresolved allergy concern require review; the app does not guarantee that food is safe.",
      "Cook with Pip has recipe views such as Cook Now and Almost There. The backend compares required ingredients with usable pantry quantities and identifies what is missing. Product and ingredient mappings help it compare items with different names or units. It does not assume that two ingredients match just because their labels look similar.",
      "When someone wants to shop for a recipe, Provision first creates a read-only preview. It calculates missing quantities and checks existing pending shopping items. The user can review the proposed changes before confirming them. A later confirmation checks the current household data again. If stock or shopping records changed, the user must review a fresh preview. Request IDs also let the backend recognize retries instead of making the same change twice. This preview does not consume pantry stock.",
      "Pip Chat can discuss recipes and products using selected household context. It has separate consent controls for chat and allergy sharing. The backend builds the context from authorized household records and checks recipe references returned by the model. The chat itself cannot directly change inventory, recipes, or shopping records. A shopping action opens the existing preview and confirmation flow."
    ],
    "decisions": [
      "Use database records for stock and safety checks. The app calculates available ingredients and pending shopping quantities through backend rules. AI-generated text does not replace those calculations.",
      "Separate reading from changing data. Recipe previews and Pip Chat are read-only. Shopping confirmation is an explicit action with updated checks. This reduces the chance of duplicate shopping entries after a retry or a stale preview.",
      "Keep household information and AI consent separate. The backend checks membership and consent. It limits the context sent to the provider and filters some personal identifiers, such as recognized email addresses and household member names. This reduces exposure, but it is not a guarantee that a user's free-text message contains no personal data.",
      "Keep secrets on the server. The iOS app uses the Keychain for authentication credentials. AI provider credentials remain in backend configuration rather than inside the mobile app."
    ],
    "status": [
      "Provision is still in development. The backend repository has a broad pytest suite for inventory, household access, recipes, consent, shopping previews, stale-state checks, and repeated requests. The project also has iOS unit and UI tests in GitHub-hosted macOS workflows. The portfolio screenshots were captured in a simulator with synthetic data; they are not proof of a live end-to-end session with a physical iPhone.",
      "Some advanced cooking, meal planning, and leftover functions have backend work that is not yet represented by complete native app screens. Physical-device camera and scanner testing, accessibility checks, and final release testing remain pending."
    ]
  }
} as const

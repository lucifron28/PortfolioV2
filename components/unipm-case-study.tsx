export function UniPMCaseStudy() {
  return (
    <div className="unipm-copy">
      <h2>The problem</h2>
      <p>The General Services Department maintains different types of university equipment. Each category has its own preventive maintenance requirements and inspection forms.</p>
      <p>The existing GSD forms show these differences.</p>
      <ul>
        <li><strong>Fire alarms:</strong> The form records device numbers, locations, operational status, inspection dates, and remarks.</li>
        <li><strong>Fire extinguishers:</strong> The form also records equipment type, capacity, and expiration dates.</li>
        <li><strong>Water drinking stations:</strong> The form includes operational checks, filter replacement activities, UV light checks, and accomplishment dates.</li>
        <li><strong>Emergency lights:</strong> The form records equipment numbers, installation dates, locations, and operational status.</li>
      </ul>
      <p>These forms do not use the same inspection fields. They also contain different maintenance activities.</p>
      <p>A single generic checklist would not capture all the required information.</p>
      <p>The department also needs to track maintenance schedules, review inspection records, consolidate results, and identify outstanding work. Staff must also endorse inspection findings that require corrective maintenance.</p>
      <p>These requirements create a need for a shared system. It must support different equipment categories and their respective maintenance workflows.</p>
      <h2>Understanding the maintenance workflow</h2>
      <p>UniPM follows the department&apos;s Comprehensive Preventive Maintenance Program (CPMP).</p>
      <p>The program defines the maintenance cycles and inspection requirements for each equipment category. The system uses these requirements to organize schedules and assignments.</p>
      <p>Each asset has its own record and maintenance schedule. Inspectors record their findings through category-specific digital forms.</p>
      <p>One preventive maintenance form can contain several asset inspections. These records belong to one department, asset category, and maintenance cycle.</p>
      <p>This structure allows the system to manage multiple equipment inspections within one maintenance batch.</p>
      <h2>What I worked on</h2>
      <p>I worked on the ASP.NET Core backend. My work covered the APIs, database operations, and application rules that support the web and mobile applications.</p>
      <p>My contributions included:</p>
      <ul>
        <li>Asset registry and QR code lookup.</li>
        <li>Preventive maintenance schedules and assignments.</li>
        <li>Inspection records and photo evidence.</li>
        <li>Digital maintenance forms and acknowledgement.</li>
        <li>Dashboard and reporting APIs.</li>
        <li>Natural-Language Analytics and report interpretation.</li>
        <li>Authentication and role-based authorization.</li>
      </ul>
      <p>I also implemented rules that control inspection completion, form submission, acknowledgement, and maintenance history.</p>
      <p>My teammate worked on the Flutter mobile application.</p>
      <h2>How UniPM works</h2>
      <h3>1. Asset management and QR identification</h3>
      <p>The asset registry stores equipment details and connects each asset to its maintenance schedule and inspection history.</p>
      <p>Each asset can be identified through its QR code. Staff can scan the code to find the corresponding equipment record.</p>
      <p>The web application provides a central view of registered assets, categories, and maintenance information.</p>
      <h3>2. Preventive maintenance scheduling</h3>
      <p>UniPM organizes maintenance activities according to the CPMP requirements.</p>
      <p>The system manages maintenance cycles, schedules, and personnel assignments. GSD staff can review upcoming and completed maintenance activities.</p>
      <p>Each schedule is linked to its corresponding asset. This allows the system to track inspection progress at the equipment level.</p>
      <h3>3. Mobile inspections</h3>
      <p>Inspectors use the Flutter mobile application to find assets and complete inspection checklists.</p>
      <p>The forms collect information based on the equipment category. Inspectors can record operational status, findings, remarks, and supporting photos.</p>
      <p>The mobile application also supports offline draft recording. Inspectors can continue preparing inspection records when an internet connection is unavailable.</p>
      <h3>4. Digital forms and acknowledgement</h3>
      <p>A preventive maintenance form can contain several asset inspection records from one maintenance batch.</p>
      <p>The form follows three states:</p>
      <p><strong>Draft → Submitted → Acknowledged</strong></p>
      <p>UniPM separates inspection completion from form acknowledgement.</p>
      <p>When the server first accepts a completed inspection save, it records the completion time for that asset&apos;s schedule. This can happen before the entire form is submitted.</p>
      <p>Submission sends the completed form for acknowledgement. The concerned department head acknowledges receipt of the form.</p>
      <p>Acknowledgement does not change the original inspection completion time.</p>
      <p>For new forms, only inspection records in acknowledged forms enter the official maintenance history. Draft and Submitted records remain outside that history.</p>
      <p>This distinction keeps working records separate from acknowledged maintenance records.</p>
      <h3>5. Offline recording and synchronization</h3>
      <p>The mobile application stores encrypted inspection drafts on the device while offline.</p>
      <p>It queues changes and synchronizes them when the connection returns. Inspectors can also review synchronization conflicts.</p>
      <p>Submission, photo uploads, and acknowledgement require an internet connection.</p>
      <p>The server-recorded completion time is the basis for maintenance reporting. Therefore, delayed synchronization can affect whether an inspection counts as on time.</p>
      <h3>6. Corrective maintenance handoff</h3>
      <p>An inspection can identify a problem that requires corrective maintenance.</p>
      <p>UniPM prepares the relevant findings and recommendations for handoff. GSD staff then enter the corrective maintenance request into the department&apos;s existing Work Management System.</p>
      <p>UniPM supports this handoff. It does not directly create, process, or track corrective maintenance work in the existing system.</p>
      <h2>Natural-Language Analytics</h2>
      <p>UniPM uses DeepSeek as the primary interpreter for its Natural-Language Analytics (NLA) feature.</p>
      <p>The feature allows users to ask questions about preventive maintenance activities and registered assets. Users do not need to construct every report through manual filters.</p>
      <p>For example, a user can ask a question about the number of registered fire alarms in a particular building.</p>
      <p>DeepSeek interprets the question and proposes a structured report plan.</p>
      <p>The system follows these steps:</p>
      <ol>
        <li>The user enters a natural-language question.</li>
        <li>DeepSeek interprets the request and proposes a report plan.</li>
        <li>The backend validates the requested report and its parameters.</li>
        <li>The user reviews and confirms the report plan.</li>
        <li>The backend executes the supported query.</li>
        <li>UniPM displays the calculated results.</li>
      </ol>
      <p>The backend checks the report scope before execution. This includes the reporting subject, requested measures, equipment categories, periods, filters, and grouping.</p>
      <p>The system also includes a deterministic rule-based interpreter as an alternative. Both interpretation paths use the same backend validation and reporting rules.</p>
      <p>DeepSeek does not execute arbitrary SQL. It does not make maintenance decisions. It only proposes an interpretation that the backend must validate.</p>
      <h2>Key technical decisions</h2>
      <h3>Separate inspection completion and form acknowledgement</h3>
      <p>Inspection completion and form acknowledgement represent different events.</p>
      <p>An inspection can complete its maintenance schedule before the whole form is submitted or acknowledged.</p>
      <p>Acknowledgement controls whether new inspection records enter official maintenance history. It does not change the recorded completion time.</p>
      <p>This prevents delayed acknowledgement from changing the original inspection timestamp.</p>
      <h3>Support offline inspection drafts</h3>
      <p>Inspectors may work in areas with limited connectivity.</p>
      <p>The mobile application can store encrypted drafts locally. It synchronizes queued changes when a connection returns.</p>
      <p>Operations that require server confirmation remain online-only.</p>
      <h3>Validate AI-generated report plans</h3>
      <p>DeepSeek interprets the user&apos;s question and proposes a structured report plan.</p>
      <p>The backend checks the plan before execution. Unsupported requests and incomplete questions receive appropriate responses.</p>
      <p>This keeps report generation within the system&apos;s defined reporting rules.</p>
      <h3>Enforce access control on the backend</h3>
      <p>The API uses JWT authentication and role-based authorization.</p>
      <p>The server controls access to maintenance operations. The web and mobile applications cannot independently authorize changes to official records.</p>
      <h2>System architecture</h2>
      <p>UniPM uses three main layers.</p>
      <p><strong>Presentation layer</strong></p>
      <ul>
        <li>React web application for asset management, dashboards, schedules, forms, and reports.</li>
        <li>Flutter mobile application for QR lookup, inspections, and maintenance forms.</li>
        <li>Encrypted local draft storage and synchronization.</li>
      </ul>
      <p><strong>Application layer</strong></p>
      <ul>
        <li>ASP.NET Core Web API.</li>
        <li>JWT authentication and role-based authorization.</li>
        <li>Asset registry and maintenance scheduling.</li>
        <li>Inspection and photo evidence management.</li>
        <li>Form submission and acknowledgement.</li>
        <li>Natural-Language Analytics and report generation.</li>
      </ul>
      <p><strong>Data and evidence layer</strong></p>
      <ul>
        <li>Entity Framework Core for database access.</li>
        <li>Microsoft SQL Server for application records.</li>
        <li>Separate storage for inspection photo evidence.</li>
      </ul>
      <p>The backend controls the application rules and database operations. Both clients communicate with the backend through the API.</p>
      <h2>Testing and evaluation</h2>
      <p>UniPM underwent backend, web, mobile, and workflow testing.</p>
      <p>The repository contains:</p>
      <ul>
        <li>xUnit backend tests.</li>
        <li>Vitest web application tests.</li>
        <li>Playwright browser tests.</li>
        <li>Flutter application tests.</li>
        <li>SQL Server-backed integration checks.</li>
        <li>Workflow verification and demonstration records.</li>
      </ul>
      <h3>Natural-Language Analytics evaluation</h3>
      <p>Both DeepSeek and the deterministic interpreter were evaluated using the same set of 30 maintenance questions.</p>
      <p>The final paired evaluation used the original questions and scoring rules. Both interpreters processed all 30 questions against the same controlled database fixture.</p>
      <p>The results were:</p>
      <div className="unipm-table-wrap" role="region" aria-label="Natural-Language Analytics evaluation results" tabIndex={0}><table><caption>Natural-Language Analytics evaluation results</caption><thead><tr><th scope="col">Measurement</th><th scope="col">DeepSeek</th><th scope="col">Deterministic parser</th></tr></thead><tbody>
        <tr><th scope="row">Correct interpretation status</th><td>27/30</td><td>25/30</td></tr>
        <tr><th scope="row">Strict case agreement</th><td>21/30 (70.0%)</td><td>19/30 (63.3%)</td></tr>
        <tr><th scope="row">Semantic case agreement</th><td>23/30 (76.7%)</td><td>22/30 (73.3%)</td></tr>
        <tr><th scope="row">Successful HTTP responses</th><td>30/30</td><td>30/30</td></tr>
      </tbody></table></div>
      <p>Semantic case agreement checks the interpretation status, clarification fields, report-plan disposition, and complete plan.</p>
      <p>DeepSeek achieved 23 successful semantic matches out of 30 questions. The deterministic interpreter achieved 22.</p>
      <p>A separate staging check also verified the DeepSeek integration. The API selected DeepSeek without an explicit interpreter override and returned a valid report plan for a registered-asset question.</p>
      <p>These results cover the evaluated development questions. They do not establish accuracy for unseen questions. The paired evaluation also did not execute the resulting numerical reports.</p>
      <h3>Usability evaluation</h3>
      <p>The System Usability Scale (SUS) was administered to ten respondents.</p>
      <p>Three GSD staff evaluated the web application. Seven inspectors evaluated the mobile application.</p>
      <p>The calculated results were:</p>
      <div className="unipm-table-wrap" role="region" aria-label="System Usability Scale results" tabIndex={0}><table><caption>System Usability Scale results</caption><thead><tr><th scope="col">Evaluation group</th><th scope="col">Respondents</th><th scope="col">Mean SUS</th></tr></thead><tbody>
        <tr><th scope="row">Web application</th><td>3</td><td>94.17</td></tr>
        <tr><th scope="row">Mobile application</th><td>7</td><td>95.00</td></tr>
        <tr><th scope="row">Overall</th><td>10</td><td>94.75</td></tr>
      </tbody></table></div>
      <p>The results summarize the respondents&apos; perceived usability of the two applications.</p>
      <h2>Current status and limitations</h2>
      <p>UniPM is a team capstone project. It has a verified staging environment, but this does not establish institution-wide production acceptance.</p>
      <p>The mobile application supports offline draft recording. However, submission, photo uploads, and acknowledgement require an internet connection.</p>
      <p>Corrective maintenance requests still pass through the department&apos;s existing Work Management System.</p>
      <p>The system uses DeepSeek as its primary NLA interpreter. Its alternative deterministic interpreter has also undergone comparative testing.</p>
      <p>The reported NLA results apply to a fixed development question set. They do not establish general performance on all possible questions.</p>
      <p>Physical-device testing, institutional deployment, and formal university acceptance remain separate considerations.</p>
      <h2>What I learned</h2>
      <p>Working on UniPM required more than building APIs for equipment records and inspection forms.</p>
      <p>I had to understand the department&apos;s maintenance procedures and translate them into application rules.</p>
      <p>One important lesson was the need to separate inspection completion from form acknowledgement. These events look related, but they have different effects on maintenance records and reporting.</p>
      <p>I also learned to keep important business rules on the backend. This was important because the web and mobile applications share the same maintenance data.</p>
      <p>The project gave me practical experience in backend development, API design, database management, authentication, workflow implementation, AI integration, and web and mobile application integration.</p>
      <p>It also helped me understand how software must reflect actual operational procedures, not only technical requirements.</p>
    </div>
  )
}

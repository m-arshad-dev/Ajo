

#  **Chapter 1: Project Feasibility Report** 

## **1.1 Introduction**

The **ReliefNet – Unified Disaster Relief, Donation & Volunteer Management Platform** is designed to streamline disaster response operations by integrating donors, volunteers, NGOs, victims, and administrators into a single digital ecosystem.

The platform enables transparent donation handling, volunteer coordination, disaster reporting, inventory management, and resource distribution using an escrow-based donation model. This chapter evaluates the feasibility of developing the proposed system in terms of technical, operational, economic, schedule, specification, information, motivational, and legal/ethical factors.

---

## **1.2 Project/Product Feasibility Report**

Feasibility analysis determines whether the proposed system is practical, achievable, and beneficial within available constraints such as time, cost, and technology.

---

### **1.2.1 Technical Feasibility**

The system is technically feasible as it can be developed using modern technologies:

* **Frontend:** React / Flutter (Android-first mobile application)  
* **Backend:** Node.js (Express)  
* **Database:** PostgreSQL / MongoDB  
* **APIs:** Google Maps API, SMS/Email APIs (Firebase/Twilio)

All required technologies are widely available, well-documented, and support multi-role, real-time systems. The development team has sufficient knowledge to implement role-based access control, escrow logic, and disaster tracking modules.

---

### **1.2.2 Operational Feasibility**

The system is operationally feasible because it simplifies disaster management processes by connecting all stakeholders in one platform.

* Donors can contribute money or goods easily  
* Volunteers can register and get assigned tasks  
* NGOs can manage relief operations efficiently  
* Admins can control and monitor system-wide activities

The system provides a user-friendly interface with role-based access, making it easy to operate during emergencies.

---

### **1.2.3 Economic Feasibility**

The project is economically feasible as it is designed as an academic system with minimal cost.

**Estimated Costs:**

* Development tools: Free (open-source frameworks)  
* Hosting: Free / low-cost cloud services (Firebase, Heroku)  
* APIs (Maps/SMS): Free tier usage  
* Hardware: Existing student resources

**Benefits:**

* Improved disaster response efficiency  
* Reduced manual coordination cost  
* Increased transparency in donations

Overall, the benefits significantly outweigh the development cost.

---

### **1.2.4 Schedule Feasibility**

The project can be completed within an academic semester using a structured development plan:

* Requirement Analysis  
* System Design  
* Implementation  
* Testing  
* Documentation

An Agile or incremental approach ensures timely completion and continuous progress tracking.

---

### **1.2.5 Specification Feasibility**

The system requirements are clearly defined and achievable.

**Functional Requirements:**

* Donation management (money and goods)  
* Volunteer coordination and assignment  
* Disaster event creation and management  
* Resource allocation and tracking  
* Escrow-based donation handling  
* Notification system

**Non-Functional Requirements:**

* Security and authentication  
* Scalability  
* Performance optimization  
* Usability

All specifications are implementable using current technologies.

---

### **1.2.6 Information Feasibility**

The system requires structured data including:

* User profiles (Donors, Volunteers, NGOs, Admins)  
* Donation records  
* Disaster reports  
* Inventory and resource data  
* Volunteer activity logs

This data can be efficiently managed using relational or NoSQL databases, ensuring accuracy, consistency, and integrity.

---

### **1.2.7 Motivational Feasibility**

The system is highly motivating for stakeholders because it supports humanitarian relief efforts.

* Donors gain transparency in fund usage  
* Volunteers contribute to real-time disaster response  
* NGOs improve operational efficiency  
* Admins ensure controlled and accountable distribution

This increases engagement and trust in the platform.

---

### **1.2.8 Legal & Ethical Feasibility**

The system follows ethical and legal considerations:

* Transparent donation tracking using escrow system  
* Secure handling of user data  
* Role-based authorization for NGOs and admins  
* Prevention of fund misuse  
* Privacy protection of all stakeholders

No illegal or restricted data is involved, making the system legally compliant in a general academic context.

---

## **1.3 Project/Product Scope**

The scope of ReliefNet includes:

* Donor registration and donation management (money/items)  
* Volunteer registration and disaster assignment  
* NGO coordination for field operations  
* Admin-controlled disaster creation and management  
* Escrow-based donation release system  
* Real-time tracking of donations and deliveries  
* Notification system (SMS, email, app alerts)  
* Mapping of disaster locations  
* Inventory management for relief goods  
* Mobile application (Android-first)  
* Web dashboard for NGOs and Admins

The system acts as a centralized disaster relief coordination platform.

---

## **1.4 Project/Product Costing**

The estimated cost for this academic project is minimal:

* Development tools: Free (open-source)  
* Cloud hosting: Free tier / low-cost ($5–10/month if scaled)  
* APIs (Maps/SMS): Limited free usage  
* Internet and infrastructure: minimal personal usage  
* Hardware: existing devices

**Total Estimated Cost:** Low-budget academic project (\~PKR 5,000 – 15,000 if commercialized)

---

## **1.5 Task Dependency Table**

| Task ID | Task Description | Dependency |
| ----- | ----- | ----- |
| T1 | Requirement Analysis | None |
| T2 | System Design | T1 |
| T3 | Database Design | T1 |
| T4 | Frontend Development | T2 |
| T5 | Backend Development | T2 |
| T6 | Integration | T4, T5 |
| T7 | Testing | T6 |
| T8 | Deployment | T7 |

---

## **1.6 CPM – Critical Path Method**

**Critical Path:**

T1 → T2 → (T4, T5 parallel) → T6 → T7 → T8

The total project duration depends on this longest dependency chain, from requirement analysis to deployment.

---

## **1.7 Gantt Chart**

(To be created in Word/Excel)

**Project Timeline:**

* Week 1–2: Requirement Analysis  
* Week 3–4: System Design  
* Week 5–7: Development Phase  
* Week 8: Integration  
* Week 9: Testing  
* Week 10: Deployment & Documentation

---

## **1.8 Allocation of Members to Activities**

| Member | Role |
| ----- | ----- |
| Member 1 | Frontend Development, UI Design, Testing, Documentation |
| Member 2 | Backend Development, API Integration |
| Member 3 | Database Design, System Integration |

---

## **1.9 Tools and Technology with Reasoning**

* **Frontend:** React / Flutter → Responsive UI for mobile-first system  
* **Backend:** Node.js (Express) → Scalable server-side architecture  
* **Database:** PostgreSQL / MongoDB → Structured \+ flexible data handling  
* **Maps API:** Google Maps → Disaster location tracking  
* **Notifications:** Firebase / Twilio → Real-time alerts  
* **Version Control:** GitHub → Collaboration and tracking

These technologies are widely used, reliable, and suitable for real-time multi-user systems.

---

## **1.10 Vision Document**

The vision of ReliefNet is to create a unified disaster management ecosystem that connects donors, volunteers, NGOs, victims, and administrators to ensure efficient, transparent, and timely disaster response.

The system aims to reduce delays in relief distribution, improve coordination among stakeholders, and ensure accountability through real-time tracking and an escrow-based donation mechanism.

---

## **1.11 Product Features / Product Decomposition**

### **Functional Features:**

* User registration (Donor, Volunteer, NGO, Admin)  
* Donation management (money/items)  
* Escrow-based donation handling  
* Volunteer assignment system  
* Disaster event creation  
* Resource allocation and tracking  
* Notification system  
* Map integration for disaster locations  
* Inventory management system

### **Non-Functional Features:**

* Security and authentication  
* Scalability  
* Usability and accessibility  
* Reliability  
* Performance optimization

---

---

Here is your **updated and polished Chapter 2: Software Requirement Specification (SRS)**. I’ve corrected grammar, improved UML/SRS structure, fixed inconsistencies, and aligned everything with your **ReliefNet system (academic-grade version)**.

---

# **📘 Chapter 2: Software Requirement Specification (SRS) – *Revised***

---

## **2.1 Introduction**

The Software Requirement Specification (SRS) defines the functional and non-functional requirements of the **ReliefNet – Unified Disaster Relief, Donation & Volunteer Management Platform**.

It describes how the system interacts with multiple users, including donors, volunteers, NGOs, victims, administrators, and external services. This document ensures a clear understanding of system behavior, scope, constraints, and expected functionalities before implementation.

The SRS is based on **Object-Oriented Analysis and UML modeling techniques**.

---

## **2.2 System Specifications**

The system is a **multi-role web and mobile platform** that integrates disaster management, donation handling, volunteer coordination, inventory tracking, and resource distribution using an **escrow-based mechanism**.

---

## **2.2.1 Identifying External Entities**

The external entities interacting with the system are:

* **Donor:** Contributes money or goods  
* **Volunteer:** Provides physical services (rescue, medical, logistics)  
* **NGO / Relief Organization:** Executes disaster relief operations  
* **Admin (System Administrator):** Controls system operations, approvals, and disaster management  
* **Victim / Affected Person:** Requests and receives aid  
* **Payment Gateway (External System):** Processes financial transactions  
* **Notification Service (SMS/Email API):** Sends alerts and updates

---

## **2.2.2 Context Level Data Flow Diagram (Description)**

At the highest level, the system is represented as a single process:

### **“ReliefNet System”**

### **Data Flow:**

* Donor → Donation details → System  
* Volunteer → Availability data → System  
* Admin → Disaster creation & approvals → System  
* Victim → Help requests → System  
* System → Notifications → All users  
* System → Resource allocation → NGOs

### **External Systems Interaction:**

* Payment Gateway → Processes donations  
* SMS/Email API → Sends notifications

---

## **2.2.3 Capture “SHALL” Statements (Functional Requirements)**

### **🔹 User & Authentication**

* A user shall register as a Donor, Volunteer, NGO, or Admin  
* The system shall authenticate users securely  
* The system shall manage role-based access control

---

### **🔹 Donation System**

* A donor shall donate money or physical items  
* The system shall record and track all donations  
* The system shall hold monetary donations in escrow  
* The admin shall approve donation release based on verification

---

### **🔹 Disaster Management**

* The admin shall create and manage disaster events  
* The system shall display disaster locations on a map  
* The system shall distribute resources to disaster zones

---

### **🔹 Volunteer Management**

* A volunteer shall register and provide availability  
* The system shall assign volunteers based on availability and location  
* The system shall track volunteer activities and assignments

---

### **🔹 NGO Operations**

* An NGO shall receive assigned donations and resources  
* The NGO shall update distribution status in the system

---

### **🔹 Victim Support**

* A victim shall submit a help request  
* The system shall match requests with available resources

---

### **🔹 Notifications & Tracking**

* The system shall send SMS/email/push notifications  
* The donor shall track donation usage and status  
* The system shall provide real-time updates for all activities

---

## **2.2.4 Allocate Requirements (Use Case Mapping)**

| Requirement | Use Case ID | Use Case Name |
| ----- | ----- | ----- |
| User Registration | UC1 | UC\_Register |
| Login | UC2 | UC\_Login |
| Donate Money/Items | UC3 | UC\_Donate |
| Create Disaster Event | UC4 | UC\_Create\_Disaster |
| Approve Donation | UC5 | UC\_Approve\_Donation |
| Assign Volunteers | UC6 | UC\_Assign\_Volunteer |
| Submit Help Request | UC7 | UC\_Request\_Help |
| Track Donation | UC8 | UC\_Track\_Donation |
| Send Notifications | UC9 | UC\_Send\_Notification |
| Manage NGO Operations | UC10 | UC\_Manage\_NGO |

---

## **2.2.5 Prioritize Requirements**

### **⭐ Highest Priority**

* User registration & login  
* Donation management system (money/items)  
* Disaster event creation  
* Resource allocation system

---

### **⚖️ Medium Priority**

* Volunteer management system  
* NGO coordination  
* Donation tracking  
* Victim help request system

---

### **🔽 Lowest Priority**

* Reports and analytics  
* Notification customization  
* Advanced dashboards  
* Historical data analysis

---

## **2.3 Existing Systems / Literature Review**

Disaster management and donation systems currently exist in separate platforms but lack integration.

### **Existing Systems:**

* NGO-based manual relief systems  
* GoFundMe (crowdfunding platform)  
* Red Cross disaster response systems  
* Independent volunteer coordination platforms

### **Limitations:**

* Lack of centralized system  
* No unified tracking of donations  
* Limited transparency in fund usage  
* Poor coordination during disasters  
* Delayed response in emergencies

### **Proposed Improvement (ReliefNet):**

ReliefNet integrates all stakeholders into a unified platform with:

* Real-time tracking  
* Escrow-based donation control  
* Disaster mapping  
* Volunteer coordination system

---

## **2.3.1 Existing System**

Currently, disaster relief operations are handled in a fragmented manner:

* Donors use crowdfunding platforms  
* NGOs operate independently  
* Volunteers coordinate through social media or local networks

### **Problems:**

* No central coordination system  
* Lack of transparency  
* Slow response time  
* Inefficient resource distribution

---

## **2.4 Use Case Diagram of the Project**

### **Main Actors:**

* Donor  
* Volunteer  
* Admin  
* NGO  
* Victim

### **Main Use Cases:**

* Register/Login  
* Donate Funds/Items  
* Create Disaster Event  
* Assign Volunteers  
* Approve Donations  
* Track Donations  
* Request Help  
* Manage Distribution

👉 *This diagram should be drawn using StarUML / Draw.io*

---

## **2.4.1 Use Case Descriptions**

---

### **✔ UC\_Register**

* **Actor:** All users  
* **Description:** User creates an account in the system  
* **Precondition:** User is not registered  
* **Postcondition:** Account is successfully created

---

### **✔ UC\_Login**

* **Actor:** All users  
* **Description:** User logs into the system securely  
* **Postcondition:** User gains access based on role

---

### **✔ UC\_Donate**

* **Actor:** Donor  
* **Description:** Donor contributes money or items  
* **Postcondition:** Donation is stored in system (escrow or direct mode)

---

### **✔ UC\_Create\_Disaster**

* **Actor:** Admin  
* **Description:** Admin creates a disaster event with location and details  
* **Postcondition:** Disaster becomes visible to NGOs, donors, and volunteers

---

### **✔ UC\_Assign\_Volunteer**

* **Actor:** Admin  
* **Description:** Volunteers are assigned to disaster zones based on availability  
* **Postcondition:** Volunteer is linked to task

---

### **✔ UC\_Track\_Donation**

* **Actor:** Donor  
* **Description:** Donor tracks usage and status of donation  
* **Postcondition:** Real-time status is displayed

---

### **✔ UC\_Request\_Help**

* **Actor:** Victim  
* **Description:** Victim submits request for assistance  
* **Postcondition:** Request is forwarded to NGO/Admin system

---

**Great—now we’ll properly build Chapter 3 (Design Document) for your ReliefNet – Unified Disaster Relief, Donation & Volunteer Management System in a clean academic UML/object-oriented style.**

---

# **📘 Chapter 3: Design Document (Object-Oriented Approach)**

## **3.1 Introduction**

**The Design Document for the ReliefNet system translates the requirements defined in the SRS into a structured object-oriented design using UML diagrams. This phase defines how the system will be implemented in terms of classes, objects, interactions, and behaviors.**

**ReliefNet is a multi-role platform integrating Donors, Volunteers, NGOs, Victims, and Administrators. The system follows an escrow-based disaster relief model where donations and resources are released only after verification through admin approval, NGO confirmation, volunteer updates, or victim delivery confirmation.**

**The design focuses on:**

* **Modular architecture**  
* **Secure multi-role interaction**  
* **Real-time disaster coordination**  
* **Scalable donation and volunteer management**

---

## **3.2 Domain Model**

**The domain model identifies key entities and their relationships in the ReliefNet system.**

### **Key Domain Entities:**

* **User (abstract entity)**  
  * **Donor**  
  * **Volunteer**  
  * **NGO Representative**  
  * **Admin**  
  * **Victim**  
* **Disaster Event**  
* **Donation**  
* **Escrow Transaction**  
* **Volunteer Assignment**  
* **Resource / Inventory Item**  
* **Notification**  
* **Help Request**  
* **Delivery / Distribution Record**

### **Relationships:**

* **A Donor makes many Donations**  
* **A Donation is linked to an Escrow Transaction**  
* **An Admin manages Disaster Events**  
* **Volunteers are assigned to Disaster Events**  
* **NGOs receive allocated Resources**  
* **Victims create Help Requests**  
* **Notifications are sent to all roles**

**👉 This model ensures traceability of every action from donation to final delivery.**

---

## **3.3 Design Class Diagram**

### **Main Classes:**

#### **1\. User (Base Class)**

* **userId**  
* **name**  
* **email**  
* **password**  
* **role**  
* **login()**  
* **register()**

#### **2\. Donor (inherits User)**

* **makeDonation()**  
* **trackDonation()**

#### **3\. Volunteer (inherits User)**

* **availability**  
* **location**  
* **acceptAssignment()**

#### **4\. NGO (inherits User)**

* **manageResources()**  
* **distributeAid()**

#### **5\. Admin (inherits User)**

* **createDisaster()**  
* **approveEscrow()**  
* **assignVolunteers()**  
* **manageSystem()**

#### **6\. DisasterEvent**

* **disasterId**  
* **location**  
* **type**  
* **severity**  
* **updateStatus()**

#### **7\. Donation**

* **donationId**  
* **type (money/item)**  
* **status**  
* **holdInEscrow()**

#### **8\. EscrowTransaction**

* **escrowId**  
* **status**  
* **releaseFunds()**

#### **9\. HelpRequest**

* **requestId**  
* **priority**  
* **status**

#### **10\. Notification**

* **notificationId**  
* **message**  
* **sendAlert()**

**👉 Relationships:**

* **User → specialized into Donor, Volunteer, NGO, Admin, Victim**  
* **Admin controls DisasterEvent and EscrowTransaction**  
* **Donor creates Donation**  
* **NGO processes resource distribution**  
* **Volunteer assigned to DisasterEvent**

---

## **3.4 Sequence Diagram**

### **Scenario: Donation Processing with Escrow System**

**Actors:**  
**Donor → System → Admin → NGO → Victim Confirmation**

### **Flow:**

1. **Donor logs in**  
2. **Donor creates donation**  
3. **System stores donation in escrow**  
4. **Admin receives notification**  
5. **Admin verifies disaster requirement**  
6. **Admin approves donation release**  
7. **NGO receives allocated resources**  
8. **Volunteer confirms delivery**  
9. **Victim confirms receipt**  
10. **System updates donation status to completed**

**👉 Key Feature:**  
**Escrow release is triggered only after verification chain:**  
**Admin approval → NGO confirmation → Volunteer/Victim confirmation**

---

## **3.5 State Chart Diagram**

### **Object: Donation Lifecycle**

**States:**

1. **Created**  
2. **Pending Approval**  
3. **In Escrow**  
4. **Approved by Admin**  
5. **Assigned to NGO**  
6. **Dispatched**  
7. **Delivered**  
8. **Verified by Victim**  
9. **Completed**

### **Transitions:**

* **Create Donation → Pending Approval**  
* **Admin approves → Escrow Activated**  
* **NGO receives → Assigned**  
* **Volunteer delivers → Dispatched**  
* **Victim confirms → Completed**

**👉 This ensures full transparency and traceability of donations.**

---

## **3.6 Collaboration Diagram**

### **Purpose:**

**Shows interaction between objects in executing a use case.**

### **Example: “Process Donation Request”**

**Objects:**

* **Donor**  
* **System**  
* **Admin**  
* **Escrow Service**  
* **NGO**  
* **Notification Service**

### **Message Flow:**

1. **Donor → System: submitDonation()**  
2. **System → Escrow: holdFunds()**  
3. **System → Admin: notifyApprovalRequest()**  
4. **Admin → System: approveDonation()**  
5. **System → NGO: allocateResources()**  
6. **NGO → System: confirmReceipt()**  
7. **System → Notification: sendUpdate()**  
8. **System → Donor: updateStatus()**

**👉 This diagram highlights coordination between financial, administrative, and field operations.**

---

## **a. Contents of Collaboration Diagrams**

**A collaboration diagram includes:**

* **Objects (Donor, Admin, NGO, System, etc.)**  
* **Links between objects**  
* **Messages exchanged between objects**  
* **Sequence of interactions**  
* **Responsibilities of each object**

**It is used to:**

* **Understand system interactions**  
* **Define object responsibilities**  
* **Map real-world workflows into system design**

---

# **📘 Chapter 4: User Interface Design (ReliefNet System)**

---

## **4.1 Introduction**

**The User Interface (UI) Design of the ReliefNet system focuses on creating a simple, intuitive, and accessible experience for all stakeholders including Donors, Volunteers, NGOs, Victims, and Administrators. Since ReliefNet operates in disaster scenarios where time and clarity are critical, the UI is designed to be minimal, fast, and role-based.**

**The system includes two main interfaces:**

* **📱 Mobile Application (Primary platform for Donors, Volunteers, Victims)**  
* **💻 Web Dashboard (Primary platform for Admin and NGO management)**

**The UI ensures:**

* **Easy navigation for non-technical users**  
* **Quick access to emergency actions**  
* **Real-time updates and notifications**  
* **Clear visualization of disaster zones and resources**

---

## **4.2 Site Maps**

**A site map represents the overall structure of the ReliefNet system and shows how different modules are organized.**

### **📌 ReliefNet Site Map Structure:**

### **🔷 Mobile Application (Users)**

* **Home**  
* **Login / Register**  
* **Dashboard**  
  * **Disaster List**  
  * **Nearby Disasters (Map View)**  
* **Donation Module**  
  * **Money Donation**  
  * **Item Donation**  
  * **Donation Tracking**  
* **Volunteer Module**  
  * **Availability Update**  
  * **Task Assignment**  
* **Help Request (Victims)**  
* **Notifications**  
* **Profile Settings**

---

### **🔷 Web Dashboard (Admin & NGO)**

#### **Admin Panel:**

* **Dashboard Overview**  
* **Disaster Management**  
  * **Create Disaster Event**  
  * **Update Status**  
* **Donation Approval (Escrow Control)**  
* **Volunteer Assignment**  
* **User Management**  
* **Reports & Analytics**  
* **Notification Control**

#### **NGO Panel:**

* **Resource Management**  
* **Inventory Tracking**  
* **Distribution Management**  
* **Volunteer Coordination**  
* **Disaster Response Updates**

---

### **🔷 Shared Modules:**

* **Authentication System**  
* **Notification System**  
* **Map Integration (Disaster Locations)**  
* **Escrow Transaction System**

---

## **4.3 Storyboards**

**Storyboards represent step-by-step interaction between users and the system.**

---

### **📌 Storyboard 1: Donor Making a Donation**

1. **User opens mobile app**  
2. **Logs in as Donor**  
3. **Views active disaster list**  
4. **Selects a disaster event**  
5. **Chooses donation type (money/items)**  
6. **Enters donation details**  
7. **Confirms donation**  
8. **System places donation in escrow**  
9. **Notification sent to Admin**  
10. **Donor sees “Donation Pending Approval” status**

---

### **📌 Storyboard 2: Admin Approving Disaster Relief**

1. **Admin logs into web dashboard**  
2. **Views pending donations**  
3. **Reviews disaster requirements**  
4. **Approves donation release**  
5. **System assigns NGO**  
6. **Volunteer is assigned for delivery**  
7. **System updates tracking status**  
8. **Notification sent to donor and NGO**

---

### **📌 Storyboard 3: Volunteer Assignment**

1. **Volunteer logs into mobile app**  
2. **Updates availability status**  
3. **System suggests nearby disaster tasks**  
4. **Volunteer accepts task**  
5. **Admin confirms assignment**  
6. **Volunteer receives navigation route**  
7. **Volunteer updates task completion**

---

### **📌 Storyboard 4: Victim Help Request**

1. **Victim opens mobile app**  
2. **Submits help request (food/medical/shelter)**  
3. **System logs request with priority level**  
4. **Admin receives alert**  
5. **NGO assigns resources**  
6. **Volunteer delivers aid**  
7. **Victim confirms receipt**

---

## **4.4 Navigational Maps**

**Navigational maps show how users move between screens and modules in the ReliefNet system.**

---

### **📱 Mobile App Navigation Flow**

**Home Screen**  
**→ Login / Register**  
**→ Dashboard**  
**→ Disaster Map View**  
**→ Donation Page**  
**→ Volunteer Page**  
**→ Help Request Page**  
**→ Notifications**  
**→ Profile**

---

### **🔷 Donor Flow**

**Login → Dashboard → Select Disaster → Donate → Track Donation → Notifications**

---

### **🔷 Volunteer Flow**

**Login → Availability Setup → View Assignments → Accept Task → Navigate to Location → Complete Task**

---

### **🔷 Victim Flow**

**Login → Submit Help Request → View Status → Receive Aid → Confirm Delivery**

---

### **💻 Web Dashboard Navigation**

**Admin Dashboard**  
**→ Disaster Management**  
**→ Donation Approval (Escrow Control)**  
**→ Volunteer Assignment**  
**→ User Management**  
**→ Reports**

**NGO Dashboard**  
**→ Inventory Management**  
**→ Distribution Panel**  
**→ Volunteer Coordination**  
**→ Disaster Updates**

---

### **📌 Key Navigation Principles**

* **Minimal steps for emergency actions**  
* **Role-based navigation (Donor ≠ Admin ≠ Volunteer)**  
* **Fast access to disaster and donation modules**  
* **Map-first navigation for disaster awareness**

---

## **✔ Summary**

**The UI design of ReliefNet ensures:**

* **Simple and fast interaction during emergencies**  
* **Separate but integrated interfaces for all user roles**  
* **Strong focus on real-time disaster response**  
* **Clear navigation structure for both mobile and web platforms**

---

# **📘 Chapter 5: Software Testing (ReliefNet System)**

---

## **5.1 Introduction**

**Software testing is a critical phase in the development of the ReliefNet system, ensuring that all modules such as donations, volunteer management, disaster tracking, and escrow-based transactions function correctly and reliably.**

**The testing process is based on the IEEE 829-1998 Software Testing Standard. It verifies that the system meets all functional and non-functional requirements defined in the SRS and design phases. Testing ensures:**

* **Correctness of system functions**  
* **Reliability during disaster scenarios**  
* **Security of sensitive donation and user data**  
* **Proper workflow of escrow-based transactions**

---

## **5.2 Test Plan**

### **5.2.1 Purpose**

**The purpose of the test plan is to define the scope, objectives, resources, schedule, and approach for testing the ReliefNet system. It ensures that all system features are tested systematically before deployment.**

---

### **5.2.2 Outline**

#### **a. Test Plan Identifier**

**TP\_ReliefNet\_001**

#### **b. Introduction**

**The ReliefNet system integrates donors, volunteers, NGOs, victims, and administrators. Testing focuses on verifying donation handling, disaster management, volunteer coordination, and escrow-based approval workflows.**

#### **c. Test Items**

* **User Registration Module**  
* **Login System**  
* **Donation Module (Money & Items)**  
* **Escrow Transaction System**  
* **Disaster Management Module**  
* **Volunteer Assignment System**  
* **NGO Distribution Module**  
* **Notification System**  
* **Map Integration**

#### **d. Features to be Tested**

* **User authentication and role-based access**  
* **Donation creation and tracking**  
* **Escrow approval and release mechanism**  
* **Disaster event creation**  
* **Volunteer assignment and tracking**  
* **Help request handling**  
* **Notification delivery (SMS/Email)**

#### **e. Features Not to be Tested**

* **Third-party API internal code (Google Maps, SMS gateway)**  
* **External payment gateway internal logic**

#### **f. Approach**

* **Black box testing for user functionalities**  
* **Integration testing for system modules**  
* **System testing for end-to-end workflows**  
* **Validation of escrow-based transaction flow**

#### **g. Item Pass/Fail Criteria**

* **Pass: System outputs expected results correctly**  
* **Fail: Any mismatch in expected workflow or data inconsistency**

#### **h. Suspension Criteria**

**Testing is suspended if:**

* **Critical system failure occurs**  
* **Database connectivity issues arise**  
* **API services are unavailable**

#### **i. Test Deliverables**

* **Test cases**  
* **Test reports**  
* **Bug/incident reports**  
* **Final test summary**

#### **j. Testing Tasks**

* **Unit testing**  
* **Integration testing**  
* **System testing**  
* **User acceptance testing**

#### **k. Environmental Needs**

* **Windows/Linux environment**  
* **Node.js runtime**  
* **MongoDB/PostgreSQL database**  
* **Mobile emulator (Android Studio / Flutter)**  
* **Browser testing tools**

#### **l. Responsibilities**

* **Developers: Unit testing**  
* **Testers: System testing**  
* **Team lead: Review and validation**

#### **m. Staffing and Training Needs**

* **1 Frontend tester**  
* **1 Backend tester**  
* **Basic training in API testing (Postman)**

#### **n. Schedule**

* **Week 1: Unit Testing**  
* **Week 2: Integration Testing**  
* **Week 3: System Testing**  
* **Week 4: Final UAT**

#### **o. Risks and Contingencies**

* **API failure → use mock services**  
* **Server downtime → backup testing environment**  
* **Data inconsistency → reset database**

#### **p. Approvals**

**Project Supervisor approval required before deployment.**

---

## **5.3 Test Design Specification**

### **5.3.1 Purpose**

**To define detailed test cases for validating each module of the ReliefNet system and ensure complete coverage of functional requirements.**

---

### **5.3.2 Outline**

#### **a. Test Plan Identifier**

**TDS\_ReliefNet\_001**

#### **b. Introduction**

**This document defines how each feature of ReliefNet will be tested, including donation flow, volunteer assignment, disaster handling, and escrow operations.**

#### **c. Test Items**

* **Authentication System**  
* **Donation Module**  
* **Escrow System**  
* **Disaster Management**  
* **Volunteer System**  
* **NGO Operations**

#### **d. Features to be Tested**

* **Valid and invalid login**  
* **Donation creation and tracking**  
* **Escrow approval flow**  
* **Disaster creation and updates**  
* **Volunteer assignment**

#### **e. Features Not to be Tested**

* **External payment gateway internals**  
* **Third-party map API source code**

#### **f. Approach**

* **Input validation testing**  
* **Workflow testing**  
* **API testing using Postman**  
* **UI testing for mobile and web**

#### **g. Item Pass/Fail Criteria**

* **Pass: Correct response and database update**  
* **Fail: System crash or incorrect output**

#### **h. Suspension Criteria**

* **Server failure**  
* **Database corruption**  
* **API downtime**

#### **i. Test Deliverables**

* **Test case documents**  
* **Execution reports**  
* **Bug reports**

#### **j. Testing Tasks**

* **Test case execution**  
* **Bug tracking**  
* **Regression testing**

#### **k. Environmental Needs**

* **Android Studio / Flutter emulator**  
* **Web browser testing tools**  
* **Database server**

#### **l. Responsibilities**

* **QA Tester: Execution**  
* **Developer: Fix bugs**  
* **Admin: Approval**

#### **m. Staffing and Training Needs**

* **Test engineer required**  
* **Basic API and UI testing knowledge**

#### **n. Schedule**

**Aligned with development phases**

#### **o. Risks and Contingencies**

**Same as test plan**

#### **p. Approvals**

**Supervisor approval required**

---

## **5.4 Test Case Specification**

### **5.4.1 Purpose**

**To define individual test cases for verifying specific functionalities of ReliefNet.**

---

### **5.4.2 Outline**

#### **a. Test Case ID**

**TC\_Login\_001**

#### **b. Test Items**

**Login Module**

#### **c. Input Specifications**

* **Email: valid/invalid**  
* **Password: correct/incorrect**

#### **d. Output Specifications**

* **Success: Redirect to dashboard**  
* **Failure: Error message displayed**

#### **e. Environmental Needs**

* **Web browser / mobile app**  
* **Backend server running**

#### **f. Special Requirements**

* **Internet connection required**

#### **g. Inter-case Dependencies**

**Registration must be completed before login test**

---

## **5.5 Test Procedure Specification**

### **5.5.1 Purpose**

**To define step-by-step procedures for executing test cases in ReliefNet.**

---

### **5.5.2 Outline**

#### **a. Test Procedure ID**

**TPR\_Login\_001**

#### **b. Purpose**

**To test login functionality**

#### **c. Special Requirements**

**Valid registered user account required**

#### **d. Procedure Steps**

* **Open application**  
* **Enter credentials**  
* **Click login button**  
* **Verify dashboard access**

---

## **5.6 Test Item Transmittal Report**

### **5.6.1 Purpose**

**To record transfer of modules for testing.**

---

### **5.6.2 Outline**

* **Report ID: TITR\_001**  
* **Items: Authentication, Donation, Escrow, Disaster Module**  
* **Location: Testing Server**  
* **Status: Ready for testing**  
* **Approval: QA Lead**

---

## **5.7 Test Log**

### **5.7.1 Purpose**

**To maintain a record of all test activities.**

---

### **5.7.2 Outline**

* **Log ID: TL\_001**  
* **Records:**  
  * **Login test executed successfully**  
  * **Donation module tested**  
  * **Escrow approval tested**  
* **Environment: Web \+ Mobile**

---

## **5.8 Test Incident Report**

### **5.8.1 Purpose**

**To document errors found during testing.**

---

### **5.8.2 Outline**

* **Incident ID: TIR\_001**  
* **Issue: Donation not updating status**  
* **Expected: Status \= "Pending Approval"**  
* **Actual: Status not updated**  
* **Impact: Medium priority bug**  
* **Resolution: Backend fix required**

---

## **5.9 Test Summary Report**

### **5.9.1 Purpose**

**To summarize overall testing results.**

---

### **5.9.2 Outline**

* **Report ID: TSR\_ReliefNet\_001**  
* **Summary: All core modules tested successfully**  
* **Variances: Minor UI issues fixed**  
* **Results: 95% test cases passed**  
* **Evaluation: System ready for deployment**  
* **Activities: Unit \+ Integration \+ System testing completed**  
* **Approval: Supervisor**

---

# **📘 Chapter 7: Results**

**The ReliefNet system successfully achieves its objectives of integrating donors, volunteers, NGOs, and victims into a unified disaster management platform. Testing results confirm that:**

* **Donation tracking works accurately**  
* **Escrow system ensures secure fund handling**  
* **Volunteer assignment is functional**  
* **Disaster mapping is operational**  
* **Notifications are delivered successfully**

**The system improves coordination and transparency in disaster relief operations.**

---

# **📘 Chapter 8: User Manual**

### **Login**

* **Open app/web**  
* **Enter credentials**  
* **Select role**

### **Donor**

* **Select disaster**  
* **Donate money/items**  
* **Track donation status**

### **Volunteer**

* **Set availability**  
* **Accept tasks**  
* **Complete assignments**

### **NGO**

* **Manage resources**  
* **Distribute aid**  
* **Update status**

### **Admin**

* **Create disasters**  
* **Approve donations**  
* **Assign volunteers**

---

# **📘 Chapter 9: Conclusion and Future Work**

### **Conclusion**

**ReliefNet provides a unified, efficient, and transparent disaster relief management system. It integrates multiple stakeholders into a single platform and ensures accountability through escrow-based donation handling and real-time tracking.**

### **Future Work**

* **AI-based disaster prediction system**  
* **Drone-based delivery tracking**  
* **Blockchain-based donation transparency**  
* **Real-time chat between stakeholders**  
* **Offline mode for disaster zones**


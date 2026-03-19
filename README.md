# RapidCare - AI Powered On-Demand Nursing Platform

A complete multi-page web application frontend prototype for a healthcare startup that connects patients with certified nurses for non-critical medical situations.

## 📋 Project Overview

RapidCare is a healthcare platform that allows patients to request certified nurses to their homes for non-critical medical situations. The platform features AI-powered triage, real-time tracking, and comprehensive medical profile management.

## 🎯 Features

- **Landing Page**: Modern healthcare UI with services overview
- **Patient Dashboard**: Manage appointments and medical records
- **My Requests**: Track all nursing service requests with status filters
- **Book Diagnostic Tests**: Browse and book 12+ lab tests with home collection
- **Medical Reports**: View all diagnostic test results with detailed metrics
- **Health Snapshot**: Visual health dashboard with BMI, vitals, and recommendations
- **AI Triage System**: Smart questionnaire to evaluate medical urgency
- **Real-Time Tracking**: Track nurse location and arrival time
- **Medical Profile**: Comprehensive patient health information
- **Nurse Portal**: Dashboard for nurses to accept and manage requests
- **AI Chat Assistant**: Interactive chat window for instant health assistance

## 📁 Project Structure

```
RapidCare/
│
├── index.html                 # Landing page
├── patient-dashboard.html     # Patient dashboard
├── my-requests.html           # Patient requests tracking
├── book-test.html             # Diagnostic tests booking
├── medical-reports.html       # Test reports viewer
├── health-snapshot.html       # Visual health dashboard
├── triage.html               # AI triage questionnaire
├── tracking.html             # Nurse tracking page
├── profile.html              # Medical profile management
├── nurse-dashboard.html      # Nurse portal
├── styles.css                # Shared stylesheet
├── script.js                 # Shared JavaScript
└── README.md                 # This file
```

## 🎨 Design System

**Color Palette:**

- Primary Color: `#6558d3` (Purple)
- Primary Hover: `#4133B7` (Dark Purple)
- Secondary Color: `#1FCAC5` (Teal/Cyan)
- Background Light: `#ecf0ff` (Light Purple-Blue)
- Background Accent: `#bed6fb` (Light Blue)
- Text Dark: `#425275` (Dark Blue-Grey)
- Text Medium: `#697e91` (Medium Grey)
- Text Light: `#707a91` (Light Grey)

**Design Principles:**

- Modern and elegant healthcare UI
- Card-based layout with 16px rounded corners
- Soft shadows with purple-blue tint
- Smooth animations and transitions
- Responsive design for laptop screens
- Professional medical aesthetic with contemporary styling

## 🚀 How to Run

1. **Simply open the project folder**
2. **Open `index.html` in any modern web browser**
3. **Navigate through the application using the links**

No server setup or dependencies required! This is a pure HTML/CSS/JavaScript application.

## 📱 Page Navigation Flow

### For Patients:

1. **index.html** → Landing page
2. Click "Request a Nurse" → **triage.html** (AI Triage)
3. Submit form → **tracking.html** (Track Nurse)
4. Access dashboard → **patient-dashboard.html**
5. View request history → **my-requests.html**
6. Book diagnostic tests → **book-test.html**
7. View test reports → **medical-reports.html**
8. Check health snapshot → **health-snapshot.html**
9. Manage profile → **profile.html**

### For Nurses:

1. Click "Become a Nurse" → **nurse-dashboard.html**
2. View available requests
3. Accept requests and view patient information

## ✨ Key Interactions

### AI Chat Assistant

- Full chat window interface (slides in from right)
- Real-time messaging with typing indicators
- Quick suggestion buttons for common queries
- Personalized responses based on user context
- Available on patient dashboard

### Medical Reports Page

- View all diagnostic test results
- Filter by category (Blood, Diabetes, Vitamins, Thyroid)
- Detailed metrics with reference ranges
- Status indicators (Normal, Warning, Danger)
- Color-coded health indicators
- Click to view full PDF reports

### Health Snapshot Dashboard

- Visual BMI calculator with healthy weight status
- Real-time health metrics with progress bars
- Vitamin levels and cholesterol tracking
- Current medical conditions display
- Known allergies with warnings
- Personalized health recommendations
- Data synced from medical profile

### Book Diagnostic Tests Page

- Search and filter through 12+ diagnostic tests
- Category filtering (Blood Tests, Diabetes, Thyroid, Liver/Kidney, Heart, Vitamins, Women's Health, Packages)
- Test details with parameter counts and pricing
- Add to cart functionality with floating cart button
- Health packages with discounted pricing
- Home sample collection badge for all tests

### My Requests Page

- Status tabs to filter requests (All, In Progress, Completed, Cancelled)
- Detailed request cards with timeline
- Live tracking button for active requests
- Service summaries and vital readings for completed visits
- Rating system and report downloads

### AI Chat Assistant

- Floating button on bottom right of all pages
- Animated pulse effect for attention
- Quick access to AI health guidance
- Available across entire application

### AI Triage Page

- Select medical issue from options
- Answer questions about bleeding and pain level
- Submit form triggers loading animation
- Redirects to tracking page after 3 seconds

### Tracking Page

- Simulated map display
- Nurse information card
- Progress indicator (Request Accepted → En Route → Arrival)
- Call and cancel functionality

### Nurse Dashboard

- Toggle online/offline availability
- View patient requests with distance
- Modal popup for patient medical information
- Accept requests with confirmation
- Past visits section with detailed visit history
- Performance statistics and earnings tracking

### Medical Profile

- Comprehensive patient information form
- Pre-filled example data
- Form validation
- Save confirmation

### Patient Dashboard

- Request history timeline with visual indicators
- Completed and in-progress request tracking
- Service details and ratings display
- Quick access to live tracking and reports

## 💡 Demo Features

**Simulated Functionality:**

- AI triage processing (loading animation)
- Real-time tracking updates
- Progress status changes
- Modal popups for patient info
- Form submissions with alerts

## 🎓 Perfect for College Projects

This project is ideal for:

- Web Development course projects
- Healthcare IT demonstrations
- UI/UX design portfolios
- Frontend development practice
- Computer Science project presentations

## 📊 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with flexbox and grid
- **JavaScript (Vanilla)**: Interactive elements and animations

**No frameworks or libraries** - Pure vanilla code for easy understanding!

## 🎯 Project Highlights

### 1. **Complete User Journey**

- Patient registration and profile
- Request submission and tracking
- Nurse matching and dispatch

### 2. **Professional UI/UX**

- Healthcare-focused design
- Intuitive navigation
- Responsive layouts
- Smooth animations

### 3. **Interactive Elements**

- Form validation
- Modal dialogs
- Toggle switches
- Loading animations
- Progress indicators

### 4. **Real-World Scenarios**

- Emergency request flow
- Medical profile management
- Nurse availability system
- Patient-nurse matching

## 📝 Customization Tips

### Change Colors:

Edit the CSS variables in `styles.css`:

```css
:root {
  --primary-color: #2a7fff;
  --secondary-color: #3bcf8e;
}
```

### Add More Services:

Copy and modify service card structure in `index.html`

### Modify Nurse Data:

Update the `patientData` object in `nurse-dashboard.html`

## 🔒 Security & Privacy Notes

This is a **frontend prototype** for demonstration purposes. In a production environment, you would need:

- Backend server for data storage
- Database for patient/nurse information
- Authentication and authorization
- HIPAA compliance measures
- Encrypted communications
- Secure payment processing

## 📖 Presentation Tips

When demonstrating this project:

1. **Start with the landing page** - Explain the concept
2. **Walk through patient journey** - Triage → Tracking → Dashboard
3. **Show nurse portal** - Demonstrate both user perspectives
4. **Highlight key features**:
   - AI triage system
   - Real-time tracking
   - Medical profile management
   - Availability toggle
5. **Discuss future enhancements**:
   - Backend integration
   - Mobile app version
   - Payment gateway
   - Real GPS tracking
   - Video consultation

## 🎨 Screenshots

Open the following pages to see the complete application:

- **Landing**: `index.html`
- **Patient Dashboard**: `patient-dashboard.html`
- **My Requests**: `my-requests.html`
- **Book Tests**: `book-test.html`
- **Medical Reports**: `medical-reports.html`
- **Health Snapshot**: `health-snapshot.html`
- **AI Triage**: `triage.html`
- **Tracking**: `tracking.html`
- **Profile**: `profile.html`
- **Nurse Portal**: `nurse-dashboard.html`

## 📚 Learning Outcomes

By studying this project, you'll understand:

- Multi-page web application structure
- CSS Grid and Flexbox layouts
- Form handling and validation
- DOM manipulation with JavaScript
- Modal dialogs and overlays
- Responsive design principles
- Healthcare UI/UX patterns

## 🤝 Credits

**RapidCare** - A college project demonstration
Built with ❤️ using vanilla HTML, CSS, and JavaScript

---

## 📞 Support

This is an educational project. Feel free to modify and enhance it for your needs!

**Good luck with your presentation! 🎉**

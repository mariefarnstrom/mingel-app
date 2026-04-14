# YRGO:XP - Mingel App

A gamified quiz application built with React and Vite where webdeveloper and digital design students at Yrgo and companies in the industry can test their knowledge across different difficulty levels and compete on a leaderboard.

## 🎮 Features

- **User Profiles**: Create profiles with custom avatars (8 different options)
- **Role-Based Questions**: Different question sets for students and companies 
- **Difficulty Levels**: Choose between different difficulty levels with varying point rewards
- **Real-Time Leaderboard**: Live score updates with Supabase real-time subscriptions
- **Multi-Language Support**: Swedish and English language options
- **Dark/Light Mode**: Theme toggle with smooth animations
- **Question Variety**: Prevents the same question from appearing twice in a row
- **Onboarding Instructions**: Interactive tutorial system with step-by-step guidance

## 🚀 Tech Stack

- **Frontend Framework**: React 19.2.4
- **Build Tool**: Vite 8.0.1
- **Styling**: Emotion (CSS-in-JS)
- **Routing**: React Router DOM 7.13.1
- **Database**: Supabase 2.100.0
- **Linting**: ESLint 9.39.4
- **Deployment**: Vercel

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── buttons/        # Button components and styles
│   ├── cards/          # Card layout components
│   ├── icons/          # SVG icon components
│   ├── Header.jsx      # Main header component
│   ├── ErrorModal.jsx  # Error modal component
│   └── Toggle.jsx      # Theme/language toggle
├── pages/              # Page components for routes
│   ├── Home.jsx
│   ├── Instructions.jsx
│   ├── Questions.jsx
│   ├── ScoreBoard.jsx
│   ├── CreateProfile.jsx
│   ├── ChooseDifficulty.jsx
│   └── FinishedProfile.jsx
├── hooks/              # Custom React hooks
│   ├── useQuestions.js      # Question fetching and selection logic
│   ├── useScore.js          # Leaderboard and real-time updates
│   ├── useCreateProfile.js  # Profile creation
│   ├── useLevels.js         # Difficulty levels
│   ├── useLanguage.js       # Language context hook
│   ├── useColorMode.js      # Theme context hook
│   ├── useInstructions.js   # Tutorial navigation
│   └── useProfile.js        # User profile data
├── contexts/           # React context providers
│   ├── LanguageContext.jsx
│   └── ColorModeContext.jsx
├── lib/                # External library configuration
│   └── supabaseClient.js
├── translations/       # Multi-language support
│   └── translations.json
├── animations.js       # Keyframe animations
└── App.jsx            # Main application component
```

## 🛠️ Setup & Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mingel-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file with your Supabase credentials:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 🎯 Available Scripts

### Development
```bash
npm run dev
```
Starts the development server with hot module replacement.

### Build
```bash
npm run build
```
Creates an optimized production build.

### Preview
```bash
npm run preview
```
Preview the production build locally.

### Lint
```bash
npm run lint
```
Run ESLint to check code quality.

## 📊 Database Schema

The app uses Supabase PostgreSQL with the following main tables:

- **users**: User profiles with scores and avatar information
- **levels**: Difficulty levels with point values
- **questions**: General knowledge questions
- **questions_companies**: Company-specific questions
- **instructions**: Onboarding tutorial content

## 🌐 Language Support

Currently supports:
- Swedish (sv)
- English (en)

Language strings are stored in `src/translations/translations.json`.

## 🎨 Styling

The project uses Emotion for styling with:
- CSS-in-JS approach
- Styled components pattern
- Theme variables (light/dark modes)
- Responsive design

## 🔄 Key Features Implementation

### Real-Time Leaderboard
- Uses Supabase real-time subscriptions via PostgreSQL changes
- Automatically updates when users complete questions
- Maintains sorted order by score

### Question Selection
- Prevents duplicate consecutive questions
- Tracks current question ID
- Re-initializes when loading new difficulty level

### Session Management
- Tracks intro animation with `sessionStorage`
- Prevents replay on page refresh within session
- User profile stored in `localStorage`

## 🚀 Deployment

The app is configured for Vercel deployment. The `vercel.json` file includes routing configuration for SPA.

To deploy:
1. Push to your GitHub repository
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy!

## 📝 License

MIT License - See LICENSE file for details

## 👥 Team

### Developers
- **Maria Tedeman**
- **Marie Färnström**

### Designers
- **Wilma Skarström**
- **Amanda Salomonsson**
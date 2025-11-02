# Genetics Simplified

An interactive and user-friendly webpage designed to make the complex topic of genetic testing easy and accessible. It features clear, concise information and a friendly AI assistant powered by the Google Gemini API to answer any questions users might have.

## ✨ Features

-   **Informative Content:** Simple explanations of what genetic testing is and how the process works.
-   **AI-Powered Assistant:** A chat interface where users can ask questions about genetics and get easy-to-understand answers.
-   **Clean & Responsive UI:** A modern and accessible design built with Tailwind CSS that works great on all devices.
-   **User-Friendly Experience:** Focuses on demystifying complex topics with a reassuring and helpful tone.

## 🚀 Technologies Used

-   **Frontend:** React, TypeScript
-   **Styling:** Tailwind CSS
-   **AI Model:** Google Gemini API (`@google/genai`)

## 🔧 Getting Started

### Prerequisites

To run this application, you need a Google Gemini API key.

### Running the Application

1.  **Set up the API Key:** The application is configured to use an API key from the `process.env.API_KEY` environment variable. Ensure this is available in your development environment.
2.  **Open the page:** Simply open the `index.html` file in a modern web browser. The necessary scripts are loaded via an import map from a CDN, so no local installation or build step is required.

## 📁 File Structure

The project is organized into logical components and services to maintain clean and scalable code.

```
.
├── index.html              # The main HTML entry point for the application
├── index.tsx               # React application root, mounts the App component
├── App.tsx                 # The main application component, laying out all sections
├── metadata.json           # Application metadata
├── README.md               # This file
├── types.ts                # Shared TypeScript type definitions (e.g., Message)
├── components/
│   ├── AiAssistant.tsx     # The core AI chat interface component
│   ├── IconCard.tsx        # A reusable card component for the "How It Works" section
│   └── LoadingSpinner.tsx  # A simple loading animation component
└── services/
    └── geminiService.ts    # Handles all communication with the Google Gemini API
```

## 🤖 How the AI Works

The AI assistant's functionality is powered by the `gemini-2.5-flash` model via the `@google/genai` SDK.

-   **`services/geminiService.ts`**: This file contains the core logic for interacting with the Gemini API.
-   **System Prompt**: A specific `SYSTEM_INSTRUCTION` is sent with every request. This prompt instructs the AI to act as an expert in genetics who can explain complex topics in simple terms, avoid jargon, and maintain a helpful, reassuring tone. This ensures the responses are consistently user-friendly and aligned with the app's goal.
-   **`components/AiAssistant.tsx`**: This component manages the chat's state, including the conversation history, user input, and loading/error states. When a user submits a question, it calls the `askAboutGenetics` function from the service and displays the streamed response.

# Blorpt - A Note-Taking App

Blorpt is a modern, intuitive note-taking application that allows users to create, draw, save, and share their notes securely. The app supports both local and cloud storage with encrypted data to ensure privacy. It features anonymous sign-in, an easy-to-use canvas for drawing, and the ability to export notes as text or image files.

## Features

- **Anonymous Sign-In**: Sign in as a guest without the need for an account.
- **Text and Drawing Notes**: Write text and draw on a digital canvas.
- **Encryption**: All notes are encrypted before being saved to the cloud to protect user data.
- **Local and Cloud Storage**: Save notes locally or to the cloud with Firebase, with the option to load and edit them later.
- **Export Options**: Export text notes as .txt files and drawings as .png images.
- **Easy Navigation**: A simple and clean user interface with routing for different sections of the app.

## Technologies Used

- **React**: Frontend framework for building the user interface.
- **Firebase**: Used for authentication and cloud storage.
- **CryptoJS**: Encrypts and decrypts notes before saving them.
- **React Router**: Handles routing for navigation between pages.
- **CSS**: Custom styles for a responsive and modern design.

## Installation

To run this project locally, follow these steps:

### Prerequisites

- Node.js installed on your machine.
- Firebase account and Firestore setup.

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/blorpt.git
   cd blorpt
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up Firebase in the project:

   - Create a Firebase project in Firebase Console.
   - Add your Firebase configuration (apiKey, authDomain, etc.) to the `firebaseConfig` object in the `App.js` file.

4. Run the app:

   ```bash
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the app.

## Usage

- **Sign In**: The app automatically signs you in as a guest using Firebase’s anonymous authentication.
- **Create Notes**: Type your text in the text area and draw on the canvas with your mouse or touchscreen.
- **Save Notes**: You can save notes locally in your browser or to Firebase cloud storage.
- **Load Notes**: Load your saved notes from local storage or Firebase.
- **Export Notes**: Export your notes as a .txt file for text and a .png file for the drawing.

## Contributing

If you'd like to contribute to this project, feel free to fork the repository, make changes, and submit a pull request.

### Guidelines

- Write clear, concise commit messages.
- Ensure your code adheres to best practices and is well-commented.
- Test new features thoroughly before submitting.

## License

This project is open-source and available under the MIT License.

## Acknowledgments

- **Firebase** for authentication and cloud storage.
- **CryptoJS** for providing encryption functionality.
- **React** and **React Router** for building a modern single-page application.

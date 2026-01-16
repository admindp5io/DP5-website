@echo off
REM DP5 Website - Quick Start Script (Windows)
REM Run this to start the development server locally

echo 🚀 Starting DP5 Website...
echo.

REM Check if node_modules exists
if not exist "node_modules\" (
  echo 📦 Installing dependencies (first time setup)...
  call npm install
  echo.
)

REM Start the development server
echo 🔧 Starting development server...
echo 📱 Opening http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo.

REM Open browser after a short delay
start "" http://localhost:3000

REM Start Next.js dev server
call npm run dev

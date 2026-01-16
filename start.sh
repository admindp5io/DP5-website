#!/bin/bash

# DP5 Website - Quick Start Script
# Run this to start the development server locally

echo "🚀 Starting DP5 Website..."
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
  echo "📦 Installing dependencies (first time setup)..."
  npm install
  echo ""
fi

# Start the development server
echo "🔧 Starting development server..."
echo "📱 Opening http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Open browser after a short delay (in background)
(sleep 3 && open http://localhost:3000) &

# Start Next.js dev server
npm run dev

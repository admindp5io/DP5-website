#!/bin/bash

# Script to pull latest changes from GitHub

echo "Pulling latest changes from GitHub..."

# Pull from the remote repository
git pull

# Check if pull was successful
if [ $? -eq 0 ]; then
    echo "✓ Successfully pulled latest changes"
else
    echo "✗ Failed to pull changes. Please check for conflicts or network issues."
    exit 1
fi

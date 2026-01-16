#!/bin/bash

# GitHub Push Script
# Usage: ./push.sh "Your commit message"
# Or: ./push.sh (will prompt for message)

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Get commit message
if [ -z "$1" ]; then
    echo -e "${YELLOW}Enter commit message:${NC}"
    read -r COMMIT_MSG
else
    COMMIT_MSG="$1"
fi

# Check if commit message is empty
if [ -z "$COMMIT_MSG" ]; then
    echo -e "${RED}Error: Commit message cannot be empty${NC}"
    exit 1
fi

echo -e "${YELLOW}Checking git status...${NC}"
git status

echo ""
echo -e "${YELLOW}Adding all changes...${NC}"
git add .

echo ""
echo -e "${YELLOW}Committing with message: ${GREEN}$COMMIT_MSG${NC}"
git commit -m "$COMMIT_MSG"

# Check if commit was successful
if [ $? -eq 0 ]; then
    echo ""
    echo -e "${YELLOW}Pushing to remote...${NC}"
    git push

    if [ $? -eq 0 ]; then
        echo ""
        echo -e "${GREEN}✓ Successfully pushed to GitHub!${NC}"
    else
        echo ""
        echo -e "${RED}✗ Push failed. Please check your connection and permissions.${NC}"
        exit 1
    fi
else
    echo ""
    echo -e "${RED}✗ Commit failed. Please check for errors above.${NC}"
    exit 1
fi

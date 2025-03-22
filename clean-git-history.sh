#!/bin/bash

# Warning message
echo "WARNING: This script will completely rewrite your git history."
echo "All commits will be combined into a single new commit."
echo "This operation is IRREVERSIBLE."
echo ""
read -p "Are you sure you want to continue? (y/n) " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Operation cancelled."
    exit 1
fi

# Check if we're on the main branch
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo "Not on main branch. Please switch to main branch before running this script."
    exit 1
fi

# Remove existing origin if it exists
git remote -v | grep -q "origin" && git remote remove origin

# Create a temp branch
echo "Creating a new orphan branch..."
git checkout --orphan temp_branch

# Add all files
echo "Adding all files..."
git add .

# Commit
echo "Creating new initial commit..."
git commit -m "Initial commit"

# Delete the main branch
echo "Removing old main branch..."
git branch -D main

# Rename the current branch to main
echo "Renaming temp branch to main..."
git branch -m main

# Force push to remote repository if needed
echo "Your git history has been reset to a single commit."
echo "If you want to push this to a remote repository, use:"
echo "git push -f origin main"

echo ""
echo "Operation completed successfully!"

# Remove .cursor folder from git tracking
git rm -r --cached .cursor
git commit -m "Remove .cursor folder from git tracking" 
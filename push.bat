@echo off
REM GitHub Push Script for Windows
REM Usage: push.bat "Your commit message"
REM Or: push.bat (will prompt for message)

setlocal enabledelayedexpansion

REM Get commit message
if "%~1"=="" (
    set /p COMMIT_MSG="Enter commit message: "
) else (
    set COMMIT_MSG=%~1
)

REM Check if commit message is empty
if "!COMMIT_MSG!"=="" (
    echo Error: Commit message cannot be empty
    exit /b 1
)

echo.
echo Checking git status...
git status

echo.
echo Adding all changes...
git add .

echo.
echo Committing with message: !COMMIT_MSG!
git commit -m "!COMMIT_MSG!"

if %errorlevel% equ 0 (
    echo.
    echo Pushing to remote...
    git push

    if %errorlevel% equ 0 (
        echo.
        echo Successfully pushed to GitHub!
    ) else (
        echo.
        echo Push failed. Please check your connection and permissions.
        exit /b 1
    )
) else (
    echo.
    echo Commit failed. Please check for errors above.
    exit /b 1
)

endlocal

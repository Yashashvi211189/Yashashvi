@echo off
echo 🚀 DEPLOYING STAR WARS PORTFOLIO TO GITHUB PAGES...
echo.

echo Step 1: Adding GitHub remote...
git remote remove origin 2>nul
git remote add origin https://github.com/Yashashvi211189/star-wars-portfolio.git

echo Step 2: Setting main branch...
git branch -M main

echo Step 3: Pushing to GitHub...
git push -u origin main

echo Step 4: Building for production...
npm run build

echo Step 5: Deploying to GitHub Pages...
npm run deploy

echo.
echo ✅ DEPLOYMENT COMPLETE!
echo 🌐 Your website will be live at:
echo https://yashashvi211189.github.io/star-wars-portfolio/
echo.
echo May the Force be with your website! ⭐
pause
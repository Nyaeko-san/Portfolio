---
description: how to put your portfolio on github
---

Follow these steps to upload your project to GitHub:

1. **Open a Terminal** in your project folder (`D:\Game Dev\Dev Stuffs\Portfolio`).

2. **Initialize Git** (if you haven't already):
   ```powershell
   git init
   ```

3. **Add your files**:
   ```powershell
   git add .
   ```

4. **Commit your changes**:
   ```powershell
   git commit -m "Initial commit: Finished Portfolio with Cinematic Design"
   ```

5. **Create a Repository on GitHub**:
   - Go to [github.com/new](https://github.com/new).
   - Name it "Portfolio" (or any name you like).
   - Keep it Public (or Private if you prefer).
   - **Do NOT** initialize with a README, license, or .gitignore (we already have them).
   - Click "Create repository".

6. **Link your local project to GitHub**:
   - Copy the commands shown on GitHub under "…or push an existing repository from the command line".
   - It will look like this (replace with your actual URL):
   ```powershell
   git remote add origin https://github.com/YOUR_USERNAME/Portfolio.git
   git branch -M main
   git push -u origin main
   ```

7. **Verify**:
   - Refresh your GitHub repository page to see your files!

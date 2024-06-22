## Deploy app to Heroku

### Prerequisites

- Techstack: React + Vite frontend, Python + Flask backend
- Environment variables in .env.development and .env.production created
- Flask app created in app.py already

### Application Setup

1. Create `requirements.txt` with `pip freeze > requirements.txt`
2. Create `Procfile` that points to `app.py`.

   Example `Procfile`:

   ```
   web: python backend/app.py
   ```

3. Ensure backend has a serve route.

   Example serve route:

   ```python
   @app.route("/", defaults={"path": ""})
   @app.route("/<path:path>")
   def serve(path):
        if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
             return send_from_directory(app.static_folder, path)
        else:
             return send_from_directory(app.static_folder, "index.html")
   ```

4. Install and log into Heroku CLI: `heroku login`
5. Create a new Heroku app if not already created: `heroku create app-name`
6. Add buildpacks if needed: `heroku buildpacks:add heroku/python`

### Deployment and Redeployment

1. Build frontend: `npm run build`
2. Move `dist` directory or built directory to the backend
3. Commit and push to Heroku:

   ```bash
   git add .
   git commit -m "Deploying app to Heroku"
   git push heroku main
   ```

4. Set environment variables if you haven't already: `heroku config:set VITE_API__URL=https://app-name.herokuapp.com`

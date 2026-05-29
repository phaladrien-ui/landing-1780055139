from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse
import os

app = FastAPI()

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

static_path = os.path.join(BASE_DIR, "static")
if os.path.exists(static_path):
    app.mount("/static", StaticFiles(directory=static_path), name="static")

templates_path = os.path.join(BASE_DIR, "templates")
templates = Jinja2Templates(directory=templates_path)

@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    try:
        return templates.TemplateResponse("index.html", {"request": request})
    except Exception as e:
        return HTMLResponse('<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Site en ligne</title><style>body{margin:0;height:100vh;display:flex;align-items:center;justify-content:center;background:#0a0a0a;color:#d4af37;font-family:sans-serif}h1{font-size:3rem}small{display:block;margin-top:1rem;color:#666}</style></head><body><div style="text-align:center"><h1>Site en ligne</h1><small>' + str(e) + '</small></div></body></html>')

@app.get("/api/health")
async def health():
    return {"status": "ok"}

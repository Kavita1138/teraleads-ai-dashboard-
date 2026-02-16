# from fastapi import FastAPI

# app = FastAPI()

# @app.get("/")
# def home():
#     return {"message": "API working"}
# @app.post("/generate")
# def generate(req: Req):
#     return {
#         "reply": f"Dental Assistant: For '{req.message}', please brush twice daily and consult a dentist."
#     }
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"msg": "AI service running"}

@app.post("/generate")
def generate(data: dict):
    message = data.get("message", "")
    return {"reply": f"AI response for: {message}"}

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class UserProfile(BaseModel):
    name: str
    email: str
    dob: str
    gender: str
    country_code: str
    contact_number: Optional[str] = None
    address: str

user_data = None

@app.post("/submit-profile/")
async def submit_profile(profile: UserProfile):
    global user_data
    user_data = profile
    return {"message": "Profile submitted successfully!"}

@app.get("/get-profile/")
async def get_profile():
    if user_data is None:
        raise HTTPException(status_code=404, detail="Profile not found")
    return user_data
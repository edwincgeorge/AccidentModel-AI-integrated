// DEMO DATA ONLY. Replace with API calls (GET /api/incidents, /api/analytics, ...).
const MOCK={incidents:[
{id:"INC-D001",time:"2026-10-20 08:42",cam:"Demo Cam A · NH66 Junction",conf:0.94,sev:"Critical",ver:"Pending",resp:"None",notes:[]},
{id:"INC-D002",time:"2026-10-21 17:15",cam:"Demo Cam B · Bypass Road",conf:0.81,sev:"High",ver:"Pending",resp:"None",notes:[]},
{id:"INC-D003",time:"2026-10-22 22:03",cam:"Demo Cam A · NH66 Junction",conf:0.62,sev:"Medium",ver:"Pending",resp:"None",notes:[]},
{id:"INC-D004",time:"2026-10-22 23:30",cam:"Demo Cam C · Market Rd",conf:0.55,sev:"Low",ver:"Pending",resp:"None",notes:[]}],
daily:[3,5,2,6,4,7,3],hours:[1,0,0,1,2,4,6,8,5,4,3,3,4,3,4,5,7,9,6,4,3,2,2,1],
cats:{"Rear-end":9,"Side impact":6,"Pile-up":2,"Single vehicle":4},
steps:[["Frontend Development","In Progress",60],["Dataset Preparation","Planned",0],["AI Model Development","Planned",0],["Real-Time Video Pipeline","Planned",0],["Backend and Database","Planned",0],["Alert and Emergency Integration","Planned",0],["Testing and Deployment","Planned",0]],
services:[["Ambulance / Medical Response","Not Configured"],["Police","Not Configured"],["Fire & Rescue","Not Configured"]]};

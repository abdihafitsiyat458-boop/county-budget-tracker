// Shared data + helpers for County Transparency portal
const COUNTY = "Mfalme County";

const PROJECTS = [
  {id:1,name:"Kibera-Mathare Water Pipeline",sector:"Water",ward:"Kibera",budget:48000000,spent:36000000,status:"ongoing",progress:75,start:"2024-03-01",end:"2025-08-30",contractor:"BlueFlow Ltd"},
  {id:2,name:"Ruiru Level 4 Hospital Wing",sector:"Health",ward:"Ruiru",budget:120000000,spent:120000000,status:"completed",progress:100,start:"2023-01-15",end:"2024-12-10",contractor:"MediBuild Co."},
  {id:3,name:"Kasarani Stadium Access Road",sector:"Roads",ward:"Kasarani",budget:85000000,spent:42500000,status:"ongoing",progress:50,start:"2024-06-01",end:"2025-11-30",contractor:"PaveMasters"},
  {id:4,name:"Eastleigh Market Renovation",sector:"Trade",ward:"Eastleigh",budget:32000000,spent:9600000,status:"delayed",progress:30,start:"2023-09-01",end:"2024-06-30",contractor:"Urban Crafters"},
  {id:5,name:"Embakasi Solar Streetlights",sector:"Energy",ward:"Embakasi",budget:18000000,spent:17500000,status:"ongoing",progress:95,start:"2024-08-10",end:"2025-04-15",contractor:"BrightCity Ltd"},
  {id:6,name:"Karen Public Library",sector:"Education",ward:"Karen",budget:54000000,spent:21600000,status:"ongoing",progress:40,start:"2024-04-20",end:"2025-12-01",contractor:"ReadAfrica Builders"},
  {id:7,name:"Dandora Waste Recycling Plant",sector:"Environment",ward:"Dandora",budget:96000000,spent:67200000,status:"ongoing",progress:70,start:"2024-02-12",end:"2025-09-30",contractor:"GreenCycle EA"},
  {id:8,name:"Westlands CBD Bus Terminus",sector:"Transport",ward:"Westlands",budget:74000000,spent:74000000,status:"completed",progress:100,start:"2023-05-05",end:"2024-10-20",contractor:"TransitWorks"},
];

const BUDGET = {
  totalRevenue: 18_500_000_000,
  totalExpenditure: 14_200_000_000,
  fy: "FY 2024/2025",
  sectors: [
    {name:"Health",amount:3_200_000_000},
    {name:"Education",amount:2_800_000_000},
    {name:"Roads",amount:2_400_000_000},
    {name:"Water",amount:1_700_000_000},
    {name:"Agriculture",amount:1_300_000_000},
    {name:"Trade",amount:900_000_000},
    {name:"Environment",amount:850_000_000},
    {name:"Admin",amount:1_050_000_000},
  ],
  monthly: [
    {m:"Jul",rev:1500,exp:1100},{m:"Aug",rev:1620,exp:1180},{m:"Sep",rev:1480,exp:1250},
    {m:"Oct",rev:1700,exp:1300},{m:"Nov",rev:1550,exp:1220},{m:"Dec",rev:1820,exp:1400},
    {m:"Jan",rev:1600,exp:1180},{m:"Feb",rev:1500,exp:1100},{m:"Mar",rev:1700,exp:1280},
    {m:"Apr",rev:1650,exp:1240},{m:"May",rev:1700,exp:1300},{m:"Jun",rev:1680,exp:1250},
  ],
};

const REPORTS = [
  {title:"FY 2024/2025 Q2 Budget Implementation Report",date:"2025-02-10",type:"PDF",size:"2.4 MB"},
  {title:"County Audit Report 2023/2024 (OAG)",date:"2024-12-18",type:"PDF",size:"5.1 MB"},
  {title:"Annual Development Plan 2025/2026",date:"2025-01-30",type:"PDF",size:"3.7 MB"},
  {title:"Procurement Disclosure - Quarter 2",date:"2025-02-01",type:"XLSX",size:"880 KB"},
  {title:"Public Participation Forum Minutes - Westlands",date:"2025-01-22",type:"PDF",size:"640 KB"},
  {title:"Revenue Collection Statement Jan 2025",date:"2025-02-05",type:"XLSX",size:"410 KB"},
];

const fmtKES = n => "KES " + n.toLocaleString();
const shortKES = n => {
  if(n>=1e9) return "KES "+(n/1e9).toFixed(2)+"B";
  if(n>=1e6) return "KES "+(n/1e6).toFixed(1)+"M";
  if(n>=1e3) return "KES "+(n/1e3).toFixed(1)+"K";
  return "KES "+n;
};

// Highlight active nav link
document.addEventListener("DOMContentLoaded",()=>{
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".menu a").forEach(a=>{
    if(a.getAttribute("href")===path) a.classList.add("active");
  });
});

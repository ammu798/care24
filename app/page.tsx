export default function Home() {
  return (
    <main style={{minHeight:"100vh",fontFamily:"sans-serif"}}>
      <nav style={{background:"#2563EB",padding:"16px 32px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div style={{color:"white",fontSize:"24px",fontWeight:"bold"}}>Care24</div>
        <div style={{display:"flex",gap:"12px"}}>
          <a href="/login" style={{color:"white",textDecoration:"none",border:"1px solid white",padding:"8px 16px",borderRadius:"20px"}}>Login</a>
          <a href="/register" style={{color:"#2563EB",background:"white",textDecoration:"none",padding:"8px 16px",borderRadius:"20px",fontWeight:"bold"}}>Register</a>
        </div>
      </nav>
      <section style={{background:"#EFF6FF",padding:"80px 32px",textAlign:"center"}}>
        <h1 style={{fontSize:"48px",fontWeight:"bold",color:"#1e3a5f"}}>Trusted Care for Your Loved Ones at Home</h1>
        <p style={{fontSize:"18px",color:"#6b7280",marginTop:"16px"}}>Connect with verified nurses, caregivers and physiotherapists for in-home elderly care.</p>
        <div style={{marginTop:"32px",display:"flex",gap:"16px",justifyContent:"center"}}>
          <a href="/caregivers" style={{background:"#2563EB",color:"white",padding:"14px 32px",borderRadius:"30px",textDecoration:"none",fontWeight:"bold",fontSize:"16px"}}>Find a Caregiver</a>
          <a href="/register" style={{border:"2px solid #0D9488",color:"#0D9488",padding:"14px 32px",borderRadius:"30px",textDecoration:"none",fontWeight:"bold",fontSize:"16px"}}>Register as Caregiver</a>
        </div>
      </section>
      <section style={{padding:"60px 32px",textAlign:"center",background:"white"}}>
        <h2 style={{fontSize:"32px",fontWeight:"bold",color:"#1e3a5f"}}>Our Services</h2>
        <div style={{display:"flex",gap:"24px",justifyContent:"center",marginTop:"40px",flexWrap:"wrap"}}>
          {[{icon:"💉",title:"Nursing Care",desc:"Skilled nurses for medication & monitoring",price:"From ₹500/hr"},{icon:"🧑‍⚕️",title:"Elderly Attendant",desc:"Personal care & daily assistance",price:"From ₹300/hr"},{icon:"🏃",title:"Physiotherapy",desc:"Recovery exercises at home",price:"From ₹600/hr"},{icon:"🏠",title:"Post-Hospital Care",desc:"Recovery support after discharge",price:"From ₹800/hr"}].map((s)=>(
            <div key={s.title} style={{border:"1px solid #e5e7eb",borderRadius:"16px",padding:"24px",width:"200px",boxShadow:"0 2px 8px rgba(0,0,0,0.08)"}}>
              <div style={{fontSize:"40px"}}>{s.icon}</div>
              <h3 style={{fontWeight:"bold",marginTop:"12px",color:"#1e3a5f"}}>{s.title}</h3>
              <p style={{color:"#6b7280",fontSize:"14px",marginTop:"8px"}}>{s.desc}</p>
              <p style={{color:"#2563EB",fontWeight:"bold",marginTop:"8px"}}>{s.price}</p>
            </div>
          ))}
        </div>
      </section>
      <footer style={{background:"#1e3a5f",color:"white",textAlign:"center",padding:"24px"}}>
        © 2024 Care24 — Trusted Home Healthcare
      </footer>
    </main>
  );
}

export default function Register() {
  return (
    <main style={{minHeight:"100vh",background:"#EFF6FF",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"Arial,sans-serif"}}>
      <div style={{background:"white",padding:"40px",borderRadius:"16px",boxShadow:"0 4px 20px rgba(0,0,0,0.1)",width:"100%",maxWidth:"420px"}}>
        <h1 style={{color:"#2563EB",fontSize:"28px",fontWeight:"bold",textAlign:"center"}}>Care24</h1>
        <h2 style={{color:"#1e3a5f",fontSize:"20px",textAlign:"center",marginTop:"8px"}}>Create Account</h2>
        <div style={{marginTop:"24px",display:"flex",flexDirection:"column",gap:"12px"}}>
          <input placeholder="Full Name" style={{padding:"12px",border:"1px solid #e5e7eb",borderRadius:"8px",fontSize:"14px"}}/>
          <input type="email" placeholder="Email address" style={{padding:"12px",border:"1px solid #e5e7eb",borderRadius:"8px",fontSize:"14px"}}/>
          <input placeholder="Phone number" style={{padding:"12px",border:"1px solid #e5e7eb",borderRadius:"8px",fontSize:"14px"}}/>
          <input type="password" placeholder="Password" style={{padding:"12px",border:"1px solid #e5e7eb",borderRadius:"8px",fontSize:"14px"}}/>
          <select style={{padding:"12px",border:"1px solid #e5e7eb",borderRadius:"8px",fontSize:"14px"}}>
            <option>Register as Family/Patient</option>
            <option>Register as Caregiver</option>
          </select>
          <button style={{padding:"12px",background:"#2563EB",color:"white",border:"none",borderRadius:"8px",fontSize:"16px",fontWeight:"bold",cursor:"pointer"}}>Register</button>
        </div>
        <p style={{textAlign:"center",marginTop:"16px",color:"#6b7280",fontSize:"14px"}}>Have account? <a href="/login" style={{color:"#2563EB",fontWeight:"bold"}}>Login</a></p>
        <p style={{textAlign:"center",marginTop:"8px"}}><a href="/" style={{color:"#6b7280",fontSize:"14px"}}>← Home</a></p>
      </div>
    </main>
  );
}

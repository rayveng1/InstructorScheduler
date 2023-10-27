"use client";

export default function AdminApproverPage() {
  return (
<div>
  <h1 style={{ fontSize: '36px', marginLeft: '60px', marginTop: '40px', marginBottom: '-10px'}}>Schedule Approval</h1>
  <hr style={{ margin: '0', marginLeft: '60px', marginRight: '60px', marginTop: '30px', marginBottom: '30px'  }} />
  <div style={{ background: 'green', padding: '20px', marginLeft: '60px', marginRight: '60px'  }}>
    Instructors waiting for approval!
  </div>    
  <h1 style={{ fontSize: '36px', marginLeft: '60px', marginTop: '40px', marginBottom: '-10px'}}>Schedule Upload</h1>
  <hr style={{ margin: '0', marginLeft: '60px', marginRight: '60px', marginTop: '30px', marginBottom: '30px'  }} />
  <div style={{ background: 'green', padding: '20px', marginLeft: '60px', marginRight: '60px'  }}>
    Schedules waiting to be uploaded!
  </div>
</div>

  );
}

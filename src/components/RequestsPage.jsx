import React from "react";
import "./Request.css";

export default function Request({ requests, onApprove, onReject }) {
  return (
    <table className="requests-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Branch</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {requests.map((req) => (
          <tr key={req._id}>
            <td>{req.name}</td>
            <td>{req.email}</td>
            <td>{req.branch}</td>
            <td>
              <button onClick={() => onApprove(req._id)} className="approve-btn">
                Approve
              </button>
              <button onClick={() => onReject(req._id)} className="reject-btn">
                Reject
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

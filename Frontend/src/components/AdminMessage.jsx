import React, { useEffect } from "react";
import useStore from "../Store/zustand";

const AdminMessage = () => {
  const { messages, fetchMessage } = useStore();

  useEffect(() => {
    fetchMessage();
  }, []);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* Table Head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {messages
              .slice()
              .reverse()
              .map((message, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{message.name}</td>
                  <td>{message.email}</td>
                  <td>{message.message}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminMessage;

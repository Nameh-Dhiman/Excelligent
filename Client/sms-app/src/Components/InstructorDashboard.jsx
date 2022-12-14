import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.scss";

const Dashboard = () => {
  const navigate = useNavigate();

  const [active, setActive] = useState({
    assignments: false,
  });

  useEffect(() => {
    let curLocation = window.location.pathname;
    if (curLocation === "/instructordashboard/postassignments") {
      setActive({
        ...active,
        assignments: true,
      });
    }
  }, []);

  return (
    <div className={styles.Container}>
      <div className={styles.SideNav}>
        <div
          className={
            !active.assignments
              ? `${styles.SideNav_Item}`
              : `${styles.SideNav_Item} ${styles.SideNavItemActive}`
          }
          onClick={() => {
            setActive({
              grades: false,
              assignments: true,
              pocketbuddy: false,
              talkToExpert: false,
            });
            navigate("/instructordashboard/postassignments");
          }}
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-journal-bookmark"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M6 8V1h1v6.117L8.743 6.07a.5.5 0 0 1 .514 0L11 7.117V1h1v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8z"
              />
              <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
              <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
            </svg>
          </div>
          <div>Create Assignments</div>
        </div>
        <div
          className={
            !active.talkToExpert
              ? `${styles.SideNav_Item}`
              : `${styles.SideNav_Item} ${styles.SideNavItemActive}`
          }
          onClick={() => {
            setActive({
              grades: false,
              assignments: false,
              pocketbuddy: false,
              talkToExpert: true,
            });
            navigate("/instructordashboard/talkToStudent");
          }}
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-chat-left-text"
              viewBox="0 0 16 16"
            >
              <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
              <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
            </svg>
          </div>
          <div>Talk to Student</div>
        </div>
      </div>
      <div className={styles.Display}>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;

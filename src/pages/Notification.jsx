import React, { useEffect, useState } from "react";
import "../assets/css/NotificationPage.css";
import {
  equalTo,
  get,
  onValue,
  orderByChild,
  query,
  ref,
  remove,
  set,
  update,
} from "firebase/database";
import { db } from "../firebase";
import mentorIcon from "../assets/images/mentoricon.jpg";
import projectIcon from "../assets/images/projecticon.jpg";
import profile from "../assets/images/man.png";
import { useNavigate } from "react-router-dom";
import { uid } from "uid";
const NotificationCard = ({ data, idx, accept, setaccept }) => {
  // console.log(data)
  return (
    <div
      className={`NotificationCardCont ${
        idx === 0 ? "NotificationCardContf" : ""
      }`}
    >
      <div>
        {data?.subtype === "Mentor" && (
          <img src={mentorIcon} className="IconNotificationCard" alt="icon" />
        )}
        {data?.subtype === "project" && (
          <img src={projectIcon} className="IconNotificationCard" alt="icon" />
        )}
      </div>
      <div>{data?.text}</div>
      <div
        className="NotificationEditButton"
        onClick={async () => {
          const dataref = ref(db, `Notifications/${data?.id}`);
          await remove(dataref);
          setaccept(!accept);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-trash3"
          viewBox="0 0 16 16"
        >
          <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
        </svg>
      </div>
    </div>
  );
};

const NotificationView = () => {
  const userId = localStorage.getItem("suprUserId");
  const [accept, setaccept] = useState(false);
  const [Notificationdata, setNotificationdata] = useState([]);
  useEffect(() => {
    let arr = [];
    const dataq = query(
      ref(db, "Notifications"),
      orderByChild("userId"),
      equalTo(userId)
    );
    get(dataq).then((snapshot) => {
      if (snapshot.val()) {
        const datakeys = Object.keys(snapshot.val());
        for (let i = 0; i < datakeys.length; i++) {
          const data = snapshot.val()[datakeys[i]];
          // console.log(data);
          if (data.type.toUpperCase() === "NOTIFICATION") {
            arr.push(data);
          }
        }
        setNotificationdata(arr);
      }
    });
  }, [accept]);
  return (
    <div className="NotificationPageHead">
      {Notificationdata.map((value, idx) => (
        <NotificationCard
          data={value}
          key={idx}
          idx={idx}
          setaccept={setaccept}
          accept={accept}
        />
      ))}
    </div>
  );
};

const ApplicationView = () => {
  const userId = localStorage.getItem("suprUserId");
  const [accept, setaccept] = useState(false);
  const [pendingdata, setpendingdata] = useState([]);
  const [projectownerdata, setprojectownerdata] = useState([]);
  useEffect(() => {
    let arr = [];
    const dataq = query(
      ref(db, "ProjectApplications"),
      orderByChild("applicantId"),
      equalTo(userId)
    );
    get(dataq).then((snapshot) => {
      if (snapshot.val()) {
        const datakeys = Object.keys(snapshot.val());
        for (let i = 0; i < datakeys.length; i++) {
          const data = snapshot.val()[datakeys[i]];
          console.log(data);
          arr.push(data);
        }
        setpendingdata(arr);
      }
    });
  }, [accept]);
  useEffect(() => {
    let arr = [];
    const dataq = query(
      ref(db, "ProjectApplications"),
      orderByChild("ownerId"),
      equalTo(userId)
    );
    get(dataq).then((snapshot) => {
      if (snapshot.val()) {
        const datakeys = Object.keys(snapshot.val());
        for (let i = 0; i < datakeys.length; i++) {
          const data = snapshot.val()[datakeys[i]];
          // console.log(data);
          arr.push(data);
        }
        setprojectownerdata(arr);
      }
    });
  }, [accept]);
  return (
    <div className="NotificationPageHead">
      {pendingdata.map((value, idx) => (
        <ApplicationCard
          data={value}
          key={idx}
          idx={idx}
          accept={accept}
          setaccept={setaccept}
        />
      ))}
      {projectownerdata.map((value, idx) => (
        <ApplicationCard
          data={value}
          key={idx}
          idx={idx}
          accept={accept}
          setaccept={setaccept}
        />
      ))}
    </div>
  );
};

const ApplicationCard = ({ data, idx, accept, setaccept }) => {
  // console.log(data);
  const userId = localStorage.getItem("suprUserId");
  // const [openoption, setopenoption] = useState(false);
  const handle_accept = () => {
    update(ref(db, `ProjectApplications/${data?.id}`), {
      status: "accept",
    });
    let arr = {
      contributerName: data?.contributerName,
      contributerId: data?.applicantId,
    };
    let temparr = [];
    onValue(ref(db, `ProjectPosts/${data?.projectId}`), (snapshot) => {
      let dat = snapshot.val();
      if (dat) {
        if (dat?.contributors) {
          temparr = dat?.contributors;
        }
      }
    });
    temparr.push(arr);
    update(ref(db, `ProjectPosts/${data?.projectId}`), {
      contributors: temparr,
    });
    const unqiueId = uid(15);
    set(ref(db, `Notifications/${unqiueId}`), {
      userId: data?.applicantId,
      id: unqiueId,
      type: "Notification",
      text: `Congratulation You are accepted as project contributor at Project ${data?.projname}, Hope you learn something.`,
      status: "pending",
      subtype: "project",
      date: new Date().getDate(),
    });
    setaccept(!accept);
  };
  const handle_reject = () => {
    const unqiueId = uid(15);
    update(ref(db, `ProjectApplications/${data?.id}`), {
      status: "reject",
    });
    set(ref(db, `Notifications/${unqiueId}`), {
      userId: data?.applicantId,
      id: unqiueId,
      type: "Notification",
      text: `Sorry, To say you are not selected as contributor at ${data?.projname},better luck next time`,
      status: "pending",
      subtype: "project",
      date: new Date().getDate(),
    });
    setaccept(!accept);
  };
  const navigate = useNavigate();
  return (
    <div
      className={`applicationsCardCont ${
        idx === 0 ? "NotificationCardContf" : ""
      }`}
    >
      {data?.applicantId === userId && (
        <img src={projectIcon} className="IconNotificationCard" alt="icon" />
      )}
      {data?.ownerId === userId && (
        <img
          src={profile}
          onClick={() => {
            navigate(`/profile/${data?.applicantId}`);
          }}
          className="IconNotificationCard"
          alt="icon"
        />
      )}
      {data?.applicantId === userId && (
        <div>Your status for the project : {data?.projname}</div>
      )}
      {data?.ownerId === userId && (
        <div>
          {data?.contributerName} want to contribute for the project:{" "}
          {data?.projname}
        </div>
      )}
      {data?.status === "pending" && data?.applicantId === userId && (
        <div className="stausApplication">{data?.status.toLowerCase()}</div>
      )}
      {data?.status === "accept" && data?.applicantId === userId && (
        <div className="statusAccepted">{data?.status.toLowerCase()}</div>
      )}
      {data?.status === "reject" && data?.applicantId === userId && (
        <div className="stausApplication">{data?.status.toLowerCase()}</div>
      )}
      {data?.status === "pending" && data?.ownerId === userId && (
        <div className="statusContainer">
          <div
            onClick={() => {
              handle_accept();
            }}
            className="statusAccepted"
          >
            Accept
          </div>
          <div
            onClick={() => {
              handle_reject();
            }}
            className="stausApplication"
          >
            Reject
          </div>
        </div>
      )}
      {data?.status === "accept" && data?.ownerId === userId && (
        <div className="statusAccepted">Accepted</div>
      )}
      {data?.status === "reject" && data?.ownerId === userId && (
        <div className="stausApplication">Rejected</div>
      )}
      <div
        className="NotificationEditButton"
        onClick={async () => {
          if(data?.status !== "pending"){
            const dataref = ref(db, `Notifications/${data?.id}`);
            await remove(dataref);
            setaccept(!accept);
          }
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-trash3"
          viewBox="0 0 16 16"
        >
          <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
        </svg>
      </div>
    </div>
  );
};

const Notification = () => {
  const [view, setview] = useState("Notification");
  return (
    <div className="NotificationContainer">
      <div className="NotificationHeaderClass">
        <div
          onClick={() => {
            setview("Notification");
          }}
          className={`NotificationHeader ${
            view === "Notification" ? "NotificationHeaderActive" : ""
          }`}
        >
          Notifications
        </div>
        <div
          onClick={() => {
            setview("Application");
          }}
          className={`NotificationHeader ${
            view === "Application" ? "NotificationHeaderActive" : ""
          }`}
        >
          Application Status
        </div>
        <div
          onClick={() => {
            setview("Meeting");
          }}
          className={`NotificationHeader ${
            view === "Meeting" ? "NotificationHeaderActive" : ""
          }`}
        >
          Meeting Status
        </div>
      </div>
      <hr className="NotificationHr"></hr>
      {view === "Notification" && <NotificationView />}
      {view === "Application" && <ApplicationView />}
    </div>
  );
};

export default Notification;

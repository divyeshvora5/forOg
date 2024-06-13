import { globalState } from "@/redux/reducer/globalSlice";
import { getMessaging, getToken } from "firebase/messaging";
import React, { useEffect, useState } from "react";
import ToggleButton from "./Helper/ToggleButton";
import { useSelector } from "react-redux";
import { firebaseConfig } from "@/constant/firebase";
import { initializeApp } from "firebase/app";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Itembox from "./Helper/Itembox";
import { getAnalytics } from "firebase/analytics";
import { useActiveWeb3React } from "@/hooks/useActiveWeb3React";
import { toast } from "react-toastify";
import { Button, FormGroup, Input, Label } from "@/styles/pages/main.style";
import Mailpopup from "./Helper/Mailpopup";
import {
  getUserService,
  addNotificationPreference,
} from "@/redux/services/globalServices";
import { useEditUser } from "@/hooks/useProfileHook";

export const TAB = [
  {
    name: "Personal",
  },
  {
    name: "Following",
  },
  {
    name: "Collections",
  },
  {
    name: "System",
  },
];

export const personalNotificationPreferences = [
  {
    key: "itemSold",
    name: "Item Sold",
    dec: "When someone purchased one of your items",
  },
  {
    key: "bidActivity",
    name: "Bid Activity",
    dec: "When someone bids on one of your items",
  },
  {
    key: "priceChange",
    name: "Price Change",
    dec: "When an item you made an offer on changes in price",
  },
  {
    key: "auctionExpiration",
    name: "Auction Expiration",
    dec: "When a timed auction you created ends",
  },
  {
    key: "successfulPurchase",
    name: "Successful Purchase",
    dec: "When you successfully buy an item",
  },
  {
    key: "successfulMint",
    name: "Successful Mint",
    dec: "When you successfully mint an item",
  },
];

const preferencesBar = {
  personalNotificationPreferences: "personalNotificationPreferences",
  personalemailPreferences: "personalemailPreferences",
};

const NotificationPreference = () => {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


  const { account } = useActiveWeb3React();
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [isNotification, setisNotification] = useState(false);
  const { userDetails, loading } = useSelector(globalState) || {};
  const { addFCM, updateNotification } = useEditUser();
  const [mailmodalIsOpen, setmailmodalIsOpen] = useState(false);
  const [enableLoading,setenableLoading] = useState(false)
  const [activebar, setactivebar] = useState(
    preferencesBar.personalNotificationPreferences
  );

  window.OneSignal = window.OneSignal || [];
  const OneSignal = window.OneSignal;

  const initOneSignal = async () => {
   OneSignal.push(function () {
        OneSignal.init({
        appId: "7fb88ce6-4a17-42f5-9fd8-7c1eacc92646",
      safari_web_id: "web.onesignal.auto.204803f7-478b-4564-9a97-0318e873c676",
      notifyButton: {
        enable: false,
      },
      allowLocalhostAsSecureOrigin: true,
        });
    });

    console.log("one signal");
 
  }

  useEffect(() => {
    initOneSignal();
  }, [OneSignal]);


  const Subcribe_onesignal = async()=>{
    OneSignal.login(account.toLowerCase().slice(2));
    console.log("calls//");
  }

//   useEffect(() => {


//     window.OneSignal = window.OneSignal || [];
//     console.log( window.OneSignal," window.OneSignal");
//     OneSignal.push(function () {
//         OneSignal.init({
//           appId: "8021b0e1-da93-4cc0-a0f9-af5e114d8cf3",
//       safari_web_id: "web.onesignal.auto.477dedc8-8bcf-40fd-b64c-238033111672",
//       notifyButton: {
//         enable: true,
//       },
//       allowLocalhostAsSecureOrigin: true,
//         });
//     });

//     return () => {
//         window.OneSignal = undefined;
//     };
// }, [  ]); 

  const isNotificationsEnabled =
    userDetails && userDetails.notificationsEnabled && checkNotificationPermission() ;

  const [preferences, setPreferences] = useState({
    personalNotificationPreferences: {
      itemSold: false,
      bidActivity: false,
      priceChange: false,
      auctionExpiration: false,
      successfulPurchase: false,
      successfulMint: false,
    },
    personalemailPreferences: {
      itemSold: false,
      bidActivity: false,
      priceChange: false,
      auctionExpiration: false,
      successfulPurchase: false,
      successfulMint: false,
    },
  });

  useEffect(() => {
    if (loading) {
      setmailmodalIsOpen(false);
    }
  }, [loading]);
  useEffect(() => {
    console.log(loading);
  }, [loading]);

  useEffect(() => {
    if (isNotificationsEnabled && userDetails.preferences) {
      setisNotification(true);

      if (userDetails.preferences.hasOwnProperty(activebar)) {
        // Update preferences state
        setPreferences((prevPreferences) => ({
          ...prevPreferences,
          [activebar]: { ...userDetails.preferences[activebar] },
        }));
      }
    } else {
      setisNotification(false);
    }
  }, [isNotificationsEnabled, userDetails, activebar]);

  function checkNotificationPermission() {
    return Notification.permission === "granted";
  }

  async function requestPermission() {
    if (!app) return;

    const messaging = getMessaging(app);
    try {
      setenableLoading(true)
      const isNotificationAllowed = checkNotificationPermission();

      const permission = await Notification.requestPermission();
      if (permission && permission === "granted") {
        const storedToken = await getToken(messaging, {
          vapidKey: process.env.PUBLIC_VAPIDKEY,
        });

        console.log(storedToken, "storedToken");

        if (storedToken != "") {
        const data = await  addFCM(storedToken);
        console.log(data,"data");
        setenableLoading(false)
        }
      } else if (permission === "denied") {
        toast.error("denied");
        setenableLoading(false)
      }
    } catch (error) {
      console.log(error);
    }
  }
  // Function to update preference
  const updatePreference = (type, key, value) => {
    setPreferences((prevPreferences) => ({
      ...prevPreferences,
      [type]: {
        ...prevPreferences[type],
        [key]: value,
      },
    }));
  };

  const EnableDisable = async () => {
    Subcribe_onesignal()
    setenableLoading(true)
    if (userDetails?.notificationsEnabled && checkNotificationPermission() ) {
      console.log("already done ");
      const data = await  addFCM("");
      setenableLoading(false)
    } else {
      await requestPermission();
      
    }
  };

  const OpenEmail = () => {
    setactivebar(preferencesBar.personalemailPreferences);
    setmailmodalIsOpen(true);
  };

  return (
    <div className="tab-block-right">
      <h2 className="title-text-right ">Edit Notification</h2>

      <div className="notification-top-bar">
        {/* top bar */}

        <div className="toggle-btn-main">
          <ToggleButton
            enabled={isNotification && checkNotificationPermission()}
            onClick={() => EnableDisable()}
            disabled={enableLoading}
          />
          {/* <div class="toggle">
	<input type="checkbox" id="btn" />
	<label for="btn">
		<span class="thumb"></span>
	</label>
</div>  */}

          <div>Enable</div>
        </div>

        {/* top bar */}

        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <Mailpopup
            isOpen={mailmodalIsOpen}
            onRequestClose={() => setmailmodalIsOpen(false)}
          />

          <button
            className={`notification-email-btn ${
              activebar == preferencesBar.personalNotificationPreferences
                ? "notification-email-btn-active"
                : ""
            }`}
            onClick={() =>
              setactivebar(preferencesBar.personalNotificationPreferences)
            }
          >
            Desktop
          </button>

          <button
            className={`notification-email-btn ${
              activebar == preferencesBar.personalemailPreferences
                ? "notification-email-btn-active"
                : ""
            }`}
            onClick={() => OpenEmail()}
          >
            Email
          </button>
        </div>
      </div>

      {/* tab */}

      <div>
        <div className="tab-notification">
          {TAB.map((tab, index) => (
            <div
              key={index}
              className={index === activeTabIndex ? "active-tab" : ""}
              onClick={() => setActiveTabIndex(index)}
            >
              <div className="text-tab-notification">{tab.name}</div>
            </div>
          ))}
        </div>

        {/* content  */}

        <div className="tab-content">
          {activeTabIndex === 0 && (
            <div className="n-Preferences">
              {personalNotificationPreferences?.map((e) => {
                const keys = e?.key;
                const value = preferences?.[activebar]?.[keys] ?? false;
                return (
                  <Itembox
                    title={e.name}
                    dec={e.dec}
                    loading={loading || !userDetails?.notificationsEnabled}
                    type={keys}
                    mainObj={activebar}
                    account={account}
                    isChecked={value}
                    updatePreference={updatePreference}
                    isAllowed={isNotificationsEnabled}
                  />
                );
              })}
            </div>
          )}
          {activeTabIndex === 1 && <div>Content for Tab 2</div>}
          {activeTabIndex === 2 && <div>Content for Tab 3</div>}
          {activeTabIndex === 3 && <div>Content for Tab 4</div>}
        </div>

        <div className="load-more-btn full-width-block">
          <Button
            disabled={loading}
            onClick={() => {
              updateNotification(activebar, preferences[activebar]);
            }}
          >
            Update Setting
          </Button>
        </div>

        {/* content  */}
      </div>

      {/* tab */}
    </div>
  );
};

export default NotificationPreference;

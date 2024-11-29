import { useEffect, useState } from "react";
import liff from "@line/liff";
import "./App.css";
import LiffEnvTable from "./LiffEnvTable";
import LoginLogout from "./LoginLogout";

function App() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [envInfo, setEnvInfo] = useState({
    appLanguage: null,
    version: null,
    inClient: null,
    loggedIn: false,
    os: null,
    lineVersion: null
  });
  const [userInfo, setUserInfo] = useState({
    name: null,
    lineId: null
  });

  useEffect(() => {
    liff
      .init({
        liffId: import.meta.env.VITE_LIFF_ID
      })
      .then(() => {
        setMessage("LIFF init succeeded.");

        setEnvInfo({
          appLanguage: liff.getAppLanguage(),
          version: liff.getVersion(),
          inClient: liff.isInClient(),
          loggedIn: liff.isLoggedIn(),
          os: liff.getOS(),
          lineVersion: liff.getLineVersion()
        });
        
        if (liff.isLoggedIn()) {
          liff.getProfile()
            .then(profile => {
              setUserInfo({
                name: profile.displayName,
                lineId: profile.userId
              });
          });
        }
        
      })
      .catch((e) => {
        setMessage("LIFF init failed.");
        setError(`${e}`);
      });
  }, []);

  return (
    <div className="App" id="hoge">
      <h1>create-liff-app</h1>
      {envInfo.os === "web" && <LoginLogout isLoggedIn={envInfo.loggedIn} />}
      {message && <p>{message}</p>}
      {error && (
        <p>
          <code>{error}</code>
        </p>
      )}
      <a
        href="https://developers.line.biz/ja/docs/liff/"
        target="_blank"
        rel="noreferrer"
      >
        LIFF Documentation
      </a>
      <LiffEnvTable envObj={envInfo} />
      {envInfo.loggedIn === true && (<LiffEnvTable envObj={userInfo} />)}
    </div>
  );
}

export default App;

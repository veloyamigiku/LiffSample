import liff from "@line/liff";
import { Button } from "@mui/material";

export default function LoginLogout({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn === true && (
        <Button
          color="error"
          variant="contained"
          onClick={() => {
            liff.logout();
            window.location.reload();
          }}>
          ログアウト
        </Button>
      )}
      {isLoggedIn === false && (
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            liff.login();
          }}>
          ログイン
        </Button>
      )}
    </div>
  );
}

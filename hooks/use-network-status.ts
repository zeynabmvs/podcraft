import { useEffect, useState } from "react";

const useNetworkStatus = () => {
  const [isOnline, setOnline] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return { isOnline };
};

export default useNetworkStatus;

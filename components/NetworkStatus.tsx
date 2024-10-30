"use client";
import useNetworkStatus from "@/hooks/use-network-status";
import clsx from "clsx";
import { useEffect, useState } from "react";

function NetworkStatus() {
  const { isOnline } = useNetworkStatus();
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (isOnline) {
      setShowMessage(true); // Show the message when back online

      const timer = setTimeout(() => {
        setShowMessage(false); // Hide the message after 5 seconds
      }, 3000);

      return () => clearTimeout(timer); // Cleanup timer on unmount or re-run
    } else {
      setShowMessage(true);
    }
  }, [isOnline]);

  if (!showMessage) return null; // Don't render anything if showMessage is false

  return (
    <div
      className={clsx(
        "w-full z-10 h-6 text-center sticky bottom-0 inset-x-0 bg-white text-sm",
        isOnline && "bg-green-600",
        !isOnline && "bg-red-600"
      )}
    >
      {isOnline ? "you're back online" : "you're offline"}
    </div>
  );
}

export default NetworkStatus;

"use client";
import useNetworkStatus from "@/hooks/use-network-status";
import clsx from "clsx";
import { useEffect, useState } from "react";

function NetworkStatus() {
  const { isOnline } = useNetworkStatus();

  useEffect(() => {
    console.log(isOnline);
  }, []);

  return (
    <div
      className={clsx(
        "w-full z-10 h-6 text-center sticky bottom-0 inset-x-0 bg-white text-sm",
        isOnline && "block bg-green-600 transition-message",
        isOnline === undefined && "hidden",
        !isOnline && "block bg-red-600"
      )}
    >
      {isOnline ? "you're back online" : "you're offline"}
    </div>
  );
}

export default NetworkStatus;

"use client";

import { useEffect } from "react";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  // useEffect(() => {
  //   console.error("Global error:", error);
  // }, [error]);

  return (
    <html>
      <body>
        <h1>Something went wrong Global!</h1>
        <button onClick={() => reset()}>Try Again</button>
      </body>
    </html>
  );
}

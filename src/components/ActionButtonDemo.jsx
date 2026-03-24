"use client";

import { useState } from "react";
import ActionButton from "@/components/ui/action-button";

function ActionButtonBasic() {
  const [isPending, setIsPending] = useState(false);

  function handleClick() {
    setIsPending(true);
    setTimeout(() => setIsPending(false), 1500);
  }

  return (
    <div className="flex min-h-[200px] w-full items-center justify-center bg-white rounded-xl shadow-sm p-8">
      <ActionButton 
        onClick={handleClick} 
        isPending={isPending}
        className="bg-brand-gold text-black hover:bg-brand-gold/90 h-12 px-8"
      >
        Submit Inquiry
      </ActionButton>
    </div>
  );
}

export { ActionButtonBasic };

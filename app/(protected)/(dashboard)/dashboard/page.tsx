import { auth } from "@/auth";
import { SignOut } from "@/components/SignOut";
import React from "react";

const Dashboard = async () => {
  const session = await auth();

  return (
    <div>
      Dashboard {JSON.stringify(session)} <SignOut />{" "}
    </div>
  );
};

export default Dashboard;

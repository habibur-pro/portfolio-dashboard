import { redirect } from "next/navigation";

const page = () => {
  redirect("/dashboard");
  return <div>home pages</div>;
};

export default page;

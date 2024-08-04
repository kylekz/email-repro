"use server";

// import { render } from "@react-email/render";
import { RemovedFromOrganization } from "@repo/email/emails/removed-from-org";
import { Resend } from "resend";

// uncomment this to get it working
// const resend = new Resend("");

export async function email() {
  const react = RemovedFromOrganization({
    baseUrl: "",
    receiverName: "",
    organizationName: "",
  });

  // const result = await resend.emails.send({
  //   from: "example@example.com",
  //   to: "example@example.com",
  //   subject: "Removed from Organization",
  //   react: react,
  // });
  // console.log(result);
}

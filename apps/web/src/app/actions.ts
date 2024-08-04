"use server";

import { RemovedFromOrganization } from "@repo/email/emails/removed-from-org";

export async function email() {
  const rendered = RemovedFromOrganization({
    baseUrl: "",
    receiverName: "",
    organizationName: "",
  });
  console.log(rendered);
}

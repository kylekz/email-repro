import { router, t } from "../trpc";
import { RemovedFromOrganization } from "@repo/email/emails/removed-from-org";

export const emailRouter = router({
  send: t.procedure.mutation(async () => {
    const rendered = RemovedFromOrganization({
      baseUrl: "",
      receiverName: "",
      organizationName: "",
    });
    console.log(rendered);
  }),
});

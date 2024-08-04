import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

export type RemovedFromOrganizationProps = {
  baseUrl: string;
  receiverName: string;
  organizationName: string;
};

export const RemovedFromOrganization = ({
  baseUrl,
  receiverName,
  organizationName,
}: RemovedFromOrganizationProps) => {
  return (
    <Html>
      <Head />
      <Preview>You have been removed from {organizationName}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Section className="mt-[32px]">
              <Img
                src={`${baseUrl}/logo.png`}
                height="40"
                alt="Platform"
                className="my-0 mx-auto"
              />
            </Section>
            <Text className="text-black text-[14px] leading-[24px]">
              Hello {receiverName},
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              You have been removed from the <strong>{organizationName}</strong>{" "}
              organization on <strong>Platform</strong>.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

RemovedFromOrganization.PreviewProps = {
  baseUrl: "http://localhost:3000",
  receiverName: "kylekz",
  organizationName: "Test Org",
} as RemovedFromOrganizationProps;

export default RemovedFromOrganization;

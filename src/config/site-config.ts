import { APP_DESCRIPTION, APP_NAME } from "@/constants/ensk";
import type { Metadata } from "next";

export const siteConfig = {
  metadata: {
    title: `${APP_NAME} | ${APP_DESCRIPTION}`,
    description: APP_DESCRIPTION,
  } satisfies Metadata,
  appName: APP_NAME,
  sourceCode: "https://github.com/fromenoabasi/ensk",
  createdAt: "15/06/2024", // please do not touch
};

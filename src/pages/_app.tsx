import { type AppType } from "next/app";
import RootLayout from "~/components/layout";
import { api } from "~/utils/api";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <RootLayout>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </RootLayout>
  );
};

export default api.withTRPC(MyApp);

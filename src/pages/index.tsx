import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>snift.app</title>
        <meta
          name="description"
          content="The fragrance library for indie and niche perfume"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center ">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl  tracking-tight text-[#ccc5b9] sm:text-[5rem]">
            <span className="text-slate-800 font-extrabold">snift</span>.app
          </h1>
          <h2 className="uppercase tracking-widest text-sm">Coming soon</h2>
        </div>
      </main>
    </>
  );
}

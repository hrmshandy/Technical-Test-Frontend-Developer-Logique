export default function Home() {
  return (
    <main className="bg-gradient-to-b from-violet-700 to-purple-500 px-8">
      <div className="container relative mx-auto flex h-screen max-w-screen-sm flex-col items-center justify-center">
        <Logo />
        <SearchForm className="absolute bottom-6 w-full" />
      </div>
    </main>
  );
}

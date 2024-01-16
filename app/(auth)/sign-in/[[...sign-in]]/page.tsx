import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="flex justify-center items-center h-full bg-gradient-to-br from-cyan-200 via-cyan-700 to-blue-800">
      <div>
        <SignIn afterSignInUrl="/"/>
      </div>
    </main>
  );
}

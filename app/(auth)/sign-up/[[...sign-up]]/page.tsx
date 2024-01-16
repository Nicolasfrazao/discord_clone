import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="h-full flex justify-center items-center bg-gradient-to-br from-cyan-200 via-cyan-700 to-blue-800">
      <div>
        <SignUp afterSignUpUrl="/"/>
      </div>
    </main>
  )
}

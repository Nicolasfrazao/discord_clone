import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="h-full flex justify-center items-center">
      <div>
        <SignUp />
      </div>
    </main>
  )
}

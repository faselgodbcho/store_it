import { Search } from "lucide-react";
import Image from "next/image";
import FileUploader from "./FileUploader";
import { signOutUser } from "@/lib/actions/user.actions";

export default function Header() {
  return (
    <header className="header">
      <Search />
      <div className="header-wrapper">
        <FileUploader />
      </div>
      <form
        action={async () => {
          "use server";
          await signOutUser();
        }}
      >
        <button type="submit" className="sign-out-button">
          <Image
            src="/assets/icons/logout.svg"
            alt="logo"
            width={24}
            height={24}
            className="w-6"
          />
        </button>
      </form>
    </header>
  );
}

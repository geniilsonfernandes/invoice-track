import AccountButton from "components/account-button";
import { Logo } from "components/icons";
import Link from "next/link";
import { urls } from "../../config/urls";

const title = "Invoice Tracker | Account";
const description =
  "Invoice Tracker is a simple and modern web app to create, manage and organize your invoices efficiently.";

export const metadata = {
  title,
  description,
};

export default async function Page() {
  return (
    <div className="flex flex-col mx-auto w-full h-screen justify-center">
      <main className="flex max-w-md mx-auto flex-col justify-center h-full px-4 items-center">
        <div className="flex justify-center w-full">
          <Link className="mb-4" href={urls.home}>
            <Logo className="w-20 h-20" />
          </Link>
        </div>
        <div className="flex flex-col w-full justify-center items-center">
          <h1 className="font-bold text-center text-2xl mb-1">
            Invoice Tracker
          </h1>
          <p className="text-muted-foreground w-full text-center medium mx-auto mt-1.5 tracking-normal mb-5">
            Create, manage and organize your invoices effortlessly
          </p>
          <AccountButton />
          <p className="text-muted-foreground text-xs mt-4 px-1 sm:px-2 max-w-[360px] w-full leading-5 text-left">
            By clicking continue, you acknowledge that you have read and agree
            to{" "}
            <Link
              className="underline hover:text-primary active:text-primary"
              href={`${urls.home}/terms`}
            >
              Terms & Conditions
            </Link>{" "}
            and{" "}
            <Link
              className="underline hover:text-primary active:text-primary"
              href={`${urls.home}/privacy`}
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </main>
    </div>
  );
}

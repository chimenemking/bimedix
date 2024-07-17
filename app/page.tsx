import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";

// import { PatientForm } from "@/components/forms/PatientForm";
// import { PasskeyModal } from "@/components/PasskeyModal";

const Home = () => {
  //const isAdmin = searchParams?.admin === "true";

  return (
    <div className="flex h-screen max-h-screen">
      {/* {isAdmin && <PasskeyModal />} */}

      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          {/* <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          /> */}
          <div className="text-2xl flex items-center border-8  w-fit  rounded-tr-lg rounded-bl-lg border-red-600 font-bold p-1">
            <h1 className="text-gray-200">Bi</h1>
            <h1 className="text-gray-500">Me</h1>
            <h1 className="text-slate-200">dix</h1>
          </div>

          <PatientForm />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 BiMedix
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/onboarding-img.jpg"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
  );
};

export default Home;

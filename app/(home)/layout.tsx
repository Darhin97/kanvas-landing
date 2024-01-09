import React from "react";
import { Providers } from "@/app/providers";
import Navbar from "@/app/components/navbar";
import Link from "next/link";

const HomePageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Providers>
      <div className={"min-h-screen"}>
        <Navbar />
        {children}
        <footer className={"pt-10 bg-[#141419] text-white"}>
          <div
            className={
              "max-w-screen-xl mx-auto px-5 border-b border-b-white py-5 md:py-10"
            }
          >
            <div className={"grid md:grid-cols-[1fr,1.8fr] gap-5"}>
              <div
                className={" w-full px-5 sm:px-16 md:px-0 md:max-w-sm mx-auto"}
              >
                <div className={"flex flex-col gap-y-4"}>
                  <h3 className={"font-semibold text-xl italic"}>KNVAS</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Amet, assumenda dolorem error eveniet ipsum labore
                    laboriosam laudantium natus odio odit omnis quam quis quos
                    reiciendis reprehenderit temporibus tenetur totam vero?
                  </p>
                </div>
              </div>
              <div
                className={
                  "flex gap-5 justify-center items-start md:justify-start flex-wrap md:grid md:grid-cols-[1fr,1fr,1.5fr] w-full"
                }
              >
                <div
                  className={"flex flex-col gap-2 text-sm md:text-base p-5 "}
                >
                  <h3 className={"font-medium text-xl"}>Platform</h3>
                  <p>School Portal</p>
                  <p>Student Portal</p>
                  <p>School Portal</p>
                </div>
                <div
                  className={"flex flex-col gap-2 text-sm md:text-base p-5 "}
                >
                  <h3 className={"font-medium text-xl"}>Company</h3>
                  <Link href={"#about-us"}>About us</Link>
                  <Link href={"#how-it-works"}>How it Works</Link>
                  <Link href={"#contact-us"}>Contact Us</Link>
                </div>
                <div
                  className={
                    "flex flex-col gap-2 text-sm md:text-base p-5 text-center xs:text-start"
                  }
                >
                  <h3 className={"font-medium text-xl"}>Contact Us</h3>
                  <p>S+44 857 746 2345</p>
                  <p>info@knvas.com</p>
                  <p>Address</p>
                  <p>Office Hours: 8:00AM - 5:00PM</p>
                </div>
              </div>
            </div>
          </div>
          <div className={"py-10"}>
            <div
              className={
                "max-w-screen-xl mx-auto px-5 flex justify-between items-center text-sm sm:text-base"
              }
            >
              <div>&copy; {new Date().getFullYear()} KNVAS </div>
              <div className={"flex items-center space-x-3"}>
                <p>Privacy</p>
                <p>Terms of Use</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Providers>
  );
};

export default HomePageLayout;

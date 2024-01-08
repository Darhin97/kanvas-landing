import React from "react";
import { Providers } from "@/app/providers";
import Navbar from "@/app/components/navbar";

const HomePageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Providers>
      <div className={"h-full"}>
        <Navbar />
        {children}
        <footer className={"pt-10 bg-[#141419] text-white"}>
          <div
            className={
              "max-w-screen-xl mx-auto px-5 border-b border-b-white py-5 md:py-10"
            }
          >
            <div className={"grid md:grid-cols-[1fr,1.8fr] gap-5"}>
              <div className={" max-w-sm mx-auto"}>
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
                  "flex gap-5 justify-center items-center md:justify-start flex-wrap md:grid md:grid-cols-[1fr,1fr,1.5fr]"
                }
              >
                <div className={"flex flex-col gap-2"}>
                  <h3 className={"font-medium text-xl"}>Platform</h3>
                  <p>School Portal</p>
                  <p>Student Portal</p>
                  <p>School Portal</p>
                </div>
                <div className={"flex flex-col gap-2"}>
                  <h3 className={"font-medium text-xl"}>Company</h3>
                  <p>About us</p>
                  <p>How it Works</p>
                  <p>Contact Us</p>
                </div>
                <div className={"flex flex-col gap-2"}>
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

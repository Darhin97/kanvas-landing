import { Button } from "@nextui-org/button";
import Image from "next/image";
import { Divider } from "@nextui-org/divider";
import { LuMinusCircle, LuPlus, LuPlusCircle } from "react-icons/lu";
import Card from "@/app/components/card";
import AccordionCard from "@/app/components/accordion";
import { Input, Textarea } from "@nextui-org/input";

const packages = [
  {
    name: "Bronze Package",
    description:
      "The Bronze Knvas Work Experience School Portal includes the following Services.",
    info: {
      t1: "Full Knvas School Portal Access",
      t2: "School Portal Self Management",
    },
  },
  {
    name: "Silver Package",
    description:
      "The Silver Knvas Work Experience School Portal includes the following Services. ",
    info: {
      t1: "Full Knvas School Portal Access",
      t2: "School Portal Dedicated Management",
      t3: "Dedicated Student Uploads",
      t4: "Dedicated Review and Employer Collaboration",
    },
  },
  {
    name: "Gold Package",
    description:
      "The Gold Knvas Work Experience School Portal includes the following Services. ",
    info: {
      t1: "Full Knvas School Portal Access",
      t2: "School Portal Dedicated Management",
      t3: "Dedicated Student Uploads",
      t4: "Dedicated Review and Employer Collaboration",
      t5: "Sourcing Eligible Employers",
    },
  },
];

export default function Home() {
  return (
    <main
      className={
        "bg-[#F0F0FA] flex-1 flex-col pt-7 overflow-scroll scroll-smooth"
      }
    >
      <section id={"/"} data-name={"header-section"} className={"pt-20 h-full"}>
        <div className={"max-w-screen-xl mx-auto h-full flex flex-col px-5"}>
          <div
            className={
              " md:h-[75vh] flex items-center justify-center py-10 md:py-0"
            }
          >
            <div
              className={
                "flex flex-col-reverse items-center md:flex-row w-full h-full gap-4 "
              }
            >
              <div
                className={
                  "space-y-3 md:w-1/2 flex flex-col items-center md:items-start text-center md:text-start"
                }
              >
                <p
                  className={
                    "font-semibold text-3xl md:text-4xl leading-10 lg:text-6xl w-[90%] "
                  }
                >
                  <span className={"text-new-sky-light"}>Simplify</span> Your
                  Work Experience Like Never Before
                </p>
                <p className={"text-sm md:text-base w-[90%]"}>
                  Embark on a Journey of Dynamic Work Experiences Through Our
                  Specialized Work Experience Management Platform
                </p>
                <div className={"space-x-4"}>
                  <Button
                    className={
                      "rounded bg-new-sky-light text-white font-medium"
                    }
                  >
                    Learn More
                  </Button>
                  <Button
                    className={"rounded bg-new-sky text-white font-medium"}
                  >
                    Register
                  </Button>
                </div>
              </div>
              <div
                className={
                  "w-full md:w-1/2 h-full relative flex justify-center items-center"
                }
              >
                <div className={"relative w-[500px] h-[300px] md:h-[700px]"}>
                  <Image
                    src={"/assets/header.svg"}
                    alt={"User using service"}
                    fill
                    className={"object-contain"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"bg-new-sky-light"}>
          <div
            style={{
              background: `url('/assets/stat-bg.svg'),0px -618.186px / 115.704% 1180.165% no-repeat`,
            }}
          >
            <div
              className={
                "max-w-4xl mx-auto h-full flex items-center space-x-4 text-white py-5  "
              }
            >
              <div className={"w-full flex items-center justify-center"}>
                <div className={"flex flex-col gap-1 text-center"}>
                  <span className={"font-medium text-xl md:text-4xl"}>37</span>
                  <span className={"font-normal text-sm md:text-xl"}>
                    Schools
                  </span>
                </div>
              </div>
              <Divider
                orientation={"vertical"}
                className={"h-[45px] bg-white"}
              />
              <div className={"w-full flex items-center justify-center"}>
                <div className={"flex flex-col gap-1 text-center"}>
                  <span
                    className={
                      "font-medium text-xl md:text-4xl flex items-center justify-center space-x-4"
                    }
                  >
                    1,332 <LuPlus className={"w-5 h-5"} />
                  </span>
                  <span className={"font-normal text-sm md:text-xl"}>
                    Students
                  </span>
                </div>
              </div>
              <Divider
                orientation={"vertical"}
                className={"h-[45px] bg-white"}
              />
              <div
                className={
                  "w-full flex items-center justify-center pr-3 md:pr-0"
                }
              >
                <div className={"flex flex-col gap-1 text-center"}>
                  <span
                    className={
                      "font-medium text-xl md:text-4xl flex items-center justify-center space-x-4"
                    }
                  >
                    300 <LuPlus className={"w-5 h-5"} />
                  </span>
                  <span className={"font-normal text-sm md:text-xl"}>
                    Companies
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        data-name={"about-us-section"}
        className={"py-20 pt-24 text-new-sky"}
        id={"about-us"}
      >
        <div className={"max-w-screen-xl mx-auto px-5"}>
          <div className={"flex items-center gap-5"}>
            <div
              className={
                "min-h-[30rem] grid md:grid-cols-[1fr_2fr] gap-5 md:gap-x-16  "
              }
            >
              <div
                className={
                  "relative h-[20rem] place-self-center md:h-full w-full sm:w-[280px] lg:w-[400px] rounded-[3rem] lg:rounded-[4rem] overflow-hidden shrink-0"
                }
              >
                <Image
                  src={"/assets/aboutus-img.svg"}
                  alt={"about us image"}
                  fill
                  className={"object-cover aspect-[2/3] "}
                />
              </div>

              <div
                className={
                  "space-y-4 place-self-center mr-5 flex flex-col items-center md:items-start text-center md:text-start"
                }
              >
                <p className={"text-3xl md:text-4xl font-semibold"}>
                  <span className={"text-new-sky-light"}>About</span> Us
                </p>
                <p className={"text-center md:text-justify"}>
                  Like many Career Leaders across the country, if you’ve ever
                  managed work experience you know that it’s labour-intensive,
                  sometimes costly and not very straightforward. It can be a
                  nightmare sorting out placement details, insurance documents
                  and making sure all relevant parties have the information they
                  need.
                </p>
                <p className={"text-center md:text-justify"}>
                  That’s why we developed the Knvas app; we wanted a cheaper and
                  easier alternative that schools could use. Work Experience is
                  an invaluable career-developing activity and it’s a shame that
                  some schools aren’t able to offer their students this
                  opportunity because of costs or a lack of manpower.
                </p>
                <p className={"text-center md:text-justify"}>
                  The Knvas app enables you to manage all your placements at the
                  click of a button ensuring you have all the important
                  information on hand whenever you need it.{" "}
                </p>
                <div>
                  <Button
                    className={"rounded bg-new-sky text-white font-medium mt-5"}
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id={"how-it-works"}
        className={"py-20 text-new-sky"}
        data-name={"how-it-works-section"}
      >
        <div className={"max-w-screen-xl mx-auto px-5"}>
          <div className={"w-full text-center space-y-4 mb-12"}>
            <h2 className={"font-semibold text-2xl sm:text-3xl"}>
              <span className={"text-new-sky-light"}>How</span> it Works
            </h2>
            <p className={"text-base"}>
              How the KNVAS platforms work for Students and also School
            </p>
          </div>
          <div className={"w-full space-y-5"}>
            <div
              data-name={"student-portal-row"}
              className={"grid md:grid-cols-2 gap-5 md:gap-x-7"}
            >
              <div
                className={
                  "space-y-4 place-self-center text-center md:text-start"
                }
              >
                <h3 className={"font-semibold text-2xl sm:text-3xl"}>
                  <span className={"text-new-sky-light"}>Student</span> Portal
                </h3>
                <p className={"text-center md:text-justify"}>
                  Quickly and easily complete your candidate profile, enter
                  placement information and see the status of your work
                  placement application.
                </p>
                <p className={"text-center md:text-justify"}>
                  Knvas will help you by communicating relevant placement
                  information to your school, the employer and your
                  parents/carers.
                </p>
              </div>
              <div
                className={
                  "relative w-full h-[28rem] row-start-1 md:col-start-2 "
                }
              >
                <Image
                  src={"/assets/hit-img1.svg"}
                  alt={"Student portal image"}
                  fill
                  className={"object-contain aspect-square"}
                />
              </div>
            </div>
            <div
              data-name={"student-portal2-row"}
              className={"grid md:grid-cols-2 gap-5 md:gap-x-7"}
            >
              <div className={"relative w-full h-[28rem] row-start-1"}>
                <Image
                  src={"/assets/hit-img2.svg"}
                  alt={"Student portal image"}
                  fill
                  className={"object-contain aspect-square"}
                />
              </div>
              <div
                className={
                  "space-y-4 place-self-center text-center md:text-start"
                }
              >
                <h3 className={"font-semibold text-2xl sm:text-3xl"}>
                  <span className={"text-new-sky-light"}>Student</span> Portal
                </h3>
                <p className={"text-center md:text-justify"}>
                  Manage all your work experience placements at the click of a
                  button.
                </p>
                <p className={"text-center md:text-justify"}>
                  With our user-friendly dashboard, you will be able to quickly
                  identify which stage of the placement process your students
                  are on.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-name={"subscription"} className={"py-16"}>
        <div
          className={
            "max-w-screen-xl flex flex-col gap-9 md:gap-16 mx-auto px-5"
          }
        >
          <div className={"text-center space-y-4"}>
            <h2 className={"text-3xl sm:text-4xl"}>
              <span className={"text-new-sky-light"}>Our</span> Packages
            </h2>
            <div
              className={
                "flex md:space-x-10 md:items-center flex-wrap text-sm sm:text-base space-x-5  justify-center"
              }
            >
              <div className={"flex items-center space-x-2"}>
                <div className={"relative h-5 w-5"}>
                  <Image
                    src={"/assets/check.svg"}
                    alt={"check icon"}
                    fill
                    className={"h-5"}
                  />
                </div>
                <span>Free 14 Days</span>
              </div>
              <div className={"flex items-center space-x-2"}>
                <div className={"relative h-5 w-5"}>
                  <Image
                    src={"/assets/check.svg"}
                    alt={"check icon"}
                    fill
                    className={"h-5"}
                  />
                </div>
                <span>Cancel Anytime</span>
              </div>
              <div className={"flex items-center space-x-2"}>
                <div className={"relative h-5 w-5"}>
                  <Image
                    src={"/assets/check.svg"}
                    alt={"check icon"}
                    fill
                    className={"h-5"}
                  />
                </div>
                <span>Money Back Guarantee</span>
              </div>
            </div>
          </div>
          <div
            className={
              "flex gap-5 items-center justify-center transition flex-wrap"
            }
          >
            {packages.map((item, index) => (
              <Card data={item} key={index} index={index} />
            ))}
          </div>
        </div>
      </section>
      <section id={"FAQ"} data-name={"FAQ-section"} className={"py-20"}>
        <div className={"max-w-screen-xl mx-auto px-5"}>
          <div className={"w-full text-center space-y-4 mb-12"}>
            <h2 className={"font-semibold text-2xl sm:text-3xl"}>
              <span className={"text-new-sky-light"}>FAQ</span>s
            </h2>
            <p className={"text-base"}>Frequently Asked Questions</p>
          </div>
          <div className={"mb-10"}>
            <div className={" md:w-5/6 mx-auto"}>
              <AccordionCard />
            </div>
          </div>
        </div>
      </section>
      <section
        id={"contact-us"}
        data-name={"contact-us-section"}
        className={"bg-white relative py-20 pt-24"}
      >
        <div
          className={"absolute md:hidden inset-0 bg-red-600"}
          style={{
            backgroundImage: "url('/assets/contactus-img.svg')",
          }}
        ></div>
        <div className={"max-w-md md:max-w-screen-xl mx-auto px-5 "}>
          <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
            <div
              className={"hidden md:block relative w-full h-56 xs:h-[27rem]"}
            >
              <Image
                src={"/assets/contactus-img.svg"}
                alt={"contact us image"}
                className={"object-cover "}
                fill
              />
            </div>

            <div
              className={
                " z-10 md:z-0 bg-white rounded md:rounded-none p-5 md:p-0"
              }
            >
              <div className={"mb-7 space-y-2"}>
                <h2 className={"text-3xl  sm:text-4xl"}>
                  <span className={"text-new-sky-light"}>Contact</span> Us
                </h2>
                <p>Contact Us If You Need Further Assistance </p>
              </div>
              <div className={"flex flex-col gap-y-4"}>
                <Input
                  type="text"
                  radius={"none"}
                  label="First name"
                  labelPlacement={"outside"}
                  placeholder="Enter your first name"
                  className="rounded"
                />
                <Input
                  type="email"
                  radius={"none"}
                  label="Email"
                  labelPlacement={"outside"}
                  placeholder="Enter your email"
                  className="rounded"
                />
                <Textarea
                  radius={"none"}
                  variant={"flat"}
                  label="Please leave a message"
                  labelPlacement="outside"
                  placeholder="Enter your message"
                  className="rounded"
                />
                <div className={"flex justify-end"}>
                  <Button
                    className={
                      "bg-new-sky text-white text-base font-medium rounded-sm"
                    }
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

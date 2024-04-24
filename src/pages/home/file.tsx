import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Profilecard: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onReadcvTextClick = useCallback(() => {
    window.open("https://read.cv/brightonjulius");
  }, []);

  const onLinkedInTextClick = useCallback(() => {
    window.open("https://www.linkedin.com/in/julius-brighton/");
  }, []);

  const onVeroTextClick = useCallback(() => {
    window.open("https://vero.co/jomviking");
  }, []);

  const onBehanceTextClick = useCallback(() => {
    window.open("https://www.behance.net/juliusbrighton");
  }, []);

  return (
    <div className="w-[39.375rem] rounded-layout-medium bg-colors-base-100 shadow-[0px_4px_12px_rgba(114,_114,_114,_0.25)] overflow-y-auto shrink-0 flex flex-row items-start justify-start p-[1.25rem] box-border relative gap-[1.25rem] max-w-full text-left text-[0.875rem] text-colors-base-0 font-small mq850:flex-wrap">
      <img
        className="h-[19.875rem] w-[15.625rem] relative rounded-layout-medium overflow-hidden shrink-0 object-cover min-h-[19.875rem] mq850:flex-1"
        loading="lazy"
        alt=""
        src="/image@2x.png"
      />
      <div className="flex-1 flex flex-col items-start justify-start gap-[0.625rem] min-w-[13rem]">
        <div className="self-stretch rounded-layout-default bg-colors-base-100 flex flex-col items-start justify-start p-[0.625rem] gap-[0.625rem]">
          <div className="h-[1.313rem] flex flex-row items-center justify-start">
            <img
              className="h-[1.313rem] w-[1.313rem] relative"
              loading="lazy"
              alt=""
              src="/quote.svg"
            />
          </div>
          <div className="self-stretch relative">
            <p className="m-0">
              Julius is the senior UI designer at LUNA, currently designing the
              platforms front-end and handles integration.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              He is passionate in creating digital experiences and is open in
              taking on inclusive or collaborative design processes to create
              genuine experiences for people of all abilities.
            </p>
          </div>
          <div
            className="flex flex-row items-center justify-start cursor-pointer text-colors-base-24"
            onClick={onButtonContainerClick}
          >
            <div className="relative inline-block min-w-[5.25rem] whitespace-nowrap">
              Learn more
            </div>
          </div>
        </div>
        <div className="self-stretch h-[64rem] hidden flex-col items-start justify-center gap-[1.563rem] text-[1.25rem] mq450:h-auto">
          <b className="relative mq450:text-[1rem]">Professional biography</b>
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.563rem]">
            <b className="h-[1.625rem] relative inline-block text-lightgray mq450:text-[1rem]">
              Background
            </b>
            <div className="self-stretch h-[54.625rem] relative text-[1.125rem] inline-block">
              <p className="m-0">{`From my background UI & UX designers & digital artists are all considered as graphic designers, and the society at large doesn’t know about every design layer that is archivable.`}</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                From the moment I stumbled upon the captivating world of UI
                designs, I found out that its not just about crafting visually
                appealing interfaces; it was about making technology seamlessly
                integrate into people's lives. What hooked me was the power to
                solve problems, and create experiences that leave an indelible
                mark.
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                Each project becomes a new canvas, and every interaction is an
                opportunity to connect with users on a profound level. The
                incessant pursuit of perfection, the thrill of bringing concepts
                to life, and the ever-evolving landscape of design are the
                driving forces that fuel my passion.
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                UI design isn't just a profession; it's a journey of discovery,
                innovation, and the joy of turning imagination into reality.
              </p>
            </div>
            <div className="bg-colors-base-96 overflow-x-auto flex flex-row items-center justify-start py-[0.313rem] px-[0.625rem] gap-[0.938rem] text-[1rem]">
              <img
                className="h-[1rem] w-[0.8rem] relative shrink-0"
                alt=""
                src="/vector.svg"
              />
              <div className="relative">Resume -</div>
              <a
                className="h-[1.125rem] relative text-[0.875rem] [text-decoration:underline] font-ibm-plex-sans text-darkslategray inline-block cursor-pointer"
                href="https://read.cv/brightonjulius"
                target="_blank"
                onClick={onReadcvTextClick}
              >
                Read.cv
              </a>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.563rem] text-[1rem]">
            <b className="h-[1.625rem] relative text-[1.25rem] inline-block mq450:text-[1rem]">
              Approach to UI design
            </b>
            <div className="self-stretch h-[15.813rem] relative text-[1.125rem] inline-block">
              I believe in crafting user-centric experiences that seamlessly
              blend aesthetics with functionality. My approach to UI design is
              guided by a combination of empathy, creativity, and attention to
              detail, ensuring that every design decision serves the needs and
              goals of the end user.
            </div>
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="w-[14.313rem] rounded-border-radius-default flex flex-row items-center justify-center pt-layout-var2 px-[0.625rem] pb-layout-small box-border gap-[0.313rem]">
                <div className="h-[1.313rem] flex flex-row items-center justify-start">
                  <img
                    className="h-[1.313rem] w-[1.313rem] relative overflow-hidden shrink-0"
                    alt=""
                    src="/chevron.svg"
                  />
                </div>
                <div className="h-[1.313rem] flex-1 flex flex-row items-center justify-center">
                  <div className="self-stretch flex-1 relative">
                    User-centric Design
                  </div>
                </div>
              </div>
              <div className="w-[12.063rem] h-[2.688rem] hidden flex-col items-start justify-start p-[0.625rem] box-border">
                <div className="self-stretch flex flex-row items-center justify-center">
                  <div className="h-[26.25rem] flex-1 relative inline-block">
                    Putting the user at the center of the design process is
                    paramount. I start by thoroughly understanding the target
                    audience, their behaviours, and pain points through user
                    research and analysis. This insight guides the creation of
                    intuitive interfaces that resonate with users and fulfil
                    their needs.
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="w-[16.125rem] rounded-border-radius-default flex flex-row items-center justify-center pt-layout-var2 px-[0.625rem] pb-layout-small box-border gap-[0.313rem]">
                <div className="h-[1.313rem] flex flex-row items-center justify-start">
                  <img
                    className="h-[1.313rem] w-[1.313rem] relative overflow-hidden shrink-0"
                    alt=""
                    src="/chevron.svg"
                  />
                </div>
                <div className="h-[1.313rem] flex-1 flex flex-row items-center justify-center">
                  <div className="self-stretch flex-1 relative">
                    Collaborative ideation
                  </div>
                </div>
              </div>
              <div className="w-[12.063rem] h-[2.688rem] hidden flex-col items-start justify-start p-[0.625rem] box-border">
                <div className="self-stretch flex flex-row items-center justify-center">
                  <div className="h-[23.625rem] flex-1 relative inline-block">
                    I value collaboration and believe that the best ideas emerge
                    from diverse perspectives. I enjoy working closely with
                    cross-functional teams, including developers, product
                    managers, and stakeholders, to brainstorm creative solutions
                    and iterate towards the optimal design.
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="w-[15.5rem] rounded-border-radius-default flex flex-row items-center justify-center pt-layout-var2 px-[0.625rem] pb-layout-small box-border gap-[0.313rem]">
                <div className="h-[1.313rem] flex flex-row items-center justify-start">
                  <img
                    className="h-[1.313rem] w-[1.313rem] relative overflow-hidden shrink-0"
                    alt=""
                    src="/chevron.svg"
                  />
                </div>
                <div className="h-[1.313rem] flex-1 flex flex-row items-center justify-center">
                  <div className="self-stretch flex-1 relative">
                    Iterative prototyping
                  </div>
                </div>
              </div>
              <div className="w-[12.063rem] h-[2.688rem] hidden flex-col items-start justify-start p-[0.625rem] box-border">
                <div className="self-stretch flex flex-row items-center justify-center">
                  <div className="h-[26.25rem] flex-1 relative inline-block">
                    Prototyping lies at the heart of my design process. I
                    believe in the power of rapid prototyping to explore and
                    refine concepts iteratively. By creating interactive
                    prototypes, I can gather valuable feedback early in the
                    design process, enabling quick adjustments and improvements
                    based on user insights.
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="w-[14.313rem] rounded-border-radius-default flex flex-row items-center justify-center pt-layout-var2 px-[0.625rem] pb-layout-small box-border gap-[0.313rem]">
                <div className="h-[1.313rem] flex flex-row items-center justify-start">
                  <img
                    className="h-[1.313rem] w-[1.313rem] relative overflow-hidden shrink-0"
                    alt=""
                    src="/chevron.svg"
                  />
                </div>
                <div className="h-[1.313rem] flex-1 flex flex-row items-center justify-center">
                  <div className="self-stretch flex-1 relative">
                    Attention to detail
                  </div>
                </div>
              </div>
              <div className="w-[12.063rem] h-[2.688rem] hidden flex-col items-start justify-start p-[0.625rem] box-border">
                <div className="self-stretch flex flex-row items-center justify-center">
                  <div className="h-[23.625rem] flex-1 relative inline-block">
                    I believe that great design lies in the details. From
                    typography choices to micro interactions, every element is
                    carefully considered to enhance usability and delight users.
                    I strive for pixel-perfection in my designs, ensuring a
                    visually cohesive and polished end product.
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="w-[23rem] rounded-border-radius-default flex flex-row items-center justify-center pt-layout-var2 pb-layout-small pr-layout-small pl-layout-default box-border gap-[0.313rem] max-w-[115%] shrink-0 mq450:flex-wrap">
                <div className="h-[1.313rem] flex flex-row items-center justify-start">
                  <img
                    className="h-[1.313rem] w-[1.313rem] relative overflow-hidden shrink-0"
                    alt=""
                    src="/chevron.svg"
                  />
                </div>
                <div className="flex-1 flex flex-row items-center justify-center min-w-[13.313rem] max-w-full">
                  <div className="h-[1.313rem] flex-1 relative inline-block max-w-full">
                    Continuous learning and adaptation
                  </div>
                </div>
              </div>
              <div className="w-[12.063rem] h-[2.688rem] hidden flex-col items-start justify-start p-[0.625rem] box-border">
                <div className="self-stretch flex flex-row items-center justify-center">
                  <div className="h-[28.875rem] flex-1 relative inline-block">
                    <p className="m-0">
                      The field of UI design is constantly evolving, with new
                      tools, technologies, and trends emerging regularly. I am
                      committed to staying updated with the latest developments
                      in the industry and continuously honing my skills.
                    </p>
                    <p className="m-0">
                      By embracing a growth mindset, I am always eager to learn
                      from experiences and adapt to new challenges.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.625rem] text-[1.125rem]">
            <div className="h-[1.438rem] relative font-semibold inline-block">
              Digital art
            </div>
            <div className="self-stretch h-[20.125rem] relative text-justify inline-block">
              <p className="m-0">
                In another spectrum of my life, digital art has always
                challenged my way of thinking in an artistical way and my
                knowledge surrounding machines in human-computer interaction.
              </p>
              <p className="m-0">{` `}</p>
              <p className="m-0">
                I started out in virtual photography by capturing video game
                screenshots and making concept art by color grading or editing
                out to create something new.
              </p>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.625rem] text-[1.125rem]">
            <div className="h-[1.438rem] relative font-semibold inline-block">
              Rugby
            </div>
            <div className="self-stretch h-[40.25rem] relative text-justify inline-block">
              <p className="m-0">
                For me, is not just a game. Thanks to my father who was a
                seasoned rugby player, I was naturally drawn to the sport that
                shaped my early memories, growing up to the deafening sound of
                cleats on the field. I was inspired by watching one world cup
                season when i was still a kid.
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                What keeps me interested is the relationship among teammates,
                the symphony of training, and the strategic plays between
                opponents. The rugby field is my proving ground, where i go out
                and relieve myself from my daily activities. Career-wise, the
                sport isn't merely a pursuit; it's a dedication to surpass
                limits, and a relentless pursuit of excellence. In every scrum
                and sprint, I find a testament to an enduring legacy in my
                lifetime.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-layout-small bg-colors-base-10 flex flex-row items-center justify-start py-[0.313rem] px-[0.625rem] gap-[0.938rem] text-colors-base-100 mq450:flex-wrap">
          <div className="h-[1.313rem] flex flex-row items-center justify-start">
            <img
              className="h-[1.313rem] w-[1.313rem] relative"
              loading="lazy"
              alt=""
              src="/globe.svg"
            />
          </div>
          <div className="relative inline-block min-w-[4.25rem]">Social -</div>
          <div className="flex flex-row flex-wrap items-center justify-start py-[0rem] pr-[0.625rem] pl-[0rem] gap-[0.625rem_0.313rem]">
            <a
              className="relative text-[inherit] inline-block [text-decoration:none] min-w-[4.25rem] cursor-pointer"
              href="https://www.linkedin.com/in/julius-brighton/"
              target="_blank"
              onClick={onLinkedInTextClick}
            >
              LinkedIn
            </a>
            <a
              className="relative text-[inherit] inline-block [text-decoration:none] min-w-[2.125rem] cursor-pointer"
              href="https://vero.co/jomviking"
              target="_blank"
              onClick={onVeroTextClick}
            >
              Vero
            </a>
            <a
              className="relative text-[inherit] inline-block [text-decoration:none] min-w-[3.688rem] cursor-pointer"
              href="https://www.behance.net/juliusbrighton"
              target="_blank"
              onClick={onBehanceTextClick}
            >
              Behance
            </a>
          </div>
        </div>
      </div>
      <div className="!m-[0] absolute top-[0rem] right-[0rem] rounded-t-none rounded-br-none rounded-bl-border-radius-default bg-gainsboro overflow-x-auto hidden flex-row items-center justify-center p-[0.313rem] gap-[0.313rem] z-[2]">
        <div className="h-[1.25rem] w-[1.25rem] rounded-80xl bg-colors-base-100 shrink-0 flex flex-row items-center justify-center">
          <img
            className="h-[0rem] w-[0.438rem] relative rounded-12xs"
            alt=""
            src="/vector-6.svg"
          />
        </div>
        <div className="h-[1.25rem] w-[1.25rem] rounded-80xl bg-colors-base-100 shrink-0 flex flex-col items-center justify-center">
          <img
            className="w-[0.4rem] h-[0.375rem] relative rounded-12xs"
            alt=""
            src="/vector-5.svg"
          />
        </div>
        <div className="h-[1.25rem] w-[1.25rem] rounded-80xl bg-colors-base-0 shrink-0 flex flex-row items-center justify-center">
          <img
            className="h-[0.313rem] w-[0.313rem] relative rounded-sm"
            alt=""
            src="/vector-3.svg"
          />
        </div>
      </div>
    </div>
  )
};

export default Profilecard;
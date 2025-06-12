import imageMockups from "../assets/images/image-mockups.png";
import bgIntroDesktop from "../assets/images/bg-intro-desktop.svg";
import bgIntroMobile from "../assets/images/bg-intro-mobile.svg";
import iconOnline from "../assets/images/icon-online.svg";
import iconBudgeting from "../assets/images/icon-budgeting.svg";
import iconOnBoarding from "../assets/images/icon-onboarding.svg";
import iconApi from "../assets/images/icon-api.svg";
import imageCurrency from "../assets/images/image-currency.jpg";

export const Homepage = () => {
  return (
    <>
      {/* Hero starts */}
      <div className="wrapper__1920 hero-box">
        <section className="hero">
          <div className="wrapper__1920--content">
            <div className="hero__container">
              {/* Hero column 1 starts */}
              <div className="hero__column-1">
                <div className="hero__heading">
                  <div className="heading-default">
                    <h1 className="heading-default__title">
                      Next generation digital banking
                    </h1>
                    <p className="heading-default__text">
                      Take your financial life online. Your Easybank account
                      will be a one-stop-shop for spending, saving, budgeting,
                      investing, and much more.
                    </p>
                    <div className="request-invite-cta">
                      <div className="button__cta">
                        <a href="#" className="button__cta--primary">
                          Request Invite
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Hero column 1 ends */}

              {/* Hero column 2 starts */}
              <div className="hero__column-2">
                <div className="hero__images">
                  <div className="hero__images-wrap">
                    <img className="hero__images-2" src={imageMockups} alt="" />
                    <img
                      className="hero__images-1"
                      src={bgIntroDesktop}
                      alt=""
                    />
                    <img
                      className="hero__images-1a"
                      src={bgIntroMobile}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              {/* Hero column 2 ends */}
            </div>
          </div>
        </section>
      </div>
      {/* Hero ends */}

      {/* Value prop starts */}
      <div className="wrapper__1920 value-prop-box">
        <section className="value-prop">
          <div className="wrapper__1920--content">
            <div className="value-prop__container">
              <div className="value-prop__heading">
                <h1 className="heading-smaller__title">Why choose Easybank?</h1>
                <p className="heading-smaller__text">
                  We leverage Open Banking to turn your bank account into your
                  financial hub. Control your finances like never before.
                </p>
              </div>

              <div className="value-prop__content">
                <div className="value-prop__content-wrap">
                  {/* Content item */}
                  <div className="value-prop__content-item">
                    <div className="simple-cards">
                      <img
                        src={iconOnline}
                        alt="Online Banking"
                        className="simple-cards__image"
                      />
                      <h1 className="simple-cards__heading">
                        Why choose Easybank?
                      </h1>
                      <p className="simple-cards__text">
                        Our modern web and mobile applications allow you to keep
                        track of your finances wherever you are in the world.
                      </p>
                    </div>
                  </div>
                  {/* Content item */}
                  <div className="value-prop__content-item">
                    <div className="simple-cards">
                      <img
                        src={iconBudgeting}
                        alt="Online Banking"
                        className="simple-cards__image"
                      />
                      <h1 className="simple-cards__heading">
                        Simple Budgeting
                      </h1>
                      <p className="simple-cards__text">
                        See exactly where your money goes each month. Receive
                        notifications when you’re close to hitting your limits.
                      </p>
                    </div>
                  </div>
                  {/* Content item */}
                  <div className="value-prop__content-item">
                    <div className="simple-cards">
                      <img
                        src={iconOnBoarding}
                        alt="Online Banking"
                        className="simple-cards__image"
                      />
                      <h1 className="simple-cards__heading">Fast Onboarding</h1>
                      <p className="simple-cards__text">
                        We don’t do branches. Open your account in minutes
                        online and start taking control of your finances right
                        away.
                      </p>
                    </div>
                  </div>
                  {/* Content item */}
                  <div className="value-prop__content-item">
                    <div className="simple-cards">
                      <img
                        src={iconApi}
                        alt="Online Banking"
                        className="simple-cards__image"
                      />
                      <h1 className="simple-cards__heading">Open API</h1>
                      <p className="simple-cards__text">
                        Manage your savings, investments, pension, and much more
                        from one account. Tracking your money has never been
                        easier.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Value prop ends */}

      {/* Latest articles start */}
      <div className="wrapper__1920 latest-articles-box">
        <section className="latest-articles">
          <div className="wrapper__1920--content">
            <div className="latest-articles__wrap">
              <div className="latest-articles__container">
                <div className="latest-articles__heading">
                  <div className="heading-smaller">
                    <h1 className="heading-smaller__title">Latest Articles</h1>
                  </div>
                </div>
                <div className="latest-articles__content">
                  {/* Content item */}
                  <div className="latest-articles__content-item">
                    <div className="simple-cards-v2">
                      <a href="#" className="simple-cards-v2__image-link">
                        <img
                          src={imageCurrency}
                          alt=""
                          className="simple-cards-v2__image"
                        />
                        <div className="simple-cards-v2__heading-and-text">
                          <h1 className="simple-cards-v2__heading">
                            By Claire Robinson
                          </h1>
                          <h1 className="simple-cards-v2__heading-2">
                            Receive money in any currency with no fees
                          </h1>
                          <p className="simple-cards-v2__text">
                            The world is getting smaller and we’re becoming more
                            mobile. So why should you be forced to only receive
                            money in a single …
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                  {/* Content item */}
                  <div className="latest-articles__content-item">
                    <div className="simple-cards-v2">
                      <a href="#" className="simple-cards-v2__image-link">
                        <img
                          src={imageCurrency}
                          alt=""
                          className="simple-cards-v2__image"
                        />
                        <div className="simple-cards-v2__heading-and-text">
                          <h1 className="simple-cards-v2__heading">
                            By Claire Robinson
                          </h1>
                          <h1 className="simple-cards-v2__heading-2">
                            Receive money in any currency with no fees
                          </h1>
                          <p className="simple-cards-v2__text">
                            The world is getting smaller and we’re becoming more
                            mobile. So why should you be forced to only receive
                            money in a single …
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                  {/* Content item */}
                  <div className="latest-articles__content-item">
                    <div className="simple-cards-v2">
                      <a href="#" className="simple-cards-v2__image-link">
                        <img
                          src={imageCurrency}
                          alt=""
                          className="simple-cards-v2__image"
                        />
                        <div className="simple-cards-v2__heading-and-text">
                          <h1 className="simple-cards-v2__heading">
                            By Claire Robinson
                          </h1>
                          <h1 className="simple-cards-v2__heading-2">
                            Receive money in any currency with no fees
                          </h1>
                          <p className="simple-cards-v2__text">
                            The world is getting smaller and we’re becoming more
                            mobile. So why should you be forced to only receive
                            money in a single …
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                  {/* Content item */}
                  <div className="latest-articles__content-item">
                    <div className="simple-cards-v2">
                      <a href="#" className="simple-cards-v2__image-link">
                        <img
                          src={imageCurrency}
                          alt=""
                          className="simple-cards-v2__image"
                        />
                        <div className="simple-cards-v2__heading-and-text">
                          <h1 className="simple-cards-v2__heading">
                            By Claire Robinson
                          </h1>
                          <h1 className="simple-cards-v2__heading-2">
                            Receive money in any currency with no fees
                          </h1>
                          <p className="simple-cards-v2__text">
                            The world is getting smaller and we’re becoming more
                            mobile. So why should you be forced to only receive
                            money in a single …
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Latest articles ends */}
    </>
  );
};

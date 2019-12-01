import React from "react";
import Header from "../examples/header";
import People from "../examples/people";
import NewPeople from "../Section";
import Section from "../Section";

const headerSectionProps = {
  id: 440241,
  rootKey: 440241,
  type: "header",
  template: "business",
  elements: [
    {
      type: "eventName",
      id: 1469900,
      rootKey: "1469900",
      position: 1,
      visibility: true,
      customizationVersion: 1,
      column: -1,
      visibilityParent: false,
      eventName: "INNOV EXPO 2020"
    },
    {
      type: "eventDate",
      id: 1469901,
      rootKey: "1469901",
      position: 2,
      visibility: true,
      customizationVersion: 1,
      column: -1,
      visibilityParent: false,
      localStartDate: "2020-05-07 12:00",
      localEndDate: "2020-05-07 13:00"
    },
    {
      type: "eventLogo",
      id: 1469902,
      rootKey: "1469902",
      position: 3,
      visibility: true,
      customizationVersion: 1,
      column: -1,
      visibilityParent: false,
      logoPhotoSet: "/logo192.png"
    },
    {
      type: "image",
      id: 1469903,
      rootKey: "1469903",
      position: 4,
      visibility: true,
      customizationVersion: 1,
      column: -1,
      visibilityParent: false,
      isVideo: false
    },
    {
      type: "eventSecondaryHeaders",
      id: 1469905,
      rootKey: "1469905",
      position: 5,
      visibility: true,
      customizationVersion: 1,
      column: -1,
      visibilityParent: false,
      header1: "55 Church St, New York, NY 10007, United States",
      header2: "The downtown expo hall features a host of interesting and amazing innovations for you to enjoy throughout the day."
    },
    {
      type: "registerButton",
      id: 1469906,
      rootKey: "1469906",
      position: 6,
      visibility: true,
      customizationVersion: 1,
      column: -1,
      visibilityParent: false,
      name: "REGISTER NOW",
      mode: "register",
      newTab: false
    },
    {
      type: "socialShare",
      id: 1469907,
      rootKey: "1469907",
      position: 7,
      visibility: true,
      customizationVersion: 1,
      column: -1,
      visibilityParent: false,
      eventName: "guy2",
      landingPageUrl: "https://events.bizzabo.com/215205",
      twitter: true,
      facebook: true,
      linkedin: true
    }
  ]
};

const peopleSectionProps = {
  id: 440241,
  rootKey: 440241,
  type: "header",
  template: "business",
  elements: [
    {
      type: "header",
      id: 12345,
      rootKey: 12345,
      text: "Look who is here"
    },
    {
      type: "people",
      id: 45678,
      rootKey: 45678,
      contactListId: 777777,
      contacts: [
        {
          id: 9876,
          thumbnailUrl: "",
          firstName: "Adi",
          lastName: "Gibs",
          speakerId: 654567,
          facebookPage: "http://facebook.com",
          linkedinPage: "http://linkedin.com",
          twitter: "http://twitter.com",
          title: "Legal Clerk",
          company: "Analog Devices"
        },
        {
          id: 111,
          thumbnailUrl:
            "https://res.cloudinary.com/bizzaboprod/image/upload/c_crop,g_custom,f_auto/w_270,h_270,c_fill,g_face,fl_any_format,q_auto:best/jond0kyi2g4l8987wcfi.jpg",
          firstName: "Adi123",
          lastName: "Gibs654",
          speakerId: 654567,
          facebookPage: "http://facebook.com",
          linkedinPage: "http://linkedin.com",
          twitter: "http://twitter.com",
          title: "Legal Clerk",
          company: "Analog Devices"
        },
        {
          id: 113,
          thumbnailUrl:
            "https://res.cloudinary.com/bizzaboprod/image/upload/c_crop,g_custom,f_auto/w_270,h_270,c_fill,g_face,fl_any_format,q_auto:best/jond0kyi2g4l8987wcfi.jpg",
          firstName: "Adi123",
          lastName: "Gibs654",
          speakerId: 654567,
          facebookPage: "http://facebook.com",
          linkedinPage: "http://linkedin.com",
          twitter: "http://twitter.com",
          title: "Legal Clerk",
          company: "Analog Devices"
        },
        {
          id: 114,
          thumbnailUrl:
            "https://res.cloudinary.com/bizzaboprod/image/upload/c_crop,g_custom,f_auto/w_270,h_270,c_fill,g_face,fl_any_format,q_auto:best/jond0kyi2g4l8987wcfi.jpg",
          firstName: "Adi123",
          lastName: "Gibs654",
          speakerId: 654567,
          facebookPage: "http://facebook.com",
          linkedinPage: "http://linkedin.com",
          twitter: "http://twitter.com",
          title: "Legal Clerk",
          company: "Analog Devices"
        }
      ],
      displayAttributes: []
    }
  ]
};

const App = props => {
  return (
    <div
      className="main-view footer-padding footer-padding-confirmation"
      style={{ opacity: 1 }}
    >
      <div
        className="home-page home-custom-css 1420702-custom-css "
        data-server-rendered="true"
      >
        <ul className="sections-holder" data-server-rendered="true">
          <div
            className="business-template section-440241"
            data-server-rendered="true"
            data-model-id={headerSectionProps.id}
          >
            <div
              className={`section-${headerSectionProps.rootKey} section-header business-template`}
              id={`section-${headerSectionProps.id}`}
            >
              <Header section={headerSectionProps} />
              <Section section={headerSectionProps} />

              <People section={peopleSectionProps} />
              <NewPeople section={peopleSectionProps} />
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default App;

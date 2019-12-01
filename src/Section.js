/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { createUseStyles } from "react-jss";
import  * as _ from 'lodash';
import classnames from "classnames";
const useStyles = createUseStyles({
  headerSectionContainer: {
    position:'relative',
    '@media screen and (min-width: 769px)': {
      display:"flex",
      flexDirection: "row",
      height:'100%',
      minHeight: "100vh",
    },  

    
    "& .content": {
      padding: "56px",
      paddingLeft: "48px",
      '@media screen and  (min-width: 1200px)': {

      },
      '@media screen and (max-width: 600px)': {
        padding: "28px",
    
      },

      "& .eventLogo": {
        "& img": {
          maxWidth: "80px",
          maxHeight: "80px"
        }
      },
      "& .eventName": {
        paddingTop: "30px",
        paddingBottom: "30px",
        lineHeight: 1,
        fontSize: 110,
        fontWeight: "bold",
        color: "#FF5243",
        '@media screen and  (max-width: 600px)': {
          fontSize: 55,
          paddingBottom: "10px"

        }
      },
      "& .eventSecondaryHeaders": {
        fontSize: "18px",
        '@media screen and (min-width: 601px)': {
          fontSize: "24px",

        }

      },
      "& .registerButton": {
        paddingTop: "30px",
        paddingBottom: "30px",

        "& > button": {
          padding: "18px 42px 18px 42px",
          fontSize: "28px",
          color: "white",
          backgroundColor: "#ff0a98",
          fontWeight: "bold",
          border: "2px solid white",

          "&:hover": {
            color: "#ff0a98",
            backgroundColor: "white",
            border: "2px solid #ff0a98"
          },
          '@media screen and (max-width: 600px)': {
            padding: "10px 21px 10px 21px",
            fontSize: "18px",
            fontWeight:'normal'
          },
  
        },
  
      },
      "& .eventDate": {
        fontWeight: "bold",
        fontSize: "18px",
        color: "black",
        '@media screen and (min-width: 601px)': {
          paddingBottom: "12px",

        }
      },
      "& .socialShare": {
        paddingTop: '30px',
        paddingBottom:'30px',

        "& > a": {
          marginRight: "16px",
          "& > i": {
            fontSize: 36,
            width: "36px",
            height: "36px",
            borderRadius: "36px",
            // boxShadow: "2px 2px  rgba(0,0,0,0.6)",
            boxShadow:
              "0px 0px 2px rgba(0,0,0,0.1),2px 2px 12px rgba(0,0,0,0.1),4px 4px 16px rgba(0,0,0,0.1)",
            "&:hover": {
              backgroundColor: "#11679C",
              color: "white"
            },
            '@media screen and (min-width: 1201px)': {
              fontSize: 50,
              width: "50px",
              height: "50px",
  
            }
    
          }
        },
        '@media screen and (min-width: 1401px)': {
          position: "absolute",
          bottom: "20px",
        }
      }
    },
    "& .cover": {
      '@media screen and (min-width: 1401px)': {
        minHeight: "100vh",

      },
      backgroundImage:
        'url("https://res.cloudinary.com/bizzaboprod/image/upload/v1419411425/SplitShire-7662_eqi7sf")'
    },
  }
});
export default ({ section: { id, rootKey, elements } }) => {
  const classes = useStyles();
  const elementsByType = _.keyBy(elements, "type");
  const {eventName, eventDate, eventLogo, eventSecondaryHeaders,registerButton, socialShare, image} = elementsByType;
  return (
    <div key={rootKey} className="rowHolder element-1469903 atom-sectionSecondary ">
      <div className={classnames("row", classes.headerSectionContainer)}>
        <div className="col-md-6 col-xs-12 col-sm-12">
          <div className="content">
            {eventLogo && <EventLogo element={eventLogo} />}

            {eventName && <EventName element={eventName} />}

            {eventSecondaryHeaders && (
              <EventSecondaryHeaders
                element={eventSecondaryHeaders}
                value={eventSecondaryHeaders.header2}
              />
            )}
            {registerButton && (
              <RegisterButton element={registerButton} />
            )}
            {eventDate && <EventDate element={eventDate} />}

            {eventSecondaryHeaders && (
              <EventSecondaryHeaders
                element={eventSecondaryHeaders}
                value={eventSecondaryHeaders.header1}
              />
            )}
            {socialShare && <SocialShare element={socialShare} />}
          </div>
        </div>

        <div class="col-md-6 col-xs-12 col-sm-12 cover cover-photo-background custom-space-top custom-space-bottom">
          <div class=" align-items-center  justify-content-center" />
        </div>
      </div>
    </div>
  );
};
function EventLogo({ element: { rootKey, logoPhotoSet } }) {
  return (
    <div className="eventLogo">
      {logoPhotoSet && <img key={rootKey} src={logoPhotoSet} alt="logo" />}
    </div>
  );
}
function EventName({ element: { rootKey, eventName } }) {
  return (
    <div className="eventName" key={rootKey}>
      {eventName}
    </div>
  );
}
function EventSecondaryHeaders({ element: { rootKey }, value }) {
  return (
    <div key={rootKey} className="eventSecondaryHeaders">
      {value}
    </div>
  );
}
function RegisterButton({ element: { rootKey, name, customName } }) {
  const btnName = name==='custom' ? customName : name
  return (
    <div key={rootKey} className="registerButton">
      <button>{btnName}</button>
    </div>
  );
}
function EventDate({ element: { rootKey, localStartDate, localEndDate } }) {
  const startDate = new Date(localStartDate.replace(/-/g, "/"));
  const endDate = new Date(localEndDate.replace(/-/g, "/"));
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let date = "";
  const getDay = day => {
    switch (day) {
      case 1:
        return "1st";
      case 2:
        return "2nd";
      case 3:
        return "3rd";
      default:
        return `${day}th`;
    }
  };
  const getMinutes = min => {
    if (min < 10) {
      return `0${min}`;
    }
    return min;
  };

  if (startDate.getMonth() === endDate.getMonth()) {
    date = `${months[startDate.getMonth()]} `;
    if (startDate.getDay() === endDate.getDay()) {
      date += `${getDay(startDate.getDay())}, `;

      if (startDate.getTime() === endDate.getTime()) {
        date += ` ${startDate.getHours()}:${getMinutes(
          startDate.getMinutes()
        )} `;
      } else {
        date += `${startDate.getHours()}:${getMinutes(
          startDate.getMinutes()
        )} - ${endDate.getHours()}:${getMinutes(endDate.getMinutes())}`;
      }
    } else {
      date += `${months[startDate.getMonth()]} ${getDay(
        startDate.getDay()
      )} - ${getDay(endDate.getDay())}, `;
    }
  } else {
    date = `${months[startDate.getMonth()]} ${getDay(startDate.getDay())} - ${
      months[endDate.getMonth()]
    } ${getDay(endDate.getDay())} `;
  }
  date += `, ${startDate.getFullYear()}`;
  console.log('date',startDate,endDate,date)

  return <div key={rootKey} className="eventDate">{`${date}`}</div>;
}
function SocialShare({
  element: { rootKey, twitter, facebook, linkedin, landingPageUrl }
}) {
  return (
    <div key={rootKey} className="socialShare">
      {facebook && (
        <a href={landingPageUrl} target="_blank" rel="noopener noreferrer">
          <i className="speaker-icon fa icon-facebook" />
        </a>
      )}
      {linkedin && (
        <a href={landingPageUrl} target="_blank" rel="noopener noreferrer">
          <i className="speaker-icon fa icon-linkedin" />
        </a>
      )}
      {twitter && (
        <a href={landingPageUrl} target="_blank" rel="noopener noreferrer">
          <i className="speaker-icon fa icon-twitter" />
        </a>
      )}
    </div>
  );
}

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { createUseStyles } from "react-jss";
import classnames from "classnames";
const useStyles = createUseStyles({
  headerSectionContainer: {
    minHeight: "100vh",
    position: "relative",
    "& .content": {
      padding: "56px",
      paddingLeft: "48px",
      minHeight: "100vh",

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
        color: "#FF5243"
      },
      "& .eventSecondaryHeaders": {
        fontSize: "24px"
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
          }
        }
      },
      "& .eventDate": {
        fontWeight: "bold",
        fontSize: "18px",
        color: "black",
        paddingBottom: "16px"
      },
      "& .socialShare": {
        position: "absolute",
        bottom: "40px",
        "& > a": {
          marginRight: "16px",
          "& > i": {
            fontSize: 50,
            width: "50px",
            height: "50px",
            borderRadius: "50px",
            // boxShadow: "2px 2px  rgba(0,0,0,0.6)",
            boxShadow:
              "0px 0px 2px rgba(0,0,0,0.1),2px 2px 12px rgba(0,0,0,0.1),4px 4px 16px rgba(0,0,0,0.1)",
            "&:hover": {
              backgroundColor: "#11679C",
              color: "white"
            }
          }
        }
      }
    },
    "& .cover": {
      minHeight: "100vh",
      backgroundImage:
        'url("https://res.cloudinary.com/bizzaboprod/image/upload/v1419411425/SplitShire-7662_eqi7sf")'
    }
  }
});
export default ({ section: { id, rootKey, elements } }) => {
  const classes = useStyles();
  return (
    <div className="rowHolder element-1469903 atom-sectionSecondary ">
      <div className={classnames("row", classes.headerSectionContainer)}>
        <div className="col-md-6">
          <div className="content">
            {elements && elements[2] && <EventLogo element={elements[2]} />}

            {elements && elements[0] && <EventName element={elements[0]} />}

            {elements && elements[4] && (
              <EventSecondaryHeaders
                element={elements[4]}
                value={elements[4].header2}
              />
            )}
            {elements && elements[5] && (
              <RegisterButton element={elements[5]} />
            )}
            {elements && elements[1] && <EventDate element={elements[1]} />}

            {elements && elements[4] && (
              <EventSecondaryHeaders
                element={elements[4]}
                value={elements[4].header1}
              />
            )}
            {elements && elements[6] && <SocialShare element={elements[6]} />}
          </div>
        </div>

        <div class="col-md-6 p-0 bg-white h-md-100 cover cover-photo-background custom-space-top custom-space-bottom">
          <div class="d-md-flex align-items-center h-md-100 p-5 justify-content-center" />
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
function RegisterButton({ element: { rootKey, name } }) {
  return (
    <div key={rootKey} className="registerButton">
      <button>{name}</button>
    </div>
  );
}
function EventDate({ element: { rootKey, localStartDate, localEndDate } }) {
  const startDate = new Date(localStartDate);
  const endDate = new Date(localEndDate);

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

import { Link } from "react-router-dom";

export const ButtonCTA = ({ extraClass, ctaName }) => {
  return (
    <div className={`${extraClass ? extraClass : ""} request-invite-cta`}>
      <div className="button__cta">
        <Link to="" className="button__cta--primary">
          {ctaName}
        </Link>
      </div>
    </div>
  );
};

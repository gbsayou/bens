import { RightRail } from "@/components/Ad";
import style from "./index.module.scss";

const ContentBody = ({ children, showRightRail = true }) => {
  return (
    <div className={style.content}>
      {children}
      {/* {showRightRail && <RightRail />} */}
    </div>
  );
};

export default ContentBody;

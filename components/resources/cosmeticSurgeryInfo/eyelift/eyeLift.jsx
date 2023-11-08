/** @format */

import React, { useState, useRef, useEffect } from "react";
import InfoCard from "@/components/resources/infoCard/infoCard";
//import ConsultationForm from "@/components/consultForm/consultForm";
import popupStyles from "@/pages/resources/popUp/popupResources.module.css";
import { CSSTransition } from "react-transition-group";
import styles from "@/components/resources/infoCard/infoCard.module.css";

export const EyelidLiftInfo = React.forwardRef((props, ref) => {
  EyelidLiftInfo.displayName = "EyelidLiftInfo";
  const { onClose } = props;
  const [showFirstSection, setShowFirstSection] = useState(false);
  const [showSecondSection, setShowSecondSection] = useState(false);
  const [showThirdSection, setShowThirdSection] = useState(false);
  const [showFourthSection, setShowFourthSection] = useState(false);
  const transitionPopupRef = useRef(null);
  const refsArray = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const popupHeight = transitionPopupRef.current
    ? transitionPopupRef.current.offsetHeight
    : 0;

  useEffect(() => {
    const handleScroll = () => {
      refsArray.forEach((ref, index) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const isPartiallyVisible = rect.top < popupHeight && rect.bottom > 0;

          switch (index) {
            case 0:
              setShowFirstSection(isPartiallyVisible);
              break;
            case 1:
              setShowSecondSection(isPartiallyVisible);
              break;
            case 2:
              setShowThirdSection(isPartiallyVisible);
              break;
            case 3:
              setShowFourthSection(isPartiallyVisible);
              break;
            default:
              break;
          }
        }
      });
    };

    if (transitionPopupRef.current) {
      transitionPopupRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (transitionPopupRef.current) {
        transitionPopupRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [transitionPopupRef, refsArray, popupHeight]);

  useEffect(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  return (
    <div className={popupStyles.popupContainer} ref={transitionPopupRef}>
      <div className="flex w-full">
        <div className={popupStyles.popup_Info}>
          <CSSTransition
            in={showFirstSection}
            timeout={1000}
            classNames="fade"
            unmountOnExit={false}
          >
            <div ref={refsArray[0]} className={popupStyles.motion}>
              <h2 className={popupStyles.infoTitle}>Eyelid Lift Surgery</h2>

              <span className="text-m flex-wrap">
                <br />Eyelid lift surgery, also known as blepharoplasty, is a cosmetic procedure that focuses on rejuvenating the appearance of the eyes by removing excess skin and fat from the upper and lower eyelids. This surgery aims to create a more youthful and alert look by addressing issues such as drooping eyelids, puffiness, and wrinkles.

              </span>
              <br />
              <span className="text-m flex-wrap">
                Eyelid lift surgery can significantly enhance a person's facial appearance and restore a more vibrant and rested look.
              </span>

              <div className={styles.iCardContainer}>
               
              </div>
            </div>
          </CSSTransition>

          <CSSTransition
            in={showSecondSection}
            timeout={1000}
            classNames="fade"
            unmountOnExit={false}
          >
            <div ref={refsArray[1]} className={popupStyles.motion}>
              <h2 className={popupStyles.infoTitle}>
                The Importance of Eyelid Lift Surgery
              </h2>

              <span className="text-m flex-wrap">
                Beyond the physical transformation, eyelid lift surgery plays a pivotal role in alleviating signs of aging around the eyes, providing a refreshed and more youthful appearance. It can boost self-esteem and confidence, allowing individuals to feel more comfortable in their own skin.

              </span>
              <br />

              <h2 className={popupStyles.infoTitle}>
                Best Candidates for Eyelid Lift Surgery
              </h2>

              <span className="text-m flex-wrap">
                Ideal candidates for eyelid lift surgery are individuals who are concerned about the appearance of their eyelids due to aging or hereditary factors. They should be in good health, have realistic expectations about the results, and understand the procedure fully.
              </span>
              <br />

              <h2 className={popupStyles.infoTitle}>
                The Surgical Procedure
              </h2>

              <span className="text-m flex-wrap">
                The surgical procedure typically takes a few hours and can be done under local anesthesia. The surgeon will make precise incisions along the natural lines of the eyelids to remove excess skin and fat, and, if needed, to reposition the underlying muscles and tissues.
                <br />
                <br />
                <ul className="custom-bullet-list">
                  <li>Upper Eyelid Surgery: Involves addressing sagging or drooping of the upper eyelids.</li>
                  <li>Lower Eyelid Surgery: Focuses on reducing puffiness and wrinkles in the lower eyelids.</li>
                </ul>
              </span>
            </div>
          </CSSTransition>

          <CSSTransition
            in={showThirdSection}
            timeout={1000}
            classNames="fade"
            unmountOnExit={false}
          >
            <div ref={refsArray[2]} className={popupStyles.motion}>
              <h2 className={popupStyles.infoTitle}>
                {" "}
                Recovery and Results{" "}
              </h2>

              <span className="text-m flex-wrap">
                Recovery from eyelid lift surgery is relatively quick. Patients can expect some swelling and bruising initially, but these side effects subside in a short time. Most results are noticeable within a few weeks, and any scars are well-hidden in the natural folds of the eyelids.

              </span>

              <h2 className={popupStyles.infoTitle}>
                Benefits of Eyelid Lift Surgery
              </h2>
              <span>
                Eyelid lift surgery provides the benefits of a more youthful and alert appearance, reducing signs of aging around the eyes. This can lead to increased self-confidence and a revitalized look.

              </span>
              <br />

              <h2 className={popupStyles.infoTitle}>Potential Risks</h2>

              <span className="text-m flex-wrap">
                As with any surgical procedure, there are inherent risks such as bleeding, infection, complications from anesthesia, unsatisfactory results, and complications specific to the type of surgery. It's crucial to discuss these risks with your surgeon during the consultation.
              </span>
            </div>
          </CSSTransition>

          <CSSTransition
            in={showFourthSection}
            timeout={1000}
            classNames="fade"
            unmountOnExit={false}
          >
            <div ref={refsArray[3]} className={popupStyles.motion}>
              <h2 className={popupStyles.infoTitle}>
                Schedule a Consultation
              </h2>

              <span className="text-m flex-wrap">
                Are you considering eyelid lift surgery? A consultation with a board-certified plastic surgeon is essential to gain comprehensive insight into the procedure, its benefits, and its potential impact on your appearance.
              </span>
              <br />

              {/* <ConsultationForm /> */}
            </div>
          </CSSTransition>
        </div>
      </div>
    </div>
  );
});

export default EyelidLiftInfo;

/** @format */

import React, { useState, useRef, useEffect } from "react";
import InfoCard from "@/components/resources/infoCard/infoCard";
//import ConsultationForm from "@/components/consultForm/consultForm";
import popupStyles from "@/pages/resources/popUp/popupResources.module.css";
import { CSSTransition } from "react-transition-group";
import styles from "@/components/resources/infoCard/infoCard.module.css";

export const ButtockLiftInfo = React.forwardRef((props, ref) => {
  ButtockLiftInfo.displayName = 'ButtockLiftInfo';
  const { onClose } = props;
  const [showFirstSection, setShowFirstSection] = useState(false);
  const [showSecondSection, setShowSecondSection] = useState(false);
  const [showThirdSection, setShowThirdSection] = useState(false);
  const [showFourthSection, setShowFourthSection] = useState(false);
  const buttockLiftPopupRef = useRef(null);
  const refsArray = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const popupHeight = buttockLiftPopupRef.current ? buttockLiftPopupRef.current.offsetHeight : 0;

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

    if (buttockLiftPopupRef.current) {
      buttockLiftPopupRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (buttockLiftPopupRef.current) {
        buttockLiftPopupRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [buttockLiftPopupRef, refsArray, popupHeight]);

  useEffect(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  return (
    <div className={popupStyles.popupContainer} ref={buttockLiftPopupRef}>
    <div className="flex w-full">
      <div className={popupStyles.popup_Info}>
        <CSSTransition
          in={showFirstSection}
          timeout={1000}
          classNames="fade"
          unmountOnExit={false}
        >
          <div 
            ref={refsArray[0]} 
            className={popupStyles.motion}
          >
  <h2 className={popupStyles.infoTitle}>
        Cosmetic Surgery Buttock Lift
      </h2>

      <span className="text-m flex-wrap">
        <br />
        Cosmetic surgery for buttock lift, also known as gluteoplasty, is a procedure to enhance and lift the buttocks, giving them a firmer and more youthful appearance.
      </span>
      <br />
      <span className="text-m flex-wrap">
        A buttock lift can help improve the shape and contour of the buttocks, addressing issues like sagging skin and loss of firmness due to factors like aging, weight loss, or genetics.
      </span>

      <div className={styles.iCardContainer}>
        <InfoCard
          imageUrl="/images/info/buttock-lift1.png"
          description="
            The procedure aims to provide a more lifted and shapely buttock profile."
        />
        <InfoCard
          imageUrl="/images/info/buttock-lift2.png"
          description="
            Besides aesthetic enhancement, it can boost one's confidence and self-esteem."
        />
        <InfoCard
          imageUrl="/images/info/buttock-lift3.png"
          description="
            Post-surgery, patients can enjoy a more youthful and rejuvenated buttock appearance."
        />
      </div>
      </div>
          </CSSTransition>

          <CSSTransition
            in={showSecondSection}
            timeout={1000}
            classNames="fade"
            unmountOnExit={false}
          >
            <div 
              ref={refsArray[1]} 
              className={popupStyles.motion}
            >
              <h2 className={popupStyles.infoTitle}>
              The Appeal of Buttock Lifts
      </h2>

      <span className="text-m flex-wrap">
        Opting for a buttock lift is often a cosmetic decision aimed at enhancing one's body aesthetics and achieving a more youthful appearance.
      </span>
      <br />

      <h2 className={popupStyles.infoTitle}>
        Best Candidates for a Buttock Lift
      </h2>

      <span className="text-m flex-wrap">
        Ideal candidates for buttock lifts are those looking to address issues like sagging buttock skin, loss of volume, or a flat buttock appearance. It's important for candidates to be in good health and have realistic expectations about the results.
      </span>
      <br />

      <h2 className={popupStyles.infoTitle}>
        The Surgical Procedure
      </h2>

      <span className="text-m flex-wrap">
        The buttock lift surgery typically takes a few hours and involves removing excess skin, lifting the buttocks, and enhancing their shape. The specific technique may vary, and your surgeon will recommend the best approach based on your individual case.
      <br />
      <br />
      <ul className="custom-bullet-list">
  <li>Incisions made within the bikini line</li>
  <li>Removal of excess skin and fat</li>
  <li>Lifting and reshaping the buttocks</li>
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
  <div 
    ref={refsArray[2]} 
    className={popupStyles.motion}
  >
    <h2 className={popupStyles.infoTitle}> Recovery and Results </h2>

    <span className="text-m flex-wrap">
      Recovery from a buttock lift may involve some swelling and discomfort, but most patients can enjoy a more lifted and rejuvenated buttock appearance. Scars will fade over time, becoming less noticeable.
    </span>

    <h2 className={popupStyles.infoTitle}>
      Benefits of a Buttock Lift
    </h2>
    <span>
      The primary benefits of a buttock lift include a more youthful and shapely buttock appearance, increased self-confidence, and improved body aesthetics.
    </span>
    <br />

    <h2 className={popupStyles.infoTitle}>
      Potential Risks
    </h2>

    <span className="text-m flex-wrap">
      As with any surgery, there are risks involved, including scarring, infection, asymmetry, and complications related to anesthesia. It's essential to discuss these risks with your surgeon during the consultation.
    </span>
  </div>
</CSSTransition>

<CSSTransition
  in={showFourthSection}
  timeout={1000}
  classNames="fade"
  unmountOnExit={false}
>
  <div 
    ref={refsArray[3]} 
    className={popupStyles.motion}
  >
    <h2 className={popupStyles.infoTitle}>
      Schedule a Consultation
    </h2>

    <span className="text-m flex-wrap">
      Are you considering a buttock lift? It's crucial to consult with a board-certified plastic surgeon to understand the procedure, its benefits, and determine if it's the right choice for you.
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

  export default ButtockLiftInfo;

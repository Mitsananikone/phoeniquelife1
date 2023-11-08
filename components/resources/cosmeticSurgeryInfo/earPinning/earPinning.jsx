/** @format */

import React, { useState, useRef, useEffect } from "react";
import InfoCard from "@/components/resources/infoCard/infoCard";
//import ConsultationForm from "@/components/consultForm/consultForm";
import popupStyles from "@/pages/resources/popUp/popupResources.module.css";
import { CSSTransition } from "react-transition-group";
import styles from "@/components/resources/infoCard/infoCard.module.css";

export const EarPinningInfo = React.forwardRef((props, ref) => {
  EarPinningInfo.displayName = 'EarPinningInfo';
  const { onClose } = props;
  const [showFirstSection, setShowFirstSection] = useState(false);
  const [showSecondSection, setShowSecondSection] = useState(false);
  const [showThirdSection, setShowThirdSection] = useState(false);
  const [showFourthSection, setShowFourthSection] = useState(false);
  const earPinningPopupRef = useRef(null);
  const refsArray = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const popupHeight = earPinningPopupRef.current ? earPinningPopupRef.current.offsetHeight : 0;

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

    if (earPinningPopupRef.current) {
      earPinningPopupRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (earPinningPopupRef.current) {
        earPinningPopupRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [earPinningPopupRef, refsArray, popupHeight]);

  useEffect(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  return (
    <div className={popupStyles.popupContainer} ref={earPinningPopupRef}>
    <div className="flex w-full">
      <div className={popupStyles.popup_Info} style={{wordWrap: 'break-word'}}>
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
              Cosmetic Surgery Ear Pinning
            </h2>

            <span >
              <br />
              Cosmetic surgery for ear pinning, also known as otoplasty, is a procedure to reshape and reposition protruding or misshapen ears. This procedure involves correcting the size, shape, or position of the ears to create a more balanced and natural appearance.
            </span>
            <br />
            <span className="text-m flex-wrap">
              Otoplasty can help individuals who are self-conscious about the appearance of their ears, whether due to genetics, trauma, or developmental issues. The goal is to enhance the overall facial harmony and boost self-confidence.
            </span>

            <div className={styles.iCardContainer}>
              <InfoCard
                imageUrl="/images/info/ear-pinning1.png"
                description="
                  The procedure aims to reshape and reposition the ears for a more balanced appearance."
              />
              <InfoCard
                imageUrl="/images/info/ear-pinning2.png"
                description="
                  Otoplasty can significantly improve an individual's self-esteem and confidence."
              />
              <InfoCard
                imageUrl="/images/info/ear-pinning3.png"
                description="
                  After surgery, the ears will have a more natural and harmonious appearance."
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
              The Appeal of Ear Pinning
            </h2>

            <span className="text-m flex-wrap">
              The decision to undergo ear pinning surgery is often driven by the desire to improve the appearance of protruding or misshapen ears. Otoplasty can have a transformative effect on an individual's self-esteem and overall confidence by creating a more harmonious facial profile.
            </span>
            <br />

            <h2 className={popupStyles.infoTitle}>
              Best Candidates for Ear Pinning
            </h2>

            <span className="text-m flex-wrap">
              Ideal candidates for ear pinning are individuals who are unhappy with the appearance of their ears, whether due to genetics or other factors. They should be in good health, fully understand the procedure, and have realistic expectations about the results.
            </span>
            <br />

            <h2 className={popupStyles.infoTitle}>
              The Surgical Procedure
            </h2>

            <span className="text-m flex-wrap">
              The surgery typically takes a few hours and can be done under local or general anesthesia. The surgeon will make incisions behind the ears to access and reshape the ear cartilage. The specific technique will depend on the individual's unique ear shape and goals.
              <br />
              <br />
              <ul className="custom-bullet-list">
                <li>Reshaping ear cartilage and pinning ears closer to the head</li>
                <li>Adjusting ear size, shape, or position as needed</li>
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
              Recovery from ear pinning surgery may involve some swelling and discomfort, but most patients can enjoy a more balanced and natural ear appearance. Scars are typically minimal and hidden behind the ears.
            </span>

            <h2 className={popupStyles.infoTitle}>
              Benefits of Ear Pinning
            </h2>
            <span>
              Otoplasty offers benefits such as improved ear symmetry, enhanced self-esteem, and a more harmonious facial profile. It can help individuals feel more confident about their appearance.
            </span>
            <br />

            <h2 className={popupStyles.infoTitle}>
              Potential Risks
            </h2>

            <span className="text-m flex-wrap">
              As with any surgery, there are risks involved, including infection, scarring, and changes in ear sensation. It's important to discuss these risks with your surgeon during the consultation.
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
              Are you considering ear pinning (otoplasty)? It's essential to consult with a board-certified plastic surgeon to understand the procedure, its benefits, and determine if it's the right choice for you.
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

export default EarPinningInfo;

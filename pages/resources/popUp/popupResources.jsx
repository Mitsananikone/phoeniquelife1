/** @format */

import React, { useState, useEffect, useRef } from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css'; // importing default styles
import styles from "./popupResources.module.css";
import CosmeticSurgeryCard from "@/components/resources/cosmeticSurgeryInfo/cosmeticSurgeryCard";
import BreastImplantInfo from "@/components/resources/cosmeticSurgeryInfo/breastImplant/breastImplant";
import ButtockLiftInfo from "@/components/resources/cosmeticSurgeryInfo/buttockLift/buttockLift";
import EarPinningInfo from "@/components/resources/cosmeticSurgeryInfo/earPinning/earPinning";
import FaceliftInfo from "@/components/resources/cosmeticSurgeryInfo/faceLift/faceLift";
import LiposuctionInfo from "@/components/resources/cosmeticSurgeryInfo/liposuction/liposuction";
import EyeLiftInfo from "@/components/resources/cosmeticSurgeryInfo/eyelift/eyeLift";
import RhinoplastyInfo from "@/components/resources/cosmeticSurgeryInfo/rhinoplasty/rhinoplasty";
import TummyTuckInfo from "@/components/resources/cosmeticSurgeryInfo/tummyTuck/tummyTuck";

function PopupResources({ isPopupVisible, onClose, selectedProcedure }) {
  const popupRef = useRef(null);
  const surgeriesPopupRef = useRef(null);

  const [selectedNavProcedure, setSelectedNavProcedure] =
    useState(selectedProcedure);

  useEffect(() => {
    setSelectedNavProcedure(selectedProcedure);
  }, [selectedProcedure]);

  const handleProcedureSelect = (procedureType) => {
    setSelectedNavProcedure(procedureType);
  };

  const getProcedureComponent = (procedure) => {
    const components = {
      breastImplant: BreastImplantInfo,
      buttockLift: ButtockLiftInfo,
      earPinning: EarPinningInfo,
      faceLift: FaceliftInfo,
      liposuction: LiposuctionInfo,
      eyeLift: EyeLiftInfo,
      rhinoplasty: RhinoplastyInfo,
      tummyTuck: TummyTuckInfo,
    };

    return components[procedure] || null;
  };

  const ProcedureInfoComponent = getProcedureComponent(selectedNavProcedure);

  const handleClosePopup = () => {
    onClose();
  };

  const customStyles = {
    marginBottom: '1vh',
    borderRadius: '8px',
    zIndex: '9999999',
   
  };
  


  return (

    <Rodal  visible={isPopupVisible} 
    onClose={onClose} 
    width={90} 
    height={90} 
    measure="%"
    customStyles={customStyles}
     >

      {/* <div className={styles.popup_navMenu}> */}
        <div className={styles.popupMenu}>
          <CosmeticSurgeryCard
            onProcedureSelect={handleProcedureSelect}
            selectedProcedure={selectedNavProcedure}
          />
        </div>
      {/* </div> */}

      <div className={styles.infoSection}>
        {ProcedureInfoComponent && (
          <ProcedureInfoComponent />
        )}
      </div>

      {/* <button onClick={handleClosePopup} className={styles.closePopup}>
        x
      </button> */}
 </Rodal>
  );
}

export default PopupResources;

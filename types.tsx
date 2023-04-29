/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

/*
export const keyExtractor = <T extends Item>(
  item: T, index: number,
): string => (item && (item.id.toString() || item.Id.toString())) + index;
*/

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  "tableau-de-bord-nav": undefined;
  "elevage-nav": {
    id?: string;
  };
  "consultation-nav": undefined;
  "photo-nav": undefined;
};

export type TableauDeBordParamList = {
  "tableau-de-bord": undefined;
  "faire-demande-teleconsultation": undefined;
  "factures-screen": undefined;
};

export type VetoBottomTabParamList = {
  "veto-tableau-de-bord": undefined;
  "veto-elevage-nav": undefined;
  "veto-examen-nav": undefined;
  "veto-teleconsultation-nav": undefined;
  "veto-bse-nav": undefined;
};

export type TabMonCompteParamList = {
  "mon-compte": undefined;

  "modify-info-perso-screen": undefined;
  "modify-password-screen": undefined;
  "modify-email-screen": undefined;
  verification: undefined;
  "modifier-compte-info": undefined;
  utilisateurs: undefined;
  "mode-paiement": undefined;
  "factures-screen": undefined;
  "detail-utilisateur": undefined;
  "ajout-utilisateur": undefined;
  "inscription-choice-screen": {
    signUp?: boolean;
    userGroup?: string;
  };
  "inscription-etape-2-screen": {
    signUp?: boolean;
    userGroup?: string;
  };
  "veto-inscription-etape-3-screen": {
    signUp?: boolean;
    id?: string;
  };
  "inscription-etape-3-screen": {
    signUp?: boolean;
    id?: string;
  };
  "inscription-etape-4-screen": {
    signUp?: boolean;
    id?: string;
  };
};

export type VetoTabMonCabinetParamList = {
  "veto-mon-cabinet-screen": undefined;
  "veto-mon-compte-screen": undefined;
  "veto-modifier-mon-compte-screen": undefined;
  "veto-modify-password-screen": { id: string };
  "veto-modify-info-perso": { signUp?: boolean };

  "veto-utilisateurs-screen": undefined;
  "veto-details-utilisateur-screen": undefined;
  "veto-ajout-utilisateurs-screen": undefined;
  "veto-modify-utilisateurs-screen": { id: string };

  "veto-tarif-consultation-screen": undefined;
  "veto-facture-screen": undefined;

  "inscription-choice-screen": undefined;
  "inscription-etape-2-screen": { signUp?: boolean };
  "inscription-etape-3-screen": undefined;
  "inscription-etape-4-screen": undefined;
};

export type VetoTabExamenParamList = {
  "veto-examen-screen": undefined;
  "veto-details-consultation-screen": { id: string };
  "veto-details-teleconsultation-screen": { id: string };

  "veto-details-elevage-screen": { id: string };
  "veto-consultation-document-screen": { id: string };
  "veto-consultation-messagerie-screen": undefined;
  "veto-consultation-questionnaire-screen": undefined;
};

export type TabTableauDeBordParamList = {
  "tableau-de-bord": undefined;
  "faire-demande-teleconsultation": undefined;
};

export type TabElevageParamList = {
  "elevage-screen": {
    id?: string;
  };
  "ajout-animal-screen": undefined;
  "ajout-lot-screen": undefined;
  "ajout-batiment-screen": undefined;
  "modify-animal-screen": undefined;
  "modify-lot-screen": undefined;
  "modify-batiment-screen": undefined;
  "detail-animal-screen": { id: string };
  "detail-lot-screen": { id: string };
  "detail-batiment-screen": { id: string };
  "voir-plus-animal-screen": undefined;
  "voir-plus-lot-screen": undefined;
  "voir-plus-batiment-screen": undefined;

  "modify-elevage-screen": { signUp?: boolean; id?: string };

  "manage-affected-animals-screen": {
    manage: string;
    listTitle: string;
    whichPage: string;
    id: string;
  };
};

export type TabConsultationParamList = {
  "consultation-screen": undefined;
  "realiser-auto-exam-screen": undefined;

  "faire-demande-teleconsultation": undefined;

  "detail-consultation-screen": undefined;
  "questionnaire-screen": { id: string };
  "saisir-disease-result-screen": undefined;
  "list-disease-screen": { id: string };
  "search-consultation-screen": undefined;
  "messagerie-screen": undefined;
};

export type VetoTabTeleconsultationParamList = {
  "veto-teleconsultation-screen": undefined;
};

export type TabBilanSanitaireParamList = {
  "bilan-sanitaire-screen": undefined;
  "prebilan-screen": undefined;
  "prebilan-questionnaire-screen": undefined;
  "demande-bse-screen": undefined;
  "bse-historique-screen": undefined;
  "prebilan-historique-screen": undefined;
};

export type VetoTabBilanSanitaireParamList = {
  "veto-bse-screen": undefined;
  "veto-details-bse-screen": undefined;
  "veto-realiser-bse-screen": undefined;
  "veto-ajout-elevage-screen": undefined; ///
  "veto-prebilan-screen": undefined;
};

export type VetoTabNotificationsParamList = {
  "veto-notifications-screen": undefined;
  "veto-notifications-params-screen": undefined;
};

export type VetoTabElevageParamList = {
  "veto-elevage-screen": undefined;
  "veto-effectif-elevage-screen": { id: string };
  "veto-details-elevage-screen": { id: string };
  "veto-details-bse-screen": undefined;

  "veto-ajout-elevage-screen": undefined;
  "veto-historique-bse-screen": undefined;

  "veto-detail-animal-screen": { id: string };
  "veto-detail-lot-screen": { id: string };
  "veto-detail-batiment-screen": { id: string };

  "veto-voir-plus-animal-screen": undefined;
  "veto-voir-plus-lot-screen": undefined;
  "veto-voir-plus-batiment-screen": undefined;
};

export type TabPhotoParamList = {
  "photo-screen": undefined;
};

export type TabNotificationParamList = {
  "notifications-screen": undefined;
  "notifications-params-screen": undefined;
};

export type LinkProps = {
  state: string | undefined;
  id?: string;
  linkTo: (path: string) => void;
  signUp?: boolean;
  // prebilanStatus?: boolean
};

export type AjoutBatimentForm = {
  id: string;
  nameBuilding: string;
  address?: {
    address: string;
    additionalAddress?: string | null;
    postalCode: string;
    city: string;
  } | null;
  zone?: {
    items: [
      {
        id: string | null;
        name?: string | null;
        numberZone?: number | null;
      }
    ];
  };
};

export type AjoutLotForm = {
  numberLot: string;
  name?: string | null;
  buildingId?: string | null;
  breedingId?: string | null | undefined;
};

export type AjoutExamForm = {
  id: string;
};

export type InscriptionEtape3Form = {
  id: string;
  companyName: string;
  nBreeding: string;
  nSIRET: string;
  nbCow: number;
  nbHeifer: number;
  nbMale: number;
  nbYoung: number;
  emailVeto: string;
};

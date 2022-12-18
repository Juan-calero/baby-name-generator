import React from "react";
import babyList from "../api/api.json";
import { SelectedBabyContext } from "../contexts/selected-baby-context";

export type UseGenerateRandomBabyType = () => {
  generateRandomBaby: GenerateRandomBabyType;
};

export type GenerateRandomBabyType = (gender: "MALE" | "FEMALE") => void;

export const useGenerateRandomBaby: UseGenerateRandomBabyType = () => {
  const { setBabyResult } = React.useContext(SelectedBabyContext);

  const generateRandomBaby: GenerateRandomBabyType = (gender) => {
    const genderLists: { MALE: any; FEMALE: any } = {
      MALE: [],
      FEMALE: [],
    };

    babyList.forEach((baby) => {
      if (baby[1] === "MALE") genderLists.MALE.push(baby);
      if (baby[1] === "FEMALE") genderLists.FEMALE.push(baby);
    });

    const baby: string[] =
      genderLists[gender][
        Math.floor(Math.random() * genderLists[gender].length)
      ] || null;

    setBabyResult({
      babiesWithSameName: Number(baby[4]),
      birthYear: Number(baby[0]),
      ethnicity: baby[2],
      gender,
      name: baby[3]
        .toLowerCase()
        .replace(/^[a-z]/, (firstLetter) => firstLetter.toUpperCase()),
    });
  };

  return { generateRandomBaby };
};

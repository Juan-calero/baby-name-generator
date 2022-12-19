import React from "react";
import babyList from "../api/api.json";
import { SelectedBabyContext } from "../contexts/selected-baby-context";

export type UseGenerateRandomBabyType = () => {
  generateRandomBaby: GenerateRandomBabyType;
};

export type GenerateRandomBabyType = (gender: "MALE" | "FEMALE") => void;

export const useGenerateRandomBaby: UseGenerateRandomBabyType = () => {
  const { setSelectedBaby } = React.useContext(SelectedBabyContext);

  const generateRandomBaby: GenerateRandomBabyType = (gender) => {
    const GENDER_LISTS: { MALE: string[][]; FEMALE: string[][] } = {
      MALE: [],
      FEMALE: [],
    };

    // Separate Male and Female Babies
    babyList.forEach((baby) => {
      if (baby[1] === "MALE") GENDER_LISTS.MALE.push(baby);
      if (baby[1] === "FEMALE") GENDER_LISTS.FEMALE.push(baby);
      // This way, we're excluding all the babies that might not be "MALE" nor "FEMALE"
    });

    const selectedBaby: string[] =
      GENDER_LISTS[gender][
        Math.floor(Math.random() * GENDER_LISTS[gender].length)
      ];

    setSelectedBaby({
      babiesWithSameName: Number(selectedBaby[4]),
      birthYear: Number(selectedBaby[0]),
      ethnicity: selectedBaby[2],
      gender,
      name: selectedBaby[3]
        .toLowerCase()
        .replace(/^[a-z]/, (firstLetter) => firstLetter.toUpperCase()),
    });
  };

  return { generateRandomBaby };
};

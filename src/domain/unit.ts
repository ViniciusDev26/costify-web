export type UnitType = "ML" | "L" | "TBSP" | "TBSP_BUTTER" | "G" | "KG" | "UN";
export const Unit: Record<UnitType, string> = {
	ML: "ML",
	L: "L",
	TBSP: "TBSP",
	TBSP_BUTTER: "TBSP_BUTTER",
	G: "G",
	KG: "KG",
	UN: "UN",
};
export const UnitArray: UnitType[] = [
	"ML",
	"L",
	"TBSP",
	"TBSP_BUTTER",
	"G",
	"KG",
	"UN",
];

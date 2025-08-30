export const navbarBoxStyle = {
  bg: "white",               // 배경 흰색
  px: 4,
  position: "sticky",
  top: 0,
  zIndex: 100,
  borderBottom: "1px solid",
  borderColor: "purple.100",  // 연보라빛 얇은 선
  boxShadow: "0 1px 2px rgba(128, 0, 128, 0.1)", // 보라빛 1px 그림자
};


export const navbarFlexStyle = {
  h: 16,
  alignItems: "center",
  justifyContent: "space-between",
};

export const logoTextStyle = {
  fontWeight: "bold",
  fontSize: "xl",
  color: "blue.600",
};

export const hStackStyle = {
  spacing: 6,
  display: { base: "none", md: "flex" },
};

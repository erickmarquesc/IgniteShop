import { styled } from "..";

export const ProductContainer = styled('main', {
  gap: "4rem",
  maxWidth: 1180,
  display: "grid",
  margin: "0 auto",
  alignItems: "stretch",
  gridTemplateColumns: "1fr 1fr",
});

export const ImageContainer = styled('div', {
  width: "100%",
  maxWidth: 576,
  display: "flex",
  borderRadius: 8,
  padding: "0.25rem",
  alignItems: "center",
  justifyContent: "center",
  height: 500, //"calc(656px - 0.5rem)"
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",

  img: {
    objectFit: "cover",
  },
});

export const ProductDetails = styled('div', {
  display: "flex",
  flexDirection: "column",

  h1: {
    fontSize: '$2xl',
    color: '$gray300',
  },

  span: {
    display: "block",
    fontSize: "$2xl",
    marginTop: "1rem",
    color: "$gray300",
  },

  p: {
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray300',
    marginTop: "2.5rem",
  },

  button: {
    border: 0,
    color: '$white',
    fontSize: '$md',
    borderRadius: 8,
    marginTop: "auto",
    cursor: "pointer",
    padding: '1.25rem',
    fontWeight: "bold",
    backgroundColor: '$green500',

    '&:hover': {
      backgroundColor: '$green300',
    }
  },
});
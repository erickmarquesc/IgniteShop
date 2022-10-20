import { styled } from "..";

export const HomeContainer = styled('main', {
  gap: '3rem',
  minHeight: 556,
  width: '100%',
  display: 'flex',
  marginLeft: 'auto',
  maxWidth: 'calc(100vw - ((100vw - 1100px)/2))',
});

export const Product = styled('a', {
  display: 'flex',
  borderRadius: 8,
  cursor: 'pointer',
  overflow: 'hidden',
  padding: '0.25rem',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',

  img: {
    objectFit: 'cover',
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '2rem',

    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0,0,0,0.6)',

    transform: 'trabslateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    strong:{
      fontSize: '1.25rem'
    },

    span:{
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300',
    },
  },

  '&:hover':{
    footer:{
      transform: 'translateY(0%)',
      opacity: 1,
    }
  }
});
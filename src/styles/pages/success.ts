import { styled } from "..";

export const SuccessContainer = styled('main',{
  height: 556,
  display: 'flex',
  margin:'0 auto',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',

  h1:{
    fontSize: '$2xl',
    color: '$gray100',
  },

  p:{
    maxWidth: 560,
    fontSize: '$xl',
    color: '$gray300',
    textAlign: 'center',

  },

  a:{
    display:'block',
    fontSize: '$lg',
    marginTop: '5rem',
    color: '$green500',
    fontWeight: 'bold',
    textDecoration: 'none',
    
    '&:hover':{
      color: '$green300',
    },
  },
});

export const ImageContainer = styled('div', {
  height: 145,
  maxWidth: 130,
  widows: '100%',
  display:'flex',
  borderRadius: 8,
  marginTop: '4rem',
  padding: '0.25rem',
  alignItems:'center',
  marginBottom: '2rem',
  justifyContent: 'center',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',

  img:{
    objectFit: 'cover',
  },
});
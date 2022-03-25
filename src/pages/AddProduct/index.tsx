import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { InputWithLabel, SimpleTextarea } from '@ui/components'
import {
  StyledForm,
  StyledLabel,
  StyledImagePlaceholder,
  StyledIcon,
  AddProductButton,
  StyledParagraph,
  AddImageSection,
  StyledSpan,
  AddImageButton
} from './styles'
import { theme } from '@ui/theme';

function changeElementsByScreenSize (
  screenSize: number,
  setTextBasedOnScreenSize: Dispatch<SetStateAction<{
    imageText: string;
    buttonText: string;
  }>>
): void  
{
  const mobileSize = parseInt(theme.breakpoints.sm)
  const tabletSize = parseInt(theme.breakpoints.md)
  
  if (screenSize < mobileSize) {
    setTextBasedOnScreenSize({
      imageText: 'Adicionar uma imagem para o produto',
      buttonText: ''
    })
  } else if (screenSize >= mobileSize && screenSize < tabletSize) {
    setTextBasedOnScreenSize({
      imageText: 'Arraste para adicionar uma imagem para o produto',
      buttonText: 'Tablet'
    })
  } else {
    setTextBasedOnScreenSize({
      imageText: 'Arraste para adicionar uma imagem para o produto',
      buttonText: 'Desktop'
    })
  }
}

export default function AddProduct() {
  const [textBasedOnScreenSize, setTextBasedOnScreenSize] = useState({
    imageText: '',
    buttonText: '',
  })

  useEffect(() => {
    changeElementsByScreenSize(window.innerWidth, setTextBasedOnScreenSize)
    
    window.addEventListener('resize', () => {
      changeElementsByScreenSize(window.innerWidth, setTextBasedOnScreenSize)
    })
  }, []);

  return (
    <StyledForm>
      <StyledLabel>Adicionar novo produto</StyledLabel>

      <AddImageSection>
        <StyledImagePlaceholder>
          <StyledIcon />
          <StyledParagraph>{textBasedOnScreenSize.imageText}</StyledParagraph>
        </StyledImagePlaceholder>

        <StyledSpan>Ou</StyledSpan>

        <AddImageButton>Procure no seu {textBasedOnScreenSize.buttonText}</AddImageButton>
      </AddImageSection>

      <InputWithLabel label='Nome do produto' isRequired />
      <InputWithLabel label='Preço do produto' isRequired />
      <SimpleTextarea placeholder='Descrição do produto' isRequired />

      <AddProductButton>Adicionar produto</AddProductButton>
    </StyledForm>
  )
}
import NextImage from 'next/image';
import { useState, useEffect } from 'react';
import { InputWithLabel, SimpleTextarea } from '@ui/components'
import { 
  StyledForm, 
  StyledLabel, 
  StyledImagePlaceholder, 
  AddProductButton, 
  StyledParagraph
} from './styles'

export default function AddProduct() {

  return (
    <StyledForm>
      <StyledLabel>Adicionar novo produto</StyledLabel>

      <StyledImagePlaceholder>
        <NextImage 
          src="/images/plus.svg"
          alt=""
          width={18}
          height={18}
          layout="fixed"
        />
        <StyledParagraph>Adicionar uma imagem para o produto</StyledParagraph>
      </StyledImagePlaceholder>

      <InputWithLabel label='Nome do produto' isRequired/>
      <InputWithLabel label='Preço do produto' isRequired/>
      <SimpleTextarea placeholder='Descrição do produto' isRequired/>

      <AddProductButton>Adicionar produto</AddProductButton>
    </StyledForm>
  )
}
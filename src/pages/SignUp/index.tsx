import React, {useRef} from 'react'
import { Image, View, ScrollView, KeyboardAvoidingView, Platform, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'

import Input from '../../components/Input'
import Button from '../../components/Button'

import logoImg from '../../assets/logo.png'

import { 
  Container, 
  Title, 
  BackToSignIn,
  BackToSignInText 
} from './styles'

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const navigation = useNavigation()

  const emailInputRef = useRef<TextInput>(null)
  const passwordInputRef = useRef<TextInput>(null)


  return (
    <>
      <KeyboardAvoidingView 
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1}}
        >
          <Container> 
            <Image source={logoImg} />

            <View>
              <Title>Crie sua Conta</Title>
            </View>

            <Form 
              ref={formRef} 
              onSubmit={(data) => {
                console.log(data);
              }}
            >
              <Input 
                ref={emailInputRef}
                autoCapitalize="words" 
                name="name" 
                icon="user" 
                placeholder="Nome"
                onSubmitEditing={() => {
                  emailInputRef.current?.focus()
                }}
              />
              
              <Input
                ref={passwordInputRef}
                autoCorrect={false} 
                autoCapitalize="none"
                keyboardType="email-address"
                name="email" 
                icon="mail" 
                placeholder="Email"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus()
                }}
              />

              <Input 
                secureTextEntry 
                name="password" 
                icon="lock" 
                placeholder="Senha"
                textContentType="newPassword"
                returnKeyType="send"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />

              <Button onPress={() => formRef.current?.submitForm()}>Entrar</Button>
            </Form>
            

          </ Container>
        </ScrollView>
        
      </KeyboardAvoidingView>
  
      <BackToSignIn onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={20} color="#fff"/>
        <BackToSignInText>Voltar para logon</BackToSignInText>
      </BackToSignIn>
    </>
    
  )
}

export default SignUp
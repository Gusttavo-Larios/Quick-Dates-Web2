import React, { useState } from 'react';
import { FormActivityContext } from '../../contexts/FormActivityContext';
import {
  BackForm,
  BoxButtons,
  BoxContentForm,
  InputText,
  Label,
  NextForm,
  Save,
  TextField,
  UnForm,
} from './styles';

type FormActivity = {
  submit: (data: any) => void;
};

function FormActivity({ submit }: FormActivity) {
  const formRef = React.useRef(null);
  const { lastStage, navigateForm } = React.useContext(FormActivityContext);
  return (
    <UnForm ref={formRef} onSubmit={submit}>
      <BoxContentForm isVisible={!lastStage}>
        <Label htmlFor="team">Turma</Label>
        <InputText id="team" name="team" />

        <Label>Título</Label>
        <InputText name="title" />

        <Label>Bimestre</Label>
        <InputText name="period" />

        <Label>Pontuação</Label>
        <InputText name="ponctuation" />

        <Label>Tipo de Avaliação</Label>
        <InputText name="typeActivity" />

        <NextForm onClick={() => navigateForm()}>Avançar</NextForm>
      </BoxContentForm>
      <BoxContentForm isVisible={lastStage}>
        <Label>Data de Início</Label>
        <InputText name="dateStar" />

        <Label>Data de Término</Label>
        <InputText name="dateEnd" />

        <Label>Horário de Início</Label>
        <InputText name="timeStart" />

        <Label>Tipo de Avaliação</Label>
        <InputText name="timeEnd" />

        <Label>Descrição</Label>
        <TextField name="description" cols={50} wrap="soft" />

        <BoxButtons>
          <BackForm onClick={() => navigateForm()}>Voltar</BackForm>
          <Save type="submit">Agendar</Save>
        </BoxButtons>
      </BoxContentForm>
    </UnForm>
  );
}

export default FormActivity;

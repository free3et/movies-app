import React from "react";
import { ModalConfirm } from "../components/Modal/Modal";

export default {
  title: "Confirm Modal Component",
  component: ModalConfirm,
};

const Template = (args) => <ModalConfirm {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  open: true,
  title: "My favourite movies",
  url: 'http://localhost:3000//recomended?title="my movies"&ids=232,343',
  onClose: () => {},
};

import { gql } from "@apollo/client";

export const DEPOSIT = gql`
  mutation MyMutation($amount: Float!, $userPassport: String!) {
    Deposit(amount: $amount, userPassport: $userPassport) {
      result
      msg
    }
  }
`;

import UserModel from "../../../../models/UserModel";

export default async (_, { userPassport, amount }) => {
  if (amount < 0) {
    return { result: false, msg: "amount cant be a negative number" };
  }

  return await UserModel.updateOne(
    { passportNumber: userPassport },
    {
      $inc: {
        cash: amount,
      },
    }
  )
    .then(() => ({ result: true, msg: "user updated!" }))
    .catch(() => ({ result: false, msg: "user was not found!" }));
};

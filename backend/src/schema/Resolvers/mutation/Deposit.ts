import UserModel from "../../../../models/UserModel";
import checkUserActive from "../../../functions/checkUserActive";

export default async (_, { userPassport, amount }) => {
  if (amount <= 0) {
    return { result: false, msg: "amount cant be negative or zero" };
  }
  if (!await checkUserActive(userPassport))
    return { result: false, msg: "User is not active" };
  return await UserModel.updateOne(
    { passportNumber: userPassport },
    {
      $inc: {
        cash: amount,
      },
    }
  )
    .then((e) => {
      if (e.matchedCount > 0) return { result: true, msg: "user updated!" };
      return { result: false, msg: "user was not found!" };
    })
    .catch(() => ({ result: false, msg: "user was not found!" }));
};
